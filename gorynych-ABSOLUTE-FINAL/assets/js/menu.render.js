
const grid=document.getElementById('menuGrid');
MENU_ITEMS.forEach(it=>{
 const d=document.createElement('div');
 d.innerHTML=`<img src="${it.image}"><h4>${it.name}</h4>`;
 d.onclick=()=>openModal(it);
 grid.appendChild(d);
});
function openModal(it){
 document.getElementById('modalImg').src=it.image;
 document.getElementById('modalTitle').innerText=it.name;
 document.getElementById('modal').style.display='block';
}
function closeModal(){document.getElementById('modal').style.display='none';}
