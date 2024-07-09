const inputEl=document.querySelector('.input');
const bodyEl=document.querySelector('body');

inputEl.addEventListener('click',()=>{
    update();
    localStoragefun()
});
inputEl.checked=true;
function update(){
    if(inputEl.checked){
        bodyEl.style.background='black';
    }
    else{
        bodyEl.style.background='white';
    }
};
function localStoragefun(){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked))
    //localStorage.setItem("mode",JSON.stringify(inputEl.checked))
}