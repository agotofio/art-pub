
document.addEventListener('DOMContentLoaded', ()=>{
  const wrap=document.querySelector('#menuGrid'); if(!wrap) return;
  wrap.innerHTML=(window.MENU_ITEMS||[]).map(it=>`
    <article class="card">
      <div class="thumb"><img src="${it.img}" alt="${it.title}"></div>
      <div class="body">
        <h3>${it.title}</h3>
        <p>${it.desc}</p>
        <div class="actions">
          <span class="price">${it.price}</span>
          <button class="btn primary" data-open="${it.id}">Деталі</button>
        </div>
      </div>
    </article>
  `).join('');
  wrap.addEventListener('click', (e)=>{
    const b=e.target.closest('[data-open]'); if(!b) return;
    const it=(window.MENU_ITEMS||[]).find(x=>String(x.id)===String(b.dataset.open));
    if(it) openModal({img:it.img,title:it.title,desc:it.desc});
  });
});
