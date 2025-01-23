let start = prompt("Tapez 'q' pour commencer:");
if (start.toLowerCase() === 'q') {
    let number = prompt("Entrez un nombre:");
    number = parseInt(number);

    if (!isNaN(number)) {
        if (number % 2 === 0) {
            alert("Le nombre est pair.");
        } else {
            alert("Le nombre est impair.");
        }
    } else {
        alert("Veuillez entrer un nombre valide.");
    }
} else {
    alert("Programme terminé. Vous devez taper 'q' pour commencer.");
}