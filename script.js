button();


function button() {

    document.getElementById('challenge_button').addEventListener("click", lol);

}

function lol() {
    fetch(``)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        });
}