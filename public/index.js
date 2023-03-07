const navBarToggler = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.collapse');
const carouselItem = document.querySelector('.carousel-item')
const nextIcon = document.querySelector('.carousel-control-next');
const prevIcon = document.querySelector('.carousel-control-prev')
const img = document.querySelector('.img-fluid')
let number = [];


navBarToggler.addEventListener('click', openCloseMenu)
nextIcon.addEventListener('click', slideImageNext)

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

    // creates the numbers 1 - 3 and pushes them into the empty arr
    
    for (let i = 1; i < 4; i++) {
        let newNumbers = number.push(i);


         // access to the image src 
        img.src = `assets/mountains/mountain-${newNumbers}.jpeg`;
      

    }
   

}

function slideImagePrev() {
    
}

