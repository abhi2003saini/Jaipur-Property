document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    function sendWhatsAppMessage(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        

        // Construct the WhatsApp message
        const Information = `Hello, I would like to make an enquiry. Here are my details:%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}`;

        // WhatsApp Web URL
        const whatsappURL = `https://wa.me/7357248794?text=${Information}`;

        // Open WhatsApp Web in a new tab
        window.open(whatsappURL, '_blank');
    }




document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector('#contact-details').scrollIntoView({ behavior: 'smooth' });
});



document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector('#contact-details').scrollIntoView({ behavior: 'smooth' });
});

    function navigateToSection() {
        // Get the search input value
        const query = document.getElementById('searchInput').value.toLowerCase();

        // Define mappings for keywords to section IDs
        const sectionMappings = {
            home: '#home',
            about: '#about-us',
            Services: '#Services',
            contact: '#contact-us',
            amenities:'#Amenities',
            gallery:"#gallery"
        };

        // Find the matching section ID
        const sectionId = sectionMappings[query];

        if (sectionId) {
            // Scroll to the corresponding section
            const section = document.querySelector(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            } else {
                alert('Section not found on this page.');
            }
        } else {
            alert('No matching section found. Please refine your search.');
        }
    }
    function sendWhatsAppMessage(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        

        // Construct the WhatsApp message
        const Information = `Hello, I would like to make an enquiry. Here are my details:%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}`;

        // WhatsApp Web URL
        const whatsappURL = `https://wa.me/7357248794?text=${Information}`;

        // Open WhatsApp Web in a new tab
        window.open(whatsappURL, '_blank');
    }




