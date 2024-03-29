const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessages = document.querySelectorAll('.error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let valid = true;

    // Email validation
    if (!emailInput.value.trim()) {
        errorMessages[0].textContent = 'Email is required';
        errorMessages[0].style.display = 'block';
        
    }
}
)
function validate(form)
{
    var genderM=form.gender_male;
    var genderF=form.gender_female;
    
    if(genderM.checked==false && genderF.checked==false ) {
        alert("You must select male or female");
        return false;
    }   
}
document.getElementById("button").onclick = function () {
    location.href = "home.";
};