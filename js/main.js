let menu =document.querySelector('#menu');
menu.addEventListener('click',function(){
    let x =document.querySelector('#myTopnav');
    if(x.className ==='topnav'){
        x.className += ' responsive';
    }
    else{
        x.className ='topnav'
    }
})
