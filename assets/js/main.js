(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
function num(e,min,max){var v=parseInt(e.value,10);if(isNaN(v))v=min;return Math.min(max,Math.max(min,v));}
function g(x){return x>=1000?(x/1000).toFixed(1)+' kg':Math.max(10,Math.round(x/10)*10)+' g';}
var tabs=[].slice.call(document.querySelectorAll('.bt-tab'));
tabs.forEach(function(t){t.addEventListener('click',function(){tabs.forEach(function(x){var s=x===t;x.setAttribute('aria-selected',s?'true':'false');$(x.getAttribute('aria-controls')).hidden=!s;});});});
var sp=$('sp-p');if(sp){var sd=$('sp-d'),sn=$('sp-n'),sa=$('sp-a');
 on([sp,sd,sn,sa],function(){var count=num(sp,1,20)*num(sd,1,14)*parseInt(sn.value,10),f=parseFloat(sa.value),n=count*f;
  $('sp-r').innerHTML='<h3>'+count+' snacks to cover</h3><ul class="bt-list"><li><span>Nuts and seeds</span><b>'+g(n*.25*30)+'</b></li><li><span>Whole fruit</span><b>'+Math.ceil(count*.3)+' pieces</b></li><li><span>Vegetables for sticks</span><b>'+g(n*.25*80)+'</b></li><li><span>Hummus or dip</span><b>'+g(n*.25*40)+'</b></li><li><span>Crackers or popcorn</span><b>'+g(n*.2*30)+'</b></li><li><span>Cheese</span><b>'+g(n*.2*30)+'</b></li></ul><p class="bt-note">Split across four snack types so nobody gets bored. Round up on fruit; it is the first thing to go.</p>';});}
var la=$('lb-a');if(la){var ids=['lb-m','lb-p','lb-v','lb-f','lb-x'].map($),P={child:['80 g or 1 sandwich','40 g','1 small handful','1 small piece','1 small item'],teen:['140 g or 1\u00bd sandwiches','70 g','1 large handful','1 piece','1 item'],adult:['160 g or 2 sandwiches','90 g','2 handfuls','1 piece','1 item']},L=['Main','Protein','Vegetable','Fruit','Extra'];
 on([la].concat(ids),function(){var p=P[la.value],v=ids.map(function(e){return e.value;}),h='<div class="bt-box">';
  for(var i=0;i<5;i++){if(i===4&&v[4]==='Nothing extra')continue;h+='<div><small>'+L[i]+'</small>'+v[i]+'<br><b>'+p[i]+'</b></div>';}
  h+='</div>';var notes=[];
  if(/Chicken|egg|Cheese|Yogurt|Pasta|Rice/i.test(v.join(' ')))notes.push('Pack a frozen ice pack next to the perishable food.');
  if(v[1]==='Nut butter')notes.push('Check the school or workplace nut policy first.');
  if(v[3]==='Grapes'&&la.value==='child')notes.push('Halve grapes lengthways for younger children.');
  if(v[3]==='Apple slices')notes.push('Toss apple slices in lemon juice so they stay pale.');
  if(/tomatoes|Cucumber/i.test(v[2]))notes.push('Keep the vegetables in their own lidded pot so the main stays dry.');
  if(!notes.length)notes.push('This box travels well without any special packing.');
  $('lb-r').innerHTML=h+'<ul>'+notes.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul>';});}
var pg=$('pb-g');if(pg){var ph=$('pb-h'),pm=$('pb-m');
 on([pg,ph,pm],function(){var n=num(pg,2,300),h=num(ph,1,8),m=pm.value,pp,sweet;
  if(m==='before'){pp=Math.min(8,4+Math.max(0,h-1)*2);sweet=0;}else if(m==='instead'){pp=Math.min(h,2)*6+Math.max(0,h-2)*3;pp=Math.max(8,pp);sweet=.2;}else{pp=Math.min(8,3+Math.max(0,h-1)*2);sweet=.7;}
  var tot=n*pp,kinds=n<=10?3:n<=25?5:n<=50?7:9,sw=Math.round(tot*sweet);
  $('pb-r').innerHTML='<h3>'+tot+' pieces in total</h3><ul class="bt-list"><li><span>Pieces per guest</span><b>'+pp+'</b></li><li><span>Different kinds to make</span><b>'+kinds+'</b></li><li><span>Pieces of each kind</span><b>about '+Math.ceil(tot/kinds)+'</b></li><li><span>Savoury pieces</span><b>'+(tot-sw)+'</b></li><li><span>Sweet pieces</span><b>'+sw+'</b></li></ul><p class="bt-note">Make at least half of the kinds ones that can be served cold, so the oven is not in use all evening. Keep chilled bites in the fridge and bring them out in two rounds.</p>';});}
})();
