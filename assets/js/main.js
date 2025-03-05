/*============= Active Link ============= */
const navLink = document.querySelectorAll('.nav__link');

function activeLink(){
    navLink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navLink.forEach((a) => a.addEventListener('click', activeLink));

/* ============= show menu ============= */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/* ============= Remove menu Mobile ============= */

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*============= Background Header ============= */
function scrollHeader(){
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY  >= 50){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/*============= Mixitup Filter ============= */
let mixerProjects = mixitup('.projects__container', {
   selectors: {
       target: '.projects__item',
   },
   animation: {
       duration: 300
   },
});

/* Active Work */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork(){
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*=============== Contact Form  =============== */
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    Message = document.getElementById('message');
    contactMessage = document.getElementById('contact-message');

    const sendEmail = (e) => {
        e.preventDefault();

        //check if the fiel has a value
        if (contactName.value === '' || contactEmail.value === '' || Message.value === '') {
            contactMessage.classList.remove('color-light');
            contactMessage.classList.add('color-dark');

            // show message
            contactMessage.textContent = 'Please fill in all the input fields';

            // remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = 'Message';
                contactMessage.classList.remove('color-dark');
            }, 5000);

        } else {
            // ServiceID - templateID - #form - publickey
            emailjs
                .sendForm(
                    'service_as40zmk', 
                    'template_hofkqor', 
                    '#contact-form', 
                    'RlT9lnoMmVre8oEYW'
                )
                .then(() => {
                    // show message and add color
                    contactMessage.classList.add('color-light');
                    contactMessage.textContent = 'Message sent successfully ✔';

                    // remove message after 5 seconds
                    setTimeout(() => {
                        contactMessage.textContent = 'Message';
                        contactMessage.classList.remove('color-light');
                    }, 5000);
                    
                    // Clear input fields
                    contactName.value = '';
                    contactEmail.value = '';
                    Message.value = '';
                })
                .catch((error) => {
                    // Show error message
                    contactMessage.classList.remove('color-light');
                    contactMessage.classList.add('color-dark');
                    contactMessage.textContent = 'Error sending message ❌';
                    
                    console.error('EMAILJS ERROR:', error);
                    
                    // Remove error message after 5 seconds
                    setTimeout(() => {
                        contactMessage.textContent = 'Message';
                        contactMessage.classList.remove('color-dark');
                    }, 5000);
                });
        }
    };

    contactForm.addEventListener('submit', sendEmail);
