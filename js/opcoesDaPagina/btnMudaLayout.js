const btn = document.querySelector('#btnMudaLayout')

function mudaTexto() {
    if(btn.textContent == 'Blocos') {
        btn.textContent = 'Linhas'
    } else {
        btn.textContent = 'Blocos'
    }
}

const mural = document.querySelector('.mural')
function mudaLayout() {
    mural.classList.toggle('mural--linha')
}
btn.addEventListener('click', mudaLayout)
btn.addEventListener('click', mudaTexto)
btn.classList.remove('no-js')