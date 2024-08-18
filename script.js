const Button1 = document.querySelector('button[id="1"]');

const Egal = document.querySelector('button[type="submit"')

let v1 = 0;

let value = 0;


Button1.addEventListener("click", (event) =>{
    v1 = event.target.id;
    for (let i = 0; i < 2; i++) {
        v1 + v1;
    };
    console.log(v1);
});

Egal.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(v1, v2)
});