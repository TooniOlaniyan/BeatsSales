const pictures = ["Images/1.jpg","Images/3.jpg","Images/4.jpeg","Images/5.jpg"];
const imageChange = document.querySelector('.main-display');
const pickProductOne = document.querySelector('.images-one');
const pickProduct = document.querySelector('.images');
const pickProductTwo = document.querySelector('.images-two');
const pickProductThree = document.querySelector('.images-three');
const price = document.getElementById('price');

pickProductOne.addEventListener('click',()=>{
    imageChange.src =pictures[1] ;
    price.textContent = '$50'

})
pickProductTwo.addEventListener('click',()=>{
    imageChange.src =pictures[2] ;
    price.textContent = '$100'

})
pickProductThree.addEventListener('click',()=>{
    imageChange.src =pictures[3] ;
    price.textContent = '$150'

})
pickProduct.addEventListener('click',()=>{
    imageChange.src =pictures[0] ;
    price.textContent = '$89.99'

})
