let text=confirm("Menblan sonni topish uyinini uynashni xoxlayszmi");
let k=0;
if(text==1)
{

    let a=Math.round(Math.random()*100%3);

    
     do {
           k++;

           if(k==1)
         {
            b=prompt("Sonni kriting");
        
         }
            else 
         { 
            b=prompt("Qaytadan sonni kriting")
         }
           
        
        }
           while(b<a || b>a ) 
        
        if(b==a) 
        {
            alert(`siz ${k} urinishda  toptingz`);
            
        }

        if(b=="Tamom")
        {
             alert("Shuncha bzblan bulganingiz uchiun Rahmat");
        }
}