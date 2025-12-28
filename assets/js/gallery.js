
document.addEventListener('DOMContentLoaded', ()=>{
  const wrap=document.querySelector('#galleryGrid'); if(!wrap) return;
  const imgs=[
    ...(window.MENU_ITEMS||[]).map(i=>({src:i.img,title:i.title})),
    ...(window.EXTRA_IMAGES||[]).map(s=>({src:s,title:'Фото'})),
  ];
  wrap.innerHTML=imgs.map((im,i)=>`
    <div class="g" data-i="${i}"><img src="${im.src}" alt="${im.title}"></div>
  `).join('');
  wrap.addEventListener('click', (e)=>{
    const el=e.target.closest('.g'); if(!el) return;
    const im=imgs[Number(el.dataset.i)];
    openModal({img:im.src,title:im.title,desc:''});
  });
});
