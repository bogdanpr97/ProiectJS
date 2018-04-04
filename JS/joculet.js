     var playArea = document.createElement('div');
     var nrClienti = 0;    
     var nrCarti = 9;
     var clienti = [];
     var carti = [];
     var xpoz = [210,360,530];
     var cord;
     var pos=500;
     var posdir=-1;
     var culori=["black","red","green","blue"];
     var NRIMAG=20;
     var W_IMAG=40;
     var H_IMAG=40; 
     var x;
     var y;    
     var regexp = /[0-9]/g;
     var misc=0;
     var cont=0;
     var timp=1;
     var button1 = document.getElementById('button1');
     var button2 = document.getElementById('button2');
     var button3 = document.getElementById('button3');
     var form = document.getElementById('addForm');
     var itemList = document.getElementById('items');
     var el_audio=document.createElement("audio");
     el_audio.setAttribute("src","money.mp3");
     localStorage.setItem("Creator", "Bogdan");
     form.addEventListener('submit', addItem);
     itemList.addEventListener('click', removeItem);
     var scor=0;
     var vieti=3;
     var d = new Date();
     var n = d.getDate();
    document.write('data este:'+n);
    var txt = " \n Bine Ati Venit!";
    var sln = txt.length;
     document.write('\n');
    document.write(txt+' are '+sln+' caractere');
    function Range() {
    var x = document.getElementById("myRange").value;
    console.log(x.value);
     button1.style.width=2*x+'px';
     button1.style.height=2*x+'px';
      button2.style.width=2*x+'px';
      button2.style.height=2*x+'px';
}
      var  chb=document.getElementById("check");
  chb.onchange=function(e){
    if(e.currentTarget.checked){
      button1.style.borderRadius="50%";
      button2.style.borderRadius="50%";
    }
    else{
      button1.style.borderRadius="10%";
      button2.style.borderRadius="10%";
    }
      
  }
    var selec=document.getElementById("back");
  selec.onchange=function() 
  {
    
    var optiuni=this.options;
    for(var i=0;i<optiuni.length;i++)
    {
      if(optiuni[i].selected)
      {
        document.body.style.backgroundColor=optiuni[i].value;
      }
    }
  }
  var select=document.getElementById("mySelect");
  select.onchange=function() 
  {
    
    var optiuni=this.options;
    for(var i=0;i<optiuni.length;i++)
    {
      if(optiuni[i].selected)
      {
        
       posdir=-optiuni[i].value;
       
      }
    }
  }
     function addItem(e){
  e.preventDefault();

  
  var newItem = document.getElementById('item').value;
   if(regexp.test(newItem) != true)
      {
        alert('Te rog sa adaugi numere');
      }
  
  var li = document.createElement('li');
 
  li.appendChild(document.createTextNode(newItem));

  
  var deleteBtn = document.createElement('button');
   deleteBtn.className = 'delete';
  deleteBtn.appendChild(document.createTextNode('X'));

 
  li.appendChild(deleteBtn);

  
  itemList.appendChild(li);
 
}


function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Vrei sa stergi recordul?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

     button1.addEventListener('click', stanga);
     button2.addEventListener('click', dreapta);
    button3.addEventListener('click', schimba1);
    function schimba1(){
      
        var node = document.getElementById("items").lastChild;
    var list = document.getElementById("myList2");
    list.insertBefore(node,list.childNodes[0]);

    }
     function stanga(){
      
      var d = document.getElementById(0);
      var t = d.innerHTML;
      var b = getComputedStyle(d).getPropertyValue("background-color");
    
      for(var i=0;i<nrCarti;i++){
        var el =  document.getElementById(i);
        if(i==nrCarti-1){

          el.innerHTML=t;
          el.style.backgroundColor=b;
        }
        else{
        el.style.backgroundColor=document.getElementById(i+1).style.backgroundColor;
         el.innerHTML=document.getElementById(i+1).innerHTML;
       }      
     }
   }
   function dreapta(){
    var d= document.getElementById(nrCarti-1);
    var t = d.innerHTML;
     var b = getComputedStyle(d).getPropertyValue("background-color");
    for(var i=nrCarti-1;i>=0;i--){
      var el =  document.getElementById(i);
      if(i==0){
        el.innerHTML=t;
        el.style.backgroundColor=b;
      }
      else{
         el.style.backgroundColor=document.getElementById(i-1).style.backgroundColor;
       el.innerHTML=document.getElementById(i-1).innerHTML;
     }      
   }
 }
 function int_rand(a,b){
      return Math.floor(Math.random()*(b-a)+a);//generez un numar intreg random in intervalul [a,b)
    }
    function Carte(numar,culoare)
    {
      this.nr=numar;
      this.culoare=culoare;
    }
    function Client(x,y,posdir,culoare){
      this.dir=posdir;
      this.poz=y;
      this.x=x;
      this.y=y;
      this.culoare=culoare;
    }
    window.onload=function(){
    
     var txt = document.createElement("TEXTAREA");
     txt.id='txta';
     txt.innerHTML="salut eu sunt un Textarea";
      txt.style.position="absolute";
      txt.style.top=window.innerHeight-100+'px';
      txt.style.left=300+'px';
       document.body.appendChild(txt);
      document.body.appendChild(playArea);
      var sc = document.getElementById('sc');


      playArea.className= 'playArea';
      playArea.id= 'playA';

      var e_ol=document.createElement("ul");
      e_ol.classList.add('lista');
      e_ol.id= 'items';
      
      e_ol.addEventListener('click', verCul);

      var container=document.getElementById("playA");
      var stil_container=getComputedStyle(container);//obtin stilul calculat din CSS

      e_ol.style.position="absolute";
      e_ol.style.top=0;
      e_ol.style.left=parseInt(stil_container.width)/20+ "px";

        //e_ol.style.top=Math.floor(Math.random()*(parseInt(stil_container.height)-H_IMAG))+"px";
        //e_ol.style.left=Math.floor(Math.random()*(parseInt(stil_container.width)-W_IMAG))+"px";

        for(var i=0; i<nrCarti;i++)
        {
         var e_li=document.createElement("li");
         e_li.innerHTML=i;
         var j =int_rand(0,4);
         e_li.id=i;
        
         e_li.style.backgroundColor=culori[j];
         e_li.classList.add('elemLista');
         if(e_li.id%2===0 &&e_li.id!=0 && e_li.id!=8)
         {
          e_li.style.width=40+'px';
          e_li.style.height=120+'px';
          e_li.style.border="thick solid white";
         }
         carti.push(new Carte(i,culori[j]));
         e_ol.appendChild(e_li);
       } 
       playArea.appendChild(e_ol);

   
      //bringClient(225,400);
      //bringClient(375,400);
       //bringClient(525,400);
    
      
    
    }
    function Start(){
      AduClienti();
      gameLoop();
      Calltimp();


    }
    function AduClienti(){
      setInterval(function(){
          var j =int_rand(0,3);
          bringClient(xpoz[j],500);
      },5000);
    }
    function Calltimp()
    {
      
      setInterval(function(){  var t=document.getElementById('timp');t.innerHTML='Cat timp ai jucat:'+ timp;timp=timp+1; }, 1000);
    }
    function bringClient(x,y){
       var cl=document.createElement('div');
       clienti.push(new Client(x,y,posdir,'black'));
       nrClienti++;
       playArea.appendChild(cl);
       cl.classList.add('client');
       var j =int_rand(0,4);
       cl.style.backgroundColor=culori[j];
       cl.id='cl'+cont;
       cont++;
       cl.style.left=x+'px';
       cl.style.top=y+'px';
       
      
    }
     function miscaClienti() {
       for(var i=0 ; i<nrClienti;i++)
       {
        //console.log(clienti[i].value.style.top);
        var cl=document.getElementById('cl'+i);
         
        var cl1=getComputedStyle(document.getElementById('cl'+i));
        var play=document.getElementById('playA');
        var sem=0;
        for(var j=0;j<nrCarti;j++)
        {
          var sem2=0;
           //var cl=document.getElementById('cl'+i);
            var car=document.getElementById(j);
            var car2=getComputedStyle(document.getElementById(j));
            
            var coliziune=Coliziune(parseInt(cl.style.top),parseInt(cl.style.left),parseInt(cl1.height),parseInt(cl1.width),
                   parseInt(play.style.top),parseInt(car.offsetLeft),play.style.top+parseInt(car2.height),parseInt(car.style.width));
            
            
            if(parseInt(cl.style.top)<play.style.top+parseInt(car2.height) && 
              parseInt(cl.style.left)<parseInt(car.offsetLeft)+parseInt(car.style.width) &&
              parseInt(cl1.width)+parseInt(cl.style.left)>parseInt(car.offsetLeft)){
                        
                         
                       
              clienti[i].dir=1;
              sem2=1;
              //console.log(cl.style.backgroundColor);
              //console.log(car.style.backgroundColor);
            }
            
            if(cl.style.backgroundColor===car.style.backgroundColor && sem==0 && sem2==1){
              el_audio.play(); 
              sem=1;
              if(cl.style.backgroundColor!='black'){
              car.style.backgroundColor='black';
              cl.style.backgroundColor='black';
            }
            else{
              var k =int_rand(0,4);
              cl.style.backgroundColor=culori[k];
              car.style.backgroundColor=culori[k];
            }
              scor++;
            
            }/*
            else if(cl.style.backgroundColor!=car.style.backgroundColor && sem==0 && sem2==1){
              //console.log(cl.style.backgroundColor);
              console.log(car.style.backgroundColor);
              vieti--;
              sem=1;
              alert('hopa, ai fost lovit');
            }*/
           
        }   
            //if(parseInt(cl.style.top)>600){

            //  cl.posdir=-1;
            //}
            clienti[i].poz=clienti[i].poz+clienti[i].dir;
           
            //pos=pos+posdir;
            cl.style.top=clienti[i].poz+'px';
       
     }
           
      }

    function verCul(e){
  if(e.target.classList.contains('elemLista')){
    if(confirm('Vrei sa schimbi culoarea?')){
       var li = e.target;
       var j =int_rand(0,4);
        
       li.style.backgroundColor=culori[j];
       

      //e.target.parentElement.removeChild(li);
    }
  }
}
    function gameLoop(){
     miscaClienti();
     cord = setTimeout(gameLoop, 1000/100);
     var sc=document.getElementById("scor");
     var vt=document.getElementById("vieti");
     sc.innerHTML="Scorul tau este:"+scor;
     vt.innerHTML="Mai ai:"+vieti+" vieti";
   }
   window.onkeydown=function(e){
  var cod_tasta=e.keyCode;
    if(cod_tasta===80)
      {alert("Ai pus pauza");}
  }
window.onclick=function(e){
    var p=document.getElementById('coord');
    p.innerHTML="Mouse-ul tau e la:"+e.pageX+","+e.pageY;
    p.style.position="absolute";       
  }
  function Coliziune(top1,left1,h1,w1,top2,left2,h2,w2){
  if(left1< left2+ w2 &&
  left1+ w1> left2 &&
  top1 < top2 + h2 &&
  top1 + h1 > top2) {
    return true;
  }
}
function schimba(){
  var buton=document.getElementsByName("forma");
  for(var i=0;i<buton.length;i++)
  {
    console.log(buton[i].value);
    if (buton[i].checked){
      var txt=document.getElementById("txta");
      
       txt.innerHTML=buton[i].value;
      
      break;
    }
  }
}


