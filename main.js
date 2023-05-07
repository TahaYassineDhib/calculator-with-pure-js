// creating math function 

const add = (a,b) => {
    return (a+b) ;

}

const substract = (a,b) => {
    return a - b ; 
}

const multiply = (a,b) => {
    return a * b ; 
}

const devide = (a , b ) =>{
    return a /  b ; 
} 

// creating the operation function 

const operate = (operator , a , b) => {
    return operator(a,b);

}


// add functionality to the button ; 
let current = document.getElementById("current")
let preview = document.getElementById("preview")
current.value = "" ;
preview.value= ""; 

const numbers = document.getElementsByClassName("number") ;
for(let i = 0 ; i < numbers.length ; i++){
    numbers[i].addEventListener('click' , () => {
        current.value += numbers[i].innerText; 
        

    } )
}

let operator ; 
let num1 = 0 ; 
let num2 = 0 ; 

const operators = document.getElementsByClassName("operator") ; 
for (let i = 0 ; i <operators.length  ; i++){
    operators[i].addEventListener("click" , () =>{
        num1 = parseFloat(current.value)
        preview.value = current.value + operators[i].innerText ; 
        current.value  =  ""
        console.log(current.value)
        
        
    })
} 



// declaring operator button and assigning the operator to the corresponding operating function; 
const plus = document.getElementById("plus");
const minus = document.getElementById("minus"); 
const multi =  document.getElementById("multi"); 
const div = document.getElementById("div"); 

plus.addEventListener('click' , () => {
    operator = add ; 


})
minus.addEventListener('click' , () => {
    operator = substract ; 
    

})
multi.addEventListener('click' , () => {
    operator = multiply ; 
    

})
div.addEventListener('click' , () => {
    operator = devide ; 
    

})

// equals 
const equal = document.getElementById("equal") ; 
equal.addEventListener("click" , () => {
    preview.value = "" ;
    num2 = parseFloat(current.value) ;
    current.value = operate(operator, num1 ,num2 );
})

// clear ; 
const clear = document.getElementById("clear") 
clear.addEventListener('click' , () => {
    preview.value = ""; 
    current.value = "";
})

//delete 
const del = document.getElementById("delete") 
del.addEventListener("click", () => {
    console.log('ee');
    current.value = current.value.slice(0,current.value.length -1); 
})