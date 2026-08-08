/* ==========================================================
   Avinash Saini — Portfolio
   All content data lives in the arrays below. To add a new
   project/skill/service later, just add another object to the
   matching array — the page renders them automatically.
   ========================================================== */

// ---------- 1. DATA ----------

const skills = [
  { name: "Python", icon: "code", level: "Working Knowledge" },
  { name: "SQL", icon: "storage", level: "Working Knowledge" },
  { name: "Excel", icon: "grid_on", level: "Working Knowledge" },
  { name: "Power BI", icon: "bar_chart", level: "Working Knowledge" },
  { name: "Firebase", icon: "local_fire_department", level: "Beginner" },
  { name: "HTML", icon: "data_object", level: "Working Knowledge" },
  { name: "CSS", icon: "palette", level: "Working Knowledge" },
  { name: "JavaScript", icon: "bolt", level: "Beginner" },
  { name: "ASP.NET", icon: "hub", level: "Beginner" },
  { name: "API Integration", icon: "api", level: "Beginner" },
  { name: "Data Cleaning", icon: "cleaning_services", level: "Working Knowledge" },
  { name: "Data Visualization", icon: "monitoring", level: "Working Knowledge" }
];
// Note: levels above are a starting point — adjust to match real proficiency.

const projects = [
  {
    name: "Business Sales & Revenue Analytics Dashboard",
    category: "data",
    categoryLabel: "Data Analysis",
    description: "Interactive Power BI dashboard analyzing sales, revenue, profit and regional performance from a cleaned retail dataset.",
    technologies: ["Power BI", "Excel", "SQL", "DAX"],
    features: ["KPI cards for revenue and profit", "Region and product filters", "Trend charts built on cleaned data", "Power Query transformation layer"],
    repoLink: "https://github.com/AvinashHr-35/data-analyst-portfolio",
    demoLink: "#",
    placeholder: false
  },
  {
    name: "Hospital Readmission Prediction & Analysis",
    category: "python",
    categoryLabel: "Python",
    description: "XGBoost model on the UCI Diabetes dataset (101,745 patients) predicting 30-day readmission risk, with SHAP for interpretability.",
    technologies: ["Python", "Pandas", "XGBoost", "SHAP"],
    features: ["Full EDA and data cleaning pipeline", "XGBoost model at 60% recall", "SHAP feature importance analysis", "Power BI dashboard for stakeholders"],
    repoLink: "https://github.com/AvinashHr-35/data-analyst-portfolio",
    demoLink: "#",
    placeholder: false
  },
  {
    name: "Firebase Task Manager App",
    category: "app",
    categoryLabel: "App Development",
    description: "A task management application where users can create, update, delete and track their daily tasks.",
    technologies: ["Firebase", "JavaScript", "HTML", "CSS"],
    features: ["User authentication", "Real-time database", "Responsive interface"],
    repoLink: "#",
    demoLink: "#",
    placeholder: true
  },
  {
    name: "Student Management System",
    category: "web",
    categoryLabel: "Web Development",
    description: "A simple application for managing student records, courses and academic information.",
    technologies: ["ASP.NET", "SQL", "HTML", "CSS"],
    features: ["Add, update, delete student records", "Search by course or ID", "Structured SQL backend"],
    repoLink: "#",
    demoLink: "#",
    placeholder: true
  }
];

const services = [
  { icon: "terminal", title: "Python Scripting & Automation", desc: "Scripts that automate repetitive data tasks — file processing, reports, cleanup jobs." },
  { icon: "cleaning_services", title: "Data Cleaning & Analysis", desc: "Turning messy exports into structured, analysis-ready datasets." },
  { icon: "bar_chart", title: "Excel & Power BI Dashboards", desc: "KPI-driven dashboards built around the questions your business actually asks." },
  { icon: "storage", title: "SQL Queries & Reports", desc: "Structured queries and recurring reports pulled straight from your database." },
  { icon: "local_fire_department", title: "Firebase App Development", desc: "Lightweight apps with authentication and real-time data using Firebase." },
  { icon: "language", title: "Basic Website Development", desc: "Clean, responsive websites for portfolios, small businesses and landing pages." },
  { icon: "api", title: "API Integration", desc: "Connecting your app or dashboard to third-party APIs and data sources." },
  { icon: "campaign", title: "Digital Marketing Support", desc: "Basic analytics setup and reporting support for marketing campaigns." }
];

// ---------- 2. RENDER SKILLS ----------

const skillsGrid = document.getElementById("skills-grid");
skills.forEach((s, i) => {
  const card = document.createElement("div");
  card.className = "skill-card text-center";
  card.style.animationDelay = `${i * 0.05}s`;
  card.innerHTML = `
    <span class="material-symbols-outlined text-[#2F6FED] dark:text-[#5B9BFF] text-3xl mb-2">${s.icon}</span>
    <p class="font-semibold text-sm mb-2">${s.name}</p>
    <span class="level-badge">${s.level}</span>
  `;
  skillsGrid.appendChild(card);
});

// ---------- 3. RENDER SERVICES ----------

const servicesGrid = document.getElementById("services-grid");
services.forEach((sv, i) => {
  const card = document.createElement("div");
  card.className = "service-card";
  card.style.animationDelay = `${i * 0.05}s`;
  card.innerHTML = `
    <span class="material-symbols-outlined text-[#2F6FED] dark:text-[#5B9BFF] text-3xl mb-3">${sv.icon}</span>
    <h3 class="font-semibold mb-1">${sv.title}</h3>
    <p class="text-[#5B6B85] dark:text-[#93A3BF] text-sm mb-4">${sv.desc}</p>
    <a href="#contact" class="btn-mini primary inline-block">Contact Me</a>
  `;
  servicesGrid.appendChild(card);
});

// ---------- 4. RENDER PROJECTS + FILTERS ----------

const projectsGrid = document.getElementById("projects-grid");

function projectThumbIcon(category) {
  const map = { data: "bar_chart", python: "code", app: "smartphone", web: "language" };
  return map[category] || "insights";
}

function renderProjects(filter) {
  projectsGrid.innerHTML = "";
  const list = filter === "all" ? projects : projects.filter(p => p.category === filter);

  list.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "project-card flex flex-col";
    card.style.animationDelay = `${i * 0.05}s`;

    const repoDisabled = p.repoLink === "#";
    const demoDisabled = p.demoLink === "#";

    card.innerHTML = `
      <div class="project-thumb">
        <span class="material-symbols-outlined text-4xl text-[#2F6FED] dark:text-[#5B9BFF]">${projectThumbIcon(p.category)}</span>
      </div>
      <span class="level-badge w-fit mb-2">${p.categoryLabel}</span>
      <h3 class="font-semibold mb-1">${p.name}</h3>
      <p class="text-[#5B6B85] dark:text-[#93A3BF] text-sm mb-3 flex-grow">${p.description}</p>
      <div class="flex flex-wrap gap-1.5 mb-4">
        ${p.technologies.map(t => `<span class="chip">${t}</span>`).join("")}
      </div>
      <div class="flex flex-wrap gap-2 mt-auto">
        <button class="btn-mini primary view-details-btn" data-index="${projects.indexOf(p)}">View Details</button>
        <a href="${p.repoLink}" ${repoDisabled ? 'aria-disabled="true" onclick="return false;"' : 'target="_blank" rel="noopener"'} class="btn-mini">${repoDisabled ? "Code (soon)" : "GitHub Code"}</a>
        <a href="${p.demoLink}" ${demoDisabled ? 'aria-disabled="true" onclick="return false;"' : 'target="_blank" rel="noopener"'} class="btn-mini">${demoDisabled ? "Demo (soon)" : "Live Demo"}</a>
      </div>
    `;
    projectsGrid.appendChild(card);
  });
}
renderProjects("all");

document.getElementById("filter-buttons").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderProjects(btn.dataset.filter);
});

// ---------- 5. PROJECT DETAILS MODAL ----------

const modal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");
let lastFocusedEl = null;

function openModal(project) {
  lastFocusedEl = document.activeElement;
  modalBody.innerHTML = `
    <h3 id="modal-title" class="font-display font-700 text-2xl mb-2">${project.name}</h3>
    <span class="level-badge mb-4 inline-block">${project.categoryLabel}</span>
    <p class="text-[#5B6B85] dark:text-[#93A3BF] text-sm leading-relaxed mb-4">${project.description}</p>
    <h4 class="font-semibold text-sm mb-2">Technologies</h4>
    <div class="flex flex-wrap gap-1.5 mb-4">${project.technologies.map(t => `<span class="chip">${t}</span>`).join("")}</div>
    <h4 class="font-semibold text-sm mb-2">Key features</h4>
    <ul class="list-disc list-inside text-sm text-[#5B6B85] dark:text-[#93A3BF] space-y-1 mb-6">
      ${project.features.map(f => `<li>${f}</li>`).join("")}
    </ul>
    <div class="flex flex-wrap gap-2">
      <a href="${project.repoLink}" ${project.repoLink === "#" ? 'aria-disabled="true" onclick="return false;"' : 'target="_blank" rel="noopener"'} class="btn-mini primary">${project.repoLink === "#" ? "Code coming soon" : "GitHub Code"}</a>
      <a href="${project.demoLink}" ${project.demoLink === "#" ? 'aria-disabled="true" onclick="return false;"' : 'target="_blank" rel="noopener"'} class="btn-mini">${project.demoLink === "#" ? "Demo coming soon" : "Live Demo"}</a>
    </div>
  `;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close").focus();
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}

projectsGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".view-details-btn");
  if (!btn) return;
  openModal(projects[Number(btn.dataset.index)]);
});

document.getElementById("modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

// ---------- 6. THEME TOGGLE ----------
// Not persisted to localStorage on purpose (keeps this safe to preview
// in sandboxed environments). Once you host this for real, you can add
// localStorage.setItem("theme", ...) / getItem(...) around the two lines
// below if you want the choice to survive a page reload.

const htmlEl = document.documentElement;
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  htmlEl.classList.add("dark");
}
document.getElementById("theme-toggle").addEventListener("click", () => {
  htmlEl.classList.toggle("dark");
});

// ---------- 7. MOBILE MENU ----------

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");
  mobileMenu.classList.toggle("hidden");
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
});
document.querySelectorAll(".mobile-nav-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ---------- 8. ACTIVE NAV LINK ON SCROLL ----------

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const scrollSpy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove("active"));
      const active = document.querySelector(`.nav-link[data-nav="${entry.target.id}"]`);
      if (active) active.classList.add("active");
    }
  });
}, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

sections.forEach(sec => scrollSpy.observe(sec));

// ---------- 9. CONTACT FORM VALIDATION ----------

const form = document.getElementById("contact-form");
const successMsg = document.getElementById("form-success");

function setError(fieldId, message) {
  const errorEl = document.querySelector(`[data-error-for="${fieldId}"]`);
  const inputEl = document.getElementById(fieldId);
  errorEl.textContent = message;
  inputEl.classList.toggle("invalid", Boolean(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  successMsg.classList.add("hidden");

  const name = document.getElementById("c-name").value.trim();
  const email = document.getElementById("c-email").value.trim();
  const subject = document.getElementById("c-subject").value.trim();
  const message = document.getElementById("c-message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let valid = true;

  if (!name) { setError("c-name", "Please enter your name."); valid = false; }
  else setError("c-name", "");

  if (!email) { setError("c-email", "Please enter your email."); valid = false; }
  else if (!emailPattern.test(email)) { setError("c-email", "Please enter a valid email address."); valid = false; }
  else setError("c-email", "");

  if (!subject) { setError("c-subject", "Please add a subject."); valid = false; }
  else setError("c-subject", "");

  if (!message) { setError("c-message", "Please write a message."); valid = false; }
  else setError("c-message", "");

  if (!valid) return;

  // No backend is connected yet, so nothing is actually sent.
  // Wire this to a service like Formspree or EmailJS before relying on it.
  successMsg.textContent = "Thanks — your message looks good. This form isn't connected to an email service yet, so please email avinashsaini2511@gmail.com directly for now.";
  successMsg.classList.remove("hidden");
  form.reset();
});

// ---------- 10. SCROLL TO TOP ----------

const scrollTopBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("hidden", window.scrollY < 500);
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
