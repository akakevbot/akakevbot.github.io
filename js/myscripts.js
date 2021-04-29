//Gets the current year
    function getYear(){
    let footer = document.querySelector('footer')
    footer.innerHTML = footer.innerHTML.replace('2020', new Date().getFullYear())
}

//Gets the time the document was last modified
function getLastUpdate(){
    let footer = document.querySelector('footer')
    footer.innerHTML = footer.innerHTML.replace('1970-01-01', document.lastModified)
}

function init(){
    getYear();
    getLastUpdate();
}

document.addEventListener('DOMContentLoaded', init); 
