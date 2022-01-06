
var calculations = document.getElementById("calculation");
var result = document.getElementById("result");

     calculations.addEventListener("click",function(){
      calculations.setAttribute("disabled",true);
    })
    function edit(elem) {
      result.value = result.value + elem.value;
    }
    function calc() {
      result.value = new Function("return " + result.value)();
      calculations.removeAttribute("disabled",true);
    }
    function reset(){
      result.value = ""
    }
    
   
   
      
    
    
    
    
    
 
    
   
 
 