//webStorage
//localStorage
//sessionStorage
//JSON
//setItem(); ,getItem()
//clear()- earase everthing
//removeItem(key) - delete one item
//key(index) - get the name of one item using index. from zero. -> key를 모를때 쓰면 유용.
//clickcount

/*웹 스토리지에 대해서 이야기해보자.
두가지 다른 버전이 있다. 로컬스토리지와 세션스토리지 둘은 모두 같은 메소드와 속성을 가지고 있다.
둘의 다른 점이라고 하면, 세션 스토리지는 웹브라우저나 탭을 닫거나, 로그아웃을 하면 세션은 너의 캐시 같은걸 지워버린다.
로컬스토리지는 당신이 갖고 싶지 않은 하나의 혹은 여러 아이템들을 지우는 메소드들을 사용하거나 브라우저의 설정창에서 지우기 전까지 로컬스토리지에 남아있다.
이렇게 이둘은 다른 타입이다. 로컬스토리지와 세션 스토리지.
여기 우리가 가진 다른 메소드들을 살펴보자.
이 둘은 모두 window객체 안에 들어있으니, 둘중 하나에 접속하기 위해,  타이핑을 window.localstroag 와 window.sessionstroag 라고 적을 수 있다. 
또한 브라우저안의 다른 window객체의 자식과 마찬가지로 그냥 localstorag 혹은 sessionsotrage라고 적을 수도 있다.
둘다 정확히 같은 코드를 가지기 때문에 localstorag만을 이 모든 예시로 사용할건데, 다른 점이라곤 그저 얼마나 저장소에 머무르는지 밖에 없다.
저장소에 들어있는게 뭔지 보고 싶다면, 브라우저를 켜서 검사로 들어가서 콘솔을 가져와서 application 탭에서 local Storage와 session storage에 대해서 볼수있다.
가서보면 지금 우리가 사용하는 도메인에 대해서 볼수있다. 클릭하면, 현재는 비어있는데, 키와 값들을 위한 리스트가 있다.
그리고 여기에 원하는 무엇이든 넣을수있다. 하지만 딱 하나의 제한이라고 한다면, 여기에 들어가야 하는 값의 데이터타입은 String이여야 한다는 것이다.
그리고 이러한 점이 우리를 JSON 객체에 이목을 돌린다.
JSON객체는 자바스크립트에서 객체를 String으로 배열을 String으로 바꿀 수 있게 해준다.
그리곤 다시 이게 뭐였든 간에 다시 객체로 되돌려준다.
setItem 메소드는 이름과 값을 요구한다. 이것들이 키와 값이다.

*/


localStorage.setItem('myname','Min Ook Choi'); //이렇게 하면 로컬스토리지에 저장되어 쓰일 수 있다.
let val = localStorage.getItem('myname'); //다시 로컬스토리지에서 회수.
console.log(val);
//wow..

let key = 'intro';
localStorage.setItem(key,'저는 최민욱입니다.');
console.log(key);

//JSON의 키와 값은 쌍따옴표를 사용해야한다.
let options = {	"name":"민욱",
				"age":"26",
				"sex":"남자",
				"취미":["이것","저것","그것"]};

/*localStorage.setItem("aboutMe",options);*/ //이거는 안된다. option이 객체이기 때문에

let str = JSON.stringify(options); //뭐든 간에 스트링으로 바꿔준다.
localStorage.setItem("aboutMe",str);

let original = localStorage.getItem("aboutMe");
console.log(original); //-> 이렇게 하면 객체의 스트링 버전이다. 이것은 그냥 스트링이 된다.

let obj = JSON.parse(original);
console.log(obj); //-> 이건 이제 객체임.
console.log(obj.취미[2]); //->그러니 이제 이렇게 손질해서 쓸 수 있지..
//객체를 규칙에 따라 웹저장소에 스트링값으로 저장하고, 다시 꺼내서 객체로 바꾸어 사용할 수 있다.
console.log(localStorage.length);
console.log(localStorage.key(2));

/*localStorage.setItem('test','length');*/ //저장 후 이렇게 코드를 주석으로 바꾸어도 등록되어있음..
console.log(localStorage.getItem('test'));

function clickCounter(){

	if(localStorage.click){
		localStorage.click = Number(localStorage.click) +1;
	}else{
		localStorage.click = 1;
	}
	sessionStorage.likecount = localStorage.getItem("click")
	document.getElementById("result").innerHTML = "좋아요 +"+ localStorage.click + "번";
}

function KeyAmount(){
	document.getElementById("length").innerHTML = "현재 로컬저장소에 있는 데이터 갯수는" + localStorage.length + "입니다.";
}
//여기서 브라우저에서 입력값을 받아서 웹스토리지에 저장하려면 어떻게 해야할까.

//1.자바스크립트에서 input 입력값을 변수로 지정한다.
//2. 해당 변수를 키와 값으로 받는다.
