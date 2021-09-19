function ToDecimal(b,v){
    let base = Number(b)

    if (Number.isInteger(v)){
        var value1 = v
     } else{
         let check = String(v).split('.')
         var value1 = check[0]
         var value2 = check[1]
     }
    
    const beforeDecimal = function(){
        let sum = 0
        let value = toArray(value1)
        let index = value.map((val,ind) => {
            return ind
        }).reverse()
    
        for(let i = 0; i < value.length; i++){
            sum += value[i] * (base ** index[i])
        }
        return sum
    }
    const afterDecimal = function(){
        let value = toArray(value2)
        let index = value.map((val,ind) => {
            return ind
        })
        let sum = 0
        for (let i = 0; i < value.length; i++){
            if (true){
                sum += value[i] * (base **(-index[i]))
            }
        }
        return sum
    }

    if (Number.isInteger(v)){
        return beforeDecimal()
    } else {
        return beforeDecimal() + (afterDecimal()/base)
    }
}