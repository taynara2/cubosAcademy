const min = 25
const km = 11.5


function solucao(min, km) {

    let valorKm = 0;
    let valorTempo = 0;
    let total = valorKm + valorTempo;

    if (km <= 10) {
        valorKm = km * 70
    } else if (km > 10) {
        valorKm = (km - 10) * 50 + (10 * 70)
    }
    if (min <= 20) {
        valorTempo = min * 50
    } else if (min > 20) {
        valorTempo = (min - 20) * 30 + (20 * 50)
    }
    total = valorKm + valorTempo;
    return console.log((valorTempo + valorKm).toFixed())
}

solucao(min, km)