/*const a = [0,3,4,31]
const b = [4,6,30]

function mergeAndSort(a,b) {
    //merging
    let concatted = []
    a.forEach(e =>concatted.push(e));
    b.forEach(e =>concatted.push(e));
    //O(n+m)
    
    //sorting
    let min = -1
    for (let index = 0; index < concatted.length; index++) {
        
        
    }
    return concatted;
}  
console.log(mergeAndSort(a,b))*/
let a = [1,2,6,7,9]
let b = [2,4,3,5]
function merge(a,b){
    let a_b = []

    while(a.length && b.length){
        if(a[0]<b[0]){
            a_b.push(a.shift())
        }else{
            a_b.push(b.shift())
        }
    }

    return [...merge(a,b), ...a , ...b]
}



//finally merge sort

function mergeSort(arr){
    if(arr.length<= 1)return arr

    let pivot = arr.length/2
    left = arr.splice(0,pivot)
    rigth = arr

    return merge(mergeSort(left),mergeSort(rigth))
    
}