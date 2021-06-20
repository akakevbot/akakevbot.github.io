//load google font first
WebFont.load({
  google: {
    families: [
       'Bebas Neue',
       'Poppins'
    ]
  }
});



//returns name of day from number from new Date()
function numToDay(num){
  return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][num]
}

//returns name of month from number from new Date()
function numToMonth(num){
  return ['January','February','March','April','May','June','July','August','September','November','December'][num]
}


//Function to update the days in the 5 day forcast
function update5Day(){
  //Get days in 5 day forcast
  let days = document.querySelectorAll('.five-day li'); 

  //Update the date to reflect the following 5 weekdays
  days.forEach(x => {x.firstElementChild.innerText = numToDay(x.getAttribute('data-day'))})
}

//Function to add drop down functionality to dropdown elements and their previous sibling.
//Dropdowns placed in html will automatically assume this functionality for the previous sibling. 
function addDropDowns(){ 
  //Fuction to collapse the previous element
  function collapsePrevious(){
    //Get the previous element of the element clicked on
    let previous = this.previousElementSibling

    //Check if the previous elements maxHeight is the same as its' contents
    if (previous.style.maxHeight != previous.scrollHeight + 'px' || previous.style.maxHeight == ''){
      //Set maxHeight of previous element to height of contents
      previous.style.maxHeight = previous.scrollHeight + 'px';

      //rotate the dropdown arrow
      this.querySelector('.drop').classList.add('rotate');
    }
    else { 
      //Set height of previous element to 0
      previous.style.maxHeight = '0px';

      //remove rotaion from dropdown arrow
      this.querySelector('.drop').classList.remove('rotate');
    }
  }
  
  //Get a list of all dropdowns
  let drops = document.querySelectorAll('.collapseButton .drop');  
  
  //Assign functionality
  drops.forEach(x => x.parentElement.addEventListener('click', collapsePrevious))
}

//function to update te date for the footer. 
function updateDate(){
  let date = new Date(); 
  document.querySelector('.date').innerText = `${numToDay(date.getDay())}, ${date.getDate()} ${numToMonth(date.getMonth())} ${date.getFullYear()}`
}

//checks if banner should be displayed
function FridayBanner(){
  //checks if day is friday using numToDay for readability
  if (numToDay(new Date().getDay()) == 'Friday'){
    //assigns expected display
    document.querySelector('.banner').style.display = 'flex'
  }
}

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
      menu.style.maxHeight = menu.scrollHeight + 'px'; 

      //Remove the collapsed class from hamburger
      this.classList.remove('collapsed')
    }
    else {
      //Set menu maxHeight to 0
      menu.style.maxHeight = 0; 

      //Add collapsed class to hamburger
      this.classList.add('collapsed')
    }
  }

  //add functionality
  document.querySelector('.hamburger').addEventListener('click', collapseMenu)
}

function addWindChill(){
  function windchill(temp, speed){
    return Math.round(35.74 + (0.6215 * temp) - (35.75* Math.pow(speed,0.16)) + (0.4275* temp * Math.pow(speed,0.16)))
  }
  if (document.querySelector('.description .windchill')){
    document.querySelector('.description .windchill').innerText = `${windchill(document.querySelector('.description .temp').innerText,document.querySelector('.description .windspeed').innerText)}`
  } 
  
}
//windchill

function loadGoogleMaps(){
  if('IntersectionObserver' in window) {
    let observer = new IntersectionObserver(function(iframeEl, observer){
        if(iframeEl[0].isIntersecting && document.querySelector('footer iframe').getAttribute('src')==''){
          document.querySelector('footer iframe').setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47365.773853438026!2d-111.91534443111685!3d42.09974162639047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8754f78c7cda6c31%3A0xf1b3b4fc465a4a3f!2sPreston%2C%20ID%2083263!5e0!3m2!1sen!2sus!4v1621917355936!5m2!1sen!2sus")
        }
      })
    observer.observe(document.querySelector('footer iframe'));

  } else {
    document.querySelector('footer iframe').setAttribute('src', "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47365.773853438026!2d-111.91534443111685!3d42.09974162639047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8754f78c7cda6c31%3A0xf1b3b4fc465a4a3f!2sPreston%2C%20ID%2083263!5e0!3m2!1sen!2sus!4v1621917355936!5m2!1sen!2sus")
  }
}

function addHomeOptions(){
  fetch("https://byui-cit230.github.io/weather/data/towndata.json")
  .then(function (response) {
    console.log(response.json());
  })
}


//function to initialize the page and assign functionality
function init(){
  FridayBanner();
  addWindChill()
  update5Day(); 
  addDropDowns();
  updateDate();
  addHamburgerFunction();
  loadGoogleMaps();
  addHomeOptions();
}

//wait for content to load before initializing page.
window.addEventListener('DOMContentLoaded', init);