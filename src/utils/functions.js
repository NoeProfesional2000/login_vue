
export const clickPassword = () => {
    const password = document.getElementById('password').type
    if(password === 'password'){
        document.getElementById('password').type = 'text'
        document.getElementById('iconPassword').className = 'fa fa-eye'
    }else{
        document.getElementById('password').type = 'password'
        document.getElementById('iconPassword').className = 'fa fa-eye-slash'
    }
}

export const saveLocalStorage = (response) => {
    localStorage.token = response.token
    localStorage.user = response.user
}