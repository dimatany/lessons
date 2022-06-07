"use strict"
/* - устаревший вариант который никто не использует
const xhr = new XMLHttpRequest();
xhr.open('get','assets/data/cart.json');
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState===4){
        if(xhr.status===200) {
        console.log(xhr.response);
        } else {
            alert(xhr.statusText);
        }
    }
}
*/

/* - ниже отрабатывает код с библиотеки axios
fetch('assets/data/cart.json')
    .then(resp=>{
       return resp.json();
})
    .then(resp=>{
    viewCart(resp);
})
 
 */
axios('assets/data/cart.json')
    .then(resp => {
    viewCart(resp.data);
})

function viewCart(cart) {
    let html = '<ul>';
    cart.forEach(item=>{
        html +=`
        <li>
        <b> ${item.name} </b> ${item.qty} - ${item.price}
        </li>
`;
    });
    html += '<ul>';
    document.body.insertAdjacentHTML('afterBegin', html)
}


