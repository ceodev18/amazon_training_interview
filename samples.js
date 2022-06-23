const a  = ['a','b','c','d']
const b  = ['z','y','i']
//------------------------------------------------------------------

function missingNumber(array){
    let sum_array = 0
    for (let index = 0; index < array.length; index++) {
        sum_array += array[index];
        
    }
 
    let n = array.length
    let alt = (n+1)*(n+2)/2 
    return alt - sum_array
}

//console.log(missingNumber([3,7,1,2,8,4,5]))
console.log([1,2,3,4].shift())