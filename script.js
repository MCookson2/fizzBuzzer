const numb = document.getElementById('n')
const output = document.getElementById('output')
const calc = document.getElementById('calc')
const resetButton = document.getElementById('reset')
const topButton = document.getElementById('top')

let aborted = false;
let computed = false;

function bottom() {
    document.getElementById('bottom').scrollIntoView();
}

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
   }

// had to make function async to add delay after every iteration of for loop
async function fizzBuzz() {
    aborted = false;
    let result;

    if (computed === true) {
        const deleteable = document.querySelectorAll('p.deleted')
        deleteable.forEach(p => {
            computed = false;
            p.parentNode.removeChild(p)
    })
    }

    for (let i = 1; i <= numb.value; i++) {
            if (i % 15 === 0) {
                result = 'FizzBuzz'
            } else if (i % 5 === 0) {
                result = 'Buzz'
            } else if (i % 3 === 0) {
                result = 'Fizz'
            } else {
                result = i
            }

            var node = document.createElement('p')
            var text = document.createTextNode(result)

            node.appendChild(text)
            node.classList.add('deleted')
            output.appendChild(node)
            await timer(100);
            node.classList.add('transitioned')
            computed = true;

            bottom();

            if (aborted === true) {
                break;
            }
        }
    if (numb.value >= 20) {
        topButton.style.display = 'block';
        bottom();
    }   
}

calc.addEventListener('click', fizzBuzz)

resetButton.addEventListener('click', function(){
    numb.value = '';
    const deleteable = document.querySelectorAll('p.deleted')
    deleteable.forEach(p => {
        aborted = true;
        p.parentNode.removeChild(p)
    })
})

topButton.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
})