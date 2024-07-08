document.addEventListener("DOMContentLoaded", function() {
    const text = "Devanshi";
    const typewriterElement = document.getElementById("typewriter");
    let index = 0;
  
    function type() {
      if (index < text.length) {
        typewriterElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust the typing speed here
      }
    }
  
    type();
    
  });

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  