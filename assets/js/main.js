// Mobile menu toggle
function toggleMobileMenu(){
  const panel = document.getElementById("mobilePanel");
  if(!panel) return;
  panel.classList.toggle("open");
}

// Active link highlight (based on current pathname)
(function setActiveNav(){
  const path = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll("[data-nav]");
  links.forEach(a => {
    const target = a.getAttribute("href").split("/").pop();
    if(target === path) a.classList.add("active");
  });
})();
