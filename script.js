//to do list

const addToDoButton = document.getElementById('addToDo');
const toDocontainer = document.getElementById('toDocontainer');
const inputfield = document.getElementById('inputfield');

addToDoButton.onclick = function(){
    let paragraph
    if(inputfield.value != ""){
        localStorage.setItem("inputfield",inputfield.value);
         paragraph =document.createElement('p')
        
    }
    paragraph.innerText = inputfield.value ;

    paragraph.classList.add('paragraphe_style');

    toDocontainer.appendChild(paragraph);

    inputfield.value = "";

    paragraph.addEventListener('click',function(){
       paragraph.classlist.add('paragraph_click') 
    })

    paragraph.addEventListener('dblclick',function(){
        toDocontainer.remove(paragraph);
    })


}