const cards =  document.querySelector(".cards")
const Variability = document.querySelector(".form-switch");
const lable = document.querySelector(".form-check-label")
const body = document.querySelector("body");

function displayAlert(title, text, icon) {
    Swal.fire({
      icon: icon,
      text: text,
      title: title,
    });
  }

  // let logic = true

  // Variability.addEventListener("click", () => {
  //   if(logic){
  //     body.style.backgroundImage = "url(./img/dark\ bg.png)";
  //   }else{
  //     body.style.backgroundImage = "url(./img/light\ bg.png)";
  //   }

  //   logic = !logic
  // })


//   let logic = true;

// Variability.addEventListener("click", () => {
//   if (logic) {
//     body.style.backgroundImage = "url(./img/dark\ bg.png)";
//   } else {
//     body.style.backgroundImage = "url(./img/light\ bg.png)";
//   }
//   logic = !logic;
// });


Variability.addEventListener("click", () =>{
    body.style.backgroundColor = "#F7B0BB"
})