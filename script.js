// get the textarea elemnt for displaying output
const output = document.querySelector("textarea")

// get all the calculator keys
const keys = document.querySelectorAll(".key");

// function for evaluating arthematic expression
function calculate(expression){
    try{
        return eval(expression);
    } catch(error){
        return  "error";
    }
}

// function for updating the output
function displayOutput(value){
    output.value = value;
}

//eventlister for each keys
keys.forEach((key)=>{
    key.addEventListener("click",()=>{
        const keyContent = key.textContent;
        const currentExpression = output.value;

        if(keyContent === "="){
            const result = calculate(currentExpression);
            displayOutput(result);
        }else if (keyContent === "C"){
            displayOutput("");
        }else {
            displayOutput(currentExpression + keyContent);
        }
    })
})