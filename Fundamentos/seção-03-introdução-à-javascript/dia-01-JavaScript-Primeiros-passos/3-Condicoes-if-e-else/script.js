let notaCandidato = 41

if (notaCandidato >= 80) {
    console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
} else if (notaCandidato < 80 && notaCandidato >= 60) {
    console.log("Você está na nossa lista de espera.");
} else {
    console.log("Infelizmente, você reprovou.");
}