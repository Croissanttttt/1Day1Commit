//AJAX => 비동기적 웹서비스, 요즘에는 JSON을 많이씀
//AJAX 요청은 jQuery나 axios같은 라이브러리 이용하지만
//책에선 JS의 기본방식으로 보낼것
{/* <script>
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {  //요청에 대한 콜백
        if(xhr.readyState === xhr.DONE) { //요청이 완료되면
            if(xhr.status === 200 || xhr.status === 201) { //응답 코드가 200이나 201이면
                console.log(xhr.responseText); //서버에서 보내주는 값
            } else {
                 console.error(xhr.responseText);
            }
        }
    };
    xhr.open('GET', 'https://www.zerocho.com/api/get'); //메서드와 주소 설정
    xhr.send(); //요청 전송
</script> */}
<script>
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if(xhr.status === 200 || xhr.status === 201) {console.log(xhr.responseText);}
    };
    xhr.open('GET', 'https://www.zerocho.com/api/get');
    xhr.send();
</script>