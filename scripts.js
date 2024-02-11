/* 
    Variáveis
        var - jeito antigo- não use
        let - você pode alterar valor depois
        const -> constante - não pode alterar valor depois
*/

/* 
    Funçoes
        Um trecho de código que, só é executado, 
        quando é chamado.
        function
*/

const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarFormulario() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderFormulario(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}



