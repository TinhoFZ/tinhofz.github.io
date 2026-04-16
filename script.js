const skillContainer = document.querySelector('#skill-container');
const currentSkill = document.querySelector('#current-skill');
const learningSkill = document.querySelector('#learning-skill');

function addSkills() {
    skillContainer.classList.toggle('hidden');
}

currentSkill.addEventListener('click', addSkills);