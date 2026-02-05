let currentSlide = 0;
let currentProjectImages = [];

const experiences = [
    {
        title: "Roles",
        desc: [
            "Developed and managed BIM models in Revit from schematic design through construction documentation.",
            "Produced detailed construction drawings and documentation sets aligned with project and regulatory requirements",
            "BIM collaboration using Autodesk Construction Cloud (ACC)",
            "Coordinated closely with structural and MEP consultants to ensure design integration",
            "Performed clash detection using Navisworks, reducing on-site conflicts and rework",
            "Supported project teams in maintaining model accuracy and version control"  
        ],
    },
    {
        title: "Roles",
        desc: [
            "Assisted property owners in securing building permits for new construction and renovations"   
        ],
    },
    {
        title: "Roles",
        desc: [
            "Prepared architectural design and construction documentation from design development through construction stage",
            "Produced working drawings and assisted in technical detailing",
            "Coordinated with consultants to ensure buildable and compliant design solution."  
        ],
    },
    {
        title: "Roles",
        desc: [
            "Supported architectural design development for various buildings projects.",
            "Produced presentation drawings, technical drawings, and permit documentation.",
            "Assisted senior architects in design coordination and documentation delivery."  
        ],
    }
];

function openModal(index) {
    const modal = document.getElementById("project-modal");

    modal.style.display = "block";
    document.getElementById("project-title").innerText = projects[index].title;

    renderProjectList(projects[index].desc);

    
    currentProjectImages = projects[index].images;
    currentSlide = 0;
    updateSlider();
}

function renderProjectList(items) {
    const list = document.getElementById("project-desc");
    list.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function updateSlider() {
    document.getElementById("project-modal-img").src = currentProjectImages[currentSlide];
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % currentProjectImages.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + currentProjectImages.length) % currentProjectImages.length;
    updateSlider();
}

function closProjectModal() {
    document.getElementById("project-modal").style.display = "none";
}

function openExperience(index) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");

    modal.style.display = "block";
    title.innerText = experiences[index].title;
    renderList(experiences[index].desc);
}

/* Experience Modal */
function openExperience(index) {
    const modal = document.getElementById("experience-modal");

    modal.style.display = "block";
    document.getElementById("experience-title").innerText = experiences[index].title;

    const list = document.getElementById("experience-desc");
    list.innerHTML = "";
    experiences[index].desc.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function closeExperienceModal() {
    document.getElementById("experience-modal").style.display = "none";
}

// Tutup modal kalau klik area gelap
window.onclick = function(event) {
    const projectModal = document.getElementById("project-modal");
    const experienceModal = document.getElementById("experience-modal");

    if (event.target == projectModal) {
        projectModal.style.display = "none";
    }
    if (event.target == experienceModal) {
        experienceModal.style.display = "none";
    }
}

function toggleYear(id, headerElement) {
    const section = document.getElementById(id);
    section.classList.toggle("hidden");

    // putar panah
    headerElement.classList.toggle("active");
}

function toggleProject(element) {
    const dropdown = element.querySelector(".project-dropdown");
    const isOpen = !dropdown.classList.contains("hidden");

    // Tutup semua project lain
    document.querySelectorAll(".project-dropdown").forEach(d => d.classList.add("hidden"));
    document.querySelectorAll(".project-item").forEach(p => p.classList.remove("active"));

    // Buka yang diklik kalau sebelumnya tertutup
    if (!isOpen) {
        dropdown.classList.remove("hidden");
        element.classList.add("active");

        // Setup slider saat dibuka
        const title = element.querySelector("h3").innerText.trim();
        const images = imageSets[title] || [];
        const img = dropdown.querySelector(".slide-image");

        if (images.length > 0) {
            img.src = images[0];
        } 

        updateSliderButtons(dropdown, images);
    }
}


// ================= SLIDER =================

const imageSets = {
    "Data Center 1": [
        "images/data-center-1.jpg"
    ],
    "Data Center 2": [
        "images/data-center-2.jpg"
    ],
    "Hotel D'Esta 88": [
        "images/hotel-88-a.jpg", 
        "images/hotel-88-b.jpg", 
        "images/hotel-88-c.jpg"
    ],
    "Private House": [
        "images/private-house-a.jpg", 
        "images/private-house-b.jpg",
        "images/private-house-c.jpg",
    ],
    "Compiled Project - 2011 to 2014": [
        "images/compiled-portfolio-a.jpg",
        "images/compiled-portfolio-b.jpg",
        "images/compiled-portfolio-c.jpg",
        "images/compiled-portfolio-d.jpg",
        "images/compiled-portfolio-e.jpg",
        "images/compiled-portfolio-f.jpg",
        "images/compiled-portfolio-g.jpg",
        "images/compiled-portfolio-h.jpg",
        "images/compiled-portfolio-i.jpg",
        "images/compiled-portfolio-j.jpg",
        "images/compiled-portfolio-k.jpg",
        "images/compiled-portfolio-l.jpg",
        "images/compiled-portfolio-m.jpg",
        "images/compiled-portfolio-n.jpg",
        "images/compiled-portfolio-o.jpg",
        "images/compiled-portfolio-p.jpg",
        "images/compiled-portfolio-q.jpg",
        "images/compiled-portfolio-r.jpg",
        "images/compiled-portfolio-s.jpg"
    ]
};

function updateSliderButtons(container, images) {
    const prevBtn = container.querySelector(".prev");
    const nextBtn = container.querySelector(".next");

    if (images.length <= 1) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
    }
}

function nextImage(event, btn) {
    event.stopPropagation();

    const projectItem = btn.closest(".project-item");
    const title = projectItem.querySelector("h3").innerText.trim();
    const images = imageSets[title]; 

    if (!images || images.length <= 1) return;

    const container = btn.closest(".project-dropdown");
    const img = container.querySelector(".slide-image");

    let currentIndex = images.findIndex(src => img.src.includes(src));
    currentIndex = (currentIndex + 1) % images.length;

    img.src = images[currentIndex];
}

function prevImage(event, btn) {
    event.stopPropagation();

    const projectItem = btn.closest(".project-item");
    const title = projectItem.querySelector("h3").innerText.trim();
    const images = imageSets[title]; 

    if (!images || images.length <= 1) return;

    const container = btn.closest(".project-dropdown");
    const img = container.querySelector(".slide-image");

    let currentIndex = images.findIndex(src => img.src.includes(src));
    currentIndex = (currentIndex - 1 + images.length) % images.length;


    img.src = images[currentIndex];
}