document.getElementById('rsvpButton').addEventListener('click', function() {
    let email = prompt('Please enter your Gmail address:');
    
    // Simple validation for a Gmail address
    if (email && email.includes('@gmail.com')) {
        alert('Thank you for your RSVP. We will keep you informed about the events schedule. Thank you for your participation! ' + email);
        // Here you can add code to handle the email, like sending it to a server
    } else {
        alert('Please enter a valid Gmail address.');
    }
});