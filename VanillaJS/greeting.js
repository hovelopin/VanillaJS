const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
  SHOWING_ON = "showing";

function saveName(text){
  localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
  event.preventDefault();
  // input을 submit하면 그 value값이 currentValue에 찍힌다.
  const currentValue = input.value;
  // currentValue 값이 h4 태그에 찍힌다.
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
  
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  greeting.innerText = `Hello ${text}`;
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    //she is not
    askForName();
  }else {
    //she is
    paintGreeting(currentUser);
  }
}


function init(){
  loadName(); //localStorage 에서 정보를 가져온다. 
}

init();