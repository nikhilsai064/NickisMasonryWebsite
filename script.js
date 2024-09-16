// Form Submission Logic
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;

    console.log('Form submitted:', {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        description: description
    });

    alert('Thank you for contacting Nicki\'s Masonry! We will reach out to you shortly.');

    // Reset form after submission
    document.getElementById('contactForm').reset();
});
