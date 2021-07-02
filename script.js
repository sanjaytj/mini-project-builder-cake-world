// total price to be paid by customer 
var totalPrice = 0;
var buyButton = false;
//indicates layer number
var noOfLayers = 0;

var isBuyActive = true;

var state = {
  chocolate:false,
  strawBerry:false,
  vanilla:false,
  redVelvet:false,
  butterScotch:false
}

var layerWidth = {
  1:'245px',
  2:'200px',
  3:'160px',
  4:'120px',
  5:'80px'
}

var price = {
  chocolate:300,
  strawBerry:100,
  butterScotch:200,
  vanilla:250,
  redVelvet:350
}

function renderChocolate(){
  if(noOfLayers==5){
    alert("sorry! You cannot add more than 5 layers :( ");
  }
  if(noOfLayers < 5 && isBuyActive){
    noOfLayers++
    let newElement = document.createElement('div');
    newElement.classList.add('layer1');              //toggles css class on element
    newElement.style.width = layerWidth[noOfLayers]; // for the size of the layer
    document.querySelector('#cake').prepend(newElement) // at the begining 
    totalPrice+= price["chocolate"]                     // total price + price of "..."
    let newItem = document.createElement('div');        
    newItem.classList.add('item');
    newItem.innerHTML = 'Chocolate----300'              
    document.querySelector('.totalBill').append(newItem)
  }
}
 
// we have to render the same for all the flavours 

function renderStrawBerry(){
  if(noOfLayers==5){
    alert("sorry! You cannot add more than 5 layers :( ");
  }
  if(noOfLayers < 5 && isBuyActive){
    noOfLayers++
    let newElement = document.createElement('div');
    newElement.classList.add('layer2');
    newElement.style.width = layerWidth[noOfLayers];
    document.querySelector('#cake').prepend(newElement)
    totalPrice+= price["strawBerry"]
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = 'StrawBerry----100'
    document.querySelector('.totalBill').append(newItem)
  }
}

function renderButterScotch(){
  if(noOfLayers==5){
    alert("sorry! You cannot add more than 5 layers :( ");
  }
  if(noOfLayers < 5 && isBuyActive){
    noOfLayers++
    let newElement = document.createElement('div');
    newElement.classList.add('layer3');
    newElement.style.width = layerWidth[noOfLayers];
    document.querySelector('#cake').prepend(newElement)
    totalPrice+= price["butterScotch"]
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = 'butterScotch----100'
    document.querySelector('.totalBill').append(newItem)
  }
}

function renderVanilla(){
  if(noOfLayers==5){
    alert("sorry! You cannot add more than 5 layers :( ");
  }
  if(noOfLayers < 5 && isBuyActive){
    noOfLayers++
    let newElement = document.createElement('div');
    newElement.classList.add('layer4');
    newElement.style.width = layerWidth[noOfLayers];
    document.querySelector('#cake').prepend(newElement)
    totalPrice+= price["vanilla"]
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = 'vanilla----100'
    document.querySelector('.totalBill').append(newItem)
  }
}

function renderRedVelvet(){
  if(noOfLayers==5){
    alert("sorry! You cannot add more than 5 layers :( ");
  }
  if(noOfLayers < 5 && isBuyActive){
    noOfLayers++
    let newElement = document.createElement('div');
    newElement.classList.add('layer5');
    newElement.style.width = layerWidth[noOfLayers];
    document.querySelector('#cake').prepend(newElement)
    totalPrice+= price["redVelvet"]
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = 'redVelvet----100'
    document.querySelector('.totalBill').append(newItem)
  }
}

function clickBuy(){
  if(isBuyActive){
    console.log("working");
    console.log("Let Us Start");
    let newElement = document.createElement('div');
    newElement.classList.add('total')
    newElement.innerHTML=`Total----${totalPrice}`
    document.querySelector('.totalBill').appendChild(newElement);
    let cakeImage = document.createElement('img');
    cakeImage.id='cakeImage'
    cakeImage.src='..\assets\candles.jfif'
    document.querySelector('#cake').prepend(cakeImage)
    isBuyActive=!isBuyActive
  }
}

document.querySelector('#buttonChocolate').addEventListener("click", renderChocolate);
document.querySelector('#buttonStrawBerry').addEventListener("click", renderStrawBerry);
document.querySelector('#buttonButterScotch').addEventListener("click", renderButterScotch);
document.querySelector('#buttonVanilla').addEventListener("click", renderVanilla);
document.querySelector('#buttonRedVelvet').addEventListener("click", renderRedVelvet);
document.querySelector('#buttonBuy').addEventListener("click", clickBuy);
