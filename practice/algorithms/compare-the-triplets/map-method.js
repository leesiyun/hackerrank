/*
 * Array.prototype.map()
 출처 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map


 map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
 */

const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);
console.log(map1); //(4) [2, 8, 18, 32]

/*
- 구문
arr.map(callback(currentValue[, index[, array]])[, thisArg])

매개변수
callback : 새로운 배열 요소를 생성하는 함수. 다음 세가지 인수를 가진다.
    currentValue : 처리할 현재 요소.
    index : 처리할 현재 요소의 인덱스.
    array : map()을 호출할 배열
thisArg : callback을 실행할 떄 this로 사용되는 값.

반환 값
배열의 각 요소에 대해 실행한 callback의 결과를 모은 새로운 배열.


-설명
map은 callback 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만든다.
callback 함수는(undefined도 포함해서)배열 값이 들어있는 인덱스에 대해서만 호출된다.
즉, 값이 삭제되거나 아직 값이 할당/정의 되지 않는 인덱스에 대해서는 호출되지 않는다.

callback 함수는 호출될 때 대상요소의 값, 그 요소의 인덱스, 그리고 map을 호출한 원본 배열 3개의 인수를 전달 받는다.

thisArg 매개변수가 map에 전달된 경우 callback 함수의 this 값으로 사용된다.
그 외의 경우 undefined값이 this 값으로 사용된다. callback 함수에서 최종적으로 볼 수 있는 this 값은 함수 내 this를 정하는 일반적인 규칙에 따라 결정된다.

map은 호출한 배열의 값을 변경하지 않는다. 단, callback 함수에 의해서 변형될 수 는 있다.



- 예제
배열에 들어 있는 숫자들의 제곱근을 구하여 새로운 배열을 만들기
    다음의 코드는 숫자의 배열을 받아 각 숫자들의 제곱근이 들어 있는 새로운 배열을 만든다.
*/

const number = [1, 4, 9];
const roots = number.map(Math.sqrt);
console.log(roots); //(3) [1, 2, 3]

/*
map을 활용해 배열 속 객체를 재구성하기
    다음의 코드는 오브젝트의 배열을 받아 각 오브젝트를 다른 형태로 재구성해 새로운 배열을 만든다
 */

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];
const reformattedArray = kvArray.map(obj => {
  const rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

console.log(reformattedArray);
/*
(3) [{…}, {…}, {…}]
0: {1: 10}
1: {2: 20}
2: {3: 30}
*/

/*
인자를 받는 함수를 사용해 숫자 배열 재구성하가
    다음 코드는 인자가 한개인 함수를 이용해 map이 어떻게 동작하는지 나타낸다. 인자인 배열과 안의 요소들은 map을 통해 순회하며 원본 배열로 부터 자동으로 할당된다.
*/

const doubles = number.map(num => num * 2);
console.log(doubles); //(3) [2, 8, 18]

/*
map을 포괄적으로 사용하기
    아래 예제는 String에 map을 사용해 각 문자의 ASCII 인코딩 값을 요소로 갖는 배열을 얻는 방법을 보여준다.
*/

const map = Array.prototype.map;
const a = map.call('Hello World', x => x.charCodeAt(0));
console.log(a); //(11) [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

/*
map을 포괄적으로 사용하기(querySelectorAll)
    아래 예제는 querySelectorAll을 사용해 수집된 객체들을 순회 처리하는 법을 보여준다. 이번 경우 체크한 옵션 박스를 콘솔에 프린트한다.
*/

const elems = document.querySelectorAll('select option:checked');
const values = [].map.call(elems, obj => obj.value);
console.log(values); //[]

/*
더 쉬운 방법은 Array.from()을 사용하는 것이다.
 */
