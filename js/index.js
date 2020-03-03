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
var right = document.getElementById("rightProduct");
var left = document.getElementById("leftProduct");
var center = document.getElementById("centerProduct");
var container = document.getElementById("imgContainer");
var totalRound = 0;
var productsArry = [];// array with object
var noDoublicatsTowrounds=[];
var rightRandom, leftRandom, centerRandom;
var noRepeat = [];



// build the construction
function Products(name) {
    this.name = name.split('.')[0];
    this.url = `img/${name}`;
    this.votes = 0;
    this.views = 0;
    this.show = 0;
    productsArry.push(this);
}
console.log(productsArry);


// to pic randomly image 
rightRandom = productsArry[randomNumber(0, productsArry.length - 1)];
leftRandom = productsArry[randomNumber(0, productsArry.length - 1)];
centerRandom = productsArry[randomNumber(0, productsArry.length - 1)];

function picRandomProduct() {
<<<<<<< HEAD
    rightRandom = productsArry[randomNumber(0, productsArry.length - 1)];// we are return object of images 
    leftRandom = productsArry[randomNumber(0, productsArry.length - 1)];
    centerRandom = productsArry[randomNumber(0, productsArry.length - 1)];
    while (leftRandom === rightRandom || leftRandom === centerRandom || rightRandom === centerRandom) {
        rightRandom = productsArry[randomNumber(0, productsArry.length - 1)];
        leftRandom = productsArry[randomNumber(0, productsArry.length - 1)];
        centerRandom = productsArry[randomNumber(0, productsArry.length - 1)];
    }
    
=======

    // to make imge no repeat in the same render and no repeat in next loop 
    while (leftRandom === rightRandom || leftRandom === centerRandom || rightRandom === centerRandom || noRepeat.includes(rightRandom) || noRepeat.includes(leftRandom) || noRepeat.includes(centerRandom)) {
        rightRandom = productsArry[randomNumber(0, productsArry.length - 1)];
        leftRandom = productsArry[randomNumber(0, productsArry.length - 1)];
        centerRandom = productsArry[randomNumber(0, productsArry.length - 1)];
>>>>>>> lab12

    }
    noRepeat = [];
    noRepeat.push(rightRandom);
    noRepeat.push(leftRandom);
    noRepeat.push(centerRandom);

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
picRandomProduct();// to show me the first image 
console.log(productsArry);
<<<<<<< HEAD

=======
// make array of names 
for (var j = 0; j < productsArry.length; j++) {
    names.push(productsArry[j].name);
}
console.log(names);
container.addEventListener('click', votesImageEvent);
>>>>>>> lab12
// add event listener
function votesImageEvent(event) {

<<<<<<< HEAD
    if (event.target.id === "leftProduct" || event.target.id === "rightProduct" || (event.target.id === "centerProduct")) {
        picRandomProduct();
        totalRound++;
        leftRandom.show++;
        rightRandom.show++;
        centerRandom.show++;
        // console.log(totalRound);
    }
    // for each time click on left the clicks incriminated
    // to specify where to click "in image just"
    if (event.target.id === "leftProduct") {
        leftRandom.clicks++;
=======

    // for each time click on left the votes incriminated
    if (event.target.id === "leftProduct") {
        leftRandom.votes++;
        leftRandom.show++;
        totalRound++;
        picRandomProduct();

>>>>>>> lab12
    }
    if (event.target.id === "rightProduct") {
        rightRandom.votes++;
        rightRandom.show++;
        totalRound++;
        picRandomProduct();

    }
    if (event.target.id === "centerProduct") {
        centerRandom.votes++;
        centerRandom.show++;
        totalRound++;
        picRandomProduct();

    }
    if (totalRound === 25) {
        container.removeEventListener('click', votesImageEvent);
        alert(`you Spend so match time on click  Ur click ${totalRound - 1}`);
        renderResult();
        chartRender();

    }
    renderChart();
  
}
// print the result in table 

function renderResult() {
    var ulResult = document.getElementById("totalResult");
    for (var i = 0; i < productImages.length; i++) {
        var liResult = document.createElement('li');
        ulResult.appendChild(liResult);
<<<<<<< HEAD
        liResult.textContent = `${productsArry[i].name} had ${productsArry[i].clicks} click  ${productsArry[i].show} shown `;
=======
        liResult.textContent = `${productsArry[i].name} had ${productsArry[i].votes} click  ${productsArry[i].show} shown `;
        clickResult.push(productsArry[i].votes);
>>>>>>> lab12
    }
}

// helper function random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(productsArry);

<<<<<<< HEAD
// draw chart 
function renderChart() {
    // make array of names 
    var names = [];// array of names
    var clickResult = [];
    var view=[];
    for (var j = 0; j < productsArry.length; j++) {
        names.push(productsArry[j].name);
        clickResult.push(productsArry[j].clicks);
        view.push(productsArry[j].show);
=======

// draw chart 
function chartRender() {
    var imagesNamesArr = [];
    var numClicksArr = [];
    var numViewsArr = [];
    for (var i = 0; i < productsArry.length; i++) {
        var imgnames = productsArry[i].name;
        imagesNamesArr.push(imgnames);
        var imgVotes = productsArry[i].votes;
        numClicksArr.push(imgVotes);
        var imgViews = productsArry[i].views;
        numViewsArr.push(imgViews);
>>>>>>> lab12
    }
    var ctx = document.getElementById('chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
<<<<<<< HEAD
            labels: names,
            datasets: [{
                label: '# of Votes',
                data: clickResult,
                backgroundColor: [
                    
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: '# of showa',
                data: view,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                   
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'

                ],
                borderWidth: 1
            }]
=======
            labels: imagesNamesArr,//for x accesses
            datasets: [
            {
                label: '# of Votes',
                data: numClicksArr,
                backgroundColor:'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: '# of Views',
                data: numViewsArr,
                backgroundColor:'rgba(255, 220, 132, 0.5)',
                borderColor: 'rgba(255, 150, 250, 0)',
                borderWidth: 1,
                type:'bar',
                labels:imagesNamesArr
            }
        ]
>>>>>>> lab12
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
<<<<<<< HEAD
=======

>>>>>>> lab12
}
