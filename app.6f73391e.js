/* Single 1 Rooftop Residence — interactions
   Icons: react-icons (feather + lucide), inline SVG above.
   Animations: framer-motion engine via Motion One CDN (same team/API style:
   initial/whileInView + staggerChildren), with IO+CSS fallback offline. */
const IMAGES=[
 {src:'assets/img/espacio-Foto-Real-01.webp',alt:'Living space - Single 1'},
 {src:'assets/img/cocina-Foto-Real-01.webp',alt:'Modern kitchen - Single 1'},
 {src:'assets/img/cocina-Foto-Real-02.webp',alt:'Equipped kitchen - Single 1'},
 {src:'assets/img/desayunador-Foto-Real.webp',alt:'Breakfast bar - Single 1'},
 {src:'assets/img/habitacion-Foto-Real-01.webp',alt:'Main bedroom - Single 1'},
 {src:'assets/img/habitacion-Foto-Real-02.webp',alt:'Bedroom detail - Single 1'},
];
const AMEN=[
 ['Common Pool','Heated pool + sun deck','<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>'],
 ['Gym + Yoga','Full equipment + outdoor shala','<path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1-1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/>'],
 ['Restaurants','On-site dining plaza','<path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.6 1.6a3 3 0 0 0 4.2 0L22 8"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/>'],
 ['Mini-Market','Daily shopping on site','<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>'],
 ['Paddle Court','Panoramic court','<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>'],
 ['Spa','Sauna + treatments','<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>'],
 ['Coworking','Fiber internet + meeting rooms','<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>'],
 ['24/7 Security','Gated + CCTV','<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>'],
 ['Fire Pit','Social campfire area','<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>'],
 ['Private Parking','1 spot + guest parking','<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>'],
 ['Elevator','Direct 4th-floor access','<path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/>'],
 ['Condo-Hotel','Managed rentals','<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'],
];
let idx=0, timer=null;
const $=s=>document.querySelector(s);
const counter=$('#slideCounter'), bar=$('#autoBar');

/* ---------- Full-width hero slider ---------- */
const slidesEl=$('#slides'), thumbs=$('#thumbs');
IMAGES.forEach((im,i)=>{
  if(i>0){
    const f=document.createElement('figure');
    f.className='slide';
    f.innerHTML=`<img src="${im.src}" alt="${im.alt}" width="1080" height="607" decoding="async" loading="lazy">`;
    slidesEl.appendChild(f);
  }
  const b=document.createElement('button');
  b.innerHTML=`<img loading="lazy" src="${im.src}" alt="${im.alt}">`;
  b.setAttribute('aria-label','Photo '+(i+1)+': '+im.alt);
  b.onclick=()=>go(i,true);
  thumbs.appendChild(b);
});
const slideNodes=[...slidesEl.children];
function pad(n){return String(n).padStart(2,'0');}
function paint(){
  slideNodes.forEach((s,i)=>{
    s.classList.toggle('active',i===idx);
    if(i===idx){ const img=s.querySelector('img'); img.style.animation='none'; void img.offsetWidth; img.style.animation=''; }
  });
  counter.textContent=`${pad(idx+1)} / ${pad(IMAGES.length)}`;
  [...thumbs.children].forEach((t,i)=>t.classList.toggle('active',i===idx));
  /* keep thumb visible WITHOUT moving the page: scroll the strip container only */
  const t=thumbs.children[idx];
  if(t){ try{ thumbs.scrollTo({left:t.offsetLeft-thumbs.clientWidth/2+t.clientWidth/2,behavior:'smooth'}); }catch(e){ thumbs.scrollLeft=t.offsetLeft-thumbs.clientWidth/2; } }
  restartBar();
}
function go(n,manual){ idx=(n+IMAGES.length)%IMAGES.length; paint(); if(manual) restartAuto(); }
function restartAuto(){ clearInterval(timer); timer=setInterval(()=>go(idx+1),6000); }
function restartBar(){ bar.style.transition='none';bar.style.width='0';requestAnimationFrame(()=>{bar.style.transition='width 6s linear';bar.style.width='100%';}); }
$('#prevBtn').onclick=()=>go(idx-1,true);
$('#nextBtn').onclick=()=>go(idx+1,true);
document.addEventListener('keydown',e=>{ if(e.key==='ArrowRight')go(idx+1,true); if(e.key==='ArrowLeft')go(idx-1,true); });
let sx=0;
slidesEl.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
slidesEl.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx; if(Math.abs(dx)>40)go(idx+(dx<0?1:-1),true);},{passive:true});
/* lightbox */
const lb=$('#lightbox'), lbImg=$('#lbImg'), lbCount=$('#lbCount');
function openLB(){ lb.hidden=false; lbSync(); document.body.style.overflow='hidden'; }
function closeLB(){ lb.hidden=true; document.body.style.overflow=''; }
function lbSync(){ lbImg.src=IMAGES[idx].src; lbCount.textContent=`${pad(idx+1)} / ${pad(IMAGES.length)}`; }
$('#expandBtn').onclick=openLB; $('#lbClose').onclick=closeLB;
$('#lbPrev').onclick=()=>{go(idx-1,true);lbSync();};
$('#lbNext').onclick=()=>{go(idx+1,true);lbSync();};
lb.onclick=e=>{if(e.target===lb)closeLB();};
paint(); restartAuto();

/* ---------- Gallery section grid + lightbox ---------- */
const photoGrid=$('#photoGrid');
if(photoGrid){
  photoGrid.innerHTML=IMAGES.map((im,i)=>`<figure data-idx="${i}" tabindex="0" role="button" aria-label="Enlarge: ${im.alt}"><img loading="lazy" src="${im.src}" alt="${im.alt}"><figcaption><span>${pad(i+1)} · ${im.alt}</span><svg viewBox="0 0 24 24"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg></figcaption></figure>`).join('');
  photoGrid.addEventListener('click',e=>{
    const f=e.target.closest('figure'); if(!f) return;
    idx=+f.dataset.idx; paint(); restartAuto(); openLB();
  });
  photoGrid.addEventListener('keydown',e=>{
    if(e.key!=='Enter'&&e.key!==' ')return;
    const f=e.target.closest('figure'); if(!f) return;
    e.preventDefault(); idx=+f.dataset.idx; paint(); restartAuto(); openLB();
  });
}

/* ---------- Amenities grid ---------- */
$('#amenGrid').innerHTML=AMEN.map(a=>`<div class="amen"><svg viewBox="0 0 24 24">${a[2]}</svg><b>${a[0]}</b><span>${a[1]}</span></div>`).join('');

/* ---------- Tabs ---------- */
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));
  t.classList.add('active'); document.getElementById(t.dataset.tab).classList.add('active');
});

/* ---------- Country list ---------- */
const COUNTRIES=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
const countrySelect=$('#countrySelect');
if(countrySelect){ COUNTRIES.forEach(c=>{ const o=document.createElement('option'); o.value=c; o.textContent=c; countrySelect.appendChild(o); }); }
customSelect(countrySelect,{search:true,placeholder:'Select country...'});
customSelect(document.querySelector('#budgetSelect'),{placeholder:'Select budget...'});

/* ---------- Custom dropdowns (themed, no native UI) ---------- */
function customSelect(sel,opts){
  opts=opts||{}; const withSearch=!!opts.search, placeholder=opts.placeholder||'Select...';
  if(!sel) return;
  const wrap=document.createElement('div'); wrap.className='cselect';
  sel.parentNode.insertBefore(wrap,sel); wrap.appendChild(sel);
  const btn=document.createElement('button'); btn.type='button'; btn.className='cselect-btn';
  btn.setAttribute('aria-haspopup','listbox'); btn.setAttribute('aria-expanded','false');
  btn.innerHTML='<span class="ph"></span><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>';
  const panel=document.createElement('div'); panel.className='cselect-panel'; panel.setAttribute('role','listbox');
  let searchInput=null;
  if(withSearch){
    const s=document.createElement('div'); s.className='cselect-search';
    searchInput=document.createElement('input'); searchInput.type='text';
    searchInput.placeholder='Search country...'; searchInput.setAttribute('aria-label','Search country');
    s.appendChild(searchInput); panel.appendChild(s);
  }
  const list=document.createElement('div'); panel.appendChild(list);
  wrap.appendChild(btn); wrap.appendChild(panel);
  function render(filter){
    filter=(filter||'').toLowerCase(); list.innerHTML='';
    let n=0;
    [...sel.options].forEach(o=>{
      if(o.value==='') return;
      if(filter && o.text.toLowerCase().indexOf(filter)<0) return;
      n++;
      const b=document.createElement('button'); b.type='button';
      b.className='cselect-opt'+(sel.value===o.value?' sel':'');
      b.setAttribute('role','option'); b.setAttribute('aria-selected',sel.value===o.value?'true':'false');
      const t=document.createElement('span'); t.textContent=o.text; b.appendChild(t);
      b.insertAdjacentHTML('beforeend','<svg class="tick" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>');
      b.onclick=()=>{ sel.value=o.value; sync(); close(); };
      list.appendChild(b);
    });
    if(!n) list.innerHTML='<div class="cselect-empty">No results</div>';
  }
  function sync(){
    const o=sel.selectedOptions[0], label=btn.querySelector('span');
    if(o&&o.value){ label.textContent=o.text; label.classList.remove('ph'); }
    else { label.textContent=placeholder; label.classList.add('ph'); }
    render(searchInput?searchInput.value:'');
  }
  function open(){
    document.querySelectorAll('.cselect.open').forEach(x=>{ if(x!==wrap){ x.classList.remove('open'); x.querySelector('.cselect-btn').setAttribute('aria-expanded','false'); } });
    wrap.classList.add('open'); btn.setAttribute('aria-expanded','true');
    if(searchInput){ searchInput.value=''; render(''); setTimeout(()=>searchInput.focus(),60); } else render('');
  }
  function close(){ wrap.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }
  btn.addEventListener('click',e=>{ e.stopPropagation(); wrap.classList.contains('open')?close():open(); });
  if(searchInput){
    searchInput.addEventListener('input',()=>render(searchInput.value));
    searchInput.addEventListener('click',e=>e.stopPropagation());
    searchInput.addEventListener('keydown',e=>{ e.stopPropagation(); if(e.key==='Enter'){ e.preventDefault(); const f=list.querySelector('.cselect-opt'); if(f) f.click(); } });
  }
  document.addEventListener('click',e=>{ if(!wrap.contains(e.target)) close(); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') close(); });
  sync();
}

/* ---------- Lead form -> WhatsApp ---------- */
$('#leadForm').addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.target);
  if(!f.get('nombre')||!f.get('email')||!f.get('tel')){alert('Please complete name, email and phone');return;}
  const msg=`Hello Cana Blue, I am ${f.get('nombre')} ${f.get('apellido')} (${f.get('pais')}). I am interested in Single 1 Rooftop Ref 21236 US$162,500. Budget: ${f.get('budget')}. ${f.get('msg')} My email: ${f.get('email')} Phone: ${f.get('tel')}`;
  window.open('https://wa.me/18099753900/?text='+encodeURIComponent(msg),'_blank');
  $('#formOk').hidden=false;
});

/* ---------- FAQ ---------- */
document.querySelectorAll('.faq-item button').forEach(b=>b.onclick=()=>b.parentElement.classList.toggle('open'));

/* ---------- Framer-motion style animations ---------- */
function splitTitle(){
  const h=$('#heroTitle');
  h.querySelectorAll('.line').forEach(line=>{
    const text=line.textContent; line.textContent='';
    text.split(' ').forEach((word,wi,arr)=>{
      const w=document.createElement('span');
      w.style.display='inline-block'; w.style.whiteSpace='nowrap';
      [...word].forEach(ch=>{
        const c=document.createElement('span');
        c.className='ch'; c.textContent=ch; w.appendChild(c);
      });
      line.appendChild(w);
      if(wi<arr.length-1) line.appendChild(document.createTextNode(' '));
    });
  });
}
splitTitle();
function heroIntro(){
  const chars=document.querySelectorAll('#heroTitle .ch');
  if(window.Motion && Motion.animate){
    chars.forEach(c=>{c.style.opacity='0';c.style.transform='translateY(110%)';});
    Motion.animate(chars,{opacity:[0,1],y:['110%','0%']},{duration:.9,easing:[.22,1,.36,1],delay:Motion.stagger(0.022, {startDelay:.15})});
  } else {
    chars.forEach((c,i)=>{c.style.animation=`riseIn .8s cubic-bezier(.22,1,.36,1) ${.15+i*.022}s both`;});
    const st=document.createElement('style');
    st.textContent='@keyframes riseIn{from{opacity:0;transform:translateY(110%)}to{opacity:1;transform:none}}';
    document.head.appendChild(st);
  }
}
function scrollReveals(){
  const els=[...document.querySelectorAll('[data-motion]')];
  const groups=[...document.querySelectorAll('[data-motion-group]')];
  groups.forEach(g=>[...g.children].forEach((c,i)=>{c.setAttribute('data-motion','');c.setAttribute('data-delay',(i*0.08).toFixed(2));}));
  const all=[...document.querySelectorAll('[data-motion]')];
  if(window.Motion && Motion.inView){
    all.forEach(el=>{
      const d=parseFloat(el.dataset.delay||0);
      el.style.opacity='0';
      const stop=Motion.inView(el,()=>{
        Motion.animate(el,{opacity:[0,1],y:[26,0]},{duration:.75,easing:[.22,1,.36,1],delay:d});
        stop();
      },{amount:.25});
    });
  } else {
    const css=document.createElement('style');
    css.textContent='[data-motion]{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}[data-motion].in{opacity:1;transform:none}';
    document.head.appendChild(css);
    const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.style.transitionDelay=(x.target.dataset.delay||0)+'s';x.target.classList.add('in');io.unobserve(x.target);}}),{threshold:.18});
    all.forEach(el=>io.observe(el));
  }
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>{heroIntro();scrollReveals();});
else {heroIntro();scrollReveals();}

/* bars + counters */
const io2=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.style.width=x.target.style.getPropertyValue('--w');io2.unobserve(x.target);}}),{threshold:.4});
document.querySelectorAll('.bar i').forEach(b=>io2.observe(b));
const io3=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;const el=x.target,end=+el.dataset.count;let s=0;const t=setInterval(()=>{s+=Math.max(1,Math.round(end/40));if(s>=end){s=end;clearInterval(t);}el.textContent=s;},40);io3.unobserve(el);}),{threshold:.5});
document.querySelectorAll('.count').forEach(c=>io3.observe(c));

/* progress + top + burger + marquee */
window.addEventListener('scroll',()=>{
  const h=document.documentElement;
  $('#progress').style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';
  $('#topBtn').classList.toggle('show',scrollY>700);
},{passive:true});
$('#topBtn').onclick=()=>scrollTo({top:0,behavior:'smooth'});
$('#burger').onclick=()=>$('#nav').classList.toggle('open');
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>$('#nav').classList.remove('open'));
const mt=$('#marqueeTrack'); mt.innerHTML+=mt.innerHTML;
