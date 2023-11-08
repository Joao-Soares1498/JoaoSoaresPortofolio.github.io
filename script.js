let arrow = document.getElementById('arrow');
let mid = document.getElementById('mid');
let btn_projects = document.getElementById('btn-projects');
let btn_skills = document.getElementById('btn-skills');
let btn_about = document.getElementById('btn-about');
let projects = document.getElementById('subject1');
let skills = document.getElementById('skills');
let about = document.getElementById('about');

arrow.addEventListener('click',function(){
    mid.scrollIntoView();
});

btn_projects.addEventListener('click',function(){
    projects.scrollIntoView();
});

btn_skills.addEventListener('click',function(){
    skills.scrollIntoView();
});

btn_about.addEventListener('click',function(){
    about.scrollIntoView();
});