let input = document.getElementById('input');
let msg = document.getElementById('msg');
let addTodo = document.getElementById('addTodo');
let display = document.getElementById('display');

addTodo.addEventListener('click', function () {
    
    let list;
    if (input.value === '') {
        msg.innerHTML = `Please add a 'todo'`;
        input.style.border = 'solid 1px red';
        setTimeout(() => {
            msg.innerHTML = ``;
        input.style.border = 'solid 1px red';
        }, 3000);
    }else{
        input.style.border = 'none';

        list = document.createElement('li');
        console.log(list);
        list.innerHTML = input.value;
        display.appendChild(list);
        input.value = '';
    };

    list.addEventListener('click', function () {
        list.style.textDecoration = 'line-through';
        list.style.color = 'green';
    });

    list.addEventListener('dblclick', function () {
        list.style.display = 'none';
    });
});


