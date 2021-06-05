let lazyImgs = document.querySelectorAll('img[data-src]');
function lazyLoadImgs(image){
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = function(){
        image.removeAttribute('data-src');
    }
}

lazyImgs.forEach((img) => {
    lazyLoadImgs(img);
  });