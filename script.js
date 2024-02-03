// Selecting elements from the DOM
const forms = document.querySelector(".forms"), // Selecting the forms container
    pwShowHide = document.querySelectorAll(".eye-icon"), // Selecting all eye icons for password visibility toggle
    links = document.querySelectorAll(".link"); // Selecting all links for switching between login and signup forms

// Adding event listeners to eye icons for password visibility toggle
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        // Selecting password fields related to the clicked eye icon
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        // Toggling password visibility
        pwFields.forEach(password => {
            if (password.type === "password") {
                // If password field is hidden, show it
                password.type = "text";
                // Replace hide icon with show icon
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            // If password field is visible, hide it
            password.type = "password";
            // Replace show icon with hide icon
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})

// Adding event listeners to links for switching between login and signup forms
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); // Preventing default link behavior (form submission)
        forms.classList.toggle("show-signup"); // Toggling the show-signup class on forms container to switch between login and signup forms
    })
})
