//  Navbar toggle for mobile
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Slider functionality
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
});

// Initialize slider
showSlide(currentIndex);

setInterval(()=>{
    currentIndex = (currentIndex+1)%slides.length;
    showSlide(currentIndex)
},3000);

// Filter Menu Function
function filterMenu(category) {
    const items = document.querySelectorAll('.food-item');
    const buttons = document.querySelectorAll('.filter-buttons button');

    items.forEach(item => {
        if(category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === category);
        if(category === 'all' && btn.textContent.toLowerCase() === 'all') {
            btn.classList.add('active');
        }
    });
}

// ===== Customer Review Slider Fix =====
// const reviewCards = document.querySelectorAll('.review-card');
// const reviewDots = document.querySelectorAll('.review-dot');
// const prevBtn = document.querySelector('.review-prev');
// const nextBtn = document.querySelector('.review-next');
// let reviewIndex = 0;

// function showReview(index) {
//   reviewCards.forEach((card, i) => {
//     card.style.display = (i === index) ? 'flex' : 'none';
//     reviewDots[i].classList.toggle('active', i === index);
//   });
// }

// prevBtn.addEventListener('click', () => {
//   reviewIndex = (reviewIndex - 1 + reviewCards.length) % reviewCards.length;
//   showReview(reviewIndex);
// });

// nextBtn.addEventListener('click', () => {
//   reviewIndex = (reviewIndex + 1) % reviewCards.length;
//   showReview(reviewIndex);
// });

// reviewDots.forEach((dot, i) => {
//   dot.addEventListener('click', () => {
//     reviewIndex = i;
//     showReview(reviewIndex);
//   });
// });

// // Auto-slide every 5s
// setInterval(() => {
//   reviewIndex = (reviewIndex + 1) % reviewCards.length;
//   showReview(reviewIndex);
// }, 5000);

// showReview(reviewIndex);


// Review Slider Functionality
const reviewCards = document.querySelectorAll('.review-card');
const reviewDots = document.querySelectorAll('.review-dot');
let currentReview = 0;

function showReview(index) {
  reviewCards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
    reviewDots[i].classList.toggle('active', i === index);
  });
}

document.querySelector('.review-prev').addEventListener('click', () => {
  currentReview = (currentReview - 1 + reviewCards.length) % reviewCards.length;
  showReview(currentReview);
});

document.querySelector('.review-next').addEventListener('click', () => {
  currentReview = (currentReview + 1) % reviewCards.length;
  showReview(currentReview);
});

reviewDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentReview = i;
    showReview(currentReview);
  });
});

// Optional: Auto-Slide Every 5 Seconds
setInterval(() => {
  currentReview = (currentReview + 1) % reviewCards.length;
  showReview(currentReview);
}, 5000);

// book table
document.querySelector('.booking-form form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("🎉 Your table has been reserved!");
  this.reset();
});

// contact form 

document.querySelector('.contact-form-container form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("✅ Thank you! We'll get back to you soon.");
  this.reset();
});

// Scroll to top button
document.getElementById("scrollToTopBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

