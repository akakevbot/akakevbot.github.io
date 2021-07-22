function addHamburgerFunction(){
    //Responsible for the mobile hamburger functionality
    //Called from inline html onclick
    function collapseMenu(){
      //Adjusts maxHeight as animation will not work with standard height
      //This refers to the hamburger element where this is called from. See addHamburgerFunction()
  
      //Get the menu object
      let menu = document.querySelector('nav > ul')
  
      //If the hamburger element contains the collapsed class (only assigned in this function)
      if(this.classList.contains('collapsed')){
        //Set the maxHeight of the menu to the height of it's contents
        menu.style.maxWidth = menu.scrollWidth + 'px'; 
        
  
        //Remove the collapsed class from hamburger
        this.classList.remove('collapsed')
      }
      else {
        //Set menu maxHeight to 0
        menu.style.maxWidth = 0; 
  
        //Add collapsed class to hamburger
        this.classList.add('collapsed')
      }
    }
  
    //add functionality
    document.querySelector('.hamburger').addEventListener('click', collapseMenu)
  }

  function loadGoogleMaps(){
    if('IntersectionObserver' in window && document.querySelector('iframe.googleMap')) {
      let observer = new IntersectionObserver(function(iframeEl, observer){
          if(iframeEl[0].isIntersecting && document.querySelector('iframe.googleMap').getAttribute('src')==''){
            document.querySelector('iframe.googleMap').setAttribute('src', "https://maps.google.com/maps?q=puyallup&t=&z=13&ie=UTF8&iwloc=&output=embed")
          }
        })
      observer.observe(document.querySelector('iframe.googleMap'));
  
    } else {
      document.querySelector('iframe.googleMap').setAttribute('src', "https://maps.google.com/maps?q=puyallup&t=&z=13&ie=UTF8&iwloc=&output=embed")
    }
  }

  function init(){
    addHamburgerFunction()
    loadGoogleMaps()
  }

  window.addEventListener('DOMContentLoaded', init)