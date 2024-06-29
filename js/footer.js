// Function to create and append the HTML code to footer
function appendContentToFooter() {
    // Create the HTML content
    const container = document.createElement("div");
    container.className = "container text-center py-5";

    const socialMediaContainer = document.createElement("div");
    socialMediaContainer.className = "d-flex justify-content-center mb-4";

    const socialMediaButtons = [
        { class: "fab fa-twitter", href: "#" },
        { class: "fab fa-facebook-f", href: "#" },
        { class: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/phuwadol-viroonluecha/" },
        { class: "fab fa-instagram", href: "#" }
    ];

    socialMediaButtons.forEach((button) => {
        const socialMediaButton = document.createElement("a");
        socialMediaButton.className = "btn btn-light btn-social mr-2";
        socialMediaButton.href = button.href;

        const icon = document.createElement("i");
        icon.className = button.class;

        socialMediaButton.appendChild(icon);
        socialMediaContainer.appendChild(socialMediaButton);
    });

    const copyrightText = document.createElement("p");
    copyrightText.className = "m-0";
    copyrightText.innerHTML = "&copy; 2024 <a class='text-white font-weight-bold' href='#'>Phuwadol Viroonluecha's Personal Website - ภูวดล วิรุฬห์ลือชา</a>";

    container.appendChild(socialMediaContainer);
    container.appendChild(copyrightText);

    // Append the HTML content to the "footer" div
    const footer = document.getElementById("footerr");
    footer.appendChild(container);
}