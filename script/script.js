document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('.child-2 nav');
    const menuIcon = document.getElementById('menuIcon');

    menuIcon.addEventListener('click', function (event) {
        nav.classList.toggle('show');
        event.stopPropagation(); // Prevent the click event from propagating to the document
    });

    document.addEventListener('click', function (event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideNav && !isClickOnMenuIcon) {
            nav.classList.remove('show');
        }
    });
});


function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Image Slider

let currentIndex = 0;

        function showSlide(index) {
            const slider = document.querySelector('.slider');
            const slideWidth = document.querySelector('.slider-container').offsetWidth;
            currentIndex = index;
            const transformValue = -currentIndex * slideWidth;
            slider.style.transform = `translateX(${transformValue}px)`;
        }

        function showPrev() {
            currentIndex = (currentIndex - 1 + document.querySelectorAll('.slider img').length) % document.querySelectorAll('.slider img').length;
            showSlide(currentIndex);
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % document.querySelectorAll('.slider img').length;
            showSlide(currentIndex);
        }

        // Automatic scrolling every 2 seconds
        setInterval(function () {
            showNext();
        }, 2500);


        function toggleDropdown() {
            var dropdown = document.getElementById("myDropdown");
            dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
        }


        document.addEventListener("DOMContentLoaded", function() {
            document.querySelector(".animated-text").classList.add("show");
        });

        






        function openPopup() {
            document.getElementById('popup-form').style.display = 'block';
        }
        
        function closePopup() {
            document.getElementById('popup-form').style.display = 'none';
        }
        
        setTimeout(openPopup, 6000);
        
        document.getElementById('offer-form').addEventListener('submit', function(event) {
            event.preventDefault();
            closePopup();
        
        });
        
        
        document.getElementById('offer-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
        
            Swal.fire({
                icon: 'success',
                title: 'Thank you!',
                text: 'Your coupon code will be sent to your email shortly.',
                showConfirmButton: false,
                timer: 3000, 
                customClass: {
                content: 'custom-swal-content'
            }
            });
        
            setTimeout(closePopup, 3000);
        });
