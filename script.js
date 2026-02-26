// const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  // close menu after clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// simple demo newsletter handler (replace with your US server endpoint)
const form = document.getElementById("newsletterForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("#email")?.value?.trim();
    if (!email) return;

    // Replace this with fetch("https://your-us-server.com/api/subscribe", {...})
    alert("Subscribed! (Demo) — connect this to your US server endpoint.");
    form.reset();
  });
}