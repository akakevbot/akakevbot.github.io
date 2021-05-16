function numToDay(num){
  return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][num]
}

function numToMonth(num){
  return ['January','February','March','April','May','June','July','August','September','November','December'][num]
}

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

  function update5Day(){
    let days = document.querySelectorAll('.five-day li'); 
    days.forEach(x => {x.firstElementChild.innerText = numToDay(x.getAttribute('data-day'))})
  }

  function addDropDowns(){ 
    function collapsePrevious(){
      let previous = this.previousElementSibling
      console.log(previous)
      if (previous.style.maxHeight != previous.scrollHeight + 'px' || previous.style.maxHeight == ''){
        previous.style.maxHeight = previous.scrollHeight + 'px';
        this.querySelector('.drop').classList.add('rotate');
      }
      else { 
        previous.style.maxHeight = '0px';
        this.querySelector('.drop').classList.remove('rotate');
      }
    }
    let drops = document.querySelectorAll('.collapseButton .drop');      
    drops.forEach(x => x.parentElement.addEventListener('click', collapsePrevious))
  }
  
  function updateDate(){
    let date = new Date(); 
    document.querySelector('.date').innerText = `${numToDay(date.getDay())}, ${date.getDate()} ${numToMonth(date.getMonth())} ${date.getFullYear()}`
  }

  function init(){
    update5Day(); 
    addDropDowns();
    updateDate();
  }
  window.addEventListener('DOMContentLoaded', init);