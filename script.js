// Example: Form submission handling
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(form);

    // Send data to server or perform desired actions
    // ...

    // Reset form if needed
    form.reset();
});

// Example: Toggle WhatsApp slider functionality
const whatsAppSlider = document.querySelector('#whatsAppSlider');

whatsAppSlider.addEventListener('click', () => {
    whatsAppSlider.classList.toggle('checked');
});

document.addEventListener('DOMContentLoaded', () => {
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.top = '-100px'; // Adjust as necessary to hide the header
    } else {
        // Scrolling up
        header.style.top = '0';
        header.style.transition = 'top 0.3s ease-in-out';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
});
$(document).ready(function() {
$('.three-divs-container').slick({
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
arrows: true,
dots: true,
infinite: true,
responsive: [
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
]
});
});

document.querySelector('nav ul li a[href="#section2"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#section2').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.faq-question').forEach(question => {
question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
});
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
event.preventDefault();
const name = document.getElementById('name').value;
const phone = document.getElementById('phone').value;
const email = document.getElementById('email').value;
const subject = document.getElementById('subject').value;
const message = document.getElementById('message').value;

console.log('Form Submitted!', { name, phone, email, subject, message });
alert('Thank you for your message!');
// Reset form
document.getElementById('contactForm').reset();
});

document.querySelector('nav ul li a[href="#content-section"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#content-section').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('nav ul li a[href="#section4"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#section4').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('nav ul li a[href="#section3"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#section3').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('getquote').addEventListener('click', function() {
    // Open the specified WhatsApp link
    window.open('https://api.whatsapp.com/send?phone=918080222999&text=Hi', '_blank');
});
document.getElementById('request').addEventListener('click', function() {
    // Open the specified WhatsApp link
    window.open('index.html');
});

document.getElementById('start').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#section_begin').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('bro').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#section_begin').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('request1').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#section_begin').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('request2').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#section_begin').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('request3').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#section_begin').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('request4').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#section_begin').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('request5').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#section_begin').scrollIntoView({ behavior: 'smooth' });
    });