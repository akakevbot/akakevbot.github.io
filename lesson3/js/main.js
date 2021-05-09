function collapseMenu(){
    console.log('worked')
    let hamburger = document.querySelector('nav .hamburger'); 
    let menu = document.querySelector('nav > ul')
    if(hamburger.classList.contains('collapsed')){
      menu.style.maxHeight = menu.scrollHeight + 'px'; 
      hamburger.classList.remove('collapsed')
    }
    else {
      menu.style.maxHeight = 0; 
      hamburger.classList.add('collapsed')
    }
  }