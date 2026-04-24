// Data
const techSkills = ["Java", "Python", "JavaScript", "React.js", "Node.js", "Next.js", "Tailwind CSS"];
const addSkills = ["AWS", "Git/GitHub", "SEO", "UI/UX", "Data Science", "Quantum Computing"];

const projects = [
  { title: "Dayanand Education Group", tech: "Next.js, Google Sheets API", desc: "Engineered an SEO-optimized institutional portal with automated inquiry collection.", link: "https://dayanand.org" },
  { title: "KANCHAN-S Design", tech: "HTML5, CSS3, JS", desc: "Developed a high-performance responsive website with mobile-first architecture.", link: "https://github.com/rahulchoudhary9593/KANCHAN-S-Design" },
  { title: "CUAP Notes Hub", tech: "Blogger, SEO", desc: "Platform for sharing college resources with department-wise organization.", link: "https://uninoteshub.blogspot.com" }
];

const education = [
  { title: "B.Sc (Hons) CS & AI", text: "Central University of Andhra Pradesh (2024-2028). SGPA: 7.4/10.0" },
  { title: "Certifications", text: "Claude AI & GenAI, AI Workflow Automation, WISER Quantum Fundamentals" }
];

// Rendering
function render() {
  document.getElementById("technicalSkillsList").innerHTML = techSkills.map(s => `<span class="chip">${s}</span>`).join("");
  document.getElementById("additionalSkillsList").innerHTML = addSkills.map(s => `<span class="chip">${s}</span>`).join("");
  document.getElementById("projectsList").innerHTML = projects.map(p => `
    <article class="item">
      <h3>${p.title}</h3>
      <small>${p.tech}</small>
      <p>${p.desc}</p>
      <a href="${p.link}" target="_blank">View Project</a>
    </article>`).join("");
  document.getElementById("educationList").innerHTML = education.map(e => `
    <div class="card"><h3>${e.title}</h3><p>${e.text}</p></div>`).join("");
}

// Typing Effect
function setupTyping() {
  const lines = ["Software Developer", "Web Architect", "AI Enthusiast"];
  const el = document.getElementById("typingText");
  let i = 0, j = 0, del = false;
  function tick() {
    let curr = lines[i];
    el.textContent = curr.slice(0, j);
    if (!del && j < curr.length) j++;
    else if (del && j > 0) j--;
    else { del = !del; if (!del) i = (i + 1) % lines.length; }
    setTimeout(tick, del ? 50 : 150);
  }
  tick();
}

// Google Form Submit & Custom Success Message Logic
let submitted = false;
const contactForm = document.getElementById("contactForm");
const hiddenIframe = document.getElementById("hidden_iframe");
const formInputs = document.getElementById("formInputs");
const successMessage = document.getElementById("successMessage");
const sendAnotherBtn = document.getElementById("sendAnotherBtn");
const submitBtn = document.getElementById("submitBtn");

if (contactForm && hiddenIframe) {
  contactForm.addEventListener("submit", () => {
    submitted = true;
    submitBtn.textContent = "Sending...";
    submitBtn.style.opacity = "0.7";
  });

  hiddenIframe.addEventListener("load", () => {
    if (submitted) {
      formInputs.style.display = "none";
      successMessage.style.display = "block";

      contactForm.reset();
      submitted = false;


      submitBtn.textContent = "Submit";
      submitBtn.style.opacity = "1";
    }
  });


  if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener("click", () => {
      successMessage.style.display = "none";
      formInputs.style.display = "block";
    });
  }
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  render();
  setupTyping();
  document.getElementById("year").textContent = new Date().getFullYear();

  // Reveal Animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(s => observer.observe(s));

  // Menu Toggle
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("navMenu");
  btn.addEventListener("click", () => menu.classList.toggle("open"));

  // Theme Toggle
  document.getElementById("themeToggle").addEventListener("click", (e) => {
    document.body.classList.toggle("theme-light");
    e.target.innerHTML = document.body.classList.contains("theme-light") ? "🌙" : "☀️";
  });
});

