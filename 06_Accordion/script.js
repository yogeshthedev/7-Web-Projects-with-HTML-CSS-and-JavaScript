const hiddleBox = document.querySelectorAll(".hidden-box");
const ourItemDiv = document.querySelectorAll(".item");
const openIcons = document.querySelectorAll(".icon-open")
const closeIcons = document.querySelectorAll(".icon-close")


for(let i = 0;i < ourItemDiv.length;i++){

    closeIcons[i].style.display = "none"

    ourItemDiv[i].addEventListener('click',()=>{

   const result =    ourItemDiv[i].classList.toggle('active');

   if (result){
    closeIcons[i].style.display = "block"
    openIcons[i].style.display = "none"
   } else {
      closeIcons[i].style.display = "none"
    openIcons[i].style.display = "block"
   }
    })
}
