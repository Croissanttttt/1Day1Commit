// 책따라하기
const num1 = 1;
const num2 = 2;
const result = 3;
console.log(`${num1} 더하기 ${num2} 는 '${result}'입니다.`);

//객체 리터럴
let sayNode = function() {
    console.log('Node');
};
let es = 'ES';
const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: 'Fantastic',
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);

//화살표함수
function add1(x, y) {
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

function not1(x) {
    return !x;
}
const not2 = x => !x;

//화살표함수 예제
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        var that = this;
        this.friends.forEach(function(friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();

var relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();

//비구조화 할당
var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};
const { getCandy, status: {count}}=candyMachine;

//배열의 비구조화
const array = ['nodejs', {}, 10, true];
const [node, obj, bool] = array;