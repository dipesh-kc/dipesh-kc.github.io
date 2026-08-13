/* =========================================================
   DIPESH K.C. — PORTFOLIO INTERACTIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-open");

        });

    }


    /*
     * Reveal elements when they enter the viewport.
     */

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
