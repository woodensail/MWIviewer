import {readableStreamToBase64} from "@/utils/base64";
import {items} from "@/utils/items";
// import {Stock} from "@ant-design/plots";
import {useEffect, useMemo, useRef, useState} from "react";
import {Line} from '@ant-design/charts';
// @ts-ignore
import initSqlJs from 'sql.js'
import LZString from 'lz-string'
import dayjs from 'dayjs'
import {useRequest} from 'ahooks'
import {Alert, Button, Progress, Select} from 'antd'
import bytesToSize from "@/utils/bytes-to-size";
import styles from './index.module.less'

const SQL = await initSqlJs({
  // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
  // You can omit locateFile completely when running in node
});
const config = {
  xField: 'date',
  yField: 'price',
  seriesField: 'type',
  axis: {
    x: {
      labelFormatter: (value: number) => {
        return dayjs(value * 1e3).format('MM-DD HH点')
      },
    }
  }, tooltip: {
    title: 'dateStr'
  },
  slider: {
    x: {
      labelFormatter: (value: number) => {
        return dayjs(value * 1e3).format('MM-DD HH点')
      },
    },
    y: {labelFormatter: '~s'},
  },
  // yField: ['high', 'low'],
};

export default function HomePage() {
  const [itemOptions, setItemOptions] = useState<any>([])
  const [allData, setAllData] = useState<any>(null)
  // const [selectedItems, setSelectedItems] = useState([])
  const [selectedItem, setSelectedItem] = useState()
  const [progress, setProgress] = useState(0)
  const [fullSize, setFullSize] = useState(0)

  const {run: loadDb, loading} = useRequest(async function (first: boolean) {
    setProgress(0)
    const res = await fetch('https://raw.githubusercontent.com/holychikenz/MWIApi/main/market.db')
    setFullSize(Number(res.headers.get('content-length') || 1))
    const dbStr = await readableStreamToBase64(res.body, setProgress)
    const buffer = Buffer.from(dbStr, 'base64');
    const uint8Array = new Uint8Array(buffer);
    const db = new SQL.Database(uint8Array);
    const ask = db.exec('select * from ask order by time desc limit 240')[0];
    const bid = db.exec('select * from bid order by time desc limit 240')[0];
    const data = {
      ask,
      bid,
      time: Date.now()
    }
    const dataStr = LZString.compress(JSON.stringify(data))
    localStorage.setItem('MWIviewer_data', dataStr)
    init(data, first)
    return data
  }, {manual: true})

  useEffect(() => {
    const dataStr = localStorage.getItem('MWIviewer_data')
    if (!dataStr) {
      loadDb(true)
    } else {
      const data = JSON.parse(LZString.decompress(dataStr))
      if (data.time >= Date.now() - 1000 * 60 * 60 * 24) {
        init(data, true)
      } else {
        loadDb(true)
      }
    }
  }, []);

  function init(data: any, first: boolean) {
    const columns = data.ask.columns
    setAllData(data)
    const indexMap: any = {}
    columns.forEach((column: string, index: number) => {
      indexMap[column] = index
    })
    setItemOptions(items.map((([en, zh]) => {
      // console.log(en,searchItem , zh,searchItem)
      if (first) {
        const searchParams = new URLSearchParams(location.search)
        const searchItem = searchParams.get('item')
        if ((en === searchItem || zh === searchItem)) {
          setSelectedItem(indexMap[en])
        }
      }
      return {
        value: indexMap[en],
        en,
        zh,
        label: zh
      }
    })).filter((item) => item.value))
  }

  const chartData = useMemo(() => {
    if (!allData || !selectedItem) return null
    return [...allData.ask.values.map((data: any) => ({
      dateStr: dayjs(data[0] * 1e3).format('MM-DD HH点'),
      date: data[0],
      price: data[selectedItem],
      type: '卖价'
    })), ...allData.bid.values.map((data: any) => ({
      dateStr: dayjs(data[0] * 1e3).format('MM-DD HH点'),
      date: data[0],
      price: data[selectedItem],
      type: '买价'
    }))].filter((data) => data.price!==-1).reverse()
    // const datas = allData.ask.values
    // return datas.map((_: any, index: number) => {
    //   return {
    //     date: allData.bid.values[index][0],
    //     high: allData.bid.values[index][selectedItem],
    //     low: allData.ask.values[index][selectedItem],
    //   }
    // })
  }, [allData, selectedItem])
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Select className={styles.select} options={itemOptions} showSearch={true}
                value={selectedItem} onChange={setSelectedItem}
          // value={selectedItems} onChange={setSelectedItems}
                filterOption={(input, option: any) => {
                  return option.en.toLowerCase().includes(input.toLowerCase()) || option.zh?.includes?.(input)
                }}/>
        <Button loading={loading} onClick={() => loadDb(false)}>刷新数据</Button>
      </div>
      {loading && <>
        {fullSize && <Progress percent={Math.floor(progress / Number(fullSize) * 100)}/>}
        <Alert message={`数据库文件较大，请耐心等待，当前进度: ${bytesToSize(progress)} / ${bytesToSize(fullSize)}`}
               type="warning"/>
      </>}

      {chartData && <Line {...config} data={chartData}/>}
    </div>
  );
}
