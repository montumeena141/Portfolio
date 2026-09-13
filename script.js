/* =====================================================
   MONTU MEENA PORTFOLIO
   Complete JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       PAGE LOADER
    ================================================= */

    window.addEventListener("load", () => {

        const loader = document.getElementById("loader");

        if (loader) {
            setTimeout(() => {
                loader.classList.add("hide");
            }, 700);
        }

    });


    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("open");

            const isOpen = mobileMenu.classList.contains("open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );

            const icon = menuButton.querySelector("i");

            if (icon) {

                if (mobileMenu.classList.contains("open")) {

                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });


        /* Close mobile menu after clicking a link */

        document
            .querySelectorAll(".mobile-menu a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    mobileMenu.classList.remove("open");
                    menuButton.setAttribute("aria-expanded", "false");
                    menuButton.setAttribute("aria-label", "Open menu");

                    const icon = menuButton.querySelector("i");

                    if (icon) {
                        icon.classList.remove("fa-xmark");
                        icon.classList.add("fa-bars");
                    }

                });

            });

    }


    /* =================================================
       DARK / LIGHT MODE
    ================================================= */

    const themeToggle =
        document.getElementById("themeToggle");

    const themeIcon =
        themeToggle
            ? themeToggle.querySelector("i")
            : null;


    /* Get saved theme */

    const savedTheme =
        localStorage.getItem("portfolio-theme");


    /* Apply saved theme */

    if (savedTheme === "light") {

        document.body.classList.add("light");

        if (themeIcon) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        }

    } else {

        /* Default = Dark Mode */

        document.body.classList.remove("light");

        if (themeIcon) {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }

    }

    function updateThemeLabel() {
        if (!themeToggle) return;

        const isLight = document.body.classList.contains("light");
        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Switch to dark theme" : "Switch to light theme"
        );
    }

    updateThemeLabel();


    /* Theme button */

    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("light");

            const isLight =
                document.body.classList.contains("light");

            updateThemeLabel();


            if (isLight) {

                localStorage.setItem(
                    "portfolio-theme",
                    "light"
                );

                if (themeIcon) {
                    themeIcon.classList.remove("fa-moon");
                    themeIcon.classList.add("fa-sun");
                }

            } else {

                localStorage.setItem(
                    "portfolio-theme",
                    "dark"
                );

                if (themeIcon) {
                    themeIcon.classList.remove("fa-sun");
                    themeIcon.classList.add("fa-moon");
                }

            }

        });

    }


    /* =================================================
       TYPING ANIMATION
    ================================================= */

    const typingText =
        document.getElementById("typingText");

    const words = [
        "Web Developer",
        "Frontend Developer",
        "Java Developer",
        "MCA Student",
        "Problem Solver"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;


    function typeEffect() {

        if (!typingText) return;

        const currentWord =
            words[wordIndex];


        /* Typing */

        if (!deleting) {

            typingText.textContent =
                currentWord.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;


            /* Word completed */

            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;
            }


        } else {

            /* Deleting */

            typingText.textContent =
                currentWord.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;


            /* Word deleted */

            if (charIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) %
                    words.length;

            }

        }


        const speed =
            deleting
                ? 45
                : 90;


        setTimeout(
            typeEffect,
            speed
        );

    }


    if (typingText) {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            typingText.textContent = words[0];
        } else {
            typeEffect();
        }
    }


    /* =================================================
       SCROLL PROGRESS
    ================================================= */

    const scrollProgress =
        document.querySelector(".scroll-progress");


    function updateScrollProgress() {

        if (!scrollProgress) return;

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight;

        const windowHeight =
            window.innerHeight;


        const scrollableHeight =
            documentHeight - windowHeight;


        if (scrollableHeight <= 0) {

            scrollProgress.style.width = "0%";
            return;

        }


        const scrollPercentage =
            (scrollTop / scrollableHeight) * 100;


        scrollProgress.style.width =
            `${scrollPercentage}%`;

    }


    window.addEventListener(
        "scroll",
        updateScrollProgress
    );


    updateScrollProgress();


    /* =================================================
       CURSOR GLOW
    ================================================= */

    const cursorGlow =
        document.querySelector(".cursor-glow");


    if (cursorGlow) {

        document.addEventListener(
            "mousemove",
            event => {

                cursorGlow.style.left =
                    `${event.clientX}px`;

                cursorGlow.style.top =
                    `${event.clientY}px`;

            }
        );

    }


    /* =================================================
       SCROLL REVEAL
    ================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "show"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            revealObserver.observe(element);

        });

    } else {

        /* Fallback for older browsers */

        revealElements.forEach(element => {

            element.classList.add("show");

        });

    }


    /* =================================================
       ACTIVE NAVBAR
    ================================================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    function updateActiveNav() {

        let currentSection = "";


        const scrollPosition =
            window.scrollY + 150;


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    updateActiveNav();


    /* =================================================
       PROJECT FILTER
    ================================================= */

    const filterButtons =
        document.querySelectorAll(
            ".filter-btn"
        );


    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                /* Remove active from all buttons */

                    filterButtons.forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );
                        btn.setAttribute("aria-pressed", "false");

                });


                /* Add active to clicked button */

                button.classList.add(
                    "active"
                );
                button.setAttribute("aria-pressed", "true");


                const filter =
                    button.dataset.filter;


                /* Filter projects */

                projectCards.forEach(card => {

                    const category =
                        card.dataset.category;


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        card.classList.remove(
                            "hidden"
                        );

                    } else {

                        card.classList.add(
                            "hidden"
                        );

                    }

                });

            }
        );

    });


    /* =================================================
       CONTACT FORM
    ================================================= */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    const formStatus =
        document.getElementById(
            "formStatus"
        );

    const submitButton =
        contactForm
            ? contactForm.querySelector(
                ".submit-button"
            )
            : null;

    const submitButtonText =
        contactForm
            ? contactForm.querySelector(
                ".submit-button-text"
            )
            : null;


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async event => {

                event.preventDefault();


                const name =
                    document
                        .getElementById("name")
                        ?.value
                        .trim();


                const email =
                    document
                        .getElementById("email")
                        ?.value
                        .trim();


                const subject =
                    document
                        .getElementById("subject")
                        ?.value
                        .trim();


                const message =
                    document
                        .getElementById("message")
                        ?.value
                        .trim();


                /* Check empty fields */

                if (
                    !name ||
                    !email ||
                    !subject ||
                    !message
                ) {

                    if (formStatus) {

                        formStatus.textContent =
                            "Please fill all fields.";

                    }

                    return;

                }


                /* Validate email */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    !emailPattern.test(email)
                ) {

                    if (formStatus) {

                        formStatus.textContent =
                            "Please enter a valid email.";

                    }

                    return;

                }


                if (formStatus) {

                    formStatus.textContent =
                        "Sending your message...";

                }

                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.setAttribute(
                        "aria-busy",
                        "true"
                    );
                }

                if (submitButtonText) {
                    submitButtonText.textContent =
                        "Sending...";
                }

                try {

                    const ajaxEndpoint =
                        contactForm.action.replace(
                            "https://formsubmit.co/",
                            "https://formsubmit.co/ajax/"
                        );

                    const response = await fetch(
                        ajaxEndpoint,
                        {
                            method: "POST",
                            body: new FormData(contactForm),
                            headers: {
                                Accept: "application/json"
                            }
                        }
                    );

                    if (!response.ok) {
                        throw new Error(
                            "The form service could not accept the message."
                        );
                    }

                    const result = await response.json();

                    if (result.success === false) {
                        throw new Error(
                            result.message ||
                            "The form service rejected the message."
                        );
                    }

                    contactForm.reset();

                    if (formStatus) {
                        const requiresActivation =
                            /activat|confirm/i.test(
                                result.message || ""
                            );

                        formStatus.textContent =
                            requiresActivation
                                ? "Your test was received. Check this inbox and Spam for FormSubmit's activation email; activate it once to start receiving messages."
                                : "Thanks — your message was received successfully.";
                        formStatus.classList.remove("error");
                        formStatus.classList.add("success");
                    }

                } catch (error) {

                    if (formStatus) {
                        formStatus.textContent =
                            "Sorry, your message could not be sent. Please email Montu directly.";
                        formStatus.classList.remove("success");
                        formStatus.classList.add("error");
                    }

                } finally {

                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.removeAttribute(
                            "aria-busy"
                        );
                    }

                    if (submitButtonText) {
                        submitButtonText.textContent =
                            "Send Message";
                    }

                }

            }
        );

    }


    /* =================================================
       CURRENT YEAR
    ================================================= */

    const currentYear =
        document.getElementById(
            "currentYear"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =================================================
       BUTTON RIPPLE EFFECT
    ================================================= */

    document
        .querySelectorAll(".btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                function(event) {

                    const ripple =
                        document.createElement(
                            "span"
                        );


                    ripple.style.position =
                        "absolute";

                    ripple.style.width =
                        "10px";

                    ripple.style.height =
                        "10px";

                    ripple.style.borderRadius =
                        "50%";

                    ripple.style.background =
                        "rgba(255,255,255,0.35)";

                    ripple.style.left =
                        `${event.offsetX}px`;

                    ripple.style.top =
                        `${event.offsetY}px`;

                    ripple.style.transform =
                        "translate(-50%, -50%)";

                    ripple.style.pointerEvents =
                        "none";


                    this.style.position =
                        "relative";

                    this.style.overflow =
                        "hidden";


                    this.appendChild(
                        ripple
                    );


                    ripple.animate(
                        [
                            {
                                width: "10px",
                                height: "10px",
                                opacity: 1
                            },
                            {
                                width: "300px",
                                height: "300px",
                                opacity: 0
                            }
                        ],
                        {
                            duration: 600,
                            easing: "ease-out"
                        }
                    );


                    setTimeout(
                        () => ripple.remove(),
                        600
                    );

                }
            );

        });


    /* =================================================
       IMAGE FALLBACK
    ================================================= */

    const profileImage =
        document.querySelector(
            ".image-frame img"
        );


    if (profileImage) {

        profileImage.addEventListener(
            "error",
            () => {

                profileImage.style.display =
                    "none";

            }
        );

    }


    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });


    /* =================================================
       BACK TO TOP
    ================================================= */

    const backToTop =
        document.getElementById(
            "backToTop"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (window.scrollY > 500) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            }
        );


        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }

});
