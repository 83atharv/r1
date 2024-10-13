const namej=document.getElementById("name");
            const cnj=document.getElementById("cn");
            const fbj=document.getElementById("fb");
            
            const sbutj=document.querySelector(".sbut");
            const inj=document.querySelector(".in");
    
            sbutj.addEventListener("click",savedetails);
    
            function savedetails()
            {
                event.preventDefault();
    
                const remobut=document.createElement("button");    //remove button
                remobut.innerHTML="Remove";
                remobut.className="remobutc";
                remobut.addEventListener("click",removedetails);   //remove button working
                
                const here=document.createElement("div");          //create div
                here.className="herec";
    
                const hered=document.createElement("div");             //create div in first div
                hered.className="heredc";
                hered.innerHTML=("<b>"+namej.value+"</b> ("+cnj.value+") :    <br>"+fbj.value+"<br><hr>");
    
                inj.appendChild(here);
                here.appendChild(hered);
                here.appendChild(remobut);
            }
            function removedetails()
            {
                this.parentElement.remove();
            }