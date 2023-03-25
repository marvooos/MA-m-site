let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.next-btn').addEventListener('click', function() {
    offset = offset  + 1608;

    if (offset > 4824) {
        offset = 0;
    }

    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.prev-btn').addEventListener('click', function() {
    offset = offset - 1608;

    if (offset < 1608) {
        offset = 4824;
    }

    sliderLine.style.left = -offset + 'px';
});










    const sliderLineTwo = document.querySelector('.sliderTwo-line');



    document.querySelector('.nextTwo-btn').addEventListener('click', function() {
        offset = offset + 1137;

        if (offset > 4548) {
            offset = 0;
        }

        sliderLineTwo.style.left = -offset + 'px';
    });
    
    document.querySelector('.prevTwo-btn').addEventListener('click', function() {
        offset = offset - 1137;

        if (offset < 1137) {
            offset = 4548;
        }

        sliderLineTwo.style.left = -offset + 'px';
    });

