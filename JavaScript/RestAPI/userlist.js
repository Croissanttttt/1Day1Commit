function getUser() { 
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            let users = JSON.parse(xhr.responseText);
            let userlist = document.getElementById('userlist');
            userlist.innerHTML = '';
            Object.keys(users).map(function (key) {
                let UserDiv = document.createElement('div');
                let span = document.createElement('span');
                span.textContent = users[key];
                UserDiv.appendChild(span);
                userlist.appendChild(UserDiv);
            });
        } else {
            console.error(xhr.responseText);
        }
    };
    xhr.open('GET', '/users');
    xhr.send();
}
window.onload = getUser;
let xhr = new XMLHttpRequest();
xhr.open('GET', '/users');
xhr.setRequestHeader('Content-Type', 'application/json');
