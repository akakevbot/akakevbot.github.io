
function assignAddChap(){
	function addChapter(){
		let list = document.querySelector('.list'); 
		let input = document.querySelector('#favchap');
		let item = document.createElement('li'); 
		let button = document.createElement('button'); 
		
			//populate the li elements  with the input
		item.innerText = input.value; 
		
		//set button text
		button.innerText = '❌'; 
		
		//assign click listener to button that deletes parent
		button.addEventListener('click', x => {button.parentElement.remove()});
		
		//append the li element with the delete button
		item.appendChild(button); 
		
		//append the list element with the li element just created and appended with text and the delete button
		list.appendChild(item); 
		
		//set input to empty 
		input.value = ''; 
	
		//send the focus to the input element
		input.focus(); 

	}
	
	document.querySelector('button').addEventListener('click',addChapter)
}

function init(){
    assignAddChap();
}

//wait for content to load before initializing page.
window.addEventListener('DOMContentLoaded', init);