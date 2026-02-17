async function GetCalenderUrl() {
    const url = "https://script.google.com/macros/s/AKfycbx3zfsa6aJeL8ql97_q0EpxP1vvL7e5LJe_TYnucMHckyhZ_UIa_kz5obdE8NTOuCco/exec";
    fetch(url).then(function (data) {
        return data.json();
    }).then(function (json) {
        if (json.success) {
            let calenderUrl = json.calenderUrl;
        }
    });
}

function getParameters() {

}

function showDialog() {

}

function hideDialog() {

}

function showLoadingAnimation() {

}

function hideLoadingAnimation() {

}
//(C) 2026 test.calender326