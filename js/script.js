const newAccProjects = [
    { name: "ArMobileFinal", description: "AR Mobile Final Project for Game Application Development (GAD) class", language: "C#", url: "https://github.com/Setha-idk2/ArMobileFinal" },
    { name: "attractions_catalog", description: "List attractions from around the world", language: "Blade", url: "https://github.com/Setha-idk2/attractions_catalog" },
    { name: "GAD_Midterm_car_game", description: "A simple car game with obstacles for Game Application Development (GAD) class midterm", language: "C# / Unity", url: "https://github.com/Setha-idk2/GAD_Midterm_car_game" },
    { name: "Motorcycle-helmet-detection", description: "Year 4 defend project. train a YOLO model to Detects if a motorcycle rider is wearing a helmet", language: "Python", url: "https://github.com/Setha-idk2/Motorcycle-helmet-detection" },
    { name: "portfolio", description: "A simple portfolio with HTML, JS and CSS", language: "HTML/CSS/JS", url: "https://github.com/Setha-idk2/portfolio" }
];

const oldAccProjects = [
    { name: "E4-group4-SmartMenuOrder", description: "Group project for Mobile Development class, Smart Menu Ordering System", language: "Dart", url: "https://github.com/Setha-idk/E4-group4-SmartMenuOrder" },
    { name: "re-exam", description: "Re-exam project for Web and Cloud Technologies (WCT) class", language: "Blade", url: "https://github.com/Setha-idk/re-exam" },
    { name: "WCT_final_Y3S2_odd_2", description: "Web and Cloud Technologies (WCT) class project for final", language: "Blade", url: "https://github.com/Setha-idk/WCT_final_Y3S2_odd_2" },
    { name: "Y3S2-Web-backend", description: "Web and Cloud Technologies (WCT) class Year 3 semester 2, company management project Backend", language: "PHP", url: "https://github.com/Setha-idk/Y3S2-Web-backend" },
    { name: "Y3S2-web-frontend", description: "Web and Cloud Technologies (WCT) class Year 3 semester 2, company management project Frontend", language: "Vue", url: "https://github.com/Setha-idk/Y3S2-web-frontend" }
];

function createProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-content">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-meta">
                    <span class="project-lang">${project.language || 'Code'}</span>
                    <a href="${project.url}" target="_blank" class="project-link">View Repo ↗</a>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // Render both sections directly
    document.getElementById('new-projects-container').innerHTML =
        newAccProjects.map(createProjectCard).join('');

    document.getElementById('old-projects-container').innerHTML =
        oldAccProjects.map(createProjectCard).join('');

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
