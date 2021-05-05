const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(.js-greetings);


const USER_LS = "currentUser",
  SHOWING_ON = "showing";

function paintGreeting(text){
  form.classList.remove(SHOWING_ON);
  greeting.innerText = `Hello ${text}`;
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    //she is not
    
  }else {
    //she is
    paintGreeting(currentUser);
  }
}


function init(){
  loadName(); //localStorage 에서 정보를 가져온다. 
}

init();