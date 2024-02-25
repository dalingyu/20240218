let dom_num = document.querySelector('#num');
let dom_calc_btn = document.querySelector('#calc-btn');
let dom_response = document.querySelector('#response');

console.log(dom_num, dom_calc_btn, dom_response);
const transferToLevel = (num) => {
    if (num >= 90) {
        return '甲'
    }

    if (num >= 80) {
        return '乙'
    }

    if (num >= 70) {
        return '丙'
    }

    if (num >= 60) {
        return '丁'
    }

    return '不及格';
}

const checkHasNum = (num) => {
    if (num) {
        return true;
    }
    return false;
}

const numInRange = (num) => {
    if (num >= 0 && num <= 100) {
        return true;
    }
    return false;
}


const focusToNum = () => {
    dom_num.value = '';
    setTimeout(() => {
        dom_num.focus();
    }, 500)
}
const calcLevel = async (e) => {
    dom_response.classList.add('d-none');
    console.log('start calc.');
    let currentNum = num.value;
    console.log(currentNum, typeof currentNum);
    if (!checkHasNum(currentNum)) {
        await Swal.fire({
            title: '轉換錯誤',
            html: '尚未輸入分數',
            icon: 'error'
        })
        focusToNum();
        return;
    }
    if (!numInRange(currentNum)) {
        await Swal.fire({
            title: '轉換錯誤',
            html: `分數: ${currentNum} 未落在 0 ~ 100 之間`,
            icon: 'error'
        })
        focusToNum();
        return;
    }

    let level = transferToLevel(currentNum);
    let content = `您的分數: ${currentNum}, 等級: ${level}`;
    dom_response.innerHTML = content;
    dom_response.classList.remove('d-none');
    focusToNum();
}


dom_calc_btn.addEventListener('click', calcLevel);
const triggerCalc = (e) => {
    let key = e.key;
    if (key && key.toUpperCase() == 'ENTER') {
        calcLevel(e);
    }
}

dom_num.addEventListener('keyup', triggerCalc);
