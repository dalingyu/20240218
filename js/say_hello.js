let dom_guest_name = document.querySelector('#guest-name');
let dom_say_btn = document.querySelector('#say-btn');
let dom_response = document.querySelector('#response');

// console.log(dom_guest_name, dom_say_btn, dom_response);

dom_say_btn.addEventListener('click', (e) => {
    let currentName = dom_guest_name.value;
    dom_response.classList.remove('d-none');
    dom_response.innerHTML = 'Hi!, ' + currentName;
    // TODO: 當 currentName 為空時，該怎麼辦
    // TODO: 顯示完成後，清掉 dom_guest_name 的值，並且將輸入焦點移到此 dom 上面 dom.focus()
});