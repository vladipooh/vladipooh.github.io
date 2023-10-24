const menuItems = [
    { text: "Home", link: "index.html" },
    { text: "Experience", link: "experience.html" },
    { text: "Research", link: "research.html"},
    { text: "Projects", link: "#",
        submenu: [
            { text: "Blood Glucose Control in T1D Using Reinforcement Learning", link: "#service1" },
            { text: "COVID-19 X-ray Image Classification", link: "#service2" },
            { text: "University Major Recommendation with MBTI and Machine Learning", link: "#service2" },
            { text: "Salary Predictor Using Deep Learning", link: "#service2" },
            { text: "Data Visualization Web Dashboard Using JavaScript and Tableau", link: "#service2" },
        ],
    },
    //{ text: "Rewards", link: "rewards.html" },
    { text: "Blog", link: "blog.html" },
    { text: "Activities", link: "#" },
    { text: "Youtube", link: "https://www.youtube.com/@natangg" },
    
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
                submenu.className = "dropdown-menu border-0 text-wrap";
                submenu.setAttribute("style", "width:20rem");

                item.submenu.forEach((subitem) => {

                    const subLink = document.createElement("a");
                    subLink.href = subitem.link;
                    subLink.textContent = "➧ " + subitem.text;
                    subLink.className = "dropdown-item pink-text text-wrap";

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

    $('.dropdown').hover(function() {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
      }, function() {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
      });
      $('.dropdown').click(function() {
        $(this).addClass('show');
        $(this).find('.dropdown-menu').addClass('show');
      }, function() {
        $(this).removeClass('show');
        $(this).find('.dropdown-menu').removeClass('show');
      });
});