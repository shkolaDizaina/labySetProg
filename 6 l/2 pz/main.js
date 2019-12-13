console.log("задание 2.7")

// &, $, %, *;
function getErrors(password) {
    if (password.length < 3) {
        return 'Пароль меньше 3 символов'
    }
    if (password.length > 12) {
        return 'Пароль больше 12 символов'
    }

    if (
        !(
            (password.indexOf('&') !== -1)
            || (password.indexOf('$') !== -1)
            || (password.indexOf('*') !== -1)
        )
    ) {
        return 'Пароль не содержит какого-либо символа из $&%*'
    }

    let startsWithQ = false
    let endsWithZ = false

    if (password.indexOf('Q') === 0) {
        startsWithQ = true
    }

    if (
        (password.lastIndexOf('Z') === (password.length - 1))
    ) {
        endsWithZ = true
    }

    if (!(startsWithQ || endsWithZ)) {
        return 'Пароль должен начинаться с Q или с Z'
    }

    return null
}

function check() {
    let pass = prompt('enter password from 7 task');
    let err = getErrors(pass)
    
    if (err) {
        alert(err)
    } else {
        alert('Пароль хороший')
    }

    return
    
    if ((pass.length > 12) && (pass.length <= 3) || pass.indexOf('#@*') !== -1) {
        alert('Пароль Корректный')
    } else {
        alert('пароль не Корректный')
    }

   
}
check() 