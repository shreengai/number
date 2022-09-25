let guess = 0
let add = 0
const A = 1
let submit = document.querySelector("button")
function find() {
    document.getElementById("demo").innerHTML = add+"  "+"is the number you chosen.";
}
let checkbox1 = document.querySelector("input[name=checkbox1]").addEventListener('change', function(){
        if (this.checked) {
            (add += A);
        }else {
            (add -= A);
        }
});
const B = 2
let checkbox2 = document.querySelector("input[name=checkbox2]").addEventListener('change', function(){
        if (this.checked) {
            (add += B);}
        else {
            (add -= B);
        }
    
});

const C = 4
let checkbox3 = document.querySelector("input[name=checkbox3]").addEventListener('change', function(){
        if (this.checked) {
            (add += C);
        }else {
            (add -= C);
        }
});
const D = 8
let checkbox4 = document.querySelector("input[name=checkbox4]").addEventListener('change', function(){
        if (this.checked) {
            (add += D);
        }else {
            (add -= D);
        }
});
const E = 16
let checkbox5 = document.querySelector("input[name=checkbox5]").addEventListener('change', function(){
        if (this.checked) {
            (add += E);
        }else {
            (add -= E);
        }
});



