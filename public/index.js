const navBarToggler = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.collapse');

navBarToggler.addEventListener('click', () => {
    if(collapse.classList.contains('collapse')) {
        console.log('Hi')
        let open = collapse.style.display = "block";

    } else if(open.style.display === "block"){
        collapse.style.display = "none"
    }
})
