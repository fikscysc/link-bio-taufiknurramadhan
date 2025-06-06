//**
//Untuk Logo Sosmed 
//  */

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
    sosmed.addEventListener("mouseenter", () => {
        sosmed.classList.remove("ph");
        sosmed.classList.add("ph-fill")
    });

    sosmed.addEventListener("mouseleave", () => {
        sosmed.classList.remove("ph-fill");
        sosmed.classList.add("ph")
    });
});


/**
 * Animasi Gerak
 */

document.addEventListener("scroll", (e) => {
    document.querySelector(
        ".bg-text-animation"
    ).style.transform = `translateX(${window.scrollY}px)`;
});