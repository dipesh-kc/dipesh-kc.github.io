/* =========================================================
   DIPESH K.C. — PORTFOLIO INTERACTIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".main-nav");


    if (menuToggle && navLinks) {


        /* -----------------------------------------
           OPEN / CLOSE MOBILE MENU
           ----------------------------------------- */

        menuToggle.addEventListener("click", () => {

            const isOpen =
                menuToggle.classList.toggle("active");

            navLinks.classList.toggle(
                "mobile-open",
                isOpen
            );


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

        });


        /* -----------------------------------------
           CLOSE MENU AFTER CLICKING A NAV LINK
           ----------------------------------------- */

        const mobileLinks =
            navLinks.querySelectorAll("a");


        mobileLinks.forEach((link) => {

            link.addEventListener("click", () => {

                menuToggle.classList.remove("active");

                navLinks.classList.remove(
                    "mobile-open"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

    }



    /* =====================================================
       REVEAL ELEMENTS WHEN THEY ENTER THE VIEWPORT
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".research-card, .timeline-item, .publication, .experience-card, .education-item, .skill-group"
    );


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });

});