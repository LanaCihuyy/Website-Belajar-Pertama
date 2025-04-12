let count = 0;

const background = document.getElementById("color");
const inputWarna = document.getElementById("warna");
const warnaDefault = "#ffe4c4";

function tambahAngka() {
    count++;
    document.getElementById("angka").innerText = count;
}

function kurangAngka() {
    if (count > 0) {
        count = Number(count) - 1;
        document.getElementById("angka").innerText = count;
    }
}

function resetAngka() {
    count = 0;
    document.getElementById("angka").innerText = count;
}

function ubahWarna() {
    background.style.backgroundColor = inputWarna.value;
}

function resetWarna() {
    background.style.backgroundColor = warnaDefault;
    inputWarna.value = "#ffe4c4";
}

function setAngka() {
    const input = document.getElementById("inputAngka").value;
    const nilaiBaru = Number(input);
    if (!isNaN(nilaiBaru)) {
        if (nilaiBaru < 0) {
            alert("Angka tidak bisa negatif. Nilai akan diubah menjadi positif")
            count = Math.abs(nilaiBaru);
        } else {
            count = nilaiBaru;
        }
        document.getElementById("angka").textContent = count;
    } else {
        alert("Masukkan angka yang valid");
    }
}