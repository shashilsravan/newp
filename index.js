const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', () => {
    if (Math.ceil(this.scrollY) < 50){
        navbar.classList.contains('sticky') ? navbar.classList.remove('sticky'): ""
    }
    else{
        navbar.classList.contains('sticky') ? "" : navbar.classList.add('sticky')
    }
})

document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active')
    document.querySelector('.fa').classList.toggle('active')
})

document.querySelector('.readmore').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.special').classList.toggle('hide')
    if(!document.querySelector('.special').classList.contains('hide')){
        document.querySelector('.readmore').textContent = 'View Less ⬆'
    }
    else{
        document.querySelector('.readmore').textContent = 'View More ⬇'
    }
})

const webpro = document.querySelector('.webpro')
const mlpro = document.querySelector('.mlpro')
const cvpro = document.querySelector('.cvpro')
const pypro = document.querySelector('.pypro')
const mispro = document.querySelector('.mispro')

const webcards = document.querySelector('.webcards')
const mlcards = document.querySelector('.mlcards')
const cvcards = document.querySelector('.cvcards')
const pycards = document.querySelector('.pycards')
const miscards = document.querySelector('.miscards')



webpro.addEventListener('click', () => {
    if(!webpro.classList.contains('active')){
        webpro.classList.add('active')
    }
    if (mlpro.classList.contains('active')){
        mlpro.classList.remove('active')
    }
    if (cvpro.classList.contains('active')){
        cvpro.classList.remove('active')
    }
    if (pypro.classList.contains('active')){
        pypro.classList.remove('active')
    }
    if (mispro.classList.contains('active')){
        mispro.classList.remove('active')
    }

    // 

    if (webcards.classList.contains('hide')){
        webcards.classList.remove('hide')
    }
    if (!mlcards.classList.contains('hide')){
        mlcards.classList.add('hide')
    }
    if (!cvcards.classList.contains('hide')){
        cvcards.classList.add('hide')
    }
    if (!pycards.classList.contains('hide')){
        pycards.classList.add('hide')
    }
    if (!miscards.classList.contains('hide')){
        miscards.classList.add('hide')
    }
})

mlpro.addEventListener('click', () => {
    if(!mlpro.classList.contains('active')){
        mlpro.classList.add('active')
    }
    if (webpro.classList.contains('active')){
        webpro.classList.remove('active')
    }
    if (cvpro.classList.contains('active')){
        cvpro.classList.remove('active')
    }
    if (pypro.classList.contains('active')){
        pypro.classList.remove('active')
    }
    if (mispro.classList.contains('active')){
        mispro.classList.remove('active')
    }
    // 
    if (mlcards.classList.contains('hide')){
        mlcards.classList.remove('hide')
    }
    if (!webcards.classList.contains('hide')){
        webcards.classList.add('hide')
    }
    if (!cvcards.classList.contains('hide')){
        cvcards.classList.add('hide')
    }
    if (!pycards.classList.contains('hide')){
        pycards.classList.add('hide')
    }
    if (!miscards.classList.contains('hide')){
        miscards.classList.add('hide')
    }
})

cvpro.addEventListener('click', () => {
    if(!cvpro.classList.contains('active')){
        cvpro.classList.add('active')
    }
    if (mlpro.classList.contains('active')){
        mlpro.classList.remove('active')
    }
    if (webpro.classList.contains('active')){
        webpro.classList.remove('active')
    }
    if (pypro.classList.contains('active')){
        pypro.classList.remove('active')
    }
    if (mispro.classList.contains('active')){
        mispro.classList.remove('active')
    }
    // 
    if (cvcards.classList.contains('hide')){
        cvcards.classList.remove('hide')
    }
    if (!mlcards.classList.contains('hide')){
        mlcards.classList.add('hide')
    }
    if (!webcards.classList.contains('hide')){
        webcards.classList.add('hide')
    }
    if (!pycards.classList.contains('hide')){
        pycards.classList.add('hide')
    }
    if (!miscards.classList.contains('hide')){
        miscards.classList.add('hide')
    }
})

pypro.addEventListener('click', () => {
    if(!pypro.classList.contains('active')){
        pypro.classList.add('active')
    }
    if (mlpro.classList.contains('active')){
        mlpro.classList.remove('active')
    }
    if (cvpro.classList.contains('active')){
        cvpro.classList.remove('active')
    }
    if (webpro.classList.contains('active')){
        webpro.classList.remove('active')
    }
    if (mispro.classList.contains('active')){
        mispro.classList.remove('active')
    }
    // 
    if (pycards.classList.contains('hide')){
        pycards.classList.remove('hide')
    }
    if (!mlcards.classList.contains('hide')){
        mlcards.classList.add('hide')
    }
    if (!cvcards.classList.contains('hide')){
        cvcards.classList.add('hide')
    }
    if (!webcards.classList.contains('hide')){
        webcards.classList.add('hide')
    }
    if (!miscards.classList.contains('hide')){
        miscards.classList.add('hide')
    }
})

mispro.addEventListener('click', () => {
    if(!mispro.classList.contains('active')){
        mispro.classList.add('active')
    }
    if (mlpro.classList.contains('active')){
        mlpro.classList.remove('active')
    }
    if (cvpro.classList.contains('active')){
        cvpro.classList.remove('active')
    }
    if (pypro.classList.contains('active')){
        pypro.classList.remove('active')
    }
    if (webpro.classList.contains('active')){
        webpro.classList.remove('active')
    }
    // 
    if (miscards.classList.contains('hide')){
        miscards.classList.remove('hide')
    }
    if (!mlcards.classList.contains('hide')){
        mlcards.classList.add('hide')
    }
    if (!cvcards.classList.contains('hide')){
        cvcards.classList.add('hide')
    }
    if (!pycards.classList.contains('hide')){
        pycards.classList.add('hide')
    }
    if (!webcards.classList.contains('hide')){
        webcards.classList.add('hide')
    }
})

const ek = document.querySelector('.ek')
const ekk = document.querySelector('.ekk')
const ekkk = document.querySelector('.ekkk')
const ekkkk = document.querySelector('.ekkkk')

ek.addEventListener('click', () => {
    if (ek.classList.contains('closed')){
        ek.classList.remove('closed')
    }
    if (!ekk.classList.contains('closed')){
        ekk.classList.add('closed')
    }
    if (!ekkk.classList.contains('closed')){
        ekkk.classList.add('closed')
    }
    if (!ekkkk.classList.contains('closed')){
        ekkkk.classList.add('closed')
    }
})

ekk.addEventListener('click', () => {
    if (ekk.classList.contains('closed')){
        ekk.classList.remove('closed')
    }
    if (!ek.classList.contains('closed')){
        ek.classList.add('closed')
    }
    if (!ekkk.classList.contains('closed')){
        ekkk.classList.add('closed')
    }
    if (!ekkkk.classList.contains('closed')){
        ekkkk.classList.add('closed')
    }
})

ekkk.addEventListener('click', () => {
    if (ekkk.classList.contains('closed')){
        ekkk.classList.remove('closed')
    }
    if (!ekk.classList.contains('closed')){
        ekk.classList.add('closed')
    }
    if (!ek.classList.contains('closed')){
        ek.classList.add('closed')
    }
    if (!ekkkk.classList.contains('closed')){
        ekkkk.classList.add('closed')
    }
})

ekkkk.addEventListener('click', () => {
    if (ekkkk.classList.contains('closed')){
        ekkkk.classList.remove('closed')
    }
    if (!ekk.classList.contains('closed')){
        ekk.classList.add('closed')
    }
    if (!ekkk.classList.contains('closed')){
        ekkk.classList.add('closed')
    }
    if (!ek.classList.contains('closed')){
        ek.classList.add('closed')
    }
})

