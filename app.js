
//Button with an alert message
// $('#btnSubmit').click(function (){
//    var $iMessage = $('#inputmessage').val();

// })


$('#btnSubmit').click(function () {
    var iMessage = $('#inputmessage').val();



    // //place input into alert
    // alert($iMessage);

    // // Create a div and h2 element and append it to the body.
    $('<div><h2>' + iMessage + '</h2></div>').appendTo('body');

    // //place input into list
    // $('ul').append('<li>' + iMessage + '</li>');
    // $('#newList').appendto('<li>' + $iMessage + '</li>');

    // To Disable Submit Button By Default
    $('#btnSubmit').attr('disabled', 'disabled');

    // When User Fills Out Form Completely
    $("form").keyup(function () {
        $('#btnSubmit').removeAttr('disabled');
    });

    //add mouseover to change color
    // $('div').mouseover(function () {
    //     var styles = {
    //         backgroundColor: 'pink',
    //         border: '1px solid blue',
    //     };
    //     $(this).css(styles);
    // });

    // $('#newList').on('click', 'li', function () {
    //     $(this).css({ 'color': randomColor() });
    // });

    // //created function to randomly generate color.
    // function randomColor() {
    //     let r = Math.floor(Math.random() * 256);
    //     let g = Math.floor(Math.random() * 256);
    //     let b = Math.floor(Math.random() * 256);
    //     let color = `rgb(${r},${g},${b})`;
    //     return color;
    // // }

    // //remove item.
    // $('#newList').on('dblclick', 'li', function () {
    //     $(this).remove();
    // });
});


