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
import {Button, Select} from 'antd'
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
  const [selectedItem, setSelectedItem] = useState(231)

  const {run: loadDb, loading} = useRequest(async function () {
    const res = await fetch('https://raw.githubusercontent.com/holychikenz/MWIApi/main/market.db')
    const dbStr = await readableStreamToBase64(res.body)
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
    init(data)
    return data
  }, {manual: true})

  useEffect(() => {
    const dataStr = localStorage.getItem('MWIviewer_data')
    if (!dataStr) {
      loadDb()
    } else {
      const data = JSON.parse(LZString.decompress(dataStr))
      if (data.time >= Date.now() - 1000 * 60 * 60 * 24) {
        init(data)
      } else {
        loadDb()
      }
    }
  }, []);

  function init(data: any) {
    const columns = data.ask.columns
    setAllData(data)
    const indexMap: any = {}
    columns.forEach((column: string, index: number) => {
      indexMap[column] = index
    })
    setItemOptions(items.map((([en, zh]) => ({
      value: indexMap[en],
      en,
      zh,
      label: zh
    }))).filter((item) => item.value))
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
    }))].reverse()
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
        <Button loading={loading} onClick={loadDb}>刷新数据</Button>
      </div>

      {chartData && <Line {...config} data={chartData}/>}
    </div>
  );
}
