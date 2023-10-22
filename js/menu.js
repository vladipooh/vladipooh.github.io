const menuItems = [
    { text: "Home", link: "index.html" },
    { text: "Experience", link: "experience.html" },
    { text: "Research", link: "research.html" },
    {
        text: "Services", 
        submenu: [
            { text: "Service 1", link: "#service1" },
            { text: "Service 2", link: "#service2" },
        ],
    },
    { text: "Rewards", link: "rewards.html" },
    { text: "Blog", link: "blog.html" },
    { text: "Activities", link: "activities.html" },
    { text: "Youtube", link: "Youtube.html" },
    
    // Add more menu items as needed
];

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menujs");

    if (menu) {
        // Get the current page URL
        const currentPageURL = window.location.pathname.split('/').pop();

        // Get the menu items from the configuration file
        menuItems.forEach((item) => {
            const menuItem = document.createElement("li");
            menuItem.className = "nav-item dropdown";

            const menuLink = document.createElement("a");
            menuLink.href = item.link;
            menuLink.className = "nav-link";
            menuLink.textContent = item.text;

            // Check if the item is the current page
            console.log(item.link+" and "+ currentPageURL)
            if (item.link === currentPageURL) {
                menuLink.classList.add("active");
            }

            menuItem.appendChild(menuLink);

            // Check if there is a submenu
            if (item.submenu) {
                menuLink.classList.add("dropdown-toggle");
                menuLink.setAttribute("data-toggle", "dropdown");
                menuLink.setAttribute("aria-haspopup", "true");

                const submenu = document.createElement("div");
                submenu.className = "dropdown-menu border-0";

                item.submenu.forEach((subitem) => {
                    const subLink = document.createElement("a");
                    subLink.href = subitem.link;
                    subLink.textContent = subitem.text;
                    subLink.className = "dropdown-item pink-text";

                    // Check if the subitem is the current page
                    if (subitem.link === currentPageURL) {
                        subLink.classList.add("active");
                    }

                    submenu.appendChild(subLink);

                    // Check if there is a nested submenu
                    if (subitem.submenu) {
                        subLink.classList.add("dropdown-toggle");
                        subLink.setAttribute("data-toggle", "dropdown");
                    }
                });

                menuItem.appendChild(submenu);
            }

            menu.appendChild(menuItem);
        });
    }
});