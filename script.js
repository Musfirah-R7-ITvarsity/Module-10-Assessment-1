document.getElementById("getData").addEventListener('click', getData);
document.getElementById("getList").addEventListener('click', getList);
document.getElementById("submitForm").addEventListener('click', submitForm);

function getData() {
    fetch('https://mysite.itvarsity.org/api/fetch/get-data/')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            document.getElementById("message").innerHTML = data; 
        });
}

function getList() {
    fetch('https://mysite.itvarsity.org/api/fetch/get-list/')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var output = "<h1>Posts</h1>";

            for (var a = 0; a < data.length; a++) {
                output += `
                <ul>
                    <li><h2>${data[a][0]}</h2></li>
                    <li><b>${data[a][1]}</b></li>
                    <li><b>${data[a][2]}</b></li>
                </ul>
                `;
            }
            document.getElementById("posts").innerHTML = output;
        });
}

function submitForm(e) {
    e.preventDefault();

    var form = new FormData(document.querySelector("#myForm"));

    fetch('https://mysite.itvarsity.org/api/fetch/send-data/', {
        method: 'POST',
        headers: {'Accept': 'application/json, */*'},
        body: form
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        document.getElementById("greeting").innerHTML = data;
    });
}
