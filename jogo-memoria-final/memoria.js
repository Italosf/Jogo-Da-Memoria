var e1;
var e2;
var count = 0;
var fv;
var pontos=0;
var img = new Array();

function sortear(){
    for(i=0; i<=36; i++){
        if(i<=18){
            img["casa"+i]=i;
        }else{
            img["casa"+i]=i-18;   
        }
    }
}

sortear();

function vira(){
    if(e1.style.backgroundImage!=e2.style.backgroundImage){
        e1.style.backgroundImage = "";
        e2.style.backgroundImage = "";
        count = 0;
        clearTimeout(fv);
    }else{
        pontos=pontos+1;
        placar(pontos);
        e1.onclick = "";
        e2.onclick = "";
        count = 0;
    }
}

function clique(casa){
    elem = document.getElementById(casa);
    var bg = elem.style.backgroundImage;
    if(bg == "none" || bg == ""){
        if(count==0){
            e1 = elem;
        }else{ 
            e2 = elem;
        }
        count++;
        var fig = "url(img/" + img[casa] + ".jpg)";
        elem.style.backgroundImage=fig;
        if(count==2)
            fv = setTimeout(vira, 1000);
    }
}

function placar(pontos){
    elem = document.getElementById('pontos');
    elem.innerHTML = pontos;
}

