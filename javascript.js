let inp = document.querySelector('.inp')
let btn=document.querySelector('.btn_for_ipn')

// btn.addEventListener('click')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${key}`)
    .then((res) =>res.json())
    .then(data=>{
    //    let city = document.querySelector(".this_city")
    //    let gradus = document.querySelector(".for_gradus")
    //    let temp = Math.floor(data.main.temp)
    //    gradus.innerHTML = temp + " °C"
    //    city.textContent = `${data.name}`
    //    inp.value = ""
       console.log(data); 
    
    }
    
    )
    .catch(eror=>{
        console.log('xato');
    })
})


 