// JavaScript to dynamically present skills

document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.querySelector(".content");
    const skillsData = [
        { category: "General", skills: ["Communication Skills", "Leading Skills", "Problem Solver"] },
        { category: "IT Skills", skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "OpenTDB", "Express.js", "Microsoft Office"] },
    ];

    // Create a container for skills
    const skillsContainer = document.createElement("div");
    skillsContainer.className = "skills-container";
    skillsSection.appendChild(skillsContainer);

    skillsData.forEach((group) => {
        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = `${group.category}`;
        categoryTitle.className = "skills-category";

        const skillsList = document.createElement("ul");
        skillsList.className = "skills-list";

        group.skills.forEach((skill) => {
            const skillItem = document.createElement("li");
            skillItem.textContent = skill;
            skillItem.className = "skill-item";

            // Add animation on hover
            skillItem.addEventListener("mouseover", () => {
                skillItem.style.transform = "scale(1.1)";
                skillItem.style.color = "#0078D7";
            });
            skillItem.addEventListener("mouseout", () => {
                skillItem.style.transform = "scale(1)";
                skillItem.style.color = "inherit";
            });

            skillsList.appendChild(skillItem);
        });

        skillsContainer.appendChild(categoryTitle);
        skillsContainer.appendChild(skillsList);
    });
});
