const stage=document.getElementById('stage');
// background moves with scroll
function onScroll(){
  const m=document.documentElement.scrollHeight-innerHeight||1,p=scrollY/m;
  stage.style.transform=`translate(-50%,${-p*22}vh) scale(${1+p*.12})`;
}
addEventListener('scroll',onScroll,{passive:true});onScroll();
// floating ash particles
const cv=document.getElementById('fx'),cx=cv.getContext('2d');let W,H,ps=[];
function rs(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight}rs();addEventListener('resize',rs);
for(let i=0;i<70;i++)ps.push({x:Math.random(),y:Math.random(),r:Math.random()*2+.4,v:Math.random()*.0007+.0002,o:Math.random()});
(function loop(){cx.clearRect(0,0,W,H);ps.forEach(p=>{p.y-=p.v;p.x+=Math.sin(p.y*20+p.o*6)*.0004;if(p.y<0){p.y=1;p.x=Math.random()}
  cx.globalAlpha=.25+.5*Math.abs(Math.sin(p.y*9+p.o*9));cx.fillStyle='#fff';cx.beginPath();cx.arc(p.x*W,p.y*H,p.r,0,7);cx.fill()});requestAnimationFrame(loop)})();
// reveal cards on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.2});
document.querySelectorAll('.card').forEach(c=>io.observe(c));
// title glitch on hover
const g=document.getElementById('glitch'),orig=g.textContent,ch='▓▒░#@%&*';
g.addEventListener('mouseenter',()=>{let n=0;const t=setInterval(()=>{g.textContent=[...orig].map((c,i)=>i<n||c===' '?c:ch[Math.random()*ch.length|0]).join('');if(++n>orig.length)clearInterval(t)},50)});
