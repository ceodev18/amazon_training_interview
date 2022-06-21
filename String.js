//how to reverse string
let dummy1 = "xxx world"
let dummy2 = "Hello world"
//result =>"dlrow olleH"
function my_reverse(data) {
    let response = ""
    for (let index =  data.length-1; index >= 0; index--) {
        response += data[index]
        
    }
    return response
}
//console.log([...dummy1].reverse().join)
//console.log(my_reverse("Hello world"))

//join return an string
//reverse from [] -> return a 
