const openbtn = document.querySelector('.open');
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-btn');

 
openbtn.addEventListener("click",function(){
    modalContainer.classList.add("show")
})

closeBtn.addEventListener("click",function(){
    modalContainer.classList.remove("show")
})