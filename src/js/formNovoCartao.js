;(function(){
    
    const form = document.querySelector(".formNovoCartao")
    let numeroDocartao = 0
    form.addEventListener("submit", function(event){
        event.preventDefault() /*Evita que a pagina seja recarregada no quando fizer o submit */
        const textarea = form.querySelector(".formNovoCartao-conteudo")
        const isTextAreaVazio = textarea.value.trim().length === 0
        if(isTextAreaVazio) {
            const msgErro = document.createElement("div")
            msgErro.classList.add("formNovoCartao-msg")
            msgErro.textContent = "Formulário inválido. Não digite vários nadas!"
            
            const btnSubmit = form.children[form.children.length-1]
            form.addEventListener("animationend", function(event){
                event.target.remove()
            })
            form.insertBefore(msgErro, btnSubmit)
        }else {
            adcionaCartaoNoMural({conteudo: textarea.value})
             /*numeroDocartao++
            const conteudoDoCartao = textarea.value
            const cartao = $(`
            <article id="cartao_${numeroDocartao}" tabindex="0" class="cartao">
            <div class="opcoesDoCartao">
            <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0" >
            <svg><use xlink:href="#iconeRemover"></use></svg>
            </button>
            
            <input type="radio" name="corDoCartao${numeroDocartao}" value="#EBEF40" id="corPadrão-cartao${numeroDocartao}" class="opcoesDoCartao-radioTipo" checked>
            <label for="corPadrão-cartao${numeroDocartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
            Padrão
            </label>
            
            <input type="radio" name="corDoCartao${numeroDocartao}" value="#F05450" id="corImportante-cartao${numeroDocartao}" class="opcoesDoCartao-radioTipo">
            <label for="corImportante-cartao${numeroDocartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
            Importante
            </label>
            
            <input type="radio" name="corDoCartao${numeroDocartao}" value="#92C4EC" id="corTarefa-cartao${numeroDocartao}" class="opcoesDoCartao-radioTipo">
            <label for="corTarefa-cartao${numeroDocartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
            Tarefa
            </label>
            
            <input type="radio" name="corDoCartao${numeroDocartao}" value="#76EF40" id="corInspiração-cartao${numeroDocartao}" class="opcoesDoCartao-radioTipo">
            <label for="corInspiração-cartao${numeroDocartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
            Inspiração
            </label>
            
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${conteudoDoCartao}</p>
            </article>
            `)
            $(".mural").append(cartao)
            
            cartao.on("focusin", function(){
                cartao.addClass("cartao--focado")
            })
            cartao.on("focusout", function() {
                cartao.removeClass("cartao--focado")
            })
            cartao.on("change", ".opcoesDoCartao-radioTipo", function mudaCor(event){
                cartao.css("background-color", event.target.value)
            })
            cartao.on("keydown", function deixaClicarComEnter(event){
                if(event.target.classList.contains("opcoesDoCartao-opcao") && (event.key === 'Enter' || event.key === ' ')){
                    event.target.click()
                }
            })
            cartao.on("click", function(event){
                const elementoSelecionado = event.target
                if(elementoSelecionado.classList.contains('opcoesDoCartao-remove')){
                    cartao.addClass("cartao--some")
                    cartao.on("transitionend", function(){
                        cartao.remove()
                    })
                }
            })*/
        }
        textarea.value = ""
    })
    form.classList.remove("no-js")
})()