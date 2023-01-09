let elSelact =  document.querySelector('.qalinligi')
let elkattaligi =  document.querySelector('.kattaligi')
let elustiga =  document.querySelector('.ustiga')
let elqoshimcha =  document.querySelector('.qoshimcha')
let elQalinligiResult = document.querySelector('.qalinligi__result')
let elkattaligiResult = document.querySelector('.kattaligi__result')
let elustigaResult = document.querySelector('.ustiga__result')
let elQoshimchaResult = document.querySelector('.qoshimcha__result')

const arrQalinlik = ['yupqa', 'orta', 'qalin']
const arrKattalik = ['25sm', '30sm', '35sm', ]
const arrUstiga = ['olma',  'bodring', 'pamidor']
const arrQoshimcha = ['achchq', 'shirn', 'sous']



arrQalinlik.forEach((e,i)=>{
    let newOption = document.createElement('option')
    newOption.textContent = e
    newOption.setAttribute('value', e)

    elSelact.appendChild(newOption)
})

arrKattalik.forEach((e,i)=>{
    let newInput = document.createElement('input')
    let newLabel = document.createElement('label')
    newLabel.textContent = e
    newLabel.setAttribute('for', e)
    newLabel.setAttribute('class','kattaligi__Label')
    newInput.setAttribute('id', e)
    newInput.setAttribute('class', 'kattaligi__input')
    newInput.setAttribute('name', 'kattaligi')
    newInput.type = 'radio'
    
    elkattaligi.appendChild(newLabel)
    elkattaligi.appendChild(newInput)
})


arrUstiga.forEach((e,i)=>{
    let newInput = document.createElement('input')
    let newLabel = document.createElement('label')
    newLabel.textContent = e
    newLabel.setAttribute('for', e)
    newInput.setAttribute('id', e)
    newInput.setAttribute('class', 'ustiga__input')
    newInput.type = 'checkbox'
    
    elustiga.appendChild(newLabel)
    elustiga.appendChild(newInput)
})

arrQoshimcha.forEach((e,)=>{
    let newInput = document.createElement('input')
    let newLabel = document.createElement('label')
    newLabel.textContent = e
    newLabel.setAttribute('for', e)
    newInput.setAttribute('id', e)
    newInput.setAttribute('class', 'qoshimcha__input')
    newInput.type = 'checkbox'
    
    elqoshimcha.appendChild(newLabel)
    elqoshimcha.appendChild(newInput)
})

elSelact.addEventListener('change', (e)=>{
    elQalinligiResult.textContent = e.target.value
})

let elkattaligiInput = document.querySelectorAll('.kattaligi__input')
elkattaligiInput.forEach((e)=>{
    e.addEventListener('click', (j)=>{
        elkattaligiResult.textContent = j.target.id;
    })
})


let elUstigaInput = document.querySelectorAll('.ustiga__input')
const UstigaArr = []
elUstigaInput.forEach((e)=>{
    e.addEventListener('click', (j)=>{
        
        
        if(j.target.checked == true){
            UstigaArr.push(j.target.id)
            ustigaMapper(UstigaArr)
        }
        if(j.target.checked == false ){
           let index =  UstigaArr.indexOf(j.target.id)
           let filArr = UstigaArr.splice(index, 1)
            console.log(UstigaArr);
            ustigaMapper(UstigaArr)
        }
        console.log(j.target.checked);
        
    })
})



function ustigaMapper(data) {
    elustigaResult.innerHTML = ''
    data.map((e)=>{
        let newLi = document.createElement('li')
        newLi.textContent = e
        elustigaResult.appendChild(newLi)
    })
}
function qoshimchaMapper(data) {
    elQoshimchaResult.innerHTML = ''
    data.map((e)=>{
        let newLi = document.createElement('li')
        newLi.textContent = e
        elQoshimchaResult.appendChild(newLi)
    })
}
let elQoshimchaInput = document.querySelectorAll('.qoshimcha__input')
const QoshimchaArr = []
elQoshimchaInput.forEach((e)=>{
    e.addEventListener('click', (j)=>{
        let newLi = document.createElement('li')
        newLi.textContent = j.target.id;
        elQoshimchaResult.appendChild(newLi)
    })
    j.addEventListener('click', (j)=>{
        
        
        if(j.target.checked == true){
            QoshimchaArr.push(j.target.id)
            qoshimchaMapper(QoshimchaArr)
        }
        if(j.target.checked == false ){
           let index =  QoshimchaArr.indexOf(j.target.id)
           let filArr = QoshimchaArr.splice(index, 1)
            console.log(QoshimchaArr);
            qoshimchaMapper(QoshimchaArr)
        }
        console.log(j.target.checked);
        
    })
})