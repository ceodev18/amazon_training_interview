class Node {
    constructor(value) {
        this.value = value
        this.next = null

    }
}
class MyLinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }
    append(value) {
        let node = new Node(value)
        this.tail.next = node
        this.tail = node
        /*if(this.head.next === null){
            this.head.next = node
        }else{
            let current_node = this.head.next
            while(true){
                if(current_node.next === null){
                    current_node.next = node
                    break
                }else{
                    current_node = current_node.next
                }
            }
        }*/
        this.tail = node
        this.length++
    }
    prepend(value) {
        let node = new Node(value)
        node.next = this.head
        this.head = node
        this.length++
    }
    print() {
        let current_node = this.head
        while (current_node) {
            console.log(current_node)
            current_node = current_node.next
        }
    }

    remove(index) {
        if (index === 0) {
            const save_n = this.head.next
            delete this.head
            this.head = save_n
        } else {
            //--------------------------
            let current_node = this.head
            let it = 0
            while (current_node) {
                if (it === index-1) {
                    const node_delete = current_node.next
                    current_node.next = current_node.next.next
                    delete node_delete.next
                    this.length--
                    break
                }
                it++
                current_node = current_node.next
            }

        }

    }
    insert(index, value) {
        if (index >= 0 && index < this.length) {
            if (index === 0) this.prepend(value)
            else if (index === this.length - 1) this.append(value)
            else {
                let current_node = this.head.next
                let i = 1
                while (current_node) {
                    if (i == index - 1) {
                        let new_node = new Node(value)
                        new_node.next = current_node.next
                        current_node.next = new_node
                        break
                    }
                    i++
                    current_node = current_node.next
                }

            }
        }

    }
}

let sample = new MyLinkedList(1)
sample.append(2)
sample.append(3)
sample.append(4)
sample.append(5)
//sample.insert(3, 20)
sample.remove(1)
sample.print()
//sample.print()
//console.log(sample)