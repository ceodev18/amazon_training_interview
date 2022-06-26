class MyHashMap{
    constructor(size){
        this.data = new Array(size);
    }
    _hash(key){
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + parseInt(key.charCodeAt(i) * i)) % this.data.length
            
        }
        return hash
    }
    get(key){
        let hash = this._hash(key)
        if(this.data[hash][0] === key){
            return this.data[hash][1]
        }
        return undefined
    }
    set(key, value){
        let hash = this._hash(key)
        if(!this.data[hash]){
            this.data[hash] = [key,value]
        }else{
            this.data[hash] = [...this.data[hash],value]
        }
    }
}

let sample = new MyHashMap(50)
sample.set('grapes',1000)
sample.set('grapes',40)
sample.set('orange',10)
sample.set('orange',20)


const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1.set('a', 97);


function firstRecurringCharacter(input) {
    let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
        console.log(i)
      return input[i]
    } else {
      map[input[i]] = i;
      //map 2 = 0
      //map 1 = 2\

    }
  }
  return undefined
}

console.log(firstRecurringCharacter([2,3,5,2,4]))