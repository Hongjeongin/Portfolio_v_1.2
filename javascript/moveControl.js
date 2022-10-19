
var home = document.getElementById('home');
var aboutMe = document.getElementById('aboutMe');
var projects = document.getElementById('projects');

var hLabel = document.getElementById('homeLabel');
var aLabel = document.getElementById('aboutMeLabel');
var pLabel = document.getElementById('projectsLabel');

var project1 = document.getElementById('p1');
var project2 = document.getElementById('p2');
var project3 = document.getElementById('p3');

var p1 = document.getElementById('project1');
var p2 = document.getElementById('project2');
var p3 = document.getElementById('project3');

var list = [home, aboutMe, projects];
var pList = [project1, project2, project3];

var white = "#FFFFFF";
var gray = "#616161";

var cube = document.getElementById('portfolio');
var whiteFilter = "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)"
var grayFilter = "invert(90%) sepia(0%) saturate(40%) hue-rotate(218deg) brightness(87%) contrast(93%)"

function projectClicked(select) {
    if (select == 'p1') {
        p1.classList.add('active_project');
        p2.classList.remove('active_project');
        p3.classList.remove('active_project');
        pList[0].style.color = white;
        pList[1].style.color = gray;
        pList[2].style.color = gray;
    } else if (select == 'p2') {
        p1.classList.remove('active_project');
        p2.classList.add('active_project');
        p3.classList.remove('active_project');
        pList[0].style.color = gray;
        pList[1].style.color = white;
        pList[2].style.color = gray;
    } else if(select == 'p3') {
        p1.classList.remove('active_project');
        p2.classList.remove('active_project');
        p3.classList.add('active_project');
        pList[0].style.color = gray;
        pList[1].style.color = gray;
        pList[2].style.color = white;
    }
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