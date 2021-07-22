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

  function init(){
    addHamburgerFunction()
  }

  window.addEventListener('DOMContentLoaded', init)