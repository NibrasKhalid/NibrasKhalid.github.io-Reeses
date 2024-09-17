//For floating Header
$(window).on("scroll", function(){
    if($(this).scrollTop() > 100){
        $("header").addClass("scrolledHeader");
    }
    else{
        $("header").removeClass("scrolledHeader");
    }
});

//For Hamburger Menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const nav = document.querySelector('nav');
    const logoContainer = document.getElementById('logo-container');
    // nav menu
    hamburgerMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Show/hide logo on scroll
    function checkScroll() {
        if (window.scrollY > 100) {
            logoContainer.style.display = 'block';
        } else {
            logoContainer.style.display = 'none';
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); //check on page load
});