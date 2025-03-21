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

(function () {
  'use strict';
  const isZHInGameSetting = localStorage.getItem("i18nextLng")?.toLowerCase()?.startsWith("zh"); // 获取游戏内设置语言
  let isZH = isZHInGameSetting; // MWITools 本身显示的语言默认由游戏内设置语言决定
  const targetNode = document.body;
// 观察器的配置（需要观察什么变动）
  const config = {childList: true};

// 当观察到变动时执行的回调函数
  const callback = function (mutationsList, observer) {
    mutationsList.forEach(function (mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach(node => {
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
        })
      }
    })
  };

// 创建一个观察器实例并传入回调函数
  const observer = new MutationObserver(callback);

// 以上述配置开始观察目标节点
  observer.observe(targetNode, config);
})();