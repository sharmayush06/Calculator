const display=document.getElementById("output");
function percent(value){
    display.value+=value;
}
function clearDisplay(){
    display.value="";
}
function pop(){
    display.value=display.value.slice(0,display.value.length-1);
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}