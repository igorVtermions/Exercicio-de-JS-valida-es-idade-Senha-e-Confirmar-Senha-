//campos a validar
const date = document.getElementById('date')
const pass = document.getElementById('pass')
const passTwo = document.getElementById('passTwo')

function validate(item){

    item.setCustomValidity('');
    item.checkValidity();

    //Verificador de idade
    if (item == date){
        let hoje = new Date();
        let dage = new Date(date.value);

        let age = hoje.getFullYear() - dage.getFullYear();
        let m = hoje.getMonth() - dage.getMonth();

        if(m < 0 || (m === 0 && hoje.getDate() < dage.getDate())){
        age--;
        }

        if(age >= 0) document.getElementById('date').value;

        if(age > 130) item.setCustomValidity('Há algo errado com a sua idade!')
        else if (age >= 18) item.setCustomValidity('');
        else item.setCustomValidity('você precisa ser maior de 18 anos!!');
    }

    //validação da segunda senha
    if(item == passTwo){
        if(item.value === pass.value)setCustomValidity('');
        else item.setCustomValidity('As senhas digitadas não são iguais.')
    }
}


//solitações de validações
date.addEventListener('input', function(){validate(date) });
pass.addEventListener('input', function(){validate(pass)});
passTwo.addEventListener('input', function(){validate(passTwo)});