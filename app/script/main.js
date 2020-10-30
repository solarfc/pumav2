let myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log(`width ${myWidth} \n height ${myHeight}`);

document.querySelector('html').style.overflowY = 'hidden';

// if(myWidth > 2200) {
//     document.querySelector('.video').style.zIndex = '10';
//     document.querySelector('.gallery').style.zIndex = '10';
// }

window.onload = function () {

    setTimeout(() => {
        document.querySelector('html').style.overflowY = 'scroll';
        document.querySelector('.loader').style.opacity = '0';
        document.querySelector('.loader').style.zIndex = '-5';
    }, 1500);
    /*
        increase date
     */

    let today = new Date(),
        tomorrow = new Date(),
        day,
        month,
        year,
        i = 3,
        period = document.querySelectorAll('h6 output');

    tomorrow.setDate(today.getDate() + i);

    day = (tomorrow.getDate() > 9) ? tomorrow.getDate() : `0${tomorrow.getDate()}`;
    month = (tomorrow.getMonth() + 1 > 9) ? tomorrow.getMonth() + 1 : `0${tomorrow.getMonth() + 1}`;
    year = tomorrow.getFullYear();

    for(let i = 0; i < period.length; i++) {
        period[i].innerHTML = `${day}.${month}.${year.toString().slice(2)}`
    }

    let catalogYear = document.querySelectorAll('.catalog__block ul li p output');

    console.log(catalogYear);
    for(let i = 0; i < catalogYear.length; i++) {
        catalogYear[i].innerHTML = `${year}-${year + 1}`;
    }

    /*
        loop fancybox
     */

    $.fancybox.defaults.loop = true;

    /*
        form styler
     */

    $(function () {
        $('select').styler({
            selectSmartPositioning: false
        });
    });

    /*
        review slider
     */

    $('.review__content-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        rows: 0,
        arrows: true,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow')
    });

    const toggleBucket = () => {
        let bucket = document.querySelector('a.bucket'),
            topOfWindow = window.pageYOffset + innerHeight,
            catalogBlockTopPosition = document.querySelector('.catalog').offsetTop,
            photoBlockTopPosition = document.querySelector('.photo').offsetTop,
            footerLinkTopPosition = $('.footer__content a.to-order').offset().top;

        if(topOfWindow > catalogBlockTopPosition && topOfWindow < photoBlockTopPosition || topOfWindow > footerLinkTopPosition) {
            bucket.style.opacity = '0';
            bucket.style.zIndex = '-5';
        } else {
            bucket.style.opacity = '1';
            bucket.style.zIndex = '99999';
        }
    };

    if(/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)) {
        let href = $('#mobile-order').offset().top - innerHeight;
        $('a.to-order, a.bucket').on('click', function () {
            $('html, body').animate({scrollTop: href}, 800);
        });
        window.addEventListener('scroll', () => {
            toggleBucket();
        });
        window.addEventListener('resize', () => {
            toggleBucket();
        });
    } else {
        let href = $('#catalog').offset().top;
        $('a.to-order, a.bucket').on('click', function () {
            $('html, body').animate({scrollTop: href}, 800);
        });
    }
};
