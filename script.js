/* ==========================================================
   Avinash Saini — Portfolio
   All content data lives in the arrays below. To add a new
   project/skill/service later, just add another object to the
   matching array — the page renders them automatically.
   ========================================================== */

// ---------- 1. DATA ----------

const skills = [
  { name: "SQL (MySQL, SQLite)", icon: "storage", level: "Working Knowledge" },
  { name: "Python (Pandas, NumPy)", icon: "code", level: "Working Knowledge" },
  { name: "Scikit-learn", icon: "model_training", level: "Working Knowledge" },
  { name: "Matplotlib & Seaborn", icon: "monitoring", level: "Working Knowledge" },
  { name: "Power BI", icon: "bar_chart", level: "Working Knowledge" },
  { name: "Power Query", icon: "cleaning_services", level: "Working Knowledge" },
  { name: "DAX", icon: "functions", level: "Working Knowledge" },
  { name: "Excel (Pivot, VLOOKUP, XLOOKUP)", icon: "grid_on", level: "Working Knowledge" },
  { name: "GitHub", icon: "hub", level: "Working Knowledge" },
  { name: "MySQL Workbench", icon: "database", level: "Working Knowledge" },
  { name: "Jupyter / Google Colab", icon: "science", level: "Working Knowledge" },
  { name: "VS Code", icon: "terminal", level: "Working Knowledge" }
];
// Sourced directly from resume's Technical Skills section (Aug 2026).

const projects = [
  {
    name: "Hospital Readmission Prediction & Analysis",
    category: "healthcare",
    categoryLabel: "Healthcare",
    description: "Analyzed the UCI Diabetes dataset (101,745 patients) end-to-end — Excel data audit, missing value treatment, and 8 business SQL queries on readmission rates by age, diagnosis, medications and hospital stay.",
    technologies: ["Python", "SQL", "Excel", "Power BI"],
    features: ["8 business SQL queries on readmission drivers", "Interactive Power BI dashboard with KPI cards", "Age-group and diagnosis breakdown", "Built for non-technical stakeholders"],
    repoLink: "https://github.com/AvinashHr-35/data-analyst-portfolio/tree/main/Project1_hospital_readmission",
    demoLink: "#",
    placeholder: false
  },
  {
    name: "Bank Customer Churn & Revenue Analysis",
    category: "banking",
    categoryLabel: "Banking",
    description: "Analyzed 10,000 bank customers across France, Spain and Germany to identify churn drivers and quantify revenue at risk.",
    technologies: ["Python", "SQL", "Excel", "Power BI"],
    features: ["8 SQL business queries", "Germany identified as highest-churn market (32.44%)", "51–60 age group flagged as highest-risk (56.21% churn)", "4-product customers churned at 100% vs 7.58% for 2-product customers"],
    repoLink: "https://github.com/AvinashHr-35/data-analyst-portfolio/tree/main/Project2_Finance_BankChurn",
    demoLink: "#",
    placeholder: false
  },
  {
    name: "Regional Sales Performance Dashboard",
    category: "retail",
    categoryLabel: "Retail",
    description: "Power BI dashboard on the Superstore dataset (9,994 rows) analyzing regional sales performance and product-level trends.",
    technologies: ["Power BI", "Excel", "DAX"],
    features: ["Regional and category-level sales breakdown", "KPI cards for revenue and profit", "Interactive filters and drill-through views"],
    repoLink: "https://github.com/AvinashHr-35/sales-performance-dashboard",
    demoLink: "#",
    placeholder: false
  }
];

const services = [
  { icon: "cleaning_services", title: "Data Cleaning & EDA", desc: "Turning messy exports into structured, analysis-ready datasets with full exploratory analysis." },
  { icon: "storage", title: "SQL Querying & Reporting", desc: "Business SQL queries and recurring reports pulled straight from your database (MySQL, SQLite)." },
  { icon: "bar_chart", title: "Excel & Power BI Dashboards", desc: "KPI-driven dashboards with slicers and drill-through reports, built around real stakeholder questions." },
  { icon: "model_training", title: "Classification Modeling", desc: "Scikit-learn based classification models for risk, churn and outcome prediction." },
  { icon: "terminal", title: "Python-based Analysis & Automation", desc: "Pandas/NumPy scripts for repeatable analysis and reporting workflows." },
  { icon: "insights", title: "KPI & Business Intelligence", desc: "Translating raw metrics into quantified business insights for non-technical stakeholders." }
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
  const map = { healthcare: "medical_information", banking: "account_balance", retail: "storefront" };
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
  successMsg.textContent = "Thanks — your message looks good. This form isn't connected to an email service yet, so please email avinashsaini56789@gmail.com directly for now.";
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
