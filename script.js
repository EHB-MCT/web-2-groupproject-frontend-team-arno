"use strict"

const url = "https://web2-groupproject-backend.herokuapp.com"
window.onload = function () {
    Challenges();

    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault();
        saveChallenges();
    })
}

function Challenges() {
    fetch(url+"/challenges")
        .then(response => response.json())
        .then(function (data) {
            console.log(data);
            let htmlString = ""

            data.forEach(element => {
                htmlString += `
                <div class="card text-center">
                <h5 class="card-title">${element.name}</h5>
                <div class="card-body">
                <p class="card-text">${element.points} points</p>
                <p class="card-text">course: ${element.course}</p>
                <p class="card-text">session: ${element.session}</p>
                <button id="delete" type="submit" class="btn btn-danger"> Delete</button>
                <button id="edit" type="submit" class="btn btn-success"> Edit</button>
                </div>
                </div>`;
                

            })
            document.getElementById("listblock").insertAdjacentHTML('beforeend', htmlString)
        });
    }

    async function saveChallenges(){

            const data = JSON.stringify({
        name: document.getElementById('name').value,
        points: document.getElementById('points').value,
        course: document.getElementById('course').value,
        session: document.getElementById('session').value
        });

            fetch(url+"/challenge", {
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body: data
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                });
        await Challenges();

            }