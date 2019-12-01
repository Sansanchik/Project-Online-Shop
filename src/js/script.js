$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data('whatever'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    // modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
});



$(".top-dropdown-icon").click(function () {

    $(".top-menu-tabs").addClass('dropdown-menu');
    $(".top-menu-item").addClass('dropdown-menu-item');

});

$(".close-dropdown").click(function () {
    $(".top-menu-tabs").removeClass('dropdown-menu');
    $(".top-menu-item").removeClass('dropdown-menu-item');

});

$(window).resize(function(){
    if($(window).width() >= 1170){
        $(".top-menu-tabs").removeClass('dropdown-menu');
        $(".top-menu-item").removeClass('dropdown-menu-item');
    }

});

$('.top-menu-item').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);

});



$('.header__box').on('click', function (event) {
    $('#cartBox').modal('show');
});



$('.price-minus').click(function () {
    var $input = $(this).parent().find('input[type=text]');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});

$('.price-plus').click(function () {
    var $input = $(this).parent().find('input[type=text]');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

//SECTION FEEDBACK


let galleryThumbs = Array.from(document.querySelectorAll('.gallery-thumb'));
let rates = Array.from(document.querySelectorAll('.starrating  label'));
galleryThumbs.forEach(thumb => {
    thumb.addEventListener('click', onGalleryThumbClick);
});
galleryThumbs.forEach(function (item, index) {
    if (item[index] > 6) {
        item.style.display = "none";
    }
});

function onGalleryThumbClick(event) {
    selectThumb(event.target);

}

function selectThumb(thumb) {
    const name = thumb.dataset.name;
    const title = thumb.dataset.title;

    const src = thumb.src;


    $(thumb).parents('.tab-contents').find('.icon').attr('src', src);
    $(thumb).parents('.tab-contents').find('.icon-name').text(`$${name}.00`);
    $(thumb).parents('.tab-contents').find('.icon-job').text(title);
    $(thumb).parents('.tab-contents').find('.icon-sale').text(`$${40 + +name}.00 `);

}

const galleryArrowRight = document.querySelector('.gallery-arrow-right');

galleryArrowRight.addEventListener('click', () => {
    const mainIcon = document.querySelector('.icon');
    const activeThumb = galleryThumbs.find(item => {
        return item.src === mainIcon.src;
    });

    let activeThumbIndex = galleryThumbs.indexOf(activeThumb);

    const nextThumb = galleryThumbs.length === activeThumbIndex + 1
        ? galleryThumbs[0]
        : galleryThumbs[activeThumbIndex + 1];

    selectThumb(nextThumb);
});

const galleryArrowLeft = document.querySelector('.gallery-arrow-left');

galleryArrowLeft.addEventListener('click', () => {
    const mainIcon = document.querySelector('.icon');
    const activeThumb = galleryThumbs.find(item => {
        return item.src === mainIcon.src;
    });

    let activeThumbIndex = galleryThumbs.indexOf(activeThumb);

    const nextThumb = activeThumbIndex === 0
        ? galleryThumbs[galleryThumbs.length - 1]
        : galleryThumbs[activeThumbIndex - 1];

    selectThumb(nextThumb);
});



var $tabButtonItem = $('#tab-button li'),
    $tabSelect = $('#tab-select'),
    $tabContents = $('.tab-contents'),
    activeClass = 'is-active';

$tabButtonItem.first().addClass(activeClass);
$tabContents.not(':first').hide();

$tabButtonItem.find('a').on('click', function (e) {
    var target = $(this).attr('href');

    $tabButtonItem.removeClass(activeClass);
    $(this).parent().addClass(activeClass);
    $(activeClass).css('backgroundColor', " #f4f5f7");
    $tabSelect.val(target);
    $tabContents.hide();
    $(target).show();
    e.preventDefault();
});

$tabSelect.on('change', function () {
    const $target = $(this).val(),
        targetSelectNum = $(this).prop('selectedIndex');

    $tabButtonItem.removeClass(activeClass);
    $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
    $tabContents.hide();
    $($target).show();
});



