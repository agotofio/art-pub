
function q(s, r=document){return r.querySelector(s)}
function qa(s, r=document){return Array.from(r.querySelectorAll(s))}
function setActive(){
  const p = (location.pathname.split('/').pop() || 'index.html');
  qa('.chip').forEach(a=>{
    const h=(a.getAttribute('href')||'').split('/').pop();
    if(h===p) a.classList.add('active');
  });
}
function openModal({img,title,desc}){
  const m=q('#modal'); if(!m) return;
  q('#mImg').src=img||'';
  q('#mTitle').textContent=title||'';
  q('#mDesc').textContent=desc||'';
  m.classList.add('open'); document.body.style.overflow='hidden';
}
function closeModal(){
  const m=q('#modal'); if(!m) return;
  m.classList.remove('open'); document.body.style.overflow='';
}
document.addEventListener('DOMContentLoaded', ()=>{
  setActive();
  const m=q('#modal');
  if(m){
    q('#mClose')?.addEventListener('click', closeModal);
    m.addEventListener('click', e=>{ if(e.target===m) closeModal(); });
    document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });
  }
});
