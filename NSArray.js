class  NSArray{
    constructor(){
        this.data = {}
        this.size = 0
    }
    add(value){
        this.data[this.size]=value
        this.size++;
        
    }
    get(index){
        if(index>0 && index<this.size)
            return this.data[index];
    }
    pop(){
        this.size--
        delete this.data[this.size--]
    }
    delete(index){
        for (let i = 0; i < this.size-1; i++) {
            if(i >= index){
                this.data[i] = this.data[i+1]
            }
        }
       
        delete this.data[this.size-1]
        this.size--

    }
}

let obj = new NSArray()
obj.add("Hello")
obj.add("World")
obj.add(" ,this")
obj.add("is")
obj.add("Chris")
obj.delete(4)
console.log(obj)
