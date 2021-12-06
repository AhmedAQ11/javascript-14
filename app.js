
var card = document.getElementById("card")

function openReg(){

    card.style.transform = "rotateY(180deg)"
}

function openLog(){

    card.style.transform = "rotateY(0deg)"

}

function showe(){
    var input12 = document.getElementById("input12")
     console.log( input12.value)
}       


function show(){
        var input = document.getElementById("input1")

         console.log( input.value) 
 }

 function show1(){
         var input3 = document.getElementById("input3")
    
         console.log( input3.value) 
     }

 function showPass(e){
     var input = document.getElementById("input")
     console.log(input)
    if(input.type == "password"){
        input.type = "text"
    }else{
        input.type = "password"
    }

 }
 function showPass1(e){
    var input2 = document.getElementById("input2")
    console.log(input2)
   if(input2.type == "password"){
       input2.type = "text"
   }else{
       input2.type = "password"
   }

}

 