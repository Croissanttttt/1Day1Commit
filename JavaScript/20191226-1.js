//여전히 책 따라하기
//async
async function findAndSaveUser(Users) {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm'});
        //생략
    } catch(error) {
        console.error(error);
    }
}
//async 화살표 함수로
const findAndSaveUser1 = async (Users) => {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm'});
        //생략
    } catch(error) {
        console.error(error);
    }
}
//for+async로 promise.all 대체
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await (promise of [promise1, promise2]){
        console.log(promise);
    }
})();
//중첩되는 콜백함수 => 프로미스 => async/await 단계로 변환하는 연습
//이렇게 변환하면 코드가 간결해진다