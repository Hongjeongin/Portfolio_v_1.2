const projectTitleList = document.querySelector('.project_list');
const projectRowList = document.querySelectorAll('.row');

projectRowList[0].classList.add('active_project');

let projectTitleInnerHTML = '';

for (let i = 7; i >= 1; i--) {
    projectTitleInnerHTML += `
        <div class="project_small_title">
            <a href="#" id="p${i}" onclick="projectClicked(this);">project ${i}</a> 
        </div>`;
}

projectTitleList.innerHTML = projectTitleInnerHTML;