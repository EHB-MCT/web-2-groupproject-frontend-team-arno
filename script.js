"use strict"

window.onload = function () {
    Challenges();

    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault();
    })
}

function Challenges() {
    fetch('https://web2-groupproject-backend.herokuapp.com/challenges')
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            let htmlString = ""

            data.forEach(element => {
                htmlString += `
                <div class="card">
                <h5 class="card-title">${element.name}</h5>
                <div class="card-body">
                <p class="card-text">${element.points}</p>
                <p class="card-text">${element.course}</p>
                <p class="card-text">${element.session}</p>
                </div>
                </div>`;
                
                console.log(htmlString)

            })
            document.getElementById("listblock").insertAdjacentHTML('beforeend', htmlString)
        });
    }