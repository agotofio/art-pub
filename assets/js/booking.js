
document.addEventListener('DOMContentLoaded', ()=>{
  const form=document.querySelector('#bookingForm');
  const out=document.querySelector('#bookingOut');
  if(!form) return;
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(form).entries());
    const msg =
`Бронювання ART-PUB GORYNYCH
Ім'я: ${data.name||'-'}
Телефон: ${data.phone||'-'}
Дата: ${data.date||'-'}
Час: ${data.time||'-'}
Гостей: ${data.guests||'-'}
Коментар: ${data.note||'-'}`;
    out.innerHTML = `
      <div class="notice">
        ✅ Заявка сформована. Скопіюй текст і надішли адміністратору.
        <div style="margin-top:10px;display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn primary" id="copyBtn">Скопіювати</button>
          <a class="btn" href="menu.html">Меню</a>
          <a class="btn" href="gallery.html">Галерея</a>
        </div>
        <pre style="white-space:pre-wrap;margin-top:12px;padding:12px;border-radius:14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.10)">${msg}</pre>
      </div>`;
    try{ await navigator.clipboard.writeText(msg);}catch(_){}
    document.querySelector('#copyBtn')?.addEventListener('click', async ()=>{
      try{ await navigator.clipboard.writeText(msg); document.querySelector('#copyBtn').textContent='Скопійовано ✅';
      setTimeout(()=>document.querySelector('#copyBtn').textContent='Скопіювати',1200);}catch(_){}
    });
  });
});
