// ==UserScript==
// @name         MWIviewer
// @namespace    http://tampermonkey.net/
// @version      2025-03-21
// @description  Add [View Price History] Button / 增加[查看历史价格]按钮
// @author       wooodensail
// @match        https://www.milkywayidle.com/*
// @match        https://test.milkywayidle.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license MIT
// ==/UserScript==

const FILTER_STORAGE_KEY = 'MWIviewer_filter'
const parser = new DOMParser();
(function () {
  'use strict';
  let favMode = ''
  const isZHInGameSetting = localStorage.getItem("i18nextLng")?.toLowerCase()?.startsWith("zh"); // 获取游戏内设置语言
  let isZH = isZHInGameSetting; // MWITools 本身显示的语言默认由游戏内设置语言决定
  const targetNode = document.body;
// 观察器的配置（需要观察什么变动）
  const config = {childList: true};
  // 过滤配置
  let filterConfig = {favList: []}
  try {
    if (localStorage.getItem(FILTER_STORAGE_KEY)) {
      filterConfig = JSON.parse(localStorage.getItem(FILTER_STORAGE_KEY))
    }
  } catch (e) {
    console.error(e)
  }


// 当观察到变动时执行的回调函数
  const callback = function (mutationsList, observer) {
    mutationsList.forEach(function (mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach(node => {
          // 增加查看历史价格按钮
          if (node.classList && node.classList.contains('MuiPopper-root')) {
            node.querySelectorAll('Button').forEach(button => {
              if (button.innerText === '打开物品词典' || button.innerText === 'Open Item Dictionary') {
                const newButton = button.cloneNode()
                newButton.innerText = isZH ? '查看历史价格' : 'View Price History'
                const itemName = node.querySelector('[class^=Item_name]').innerText.trim()
                newButton.onclick = () => {
                  window.open('https://woodensail.github.io/MWIviewer/?item=' + encodeURIComponent(itemName))
                }
                button.parentNode.append(newButton)
              }
            })
          }
          // 收藏过滤
          if (node.className && node.className.indexOf(node.className.includes('Item_clickable')) >= 0) {

          }
        })
      }
    })
  };

// 创建一个观察器实例并传入回调函数
  const observer = new MutationObserver(callback);

// 以上述配置开始观察目标节点
  observer.observe(targetNode, config);

  // 初始化循环1
  const initTimer = setInterval(() => {
    const marketFilterDom = document.querySelector('[class^="MarketplacePanel_itemFilterContainer"] [class^="Input_inputContainer"]')
    if (marketFilterDom) {
      clearInterval(initTimer)
      const dom = document.createElement('div')
      dom.className = 'MWIviewer_switch'
      dom.innerHTML = `
        <div class="MWIviewer_switch_item" data-mode="default" style="background: rgb(67, 87, 175)">默认模式</div>
        <div class="MWIviewer_switch_item" data-mode="filter">过滤模式</div>
        <div class="MWIviewer_switch_item" data-mode="edit">编辑模式</div>
      `
      dom.onclick = e => {
        if (e.target.className.includes('MWIviewer_switch_item')) {
          favMode = e.target.dataset.mode
          document.querySelectorAll('.MWIviewer_switch_item').forEach(v => {
            v.style.backgroundColor = 'transparent'
          })
          e.target.style.backgroundColor = 'rgb(67, 87, 175)'
        }
        if (favMode === 'filter') {
          document.body.classList.add('MWIviewer_hideUnFav')
        } else {
          document.body.classList.remove('MWIviewer_hideUnFav')
        }
      }
      marketFilterDom.append(dom)
    }
  }, 500)
  // 监听物品循环
  setInterval(() => {
    const items = document.querySelectorAll('[class^="MarketplacePanel_itemSelectionTabsContainer"] [class*="Item_clickable"]')
    items.forEach(node => {
      if (!node.dataset.hasFavIcon) {
        node.dataset.hasFavIcon = '1'
        const href = node.querySelector("use").getAttribute("href");
        const name = href.split("#")[1];
        const btnDom = document.createElement('div')
        btnDom.style = 'position: absolute; inset:0; padding:4px; font-size:12px; text-align:left;'
        btnDom.innerText = filterConfig.favList.includes(name) ? '★' : '☆'
        if (!filterConfig.favList.includes(name)) {
          node.parentNode.parentNode.classList.add('MWIviewer_unfav')
        }
        btnDom.onclick = e => {
          if (favMode !== 'edit') {
            return
          }
          e.stopPropagation()
          if (filterConfig.favList.includes(name)) {
            filterConfig.favList = filterConfig.favList.filter(v => v !== name)
            node.parentNode.parentNode.classList.add('MWIviewer_unfav')
            btnDom.innerText = '☆'
          } else {
            filterConfig.favList.push(name)
            node.parentNode.parentNode.classList.remove('MWIviewer_unfav')
            btnDom.innerText = '★'
          }
          localStorage.setItem(FILTER_STORAGE_KEY, JSON.stringify(filterConfig))
        }
        node.append(btnDom)
      }
    })
  }, 500)
  // css 初始化
  // 创建一个 style 元素
  const styleElement = document.createElement("style");

// 添加样式内容
  styleElement.textContent = `
.MWIviewer_hideUnFav .MWIviewer_unfav{
  display:none;
}
.MWIviewer_switch{
   border: 1px solid rgb(67, 87, 175);
   border-radius: 4px;
    position:absolute;
    left:calc(100% + 12px);
    top:0;
    width: max-content;
}
.MWIviewer_switch_item{
    display: inline-block;
    width: max-content;
    padding: 4px 8px;
    line-height: 16px;
    cursor: pointer;
}
`;

// 将 style 元素插入到文档头部
  document.head.appendChild(styleElement);
})();