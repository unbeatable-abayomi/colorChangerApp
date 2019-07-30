let input = document.querySelector(".w_f_i");
let colorBox = document.querySelector(".wrapperjr");
let colorText = document.querySelector(".color");
// let colorMud= document.querySelector(".m_u_d");

input.oninput = () =>{
  let color = input.value;
  colorBox.style.background = color;
  // colorMud.style.bottom = "20px";
  colorText.innerHTML = color +" ";
  colorText.style.color =  color;
}