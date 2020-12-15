console.log('Client side javascript file is loaded!')

// fetch('http://ictech:4000/weather?address=lilongwe').then((response) =>{
//     response.json().then((data) =>{
//        if(data.error){
//            console.log(data.error)
//        }
//        else{
//            console.log(data.location)
//            console.log(data.forecast)
//        }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('#search')
const msgOne = document.querySelector('#msg1')
const msgTwo = document.querySelector('#msg2')

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const location = search.value

    msgOne.textContent = 'Loading...'
    msgTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) =>{
    response.json().then((data) =>{
       if(data.error){
           msgOne.textContent = data.error
       }
       else{
          msgOne.textContent = data.location
          msgTwo.textContent = data.forecast
       }
    })
})

    console.log(location)
})