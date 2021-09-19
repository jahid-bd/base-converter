// Select elements
let input = document.getElementById('input')
let result = document.getElementById('result')

let convertBtn = document.getElementById('convert')
let resetBtn = document.getElementById('reset')
let switchBtn = document.getElementById('swap')
let copyBtn = document.getElementById('copy')

let select1 = document.getElementById('sel1')
let select2 = document.getElementById('sel2')

let groups = document.getElementsByClassName('form-group')
let feedback = document.getElementsByClassName('feedback')

// Convert Numbers by selecting options
convertBtn.addEventListener('click', function(e){
    if(select1.value == '2' && select2.value == '10'){
        if(checkValid(select1.value, input.value)){
            let answer = ToDecimal(select1.value, input.value)
            result.value = answer
       }else{
            alert('Please Enter a Valid Binary Number!')
       }
    }else if(select1.value == '2' && select2.value == '8'){
        if(checkValid(select1.value, input.value)){
            let answer = ToDecimal(select1.value, input.value)
            result.value = decimalToOctal(8,answer)
       }else{
            alert('Please Enter a Valid Binary Number!')
       }
    }else if(select1.value == '2' && select2.value == '16'){
        if(checkValid(select1.value, input.value)){
            let answer = ToDecimal(select1.value, input.value)
            let solve = decimalToHexa(select2.value, answer)
            result.value = solve
       }else{
            alert('Please Enter a Valid Binary Number!')
       }
    }else if(select1.value == '8' && select2.value == '2'){
        if(checkValid(select1.value, input.value)){
            let decimalValue = ToDecimal(select1.value,input.value)
            let answer = Number(decimalValue)
            result.value = answer.toString(2)
       }else{
            alert('Please Enter a Valid Octal Number!')
       }
    }else if(select1.value == '8' && select2.value == '10'){
        if(checkValid(select1.value, input.value)){
            let answer = ToDecimal(select1.value, input.value)
            result.value = answer
       }else{
            alert('Please Enter a Valid Octal Number!')
       }
    }else if(select1.value == '8' && select2.value == '16'){
        if(checkValid(select1.value, input.value)){
            let answer = ToDecimal(select1.value, input.value)
            let solve = decimalToHexa(select2.value, answer)
            result.value = solve
       }else{
            alert('Please Enter a Valid Octal Number!')
       }
    }else if(select1.value == '10' && select2.value == '2'){
        if(checkValid(select1.value, input.value)){
            let answer = Number(input.value)
            result.value = answer.toString(2)
       }else{
            alert('Please Enter a Valid Decimal Number!')
       }
    }else if(select1.value == '10' && select2.value == '8'){
        if(checkValid(select1.value, input.value)){
            let answer = decimalToOctal(select2.value, input.value)
            result.value = answer
       }else{
            alert('Please Enter a Valid Decimal Number!')
       }
    }else if(select1.value == '10' && select2.value == '16'){
        if(checkValid(select1.value, input.value)){
            let answer = decimalToHexa(select2.value, input.value)
            result.value = answer
       }else{
            alert('Please Enter a Valid Decimal Number!')
       }
    }else if(select1.value == '16' && select2.value == '2'){
        if(checkValid(select1.value, input.value)){
            let decimalValue = Number(hexaToDecimal(input.value))
            let answer = decimalValue.toString(2)
            result.value = answer
       }else{
            alert('Please Enter a Valid Hexa-Decimal Number!')
       }
    }else if(select1.value == '16' && select2.value == '8'){
        if(checkValid(select1.value, input.value)){
            let decimalValue = Number(hexaToDecimal(input.value))
            let answer = decimalToOctal(8,decimalValue)
            result.value = answer
       }else{
            alert('Please Enter a Valid Hexa-Decimal Number!')
       }
    }else if(select1.value == '16' && select2.value == '10'){
        if(checkValid(select1.value, input.value)){
            let answer = hexaToDecimal(input.value)
            result.value = answer
       }else{
            alert('Please Enter a Valid Hexa-Decimal Number!')
       }
    }else if(select1.value == select2.value){
        result.value = input.value
    }
})

// Reset Button
resetBtn.addEventListener('click',function(e){
    input.value = ''
    result.value = ''
})

// Switch Button
switchBtn.addEventListener('click',function(e){
    let i1 = select1.selectedIndex
    let i2 = select2.selectedIndex
    select1.selectedIndex = i2
    select2.selectedIndex = i1
    input.value = result.value
    result.value = ''
})

// Copy Button
copyBtn.addEventListener('click', function(e){
    navigator.clipboard.writeText(result.value)
    alert("Copied the text: " + result.value)
})

// console.log(select1.innerHTML)

// <<<<---Any Number to Decimal fomula is here---->>>>
function ToDecimal(b,v){
    let base = Number(b)
    let sum = 0
    let value = toArray(v)
    let index = value.map((val,ind) => {
        return ind
    }).reverse()

    for(let i = 0; i < value.length; i++){
        sum += value[i] * (base **index[i])
    }
    return sum
}

// Covert a Number to Array formula
function toArray(num){ 
    return String(num).split('').map((value) => {
        return Number(value)
    })
}

// Form Validation
function checkValid(base,value){
    let bas = Number(base)
    isTrue = true
    let val = value.split('')

    if(val == ''){
        return isTrue = false
    }else if(base == '16'){
        for(let i = 0; i < val.length; i++){
            let hexNum = hexValue(val[i])
            if(hexNum < 16){
                isTrue
            }else{
                isTrue = false
            }
        }
        return isTrue
    }else{
        for(let i = 0; i < val.length; i++){
            if(val[i] < bas){
                isTrue
            }else{
                isTrue = false
            }
        }
        return isTrue
    }
}

// <----Hexadecimal Number to Decimal Number Formlula----->
function hexValue(value){
    if(value == 'a' || value == 'A'){
        return value = 10
    } else if(value == 'b' || value == 'B'){
       return value = 11
    } else if(value == 'c' || value == 'C'){
        return value = 12
    } else if(value == 'd' || value == 'D'){
        return value = 13
    } else if(value == 'e' || value == 'E'){
        return value = 14
     } else if(value == 'f' || value == 'F'){
        return value = 15
     }else{
         return value = Number(value)
     }
}

function hexaToDecimal(val){
    let value = val.split('')
    let index = value.map((val,ind) => {
        return ind
    }).reverse()

    let sum = 0
    for(let i = 0; i < value.length; i++){
        let numVal = hexValue(value[i])
        sum += numVal * (16 ** index[i])
    }
    return sum
}




// From decimal to any Number

function decimalToOctal(b,v){
    let sum = v
    let arr = []
    let ans = ''
    for(let i = 0; i <= sum; i++){
        let res = Math.floor(sum % b)
        sum/=b
        arr.push(res)
    }
    let result = arr.reverse()
    result.forEach(value => {
        ans += `${value}`
    })
    return ans
}

function decimalToHexa(b,v){
    let sum = v
    let arr = []
    let ans = ''
    for(let i = 0; i <= sum; i++){
        let res = Math.floor(sum % b)
        let hexVal = hexValueNum(res)
        arr.push(hexVal)
        sum/=b
    }
    let result = arr.reverse()
    result.forEach(value => {
        ans += `${value}`
    })
    return ans
}

function hexValueNum(val){
    if(val == 10){
        return 'a'
    }else if(val == 11){
        return 'b'
    }else if(val == 12){
        return 'c'
    }else if(val == 13){
        return 'd'
    }else if(val == 14){
        return 'e'
    }else if(val == 15){
        return 'f'
    }else{
        return val
    }
}

