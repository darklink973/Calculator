const Button1 = document.querySelector('button[id="1"]');
const Button2 = document.querySelector('button[id="2"]');

const Egal = document.querySelector('button[type="submit"')

let v1 = 0;
let value1 = 0;

let v2 = 0;
let value2 = 0;

let operationClicked = false;

let result1;
let result2;

//reset for second number
function reset() {
    if (operationClicked == true) {
        v1, v2, value1, value2 = 0;
    }
}
    
function Buttons(value, ButtonId, varName) {
    for (let i = 0; i < value; i++) {
        if (varName >= ButtonId) {
            varName = varName + ButtonId;
            //console.log(value, varName, ButtonId);
        };
    }
    for (let i = 0; i < reset; index++) {
        const element = array[index];
        
    }
    if (operationClicked != true) {
        result1 = varName;
    }
    else if (reset == false && operationClicked == true) {
        result2 = varName;
    }
}

Button1.addEventListener("click", (event) =>{
    v1 = event.target.id;
    Buttons(value1, 1, v1);

    value1++;
    if (operationClicked != true) {
        v1 = result1;
    }
    else if (operationClicked == true) {
        v1 = result2;
    }
    console.log(v1);
});

Button2.addEventListener("click", (event) =>{
    v2 = event.target.id;
    Buttons(value2, 2, v2);

    value2++;
    if (operationClicked != true) {
        v2 = result1;
    }
    else if (operationClicked == true) {
        v2 = result2;
    }
    console.log(v2);
});

Egal.addEventListener("click", (event) => {
    event.preventDefault();

    //Actual math

    console.log(v1 + v2)
});