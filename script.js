let texto = document.getElementById("text");


texto.addEventListener('input', () => {
    let count = (texto.value).length;
    document.getElementById("resultado").textContent = `Numero de Caracteres: ${count}`
});