console.log('working');

let theme = localStorage.getItem("theme");

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme);
}

let themedots = document.getElementsByClassName('theme-dot');

for( var i=0; themedots.length>i; i++){
    themedots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log(mode);
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css';
    }else{
        document.getElementById('theme-style').href = mode+'.css';
    }

    localStorage.setItem('theme', mode);
}