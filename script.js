const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(validateName()) {
        alert("Form submitted successfully!");
    }
});

function validateName(){
    let name = document.getElementById('name').value;
    if (name.length == 0) {
        nameError.innerHTML = "Name cannot be empty";
        return false;
    }
    return true;
}