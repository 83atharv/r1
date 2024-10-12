function nextStep(){
    const next = document.getElementById("step-3");
    next.style.display = 'block';
    
    confirmInfo();

}

function submitForm(){
    alert('Registration successful!');
    document.getElementById('registrationForm').reset();
    const next = document.getElementById("step-3");
    next.style.display = 'none';
}

function confirmInfo(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Not specified';
    const phoneNumber = document.getElementById('phoneNumber').value;

    const sessions = Array.from(document.querySelectorAll('input[name="session"]:checked'))
                          .map(el => el.value).join(', ') || 'None';
    const participation = document.querySelector('input[name="participation"]:checked')?.value || 'Not specified';
    const dietaryRestrictions = document.getElementById('dietaryRestrictions').value || 'None';
    const additionalComments = document.getElementById('additionalComments').value || 'None';

    const confirmationDetails = `
        <strong>Personal Information:</strong><br>
        First Name: ${firstName}<br>
        Last Name: ${lastName}<br>
        Email: ${email}<br>
        Age: ${age}<br>
        Gender: ${gender}<br>
        Phone Number: ${phoneNumber}<br><br>
        
        <strong>Preferences:</strong><br>
        Preferred Session: ${sessions}<br>
        Mode of Participation: ${participation}<br>
        Dietary Restrictions: ${dietaryRestrictions}<br>
        Additional Comments: ${additionalComments}
    `;

    document.getElementById('confirmationDetails').innerHTML = confirmationDetails;
}

