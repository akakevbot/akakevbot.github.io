let lazyImgs = document.querySelectorAll('img[data-src]');
function lazyLoadImgs(image){
    image.setAttribute('src', image.getAttribute('data-src'));
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