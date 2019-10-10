const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');
const button2 = document.querySelectorAll('button')[1];
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const listItems = document.getElementsByTagName('li');
const lis = listUl.children;
let firstListItem = listUl.firstElementChild;
let lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'lightsteelblue';



function changeFirstAndLastColors(lis) {
firstListItem = listUl.firstElementChild;
lastListItem =listUl.lastElementChild;

firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'lightsteelblue';
  
for(let i = 0; i < lis.length; i++){
  if(lis[i] !== firstListItem && lis[i] !== lastListItem ) {
  lis[i].style.backgroundColor = 'white'; 
    }
  }
}



function attachListItemButtons(li) {
  let up = document.createElement('button'); 
  up.className = 'up';
  up.textContent = 'up';
  li.appendChild(up);
  
  let down = document.createElement('button'); 
  down.className = 'down';
  down.textContent = 'down';
  li.appendChild(down);
  
  let remove = document.createElement('button'); 
  remove.className = 'remove';
  remove.textContent = 'remove';
  li.appendChild(remove);
}

for(let i = 0; i < lis.length; i++) {
 attachListItemButtons(lis[i]); 
}

listUl.addEventListener('click', (e) => {
  if(e.target.tagName === "BUTTON") {
    if (event.target.className === 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
      changeFirstAndLastColors(lis);
    }
     if (event.target.className === 'up') {
      let li = event.target.parentNode;
      let prevli = li.previousElementSibling;
      let ul = li.parentNode;
      if(prevli){
      ul.insertBefore(li, prevli);
        changeFirstAndLastColors(lis);
      
      }
      
      
    }
     if (event.target.className === 'down') {
       //get the li
      let li = event.target.parentNode;
       //get the next element sibling
      let nextli = li.nextElementSibling;
      let ul = li.parentNode;
      if(nextli){
      ul.insertBefore(nextli, li);
        changeFirstAndLastColors(lis);
      }
    }
  }
});




//document.addEventListener('click', () => {
//  console.log(event.target);                          
//});



toggleList.addEventListener('click', () => {
  if (listDiv.style.display === 'none') {
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
} else {
   toggleList.textContent = 'Show List';
   listDiv.style.display = 'none'; 
}
});

button2.addEventListener('click', () => {
  p.textContent = input.value + ':';
  input.value = "";
                        
});
      

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = "";
changeFirstAndLastColors(lis);
 });                             


                          


