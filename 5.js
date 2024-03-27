const addNewElement=()=>{
    let newitem=document.createElement('li')
    newitem.setAttribute('class',"list-etem")
    let textnode=document.createTextNode('новый элемент')
    newitem.appendChild(textnode)
    let list=document.getElementById('mylist')
    list.appendChild(newitem)
    console.log(newitem)
}




const addNewElement2=()=>{
    let newitem=document.createElement('li')
    newitem.setAttribute('class',"list-etem")
    let textnode=document.createTextNode('новейший элемент')
    newitem.prepend(textnode)
    let list=document.getElementById('mylist')
    list.prepend(newitem)
    console.log(newitem)
}



