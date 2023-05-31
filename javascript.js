let inp = document.querySelector('.inp')
let btn=document.querySelector('.btn_for_ipn')
let cityName=document.querySelector('.this_city')
inp.placeholder='Enter the name of the city'

btn.addEventListener('click',(e)=>{
    let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=${key}`)
    .then(res=>res.json())
    .then(data=>{
        let gradus=document.querySelector('.for_gradus')
        cityName.textContent=data.name 
        gradus.textContent=Math.floor(data.main.temp )+' °C'
        // console.log(data.name);
        btn.parentElement.parentElement.parentElement.parentElement.parentElement.style.background='url(https://source.unsplash.com/1600x900/?' + inp.value + ')'
        inp.value=''
    })
    .catch(err=>{
        alert('Siz xato bo`lgan mamlakat nomini kiritdingiz yoki malumot kiritmadingiz');
        inp.value=''
        cityName.textContent='Tashkent'
    })
})

 