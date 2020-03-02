var productImages = [
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'tauntaun.jpg',
    'unicorn.jpg',
    'usb.gif',
    'water-can.jpg',
    'wine-glass.jpg'
];//array of productImages
var right = document.getElementById("leftProduct");
var left = document.getElementById("rightProduct");
var center = document.getElementById("centerProduct");
var container = document.getElementById("imgContainer");
var totalRound = 0;
var productsArry = [];// array with object
var names = [];// array of names
var clickResult = [];
var rightRandom, leftRandom, centerRandom;



// build the construction
function Products(name) {
    this.name = name.split('.')[0];
    this.url = `img/${name}`;
    this.clicks = 0;
    this.views = 0;
    this.show=0;
    productsArry.push(this);
}
console.log(productsArry);


// to pic randomly image 

function picRandomProduct() {
    rightRandom = productsArry[randomNumber(0, productsArry.length - 1)];
    leftRandom = productsArry[randomNumber(0, productsArry.length - 1)];
    centerRandom = productsArry[randomNumber(0, productsArry.length - 1)];
    while (leftRandom === rightRandom || leftRandom === centerRandom || rightRandom === centerRandom) {
        rightRandom = productsArry[randomNumber(0, productsArry.length - 1)];
        leftRandom = productsArry[randomNumber(0, productsArry.length - 1)];
        centerRandom = productsArry[randomNumber(0, productsArry.length - 1)];
    }



    // set attribute for right image 
    right.setAttribute('src', rightRandom.url);
    right.setAttribute('alt', rightRandom.name);
    // set attribute for left image 
    left.setAttribute('src', leftRandom.url);
    left.setAttribute('alt', leftRandom.name);
    // set attribute for center image 
    center.setAttribute('src', centerRandom.url);
    center.setAttribute('alt', centerRandom.name);
    //make sure the random image don't be the same 


}
// make objects 
for (var i = 0; i < productImages.length; i++) {
    new Products(productImages[i]);
}
picRandomProduct();
console.log(productsArry);
// make array of names 
for (var j = 0; j < productsArry.length; j++) {
    names.push(productsArry[j].name);
}
console.log(names);
// add event listener
function clicksImageEvent() {

    if (event.target.id === "leftProduct" || event.target.id === "rightProduct" || (event.target.id === "centerProduct")) {
        picRandomProduct();
        totalRound++;
        leftRandom.show++;
        rightRandom.show++;
        centerRandom.show++;
        // console.log(totalRound);
    }
    // for each time click on left the clicks incriminated
    if (event.target.id === "leftProduct") {
        leftRandom.clicks++;

    }
    if (event.target.id === "rightProduct") {
        rightRandom.clicks++;
    }
    if (event.target.id === "centerProduct") {
        centerRandom.clicks++;
    }
    if (totalRound === 25) {
        container.removeEventListener('click', clicksImageEvent);
        alert(`you Spend so match time on click  Ur click ${totalRound}`);
        renderResult();
    }

}
container.addEventListener('click', clicksImageEvent);
// print the result in table 

function renderResult() {
    var ulResult = document.getElementById("totalResult");
    for (var i = 0; i < productImages.length; i++) {
        var liResult = document.createElement('li');
        ulResult.appendChild(liResult);
        liResult.textContent = `${productsArry[i].name} had ${productsArry[i].clicks} click  ${productsArry[i].show} shown `;
        clickResult.push(productsArry[i].clicks) ;
        

    }


}
// helper function random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(productsArry) ;
// draw chart 
var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,//for x accesses
        datasets: [{
            label: '# of Votes',
            data: clickResult,//for y accesses
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});