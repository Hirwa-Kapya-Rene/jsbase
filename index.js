let input;

while (input !== "q") {
  input = prompt("Veuillez entrer un nombre");

  if (input === "q") {
      alert("Programme terminé.");
      break;
  }

  if (!isNaN(input) && input.trim() !== "") {
      const nombre = Number(input);

      if (nombre % 2 === 0) {
          alert(`Le nombre ${nombre} est pair.`);
      } else {
          alert(`Le nombre ${nombre} est impair.`);
      }
  } else {
      alert("Veuillez entrer un nombre valide.");
  }
}