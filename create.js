const form = document.getElementById('genderForm');
const validationMessage = document.getElementById('validationMessage');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const selectedGender = document.querySelector('input[name="gender"]:checked');

    if (selectedGender) {
        validationMessage.textContent = ""; // Clear any previous error message
        // Successful validation (can add further logic here if needed)
        console.log("Gender selected:", selectedGender.value);
    } else {
        validationMessage.textContent = "Please select a gender.";
    }
});
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const birthday = document.getElementById('birthday').value;

    if (isValidDate(birthday)) {
        validationMessage.textContent = ""; // Clear any previous error message
        // Successful validation (can add further logic here if needed)
        console.log("Valid birthday:", birthday);
    } else {
        validationMessage.textContent = "Please enter a valid date.";
    }
});
// Function to check if the date is valid
function isValidDate(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);

    // Ensure the date entered is not in the future
    if (birthDate > today) {
        return false;
    }

    // Basic validation for month and day (can be enhanced further as needed)
    return birthDate.getMonth() >= 0 && birthDate.getMonth() <= 11 && 
           birthDate.getDate() >= 1 && birthDate.getDate() <= 31;
}