/*============= Active Link ============= */
const navlink = document.querySelectorAll('.nav__link');

function activeLink(){
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activeLink));


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
