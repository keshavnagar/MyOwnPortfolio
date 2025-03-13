const inputName = document.getElementById("input-name")
const inputBtn = document.getElementById("input-button")

inputBtn.addEventListener("click",()=>{
    localStorage.setItem(inputName.value);
})