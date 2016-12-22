function addItemToCart(id, quantity) {
    var cart = getCartContents();
    if (cart.items[id]) {
        cart.items[id].quantity += +quantity;
    } else {
        cart.items[id] = { product: id, quantity: +quantity };
    }
    setCartContents(cart);
    RefreshCart();
}
function getCartContents() {
    var cart_json = $.cookie(cartName);

    return cart_json ? JSON.parse(cart_json) : {
        items: {}
    };
}

function setCartContents(cart) {
    $.cookie(cartName, JSON.stringify(cart), { path: '/', expires: 7 });
}

function removeItemFromCart(id) {
    var cart = getCartContents();
    if (cart.items[id]) {
        delete cart.items[id];
    }
    setCartContents(cart);
    RefreshCart();
    
}

function updateCartItem(id, el, quantity) {
    var cart = getCartContents();
    if (quantity <= 0 && cart.items[id]) {
        delete cart.items[id];
    } else {
        cart.items[id].quantity = parseInt(quantity);
    }
    setCartContents(cart);
    alert("Cập nhật giỏ hàng thành công");
    RefreshCart();
    
}

function getTotalCart() {
    var cart = getCartContents();
    var items = cart.items, quantity = 0, total = 0;
    for (var id in items) {
        var item = items[id],
            q = item.quantity || 0;
        quantity += q;
    }
    return {
        quantity: quantity,
        total: total
    };
}

function addListToCart(id, quantity) {
    if (quantity > 0) {
        addItemToCart(id, quantity);
        RefreshCart();
        $('#shoppingcart').modal('show');
    }
    else { alert('Bạn chưa nhập số lượng'); }
}
function addToCart(id) {
    addItemToCart(id, 1);
    RefreshCart();
    $('#shoppingcart').modal('show');
  }


function removeFromCart(obj, id) {
    var trEl = $(obj).parent().parent().parent().parent();
    trEl.remove();
    removeItemFromCart(id);
    RefreshCart();
    }
function RefreshCart() {
    var totalItems = getTotalCart().quantity;
    $("#totalcart").text(totalItems);
    $("#shoppingcart").load(document.URL + " #shoppingcart > *");
    $("#cartdetail").load(document.URL + " #cartdetail > *");
}

function clearCart() {
    if (confirm("Bạn có chắc muốn xóa giỏ hàng không?")) {
        $.removeCookie('cart');
        setCartContents({ items: {} });
    }
}
function reUpdateCart() {
    var cart = getCartContents();
    $('input.quantity').each(function () {
        if (cart.items[$(this).attr('product')]) {
            var quantity = parseInt($(this).val());
            if (quantity > 0)
                cart.items[$(this).attr('product')].quantity = +quantity;
        }
    });
    setCartContents(cart);
}
function checkform() {
    var result = true;
    $(".form_inline input").each(function () {
        var th = $(this);
        var thVal = th.val().trim();
        if (th.attr("data-val") == "true")//require
        {
            if (thVal == "") {
                alert(th.attr("data-val-required"));
                th.focus();
                result = false;
                return false;
            }
        }
        if (th.attr("data-exp") != "")//regex
        {
            if (thVal != "" && !new RegExp(th.attr("data-exp"), "gi").test(thVal)) {
                alert(th.attr("data-exp-text"));
                th.focus();
                result = false;
                return false;
            }
        }
    });
    return result;
}