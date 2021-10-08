
const colors = ["green", "red", "blue", "#f15025"]

const btn = document.getElementById('btn')

const color = document.querySelector(".color")

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    
    document.body.style.backgroundColor = colors[randomNumber]; // set the background color to the generated color
    color.textContent = colors[randomNumber] // set the text to the generated color
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);  // return random item(the color) from an array
}