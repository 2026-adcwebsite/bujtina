function toggleMob(){
  document.getElementById('ham').classList.toggle('open');
  document.getElementById('mobMenu').classList.toggle('open');
  document.body.style.overflow=document.getElementById('mobMenu').classList.contains('open')?'hidden':'';
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    const id=this.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){e.preventDefault();window.scrollTo({top:el.getBoundingClientRect().top+scrollY-72,behavior:'smooth'});}
  });
});
const io=new IntersectionObserver(ens=>ens.forEach(en=>{if(en.isIntersecting)en.target.classList.add('visible');}),{threshold:.1});
document.querySelectorAll('.fade-up').forEach(el=>io.observe(el));
