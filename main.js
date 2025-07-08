// java script of main page

// up btn

let up_btn = document.getElementById('up');

up_btn.onclick = function() {
    window.scrollTo({
        top:0,
        behavior : "smooth"
    });

};


// change menu icon to close icon

let menu = document.getElementById('menu');
let close = document.getElementById('close');

menu.onclick = () => {
        menu.style.display = 'none';
        close.style.display = 'block';
        
        
}

close.onclick = () => {
    close.style.display = 'none';
    menu.style.display = 'block';
    
}








