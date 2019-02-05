function mudaFoto(foto) {
    document.getElementById('icone').src = foto;
}
function calc_total() {
    const Qtd = document.getElementById("cQtd").value;

    document.getElementById("cTot").value = Qtd * 1500;
}
