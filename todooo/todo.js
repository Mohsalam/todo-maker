let input = document.getElementById('input').value.trim()
let list = document.querySelector('.list')
// document.getElementById('li')
function add() {
    let input = document.getElementById('input').value.trim()
    let list = document.querySelector('.list')

    if (input === '' || !isNaN(input)) {
        document.getElementById('input').value = ''
    } 
    else{
        list.innerHTML += `<div class="todo" style="display: flex; justify-content: space-between;">
   <div class="li">
        <li id="li">${input}</li>
    </div>
    <div class="buts">
        <button onclick="del()">Del</button>
        <button onclick="edit()">Edit</button>
    </div>
</div>`
    }
    document.getElementById('input').value = ''

}

function del() {
    list.innerHTML.pop()
}