// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//   "use strict";

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   const forms = document.querySelectorAll(".needs-validation");

//   // Loop over them and prevent submission
//   Array.from(forms).forEach((form) => {
//     form.addEventListener(
//       "submit",
//       (event) => {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }

//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
// })();

// document.getElementById("left-btn").addEventListener("click", () => {
//   document
//     .getElementById("filters")
//     .scrollBy({ left: -200, behavior: "smooth" });
// });

// document.getElementById("right-btn").addEventListener("click", () => {
//   document
//     .getElementById("filters")
//     .scrollBy({ left: 200, behavior: "smooth" });
// });


// let taxSwitch = document.getElementById("flexSwitchCheckDefault");
// taxSwitch.addEventListener("click", () => {
//   let taxInfo = document.getElementsByClassName("tax-info");
//   let oldPrices = document.getElementsByClassName("oldPrice");

//   for(oldPrice of oldPrices){
//     if(oldPrice.style.textDecoration != "line-through"){
//       oldPrice.style.textDecoration = "line-through";
//     } else {
//       oldPrice.style.textDecoration = "none";
//     }
//   }

//   for(info of taxInfo){
//     if(info.style.display != "inline"){
//       info.style.display = "inline";
//     } else {
//       info.style.display = "none";
//     }
//   }
// })