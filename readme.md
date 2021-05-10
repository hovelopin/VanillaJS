# Vanila JS

## #3.0 Making a JS Clock part One

## #3.1 Making a JS Clock part Two

### setInterval()

> setInterval( fn , 시간(ms) ) : 함수들을 몇 초 간격으로 실행 할 것인지에 관한 함수

### 삼항 연산자

> condition ? true : false

조건을 만족하면 true 문장이 나오고 만족하지 않으면 false 문장이 실행된다.

if-else 문이랑 비슷하다고 볼 수 있다.

## #3.2 Saving the User Name part One

### document.querySelector("#id");

> 쿼리 셀렉터는 id(#id), class(.class), tag(tag) 모두 가져온다. 그리고 찾은 첫번째를 가져온다.

### document.querySelectorAll("#id");

> 쿼리 셀렉터 올은 전부 다 가져온다.

### Local Storage

작은 정보를 나의 유저 컴퓨터(브라우저)에 저장하는 방법

### setItem(key , value) , getItem(key)

### classList

> classList는 add , remove , item , toggle , contains , replace 등과 같이 사용된다.

[MDN](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)을 참고해주세요.

## #3.3 Saving the User Name part Two

### preventDefault()

> preventDefault()를 event에 걸어주게 되면 enter를 무시한다.

이벤트를 취소하는 도중에 preventDefault를 호출하게되면, 일반적으로는 브라우저의 구현에 의해 처리되는 기존의 액션이 동작하지 않게되고, 그 결과 이벤트가 발생하지 않게됩니다.

[MDN](https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault)을 참조해주세요.

### addEventListener(type , listener)

> type은 반응할 event 유형을 나타내고 listener는 지정된 타입의 이벤트가 발생했을때 알림을 받는 객체이다.

listener는 function 또는 EventListener interface 여야한다.

[MDN](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)을 참조해주세요.

## #3.4 Making a To Do List part One

### document.createElement("tag")

> html tag를 생성해준다.

"tag" 에는 HTML tag들이 들어간다.

EX) li , ul , span , button

### appendChild("tag")

> 부모 요소 안에 요소를 넣는것

"tag" 에는 HTML tag들이 들어간다.

## #3.5 Making a To Do List part Two

### array.push()

> 배열안에 값을 집어 넣는다.

localStorage 안에는 자바스크립트를 저장할수없다. 오직 string만 저장할 수 있다.

### array.splice()

> 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.

array.splice(start[,deleteCount])

deleteCount=0이면 어떤 요소도 제거하지 않는다.

추가하고 싶은 요소는 start뒤에 작성한다.

[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)을 참고해주세요.

### JSON.stringify()

> 자바스크립트 object를 string으로 바꿔준다.

### JSON.parse()

> 자바스크립트를 object로 바꿔준다.

[MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)을 참고해주세요.

### forEach()

> forEach()는 기본적으로 배열에서 사용하는데 array에 담겨있는 것들을 각각에 한번씩 함수를 실행시켜준다.

## #3.6 Making a To Do List part Three

### console.dir()

> blah

### .target()

> blah

### removerChild()

> 더 찾아보기

remove에 대한 설명

[MDN](https://developer.mozilla.org/ko/docs/Web/API/ChildNode/remove)을 참고해주세요.

### filter()

> 더 찾아보기

## #3.7 Images Background

### floor() , ceil()

> floor(x)는 x에 있는 숫자의 소숫점 밑에를 모두 버리고 ceil(x)는 소숫점 밑에를 버리고 하나 올려준다.

### prepend()

> 더 찾아보기

## #3.8 Getting the Weather part One Geolocation
