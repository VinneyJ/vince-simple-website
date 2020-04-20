//First, we define a function that can take two parameters called id and targetId :
function loadImage(id, targetId) {
    var el = document.getElementById(id); //We then fetch the HTML element by using the value of id :

    var targetEl = targetId ? document.getElementById(targetId) : el; //We similarly fetch a target element to add a class to, but only if a targetId is provided. Otherwise, we revert to the element above:
    var imageToLoad;// We instantiate the imageToLoad variable:

    //There are 3 (mutually exclusive) cases to set the value of imageToLoad :
    //if data-image is provided, we use that value
    //if the browser doesn't support srcset and currentSrc , we use the src value of the <img>
    //otherwise we can simply use currentSrc
    if (el.dataset.image) {
        imageToLoad = el.dataset.image;
    } else if (typeof el.currentSrc === 'undefined') {
        imageToLoad = el.src;
    }else {
        imageToLoad = el.currentSrc;
    }


    if (imageToLoad) { //We check if imageToLoad holds a value:

        var img = new Image(); //We then create a new image from which the src is the value of the imageToLoad :
        img.src = imageToLoad; 
        img.onload = function() { //Finally, when the image is completely loaded by the browser, we add the CSS class is-loaded to the target element:
            targetEl.classList.add('is-loaded');
        }
    }
}

document.addEventListener ('DOMContentLoaded', function() {
    loadImage('wallpaper');
    loadImage('pictureImage', 'picture');
});

document.addEventListener ('DOMContentLoaded', function() {
    loadImage('wallpaper');
    loadImage('pictureImage', 'picture');
});