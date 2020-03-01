var product=[
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
];//array of product
var right=document.getElementById("leftProduct");
var left=document.getElementById("rightProduct");
var center=document.getElementById("centerProduct");
var container=document.getElementById("imgContainer");
var totalScore=0;
var productsArry=[];// array with object

// build the construction
function Products(name){
this.name=name;
// this.url=`${if(this.name=== "usb") 
// {
//     this.url=`${this.name}.gif`
// }else if(this.name === "sweep"){
//     this.url=`${this.name}.png`
// }
// else
// {this.url=`${this.name}.jpg`;}
// }`;
this.url=`img/${name}`;
productsArry.push(this);
}

console.log(productsArry);

// to pic randomly image 
function picRandomProduct (){
var rightRandom=productsArry[randomNumber(0,productsArry.length-1)];
var leftRandom=productsArry[randomNumber(0,productsArry.length-1)];
var centerRandom=productsArry[randomNumber(0,productsArry.length-1)];
// set attribute for right image 
right.setAttribute('src',rightRandom.url);
right.setAttribute('alt',rightRandom.name);
// set attribute for left image 
left.setAttribute('src',leftRandom.url);
left.setAttribute('alt',leftRandom.name);
// set attribute for center image 
center.setAttribute('src',centerRandom.url);
center.setAttribute('alt',centerRandom.name);

}
// make objects 
for (var i= 0 ; i<product.length ; i++){
    new Products(product[i]);
}
picRandomProduct();
console.log(productsArry);

// add event listener
container.addEventListener('click',function(event){
if( event.target.id === "leftProduct" || event.target.id === "rightProduct" ||(event.target.id === "centerProduct")){
    picRandomProduct();
    totalScore++;
console.log(totalScore);
}
if (totalScore === 25){

    left.remove();
    right.remove();
    center.remove();
    alert(`you Spend so match time on click  Ur click ${totalScore}`);
}
//make sure the random image don't be the same 
// while(((left.name===right.name) || (left.name===center.name))||(right.name === center.name))
// {   
//         picRandomProduct();   
// }
}
);


// helper function random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  