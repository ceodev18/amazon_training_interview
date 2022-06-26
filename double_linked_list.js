class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.before = null
    }
}
class MyDoubleLinkeList{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }
    append(value){
        let new_node = new Node(value)
        let current = this.head
        while(true){
            if(!current.next){
                new_node.before = current
                current.next = new_node
                this.tail = new_node
                this.length++
                break
            }
            current = current.next
        }
    }

    print_forward() {
        let current_node = this.head
        while (current_node) {
            console.log(current_node)
            current_node = current_node.next
        }
    }
    print_tail() {
        let current_node = this.tail
        while (current_node) {
            console.log(current_node)
            current_node = current_node.before
        }
    }

}

let sample = new MyDoubleLinkeList(1)
sample.append(2)
sample.append(3)
sample.print_tail()