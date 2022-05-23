"use strict"
/*
 
 */

const topPanel = {
    show: function(text, className){
        let panel = `<div id="top-panel" class="top-panel ${className}">${text}</div>`;
        if(document.getElementById('top-panel') !== null){
            document.getElementById('top-panel').remove();
        }
        document.body.insertAdjacentHTML('afterbegin', panel);
        this.hide();
    },
    hide: function(){
        setTimeout(function(){
            if(document.getElementById('top-panel') !== null){
                document.getElementById('top-panel').remove();
            }
        }, 3000);
    },
    error: function(text){
        this.show(text, 'panel-error');   
    },
    success: function(text){
        this.show(text, 'panel-success');   
    },
    info: function(text){
        this.show(text, 'panel-info');   
    },
}

const CART = [
    {
        name: 'Milk',
        qty: 12,
        isBuy: false,
        price: 10,
        total: 120
        
    },
    {
        name: 'Water',
        qty: 1,
        isBuy: true,
        price: 23.45,
        total: 23.45
        
    }];
    viewCartTable();
    
function addToCart(name, qty, price){
    if(CART.find(el => el.name===name) === undefined){
        CART.push({
            name: name,
            qty: qty,
            isBuy: false,
            price: price,
            total: parseFloat((qty * price).toFixed(2))
    });
    topPanel.success('Product successfully added');
    } else {
        const prodIndex = CART.findIndex(el => el.name===name);
        const newQty = CART[prodIndex].qty + qty;
        CART[prodIndex].qty = newQty;
        CART[prodIndex].total = parseFloat((newQty *CART[prodIndex].price).toFixed(2));
        topPanel.success('Product successfully chenged');
    }
    viewCartTable();
}

function checkAndAddToCard(){
     let name = document.getElementById('product_name').value,
         qty = parseInt(document.getElementById('product_qty').value),
         price = parseFloat(document.getElementById('product_price').value);
    let valid = true;
     if(name === '')
     {
        topPanel.error('Enter product name');
         valid = false;
     }   
     if (isNaN(qty)){
        topPanel.error('Enter quantity valid value');
         valid = false;
     }
     if (qty <= 0){
        topPanel.error('Quantity must be positive');
        valid = false;
    }
    if (isNaN(price)){
        topPanel.error('Enter price valid value'); 
        valid = false;
    }
    if (price <= 0){
        topPanel.error('Price must be positive');
       valid = false;
   }
   if(valid){
       addToCart(name, qty, price);
       
       document.getElementById('product_name').value = '';
       document.getElementById('product_qty').value = 1;
       document.getElementById('product_price').value = '';
   }
}   

function viewCartTable(){
    let html = '';
    CART.sort((a, b) => Number (b.isBuy) - Number(a.isBuy));
    CART.forEach(product => {
        html += `
            <tr>
                <td>${product.name}</td>
                <td>${product.isBuy ? '<span class="badge bg-success">Yes</span>' : '<span class="badge bg-danger">No</span>'}</td>
                <td><button class="btn btn-info btn-sm" onclick="chengeProductQty('${product.name}', 'dec')">-</button>${product.qty}<button class="btn btn-info btn-sm" onclick="chengeProductQty('${product.name}', 'inc')">+</button></td>
                <td>${product.price.toFixed(2)}</td>
                <td>${product.total.toFixed(2)}</td>
                <td>
                <button type="button" class="btn btn-primary" onclick="chengeProdStatus('${product.name}')">Chenge status</button>
                <button type="button" class="btn btn-danger" onclick="askProdDel('${product.name}')">&times;</button>
                </td>
              </tr>
        `;
    });
    document.getElementById('cart-tbody').innerHTML = html;
    document.getElementById('cart-total').innerText = sumTotal().toFixed(2);
}
function chengeProductQty(name, action) {
    const index = CART.findIndex(el => el.name ===name);
    let newQty = 0;
    if (action === 'inc') {
        newQty = CART[index].qty + 1;
    } else {
        if (CART[index].qty >= 2) {
            newQty = CART[index].qty - 1;
        }else{
            askProdDel(name);
            return false;
        }
    }
    CART[index].qty = newQty;
    CART[index].total = CART[index].price * newQty;
    viewCartTable();
}

function askProdDel(name) {
    return confirm('Delete product '+ name +'?');
}

const DISCOUNT = [
    {
        promo: 'qwe',
        type: 'fixed', //or persent
        value: 15,
        isUsed: false,
    },
    {
        promo: 'qwert',
        type: 'percent', //or summ
        value: 5,
        isUsed: false,
    }
];

function checkAndApplyDiscount() {
    const discPromo = document.getElementById('discountField').value;
    if (discPromo === ''){
        topPanel.error('Enter promo code');
        return false;
    }
    const index = DISCOUNT.findIndex(el => el.promo === discPromo);
    if(index === -1) {
        topPanel.error('Promo code not found');
        return false;
    }
    const disc = DISCOUNT[index];
    if (disc.isUsed) {
        topPanel.error('This promo already used')
        return false;
    }
    let newTotal = calcDiscount(disc);
    DISCOUNT[index].isUsed = true;
    document.getElementById('discValue').innerText = disc.value + (disc.type === 'fixed') ? 'UAH' : '%';
    document.getElementById('totalWithDisc').innerText = (newTotal).toFixed(2);
    document.getElementById('discountField').value = '';
}

function calcDiscount(disc) {
    const {type, value} = disc;
    const sumTotalValue = sumTotal();
    switch (type) {
        case 'fixed':
            return sumTotalValue - value;
        case 'percent':
            return sumTotalValue - (sumTotalValue / 100 * value);
    }
}

function setSorting(){
    const sorting = document.getElementById('sorting').value
    console.log(sorting);
    return CART.filter().sort()
}

function sumTotal() {
    return CART.reduce((acc, curr) => {return acc + curr.total;}, 0);
}

function askProdDel(name) {
    if(confirm('Delete' + name + ' ?')) {
       const index = CART.findIndex((element) => element.name === name);
       CART.splice(index,1);
        viewCartTable();
        topPanel.info('Product successful deleted');
    }
}

function chengeProdStatus(name) {
    const index = CART.findIndex((element) => element.name === name);
    CART[index].isBuy = !CART[index].isBuy;
    viewCartTable();
    topPanel.info('Product status changed');
}




