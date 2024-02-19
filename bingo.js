function getRandomArbitrary(min, max) {
    let ganhou;
    do{
        let numero = Number.parseInt(Math.random() * (max - min) + min);
        alert(numero)
        ganhou = prompt("Houve ganhados? Se sim, digite 's', se não, digite 'n'.");
        if (ganhou === 'n'){
            continue;
        } else {
            return "Parabéns, houve um vencedor!";
        }
    }   while (ganhou === 'n');
}
