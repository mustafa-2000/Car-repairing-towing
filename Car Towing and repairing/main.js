document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carouselExample');
    const items = carousel.querySelectorAll('.carousel-item');

    if (!carousel || items.length === 0) {
        console.warn("Carousel not found or has no items.");
        return;
    }

    // Initialize carousel
    const myCarousel = new bootstrap.Carousel(carousel, {
        interval: 3000,
        pause: 'hover',
        ride: 'carousel'
    });

    items.forEach(item => item.classList.remove('active'));
    items[0].classList.add('active');

    myCarousel.cycle();

    carousel.addEventListener('slide.bs.carousel', function (event) {
        console.log(`Slide transition started from ${event.from} to ${event.to}`);
    });

    // === SERVICES SWITCHING LOGIC ===
    const buttons = document.querySelectorAll('[data-service]');
    const serviceImg = document.getElementById('service-img');
    const serviceTitle = document.getElementById('service-title');
    const serviceText = document.getElementById('service-text');

    const serviceData = {
        repair: {
            img: './imges/1_JktzC9GrA_l4yz0cCy8a5Q.webp',
            title: 'Car Repair',
            text: 'From engine repairs to routine maintenance, we provide reliable car repair services to keep your vehicle in top shape.'
        },
        towing: {
            img: './imges/car-towing2.jpg',
            title: 'Car Towing',
            text: 'Stuck on the road? Our 24/7 towing service is quick, safe, and always ready to help.'
        },
        wash: {
            img: './imges/car-washing 3.jpg',
            title: 'Car Wash',
            text: 'Give your car a shine! We offer professional exterior and interior car washing services.'
        },
        oil: {
            img: './imges/oil changing.jpeg',
            title: 'Oil Changing',
            text: 'Regular oil changes improve engine life. Trust us for fast and affordable oil changing.'
        },
        tires: {
            img: './imges/car tire replecement.jpeg',
            title: 'Tires Replacement',
            text: 'Worn-out tires? We provide tire inspection, replacement, and balancing for all car types.'
        }
    };

    // Set the first button as active and initialize content on page load
    const firstButton = buttons[0];
    firstButton.classList.add('active');
    serviceImg.src = serviceData.repair.img;
    serviceTitle.textContent = serviceData.repair.title;
    serviceText.textContent = serviceData.repair.text;

    // Apply the initial animation on page load
    serviceImg.classList.add('visible');
    serviceTitle.classList.add('visible');
    serviceText.classList.add('visible');

    // Ensure the animations are triggered even on initial load by forcing a reflow
    serviceImg.offsetHeight; // Trigger a reflow
    serviceTitle.offsetHeight;
    serviceText.offsetHeight;

    // Add the animation classes immediately after the reflow
    setTimeout(() => {
        serviceImg.classList.add('scroll-animated');
        serviceTitle.classList.add('scroll-animated');
        serviceText.classList.add('scroll-animated');
    }, 10); // Small timeout to allow for reflow

    // Function to update content and trigger animations
    function updateServiceContent(button) {
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        // Trigger the "visible" class for the button's content immediately
        const key = button.dataset.service;
        const data = serviceData[key];

        if (data) {
            // Reset animation classes before updating content
            serviceImg.classList.remove('scroll-animated');
            serviceTitle.classList.remove('scroll-animated');
            serviceText.classList.remove('scroll-animated');

            // Set new content (image, title, text)
            serviceImg.src = data.img;
            serviceTitle.textContent = data.title;
            serviceText.textContent = data.text;

            // Ensure content is visible after update
            serviceImg.classList.add('visible');
            serviceTitle.classList.add('visible');
            serviceText.classList.add('visible');

            // Force a reflow to ensure animations are reset (critical for triggering animation on change)
            serviceImg.offsetHeight; // Trigger a reflow
            serviceTitle.offsetHeight;
            serviceText.offsetHeight;

            // Trigger animation after a small delay to allow DOM changes to take effect
            setTimeout(() => {
                // Re-apply the scroll-animated class to both image and description (title and text)
                serviceImg.classList.add('scroll-animated');
                serviceTitle.classList.add('scroll-animated');
                serviceText.classList.add('scroll-animated');
            }, 50); // Small timeout to let the DOM update take effect
        }
    }

    // When a button is clicked, update the content and apply animations
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            updateServiceContent(button);
        });
    });


    const hamburger = document.getElementById('hamburger-icon');
    const navbarDropdown = document.getElementById('navbar-dropdown');
  
    // Toggle the dropdown when the hamburger is clicked
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navbarDropdown.classList.toggle('active'); // Toggle visibility of the dropdown
    });
});
