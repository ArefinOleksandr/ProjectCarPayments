
window.addEventListener('scroll', function() {
    

    isInView('img.left-image', 'animation', 'left-brands-img-anim 3s')
    isInView('img.right-image', 'animation', 'right-brands-img-anim 3s')

    isInView('.first-message-image', 'animation', 'first-message 4s')
    isInView('.second-message-image', 'animation', 'second-message 4s')
    isInView('.first-message', 'animation', 'first-message 4s');
    isInView('.second-message', 'animation', 'second-message 4s')

    isInView('.progress', 'width', '+=5%')
    isInView('.store > div', 'animation', 'store-anim 2s')
    

    isInView('.banner', 'animation', 'bg-anim 3s')
})



 function isInView(elem , atr, query)
{
    var docViewTop = $(document).scrollTop(),
        docViewBottom = docViewTop + window.innerHeight,
        elemTop = $(elem).offset().top,
        elemBottom = elemTop + $(elem).height();

    if(!atr || !query){
        return (elemBottom <= docViewBottom) && (elemTop >= docViewTop)
    }

    if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)){
        $(elem).css(atr, query);
    };
}





