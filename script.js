async function GetCalenderUrl() {
    const url = "https://script.google.com/macros/s/AKfycbx3zfsa6aJeL8ql97_q0EpxP1vvL7e5LJe_TYnucMHckyhZ_UIa_kz5obdE8NTOuCco/exec";
    fetch(url).then(function (data) {
        return data.json();
    }).then(function (json) {
        if (json.success) {

        }
    });
}

function getParameters() {

}

let reloadButton = document.getElementById('rb');
reloadButton.onclick = doReload;

function doReload() {
    window.location.reload(false);
}

function showDialog() {

}

function deleteDialog() {

}