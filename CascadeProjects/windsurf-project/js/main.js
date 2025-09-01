document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, 
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
                bsCollapse.hide();
            }
        }
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

const animateOnScroll = function() {
    const elements = document.querySelectorAll('.card, .feature-box, .client-logo');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.card, .feature-box, .client-logo');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);

const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'btn btn-primary btn-floating back-to-top';
document.body.appendChild(backToTopButton);

const style = document.createElement('style');
style.textContent = `
    .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50% !important;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    }
    
    .back-to-top.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .back-to-top:hover {
        transform: translateY(-5px);
    }
`;
document.head.appendChild(style);

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = document.getElementById("menuIcon");
    let isMenuOpen = false;
  
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
      mobileMenu.classList.toggle("hidden");
  
      // Switch icon
      if (isMenuOpen) {
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
      } else {
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
      }
    }
  
    mobileMenuBtn.addEventListener("click", toggleMenu);
  
    document.addEventListener("click", function (event) {
      if (
        !mobileMenu.contains(event.target) &&
        !mobileMenuBtn.contains(event.target) &&
        isMenuOpen
      ) {
        toggleMenu();
      }
    });
  
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768 && isMenuOpen) {
        toggleMenu();
      }
    });
  });
  
  const testimonials = [
    {
      image: "https://www.bridgegroupsolutions.com/assets/dummy.png",
      text: "Customer centric approach. Innovative solutions tailored as per the requirement of the customers. Great experience!",
      name: "Shubham Khampariya",
      designation: "CTO, FutureTech",
      stars: 5,
    },
    {
      image: "https://www.bridgegroupsolutions.com/assets/dummy.png",
      text: "Excellent service and support, they helped us scale seamlessly.",
      name: "Ayesha Malik",
      designation: "Product Head, NovaApps",
      stars: 4,
    },
    {
      image: "https://www.bridgegroupsolutions.com/assets/dummy.png",
      text: "Truly a partner in innovation, not just a service provider.",
      name: "Ankit Singh",
      designation: "Founder, DevCraft",
      stars: 5,
    },
  ];
  
  function initTestimonials() {
    let current = 0;
  
    const image = document.getElementById("testimonialImage");
    const text = document.getElementById("testimonialText");
    const name = document.getElementById("testimonialName");
    const designation = document.getElementById("testimonialDesignation");
    const stars = document.getElementById("testimonialStars");
  
    function updateTestimonial(index) {
      const t = testimonials[index];
      image.src = t.image;
      text.textContent = `"${t.text}"`;
      name.textContent = `${t.name},`;
      designation.textContent = t.designation;
      stars.textContent = "⭐".repeat(t.stars);
    }
  
    function showNext() {
      current = (current + 1) % testimonials.length;
      updateTestimonial(current);
    }
  
    function showPrev() {
      current = (current - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(current);
    }
  
    document.getElementById("nextBtn").addEventListener("click", showNext);
    document.getElementById("prevBtn").addEventListener("click", showPrev);
  
    updateTestimonial(current);
  
    setInterval(showNext, 1500);
  }
  
  document.addEventListener("DOMContentLoaded", initTestimonials);
  
  const scrollBtn = document.getElementById("scrollToTopBtn");
  
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    if (scrollY > 100) {
      // Show button
      scrollBtn.classList.remove("opacity-0", "pointer-events-none");
      scrollBtn.classList.add("opacity-100");
    } else {
      // Hide button
      scrollBtn.classList.add("opacity-0", "pointer-events-none");
      scrollBtn.classList.remove("opacity-100");
    }
  });
  
  /*counter*/
  
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll("[data-target]");
  
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const duration = 8000;
      const frameRate = 100; 
      const totalSteps = Math.round((duration / 1000) * frameRate); 
      const increment = target / totalSteps;
  
      let current = 0;
  
      const updateCounter = () => {
        current += increment;
        if (current >= target) {
          counter.innerText = target.toLocaleString();
        } else {
          counter.innerText = Math.floor(current).toLocaleString();
          requestAnimationFrame(updateCounter);
        }
      };
  
      updateCounter();
    });
  });
  //  popup
  
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("crmModal").classList.remove("hidden");
  });
  
  function closeModal() {
    document.getElementById("crmModal").classList.add("hidden");
  }
  
  const carousel = document.getElementById("carousel");
  const logos = carousel.children;
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let auto;
  
  // Slide Function
  function slideNext() {
    carousel.appendChild(logos[0]);
  }
  
  function slidePrev() {
    carousel.insertBefore(logos[logos.length - 1], logos[0]);
  }
  
  nextBtn.addEventListener("click", () => {
    slideNext();
    resetInterval();
  });
  
  prevBtn.addEventListener("click", () => {
    slidePrev();
    resetInterval();
  });
  
  function startAutoSlide() {
    auto = setInterval(slideNext, 3000);
  }
  
  function resetInterval() {
    clearInterval(autoSlide);
    startAutoSlide();
  }
  
  // Start autoplay
  startAutoSlide();
  