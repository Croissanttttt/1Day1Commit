//오늘도 책 따라하기
//프로미스
const condition = false; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    }else {
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log(message); // 성공한경우
    })
    .catch((error) => {
        console.error(error); //실패한경우
    });
