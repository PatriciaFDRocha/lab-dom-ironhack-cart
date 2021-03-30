// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML ;
  const quantity = product.querySelector('.quantity input').value;

  const subMultiply = price * quantity;

  const upSubtotal = product.querySelector('.subtotal span');
  
  upSubtotal.innerHTML = subMultiply;

  return subMultiply;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);

  // ITERATION 2

  const products = document.getElementsByClassName('product');
  const productsArr = [...products];
  let total = 0
  productsArr.forEach(product => {
    total += updateSubtotal(product);
  });//tenho de iterar sobre cada produto/cada quantidade para adicionar o subtotal

  // ITERATION 3
  console.log(total);

  const totalPrice = document.querySelector('#total-value span');
  totalPrice.innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
