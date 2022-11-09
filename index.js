var add = document.getElementById('increment')
var substract = document.getElementById('decrement')
var reset = document.getElementById("reset")

var result = document.getElementById('result')
var integer = 0;

add.addEventListener('click', function () {
    integer ++;
    result.innerHTML = integer;
})

substract.addEventListener("click", function(){
    integer --;
    result.innerText = integer;
})

reset.addEventListener('click', function(){
    integer = 0;
    result.innerHTML = integer;
})
