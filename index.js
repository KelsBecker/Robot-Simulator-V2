document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  let ul = document.querySelector('#moves-container')
  let moveButton = document.getElementById('move-button')

document.addEventListener('keydown', function(event){
  let direction = event.key
  let li = document.createElement('li')

  if(direction === "ArrowUp"){
    li.innerText = 'Up'
    ul.append(li)
  }
  if(direction === "ArrowDown"){
    li.innerText = 'Down'
    ul.append(li)
  }
  if(direction === "ArrowRight"){
    li.innerText = 'Right'
    ul.append(li)
  }
  if(direction === "ArrowLeft"){
    li.innerText = 'Left'
    ul.append(li)
  }
  if(direction === "Backspace"){
    ul.lastChild.remove()
  }
})

moveButton.addEventListener('click', function(event){
  let li = ul.firstChild
  if(li.innerText === "Up"){
    move('up')
  }
  if(li.innerText === "Down"){
    move('down')
  }
  if(li.innerText === "Right"){
    move('right')
  }
  if(li.innerText === "Left"){
    move('left')
  }
  li.remove()
})









})


