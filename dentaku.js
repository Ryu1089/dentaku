var calculations = document.getElementById("calculation");
var result = document.getElementById("result");

   
    function edit(elem) {
      result.value = result.value + elem.value;
    }
    function calculation(elem){
      if (result.value.slice(-1) === "+"){
        return;}
      else if (result.value.slice(-1) === "-"){
        return;}
      else if (result.value.slice(-1) === "*"){
        return;}
      else if (result.value.slice(-1) === "/"){
        return;}
      else result.value = result.value + elem.value;
    }
    function calc() {
      result.value = new Function("return " + result.value)();
      calculations.removeAttribute("disabled",true);
    }
    function reset(){
      result.value = ""
    }
    
    
   
   
      
    
    
    
    
    
 
    
   
 
 