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
            document.getElementById('top-panel').remove();
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
        isBuy: false,
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
//addToCart('Milk', 2, 23.45);

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
                <td>${product.qty}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>${product.total.toFixed(2)}</td>
            </tr>
        `;
    });
    document.getElementById('cart-tbody').innerHTML = html;
}