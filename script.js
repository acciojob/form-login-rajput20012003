
	function getFormvalue() {
    // Accessing the input fields by their IDs
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Concatenating first and last names
    const fullName = firstName + " " + lastName;

    // Displaying the full name using alert
    alert(fullName);
}


}
