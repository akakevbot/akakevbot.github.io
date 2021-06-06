let lazyImgs = document.querySelectorAll('source[data-src]');
function lazyLoadImgs(image){
    image.setAttribute('srcset', image.getAttribute('data-src'));
    image.onload = function(){
        image.removeAttribute('data-src');
    }
}

if('IntersectionObserver' in window) {
    let observer = new IntersectionObserver(function(items, observer){
        items.forEach(function(item){
            if(item.isIntersecting){
                lazyLoadImgs(item.target); 
                observer.unobserve(item.target)
            }
        })
    })
    lazyImgs.forEach((img) => {
        observer.observe(img);
    });
} else {
    lazyImgs.forEach((img) => {
        lazyLoadImgs(img);
    });
}

function getUnixDays(){
    return Math.round(new Date().getTime() / (1000*60*60*24))
}

//insert days since last gallery visit
if (localStorage.getItem('last_gallery_visit')){
    document.querySelector('.banner .days-since').innerText =  getUnixDays()- localStorage.getItem('last_gallery_visit') 
}

localStorage.setItem('last_gallery_visit', getUnixDays())
