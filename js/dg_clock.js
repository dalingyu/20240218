let dom_h1 = document.querySelector('#clock-h1');
let dom_h2 = document.querySelector('#clock-h2');
let dom_m1 = document.querySelector('#clock-m1');
let dom_m2 = document.querySelector('#clock-m2');
let dom_s1 = document.querySelector('#clock-s1');
let dom_s2 = document.querySelector('#clock-s2');

console.log(dom_h1, dom_h2, dom_m1, dom_m2, dom_s1, dom_s2)

// 取得現在時間
const getCurrentTime = () => {
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();

    // 秒數小於 10，需自動補 0，確保內容為兩位數
    return {
        hh: hh,
        mm: mm,
        ss: ss
    };
}

// 更新 UI
const updateUI = () => {
    console.log('update ui');
    let current = getCurrentTime();
    console.log(current);
    // 實作將數字更新到對應的 dom 內
}

setInterval(() => {
    updateUI();
}, 1000)

updateUI();