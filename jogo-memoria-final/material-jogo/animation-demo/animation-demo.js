var e1;
var e2;
var count = 0;
var fv;
var pontos=0;

iniciar(){
    img[]=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16;
}

function vira(){
    if(e1.style.backgroundImage!=e2.style.backgroundImage){
    e1.style.backgroundImage = "";
    e2.style.backgroundImage = "";
    count = 0;
    clearTimeout(fv);
    }else{
        pontos=pontos+1;
        e1.onclick = "";
        e2.onclick = "";
    }
}

function clique(elem){
    var bg = elem.style.backgroundImage;
    if(bg == "none" || bg == ""){
        if(count==0) e1 = elem;
        else e2 = elem;
        count++;
        var fig = "url(img/" + img[count] + ".jpg)";
        elem.style.backgroundImage=fig;

        if(count==2)
            fv = setTimeout(vira, 3000);
    }
}