var home = document.getElementById('home');
var aboutMe = document.getElementById('aboutMe');
var projects = document.getElementById('projects');

var hLabel = document.getElementById('homeLabel');
var aLabel = document.getElementById('aboutMeLabel');
var pLabel = document.getElementById('projectsLabel');

const projectTitles = [
    'Cafe Reservation System',
    '선문버스 App',
    '바름대부 온라인 서비스',
    '이끌래요 관리자 웹 페이지',
    'WereOne',
    'DK 미디어 1',
    '신성 CMS 및 DK 미디어 2',
]

const projectRows = document.querySelectorAll('.row');
const pLength = projectRows.length;

let project = [];
let pList = [];

for (let i = 0; i < pLength; i++) {
    const curP = document.getElementById(`p${i + 1}`);
    const curProject = document.getElementById(`project${i + 1}`);
    pList.push(curP);
    project.push(curProject);
}

const project_title = document.querySelector('#projects .project.section_title.whiteFont h1');
project_title.innerHTML = `Project ${pLength} - ${projectTitles[pLength - 1]}`;

var list = [home, aboutMe, projects];
// var pList = [project1, project2, project3, project4, project5, project6];

var white = "#FFFFFF";
var gray = "#616161";

var cube = document.getElementById('portfolio');
var whiteFilter = "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)"
var grayFilter = "invert(90%) sepia(0%) saturate(40%) hue-rotate(218deg) brightness(87%) contrast(93%)"

function projectClicked(select) {
    id = select.id
    idx = id.split('')[1];

    for (let i = 0; i < pLength; i++) {
        pList[i].classList.remove('active_project');
        project[i].classList.remove('active_project');
        pList[i].style.color = gray;
    }
    project_title.innerHTML = `Project ${idx} - ${projectTitles[idx - 1]}`;
    pList[idx - 1].style.color = white;
    pList[idx - 1].classList.add('active_project');
    project[idx - 1].classList.add('active_project');
}

function homeF() {
    list[0].classList.add('active_section');
    list[2].classList.remove('active_section');
    list[1].classList.remove('active_section');
    cube.style.transform = "none";
    hLabel.style.filter = whiteFilter;
    aLabel.style.filter = grayFilter;
    pLabel.style.filter = grayFilter;
}   

function aboutMeF() {
    list[1].classList.add('active_section');
    list[2].classList.remove('active_section');
    list[0].classList.remove('active_section');
    cube.style.transform = "rotateY(-120deg)";
    aLabel.style.filter = whiteFilter;
    hLabel.style.filter = grayFilter;
    pLabel.style.filter = grayFilter;
}

function projectsF() {
    list[2].classList.add('active_section');
    list[1].classList.remove('active_section');
    list[0].classList.remove('active_section');
    cube.style.transform = "rotateY(-240deg)";
    pLabel.style.filter = whiteFilter;
    aLabel.style.filter = grayFilter;
    hLabel.style.filter = grayFilter;
}
/* 이 아래로 바꿀 계획 - 프로젝트 가시화
* 0 = none
* -74deg
* -148deg
* -222deg
* -296deg
*
function project1_F() {
    list[2].classList.add('active_section');
    list[0].classList.remove('active_section');
    list[1].classList.remove('active_section');
    list[3].classList.remove('active_section');
    list[4].classList.remove('active_section');
    cube.style.transform = "rotateY(-148deg)";
    pLabel.style.filter = whiteFilter;
    aLabel.style.filter = grayFilter;
    hLabel.style.filter = grayFilter;
}

function project2_F() {
    list[3].classList.add('active_section');
    list[0].classList.remove('active_section');
    list[1].classList.remove('active_section');
    list[2].classList.remove('active_section');
    list[4].classList.remove('active_section');
    cube.style.transform = "rotateY(-222deg)";
    pLabel.style.filter = whiteFilter;
    aLabel.style.filter = grayFilter;
    hLabel.style.filter = grayFilter;

}

function project3_F() {
    list[4].classList.add('active_section');
    list[0].classList.remove('active_section');
    list[3].classList.remove('active_section');
    list[1].classList.remove('active_section');
    list[2].classList.remove('active_section');
    cube.style.transform = "rotateY(-296deg)";
    pLabel.style.filter = whiteFilter;
    aLabel.style.filter = grayFilter;
    hLabel.style.filter = grayFilter;
}
*/

function nextPage() {
    if (list[0].classList.contains('active_section')) {
        aboutMeF();
    } else if (list[1].classList.contains('active_section')) {
        projectsF();
    } else {
        homeF();
    }
}


function prevPage() {
    if (list[0].classList.contains('active_section')) {
        projectsF();
    } else if (list[2].classList.contains('active_section')) {
        aboutMeF();
    } else {
        homeF();
    }
}

/* 프로젝트 가시화
function nextPage_1() {
    if (list[0].classList.contains('active_section')) {
        aboutMeF();
    } else if (list[1].classList.contains('active_section')) {
        project1_F();
    } else if (list[2].classList.contains('active_section')) {
        project2_F();
    } else if (list[3].classList.contains('active_section')) {
        project3_F();
    } else {
        homeF();
    }
}

function prevPage_1() {
    if (list[0].classList.contains('active_section')) {
        projects3_F();
    } else if (list[1].classList.contains('active_section')) {
        homeF();
    } else if (list[2].classList.contains('active_section')) {
        aboutMeF();
    } else if (list[3].classList.contains('active_section')) {
        project1_F();
    } else {
        project2_F();
    }
}
*/