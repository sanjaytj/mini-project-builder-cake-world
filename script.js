var flavor=[];

var color = {
  chocolate:"7B3F00", 
  strawberry:"fc5a8d",
  butterscotch:"ffe461",
  vannila:"F3E5AB",
  redvelvet:"9c0000"
};

var price = {
  chocolate: 300,
  strawberry: 100,
  butterscotch: 200,
  vannila: 250,
  redvelvet: 350
};

var state = {
  chocolate: true,
  strawberry: true,
  butterscotch: true,
  vannila: true,
  redvelvet: true
};

function renderAll() {
  renderlayer();
  renderBillBoard();
  renderPrice();
}

function renderaddflavor(ingredient) {
  flavor.push(ingredient);
}

function renderremoveflavor(ingredient) {
  flavor=flavor.filter(ele => ele !== ingredient);
}

function renderlayer(){
  let layer = document.getElementsByClassName("layer");
  let str1="#";

  for(let i=0;i<layer.length;i++)
    layer[i].style.display="none";
  
  for(let i=0,j=4;i<flavor.length;i++,j--){
    let str2=color[flavor[i]];
    let str3=str1.concat(str2);
    layer[j].style.backgroundColor=str3;
    layer[j].style.display="inherit";
  }
}

function renderBillBoard(){
  var element = document.querySelectorAll(".bill");
  console.log(element);
  var i=0;
  for (const property in state) {
    if(state[property]===false)
      element[i].style.display="inherit";
    else
      element[i].style.display="none";
    i++;  
  }
}

function renderPrice(){
  var total=0;
  for(let i=0;i<flavor.length;i++){
    total=total+price[flavor[i]];
  }
  var x = document.getElementById("total");

  x.innerHTML=`Total ~~~~~~ `+total;
}

document.querySelector(".btn-Chocolate").onclick = function () {
  if(state.chocolate===true){
    document.querySelector(".btn-Chocolate").classList.add("active");
    renderaddflavor("chocolate");
  }
    
  else{
    document.querySelector(".btn-Chocolate").classList.remove("active");
    renderremoveflavor("chocolate");
  }
      
  state.chocolate = !state.chocolate;
  renderAll();
};

document.querySelector(".btn-Strawberry").onclick = function () {
  if(state.strawberry===true){
    document.querySelector(".btn-Strawberry").classList.add("active");
    renderaddflavor("strawberry");
  }

  else{
    document.querySelector(".btn-Strawberry").classList.remove("active");
    renderremoveflavor("strawberry");
  }
      
  state.strawberry = !state.strawberry;
  renderAll();
};

document.querySelector(".btn-Butterscotch").onclick = function () {
  if(state.butterscotch===true){
    document.querySelector(".btn-Butterscotch").classList.add("active");
    renderaddflavor("butterscotch");
  }
    
  else{
    document.querySelector(".btn-Butterscotch").classList.remove("active");
    renderremoveflavor("butterscotch");
  }
  state.butterscotch = !state.butterscotch;
  renderAll();
};

document.querySelector(".btn-Vannila").onclick = function () {
  if(state.vannila===true){
    document.querySelector(".btn-Vannila").classList.add("active");
    renderaddflavor("vannila");
  }

  else{
    document.querySelector(".btn-Vannila").classList.remove("active");
    renderremoveflavor("vannila");
  }
  state.vannila = !state.vannila;
  renderAll();
};

document.querySelector(".btn-Redvelvet").onclick = function () {
  if(state.redvelvet===true){
    document.querySelector(".btn-Redvelvet").classList.add("active");
    renderaddflavor("redvelvet");
  }
  else{
    document.querySelector(".btn-Redvelvet").classList.remove("active");
    renderremoveflavor("redvelvet");
  }
     
  state.redvelvet = !state.redvelvet;
  renderAll();
};

function myFunction(){
  document.getElementById("total").style.display="inherit";
  document.getElementById("img2").style.display="inherit"; 
}