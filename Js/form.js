
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitButton = contactForm.querySelector("button[type='submit']");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Please fill in every field.";
        formStatus.style.color = "#c96b4d";
        return;
    }

    // Change button text while sending

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
        await fetch(
            "https://script.google.com/macros/s/AKfycbzQJj8AbPQ6ZER0wKplO-d9OnrXfG0vR8aBATUSGP3Qd-5UjbLIDFXvM0u8X9q6L_gWPg/exec",
            {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
            }
        );

        formStatus.style.color = "var(--leaf)";
        formStatus.textContent = "Message sent successfully!";

        setTimeout(() =>{
            formStatus.style.opacity = "0"
        },5000)

        contactForm.reset();

    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    }

    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
});