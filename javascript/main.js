
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


// Get the current page's filename
  function updateDateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const dayofWeek = now.toLocaleString('default', { weekday: 'long' });
    const dayofWeekAbbr = now.toLocaleString('default', { weekday: 'short' });
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // months start from 0
    const year = now.getFullYear();

    const formatted = `${hours} : ${minutes} : ${seconds} , ${dayofWeekAbbr} / ${day} / ${month} / ${year}`;
    document.getElementById('date').textContent = formatted;
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();