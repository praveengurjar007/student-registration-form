document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const fullName = `${firstName} ${lastName}`;    
    const gender = document.getElementById('gender').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const address = document.getElementById('address').value;
    const qualification = document.getElementById('qualification').value;
  
    const fullNameField = document.getElementById('fullName');
    fullNameField.value = fullName;
  
    const message = document.getElementById('message');
  
    // Validation (You can add more validation logic here)
    if (firstName && lastName && gender && city && state && address) {
      message.textContent = `Registration successful for ${fullName} - Gender: ${gender} - City: ${city} - State: ${state} - Qualification: ${qualification}`;
      // Here you can process the form data like sending it to a server or storing it
    } else {
      message.textContent = 'Please fill in all fields.';
    }
  });
  
  // Reset form
  document.getElementById('registrationForm').addEventListener('reset', function() {
    document.getElementById('message').textContent = '';
  });
  