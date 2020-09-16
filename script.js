const numb = document.getElementById('n')
const output = document.getElementById('output')
const calc = document.getElementById('calc')

function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
   }

// had to make function async to add delay after every iteration of for loop
async function fizzBuzz() {
    let result;
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
            output.appendChild(node)
            await timer(500);
        }
}

calc.addEventListener('click', fizzBuzz)