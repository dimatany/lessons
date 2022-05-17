"use strict"
/*
 Мінімум
 1. Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить
 назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.
 Написати кілька функцій для роботи з таким масивом:
   1.1. Виводити весь список на екран таким чином, щоб спочатку йшли продукти,
   що ще не придбані, а потім - ті, що вже придбали.
   1.2. Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
   1.3. Створення списку (не) придбаних продуктів.
 
 Норма
 1. Видалення продукту зі списку (видалення повинно проводитися шляхом
    створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
 2. Додавання покупки в список. Враховуй, що при додаванні покупки
    з уже існуючим в списку продуктом, необхідно збільшувати кількість
    в існуючій покупці, а не додавати нову. При цьому також повинна
    змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості
    товарів стало 2, то сума буде 24.
 
 
 Максимум
 1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
 2. Підрахунок суми всіх (не) придбаних продуктів.
 3. Показання продуктів в залежності від суми, (від більшого до меншого /
 від меншого до більшого, в залежності від параметра функції, який вона приймає)
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
        name: 'Voter',
        qty: 12,
        isBuy: true,
        price: 10,
        total: 120
        
    },
    {
        name: 'Milk',
        qty: 1,
        isBuy: false,
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
        //CART[prodIndex].qty;
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
    CART.forEach(product => {
        html += `
            <tr>
                <td>${product.name}</td>
                <td>${product.isBuy ? '<span class="badge bg-success">Yes</span>' : '<span class="badge bg-danger">No</span>'}</td>
                <td>${product.qty}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>${product.total.toFixed(2)}</td>
                <td>
                <button type="button" class="btn btn-danger" onclick="askProdDel('${product.name}')">&times;</button>
                </td>
              </tr>
        `;
    });
    document.getElementById('cart-tbody').innerHTML = html;
    document.getElementById('cart-total').innerText = sumTotal();
}


function sumTotal() {
    return CART.reduce((acc, curr) => {return acc + curr.total;}, 0);
}

function askProdDel(name) {
    if(confirm('Delete' + name + ' ?')) {
       let index = CART.findIndex((element) => element.name === name);
       CART.splice(index,1);
        viewCartTable();
        topPanel.info('Product successful deleted');
    }
}