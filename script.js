const makeExpression = (val) => {
    const exp = document.getElementById('ans')
    if(exp.value === ''){
        if(val === '*' || val === '/' || val === '+' || val === '.'){
            alert('Invalid Expression')
        } else {
            exp.value += val
        }
    } else if(exp.value=='Invalid'){
        if(val === '*' || val === '/' || val === '+' || val === '.'){
            alert('Invalid Expression')
        } else {
            exp.value = ''
            exp.value += val
    } }
    else {
        exp.value += val
    }
}
const calculate = () => {
    const exp = document.getElementById('ans')
    try{
        let res = eval(exp.value)
        if(res === Infinity){
            alert('Division by zero is not possible')
            exp.value = ''
        } else if(!Number.isInteger(res)){
            exp.value = res.toFixed(2)
        } else {
            exp.value = res
        }
    } catch (e) {
        exp.value = 'Invalid'
    }
}



document.getElementById('1').addEventListener('click', function () {
    makeExpression('1')
})
document.getElementById('2').addEventListener('click', function () {
    makeExpression('2')
})
document.getElementById('3').addEventListener('click', function () {
    makeExpression('3')
})
document.getElementById('4').addEventListener('click', function () {
    makeExpression('4')
})

document.getElementById('5').addEventListener('click', function () {
    makeExpression('5')
})
document.getElementById('6').addEventListener('click', function () {
    makeExpression('6')
})
document.getElementById('7').addEventListener('click', function () {
    makeExpression('7')
})
document.getElementById('8').addEventListener('click', function () {
    makeExpression('8')
})
document.getElementById('9').addEventListener('click', function () {
    makeExpression('9')
})
document.getElementById('0').addEventListener('click', function () {
    makeExpression('0')
})
document.getElementById('.').addEventListener('click', function () {
    makeExpression('.')
})
document.getElementById('X').addEventListener('click', function () {
    makeExpression('*')
})
document.getElementById('-').addEventListener('click', function () {
    makeExpression('-')
})
document.getElementById('+').addEventListener('click', function () {
    makeExpression('+')
})
document.getElementById('/').addEventListener('click', function () {
    makeExpression('/')
})
document.getElementById('del').addEventListener('click', function () {
    const exp = document.getElementById('ans')
    exp.value = exp.value.slice(0, -1)
})
document.getElementById('reset').addEventListener('click', function () {
    const exp = document.getElementById('ans')
    exp.value = ''
})
document.getElementById('equalto').addEventListener('click', function () {
    calculate();
})