$(function(){
    console.log('$ is working fine....');

    $("#lightgallery").lightGallery();

    $('#launch-gallery').on('click', function(){
        $('#first-image').trigger('click');
    })
});