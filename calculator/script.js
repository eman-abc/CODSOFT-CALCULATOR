let inp = document.getElementById('inp');
let keys = document.querySelectorAll('button');
let string = "";
let btnArr = Array.from(keys);
btnArr.forEach(button => {
    button.addEventListener('click', (event) => {
        value = event.target.dataset.key;
        if (event.target.innerHTML == '=') {
            string = eval(string);
            inp.value = string;
        }
        else if (event.target.innerHTML == 'AC') {
            string = "";
            inp.value = string;
        }
        else if (value == '1') {
            string = string.substring(0, (string.length - 1));
            inp.value = string;
        }
        else {
            string += event.target.innerHTML;
            inp.value = string;
        }
    })
});