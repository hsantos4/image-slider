const navBarToggler = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.collapse');
const carouselItem = document.querySelectorAll('.carousel-item')
const nextIcon = document.querySelector('.carousel-control-next');
const prevIcon = document.querySelector('.carousel-control-prev')
let currentSlide = [];



navBarToggler.addEventListener('click', openCloseMenu)
nextIcon.addEventListener('click', slideImageNext)
prevIcon.addEventListener('click', slideImagePrev)


// opens and closes the mobile menu
function openCloseMenu() {
    // Checks to see if the html element has a class named collapse, if true....
    if(collapse.classList.contains('collapse')) {
        // remove the class name collapse
       collapse.classList.remove('collapse');
    //    checks to see if the html element doesnt have a class named collapse, it true
    } else if (!collapse.classList.contains('collapse')) {
        // Adds the class back to the html element
        collapse.classList.add('collapse')
    }
}

function slideImageNext() {
  console.log(carouselItem.length - 1)
    for (let i = 0; i < carouselItem.length -1; i++) {
        if(i == 0) {
            carouselItem[0].classList.remove('active')
        } else if(i == 1){
            carouselItem[1].classList.add('active')
        } else if(i == 2) {
            carouselItem[1].classList.remove('active')

        } else {i == 0} 
    }
}

function slideImagePrev() {}
