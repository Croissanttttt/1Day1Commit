//오늘도 책 따라하기
//프로미스
const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    }else {
        reject('실패');
    }
});

// promise
//     .then((message) => {
//         console.log(message); // 성공한경우
//     })
//     .catch((error) => {
//         console.error(error); //실패한경우
//     });

promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.error(error);
    });

function findAndSaveUser(Users) {
    Users.findOne({}, (err,user) => { //첫 번째 콜백
        if (err) { //첫 번째 콜백함수 오류 처리
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) => { // 두 번째 콜백
            if (err) { //두 번째 콜백함수 오류 처리
                return console.error(err);
            }
            Users.findOne({ gender: 'm'}, (err, user) => { // 세 번째 콜백
                //생략
            });
        });
    });
}
//이 콜백함수를 프로미스로 변환
function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({ gender: 'm'});
        })
        .then((user) => {
            //생략
        })
        .catch(err => { //error 한번에 처리하기
            console.log(err);
        });
}

//프로미스 여러 개를 한번에 실행
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });