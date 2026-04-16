const skillContainer = document.querySelector('#skill-button-container');
const currentSkill = document.querySelector('#current-skill');
const learningSkill = document.querySelector('#learning-skill');

function addSkills() {
    const div = document.createElement('img')
    div.setAttribute('src', 'https://devicon.dev/')

    skillContainer.classList.remove('hidden')
    skillContainer.appendChild(div)
}

currentSkill.addEventListener('click', addSkills);