async function getCalendarUrl() {
    let userGrade = getParameter("userGrade");
    let userClass = getParameter("userClass");

    if (userGrade && userClass) {
        const api = `https://script.google.com/macros/s/AKfycbx3zfsa6aJeL8ql97_q0EpxP1vvL7e5LJe_TYnucMHckyhZ_UIa_kz5obdE8NTOuCco/exec?action=getCalendar&userGrade=${userGrade}&userClass=${userClass}`;
        let response = await fetch(api);
        let json = await response.json();
        if (json.success) {
            console.log(json.url);
        }
    }

    //deleteParams
    const url = new URL(window.location.href);
    window.history.replaceState({}, '', url.pathname);

}
window.onload = getCalendarUrl();

function getParameter(paramName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(paramName);
}

function showDialog(title, message) {
    const dialog = document.getElementById("");
    const dialogTitle = document.getElementById("");
    const dialogMessage = document.getElementById("");
}

function hideDialog() {
    const dialog = document.getElementById("");
    const dialogTitle = document.getElementById("");
    const dialogMessage = document.getElementById("");
}

function showLoadingAnimation() {
    const loadingAnimation = document.getElementById("");
}

function hideLoadingAnimation() {
    const loadingAnimation = document.getElementById("");
}
//(C) 2026 test.resavation326