document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    listHandler(e.target.children[1].value)

  })
  
 function listHandler(list){
  //console.log(list)
  p=document.createElement('p');
  p.textContent = list;
  document.getElementById('tasks').appendChild(p)
 }

 

});

