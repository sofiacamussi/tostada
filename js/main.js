let totalTiradas = 0;
let tostadaArriba = 0;
let tostadaAbajo = 0;

function simularTiradaYTostada() {
    const tostadaArribaElement = document.getElementById('TostadaArriba');
    const tostadaAbajoElement = document.getElementById('TostadaAbajo');
    const totalTiradasElement = document.getElementById('TotalTiradas');
    const tostadaArribaCountElement = document.getElementById('TostadaArribaCount');
    const tostadaAbajoCountElement = document.getElementById('TostadaAbajoCount');
    const toastUpImage = document.getElementById('ToastUpImage');
    const toastDownImage = document.getElementById('ToastDownImage');
    const resultadosDiv = document.getElementById('resultados');

    const resultadoTirada = Math.random(); // numero random de 0 a 1

    if (resultadoTirada < 0.5) { // si el numero random es menor a 0.5, tostada abajo
        tostadaAbajo++;
        tostadaAbajoElement.style.height = `${(tostadaAbajo / (tostadaAbajo + tostadaArriba)) * 100}%`;
        toastDownImage.style.display = 'inline'; // imagen tostada arriba
        toastUpImage.style.display = 'none'; // esconder imagen
    } else { // si el numero es 0.5 o mas grande, tostada arriba
        tostadaArriba++;
        tostadaArribaElement.style.height = `${(tostadaArriba / (tostadaAbajo + tostadaArriba)) * 100}%`;
        toastUpImage.style.display = 'inline'; // mostrar imagen tostada arriba
        toastDownImage.style.display = 'none'; // mostrar imagen tostada abajo
    }

    totalTiradas++;

    // cuentas de moneda en HTML
    totalTiradasElement.textContent = totalTiradas;
    tostadaArribaCountElement.textContent = tostadaArriba;
    tostadaAbajoCountElement.textContent = tostadaAbajo;

    // // borra los resultados previos de la tirada de tostada
    resultadosDiv.innerHTML = '';
}
