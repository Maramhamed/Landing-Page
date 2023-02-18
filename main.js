let mainImg= document.querySelector('.mainImg')
let container = document.querySelector('.container')
// we will make a function that change the Main image in the page :)
function changeImg(phone){
    mainImg.src= phone;
}
// we will make a function that Change background-color in sync with the image  :)
function changeColor(color){
container.style.background = color;
}