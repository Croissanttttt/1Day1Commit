const interval = setInterval(() => {
    console.log('시작');
    try{
        throw new Error('서버를 고장내주마!');
    } catch (err) {
        console.error(err);
        clearInterval(interval);
        console.log('1번 출력 후 종료');
    }
}, 1000);