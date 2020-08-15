//PROCURAR O BOTÃO
document.querySelector("#add-time")
//QUANDO CLICAR NO BOTÃO
.addEventListener("click", cloneField)

//EXECUTAR UMA AÇÃO
function cloneField(){
    //DUPLICAR OS CAMPOS - QUE CAMPO?
    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true) //BOLEAN: TRUE OU FALSE

    //PEGAR OS CAMPOS - QUE CAMPOS?
    const fields = newFieldsContainer.querySelectorAll("input")

    //PARA CADA CAMPO - LIMPAR
    fields.forEach(function(field) {
        //PEGAR O FIELD DO MOMENTO E LIMPA
        field.value = ""
    })

    //COLOCAR NA PÁGINA - O"NDE?
    document.querySelector("#schedule-items").appendChild(newFieldsContainer)

}
