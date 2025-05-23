
document.addEventListener('DOMContentLoaded', function() {
    // Form validation example
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const requiredFields = document.querySelectorAll('.required');
        let valid = true;
        
        requiredFields.forEach(field => {
            const input = field.parentNode.querySelector('input, select, textarea');
            if (!input.value) {
                input.style.borderColor = 'red';
                valid = false;
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        
        if (valid) {
            alert('Booking confirmed! Thank you for your reservation.');
        } else {
            alert('Please fill in all required fields.');
        }
    });
    
    // Copy billing address from user details
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    
    firstName.addEventListener('input', function() {
        document.getElementById('billingFirstName').value = this.value;
    });
    
    lastName.addEventListener('input', function() {
        document.getElementById('billingLastName').value = this.value;
    });
    
    phone.addEventListener('input', function() {
        document.getElementById('billingPhone').value = this.value;
    });
    
    email.addEventListener('input', function() {
        document.getElementById('billingEmail').value = this.value;
    });
});


const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
