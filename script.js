// ============================================
// Scroll Progress Bar
// ============================================
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    progressBar.style.width = `${scrollPercent}%`;
  }
});

// ============================================
// Header Scroll Effect
// ============================================
const header = document.querySelector('header');
if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ============================================
// Fade Up Animation
// ============================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});

// ============================================
// Back to Top Button
// ============================================
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================
// Contact Form
// ============================================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = contactForm.querySelector('button');
    button.innerHTML = '<i class="fas fa-check"></i> Sent!';
    button.style.background = '#10b981';
    button.style.borderColor = '#10b981';
    button.style.color = '#ffffff';
    
    setTimeout(() => {
      contactForm.reset();
      button.innerHTML = 'Send Message';
      button.style.background = '';
      button.style.borderColor = '';
      button.style.color = '';
    }, 3000);
  });
}

// ============================================
// Smooth Scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// Hamburger Menu (FIXED)
// ============================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.querySelector('i').classList.remove('fa-times');
      hamburger.querySelector('i').classList.add('fa-bars');
    });
  });
}

// ============================================
// Hero Skills Animation
// ============================================
const heroSkills = document.querySelectorAll('.skill-fill');
if (heroSkills.length > 0) {
  const heroSkillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.getAttribute('data-width');
      }
    });
  }, { threshold: 0.6 });

  heroSkills.forEach(bar => {
    heroSkillObserver.observe(bar);
  });
}

// ============================================
// Disable Right Click & Image Dragging
// ============================================
document.addEventListener('contextmenu', e => e.preventDefault());

document.querySelectorAll('img').forEach(img => {
  img.setAttribute('draggable', false);
})


const readMoreBtn = document.querySelector(".read-more-btn");
const aboutMore = document.querySelector(".about-more");

readMoreBtn.addEventListener("click", () => {

  aboutMore.classList.toggle("active");

  if(aboutMore.classList.contains("active")){
    readMoreBtn.textContent = "Read Less";
  } else{
    readMoreBtn.textContent = "Read More";
  }

});



document.querySelectorAll(".load-more").forEach(button => {

  button.addEventListener("click", () => {

    const gridId = button.getAttribute("data-target");
    const grid = document.getElementById(gridId);

    const hiddenCards = grid.querySelectorAll(".project-card:nth-child(n+7)");

    hiddenCards.forEach(card => {
      card.style.display = "block";
    });

    button.style.display = "none";

  });

});



// ============================================
// Expand / Collapse Posts
// ============================================

document.querySelectorAll(".toggle-posts").forEach(button => {

  const grid = document.getElementById(button.dataset.target);
  const cards = grid.querySelectorAll(".project-card");

  let limit = 6;

  if(grid.id === "certificates-grid"){
    limit = 3;
  }

  if(grid.id === "blog-grid"){
    limit = 6;
  }

  // Hide cards beyond limit
  cards.forEach((card, index) => {
    if(index >= limit){
      card.style.display = "none";
    }
  });

  // Hide button if not needed
  if(cards.length <= limit){
    button.style.display = "none";
    return;
  }

  button.addEventListener("click", () => {

    if(grid.classList.contains("expanded")){

      grid.classList.remove("expanded");

      cards.forEach((card, index) => {
        if(index >= limit){
          card.style.display = "none";
        }
      });

      button.textContent = "See More ↓";

      grid.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

    }else{

      grid.classList.add("expanded");

      cards.forEach(card => {
        card.style.display = "block";
      });

      button.textContent = "Close ↑";

    }

  });

});


document.addEventListener("DOMContentLoaded",()=>{

const grids=document.querySelectorAll(".projects-grid");

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{
threshold:0.15
});

grids.forEach(grid=>observer.observe(grid));

});