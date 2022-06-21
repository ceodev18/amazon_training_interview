const a = [0,3,4,31]
const b = [4,6,30]

const result = a.concat(b);
/*console.log(a.concat(b).sort(function(a, b) {
    return a - b;
  }))*/

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
console.log(mergeAndSort(a,b))