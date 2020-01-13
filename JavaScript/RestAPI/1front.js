function getUser() { 
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/users');
    xhr.send();
}


function putbirth() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            let users = JSON.parse(xhr.responseText);
            Object.keys(users).map(function (key) {
                edit.addEventListener('click', function () {
                    let name = prompt('바꿀 이름을 입력하세요');
                    if (!name) {
                        return alert('이름을 반드시 입력하셔야 합니다');
                    }
                    let xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status === 200) {
                            console.log(xhr.responseText);
                            putbirth();
                        } else {
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('PUT', '/users/' +key);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.send(JSON.stringify({ name: name, birthday: birthday }));
                });
            });
        } else {
            console.error(xhr.responseText);
        }
        e.target.username.value = '';
        e.target.birthday.value = '';
    };
}

function deluser() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            let users = JSON.parse(xhr.responseText);
            Object.keys(users).map(function (key) {
                    let xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status === 200) {
                            console.log(xhr.responseText);
                            deluser();
                        } else {
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('DELETE', '/users/' + key);
                    xhr.send();
            });
        } else {
            console.error(xhr.responseText);
        }
        e.target.username.value = '';
        e.target.birthday.value = '';
    };
}

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = e.target.username.value;
    const birth = e.target.birthday.value;
    if (!name) {
        return alert('이름을 입력하세요');
    } else if (!birth) {
        return alert('생년월일을 입력하세요');
    }
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 201) {
            console.log(xhr.responseText);
            getUser();
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST', '/users');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ name: name, birth: birth }));
    e.target.username.value = '';
    e.target.birthday.value = '';
});