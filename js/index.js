var product=[
    'bag',
    'banana',
    'bathroom',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dog-duck',
    'dragon',
    'pen',
    'pet-sweep',
    'scissors',
    'shark',
    'sweep',
    'tauntaun',
    'unicorn',
    'usb',
    'water-can',
    'wine-glass'
];//array of product
var right=document.getElementById("leftProduct");
var left=document.getElementById("rightProduct");
var center=document.getElementById("centerProduct");
var container=document.getElementById("imgContainer");
var 
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
this.url=`img/${name}.jpg`;
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
for (var i= 0 ; i<product.length ; i++){
    new Products(product[i]);
}
picRandomProduct();
console.log(productsArry);


container.addEventListener('click',function(event){
if( event.target.id === "leftProduct" || event.target.id === "rightProduct" ||event.target.id === "centerProduct"){
    picRandomProduct();


}
});





// helper function random
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  