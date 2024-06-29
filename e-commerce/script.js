document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const productId = product.id;
            const productName = product.querySelector('h2').innerText;
            const productPrice = product.querySelector('.price').innerText;
            
            alert(`${productName} added to cart at ${productPrice}`);
            
            // Here you can add functionality to actually add the product to a cart
            // For example, by storing it in localStorage or sending it to a server
        });
    });
});
