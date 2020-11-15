"use strict"
window.onload = (e) => {
    init();
}

function init(){
    getData("./home.json");
}

function getData(url){ //function pulling the xhr from the url of the .json of projects
    let xhr = new XMLHttpRequest();
        xhr.onload = projectsLoaded;

    xhr.onerror = dataError;

    xhr.open("GET",url);

    xhr.send();

    
    }

function projectsLoaded(e){
    let xhr = e.target;
    // console.log(xhr.responseText);
    
    let obj = JSON.parse(xhr.responseText);

    if(!obj.projects || obj.projects.length == 0){
        return;
        dataError();
    }

    let projects = obj.projects;

    let workGrid = document.querySelector(".workgrid");

    for (let i = 0; i < projects.length; i++){ //for loop looping through project object to create project tiles
        let projectData = projects[i];
        console.log(projectData);
        let projectBlock = workGrid.appendChild(document.createElement("div"));
        projectBlock.className = "pageblock";
        projectBlock.id = "pageblock" + (i + 1);
        projectBlock.classList.add(projectData.size);
        projectBlock.classList.add(projectData.position);
        
        projectBlock.style.backgroundImage = `url(` + projectData.picture +`)`;

        // let projectBlockOverlay = projectBlock.appendChild(document.createElement("div"));
        // projectBlockOverlay.className = "pageblock__overlay";
        // projectBlockOverlay.id = "pageblock__overlay" + (i+1);

        let projectOverlay = projectBlock.appendChild(document.createElement("div"));
        projectOverlay.classList.add("pageblock__overlay");
        projectOverlay.id = "pageblock__overlay" + (i+1);
        projectOverlay.style.backgroundColor = projectData.color;

        let projectTextHolder = projectOverlay.appendChild(document.createElement("a"));
        projectTextHolder.classList.add("link", "pageblock__textholder");
        projectTextHolder.id = "pageblock__textholder" + (i+1);
        projectTextHolder.href = projectData.url;

        let projectTitle = projectTextHolder.appendChild(document.createElement("h2"));
        projectTitle.innerHTML = projectData.title;
        projectTitle.classList.add("pageblock__text");

        let projectCaption = projectTextHolder.appendChild(document.createElement("p"))
        projectCaption.innerHTML = projectData.caption;
        projectCaption.classList.add("pageblock__text");
    }

    for (let i = 1; i < (projects.length + 1); i++){
        let projectBlockTarget = document.getElementById(`pageblock__textholder${+i}`);
        projectBlockTarget.addEventListener("mouseover", function(){mouseIn(i)});
        projectBlockTarget.addEventListener("click", function(){mouseClick(projects[i - 1].url)});
        projectBlockTarget.addEventListener("mouseout", function(){mouseOut(i)});
    }
}

function dataError(e){
    console.log("An error occurred loading a json resource");
}

function mouseIn(pageBlockNum){
    //  console.log(pageBlockNum + " in");

    //  let projectBlockOverlay = document.getElementById*()
     let projectTextHolder = document.getElementById(`pageblock__textholder${+pageBlockNum}`);
     let projectOverlay = document.getElementById(`pageblock__overlay${+pageBlockNum}`);
    //  console.log(`pageblock__textholder${+pageBlockNum}`);
    //  projectTextHolder.classList.add("ibeenhovered");
    projectTextHolder.style.animation =  "pageBlockHover 0.5s cubic-bezier(0,.9,.7,1) 0s 1 normal"
    projectTextHolder.style.animationFillMode = "forwards";

    projectOverlay.style.animation =  "overlayHover 0.5s cubic-bezier(0,.9,.7,1) 0s 1 normal"
    projectOverlay.style.animationFillMode = "forwards";
}


function mouseOut(pageBlockNum){
    // console.log(pageBlockNum + " out");

    let projectTextHolder = document.getElementById(`pageblock__textholder${+pageBlockNum}`);
    let projectOverlay = document.getElementById(`pageblock__overlay${+pageBlockNum}`);
   //  console.log(`pageblock__textholder${+pageBlockNum}`);
   //  projectTextHolder.classList.add("ibeenhovered");
    projectTextHolder.style.animation =  "pageBlockHoverOut 0.5s cubic-bezier(0,.9,.7,1) 0s 1 normal"
    projectTextHolder.style.animationFillMode = "forwards";

    projectOverlay.style.animation =  "overlayHoverOut 0.5s cubic-bezier(0,.9,.7,1) 0s 1 normal"
    projectOverlay.style.animationFillMode = "forwards";
}

function mouseClick(url){
    // window.location.href = 'index.html'
    console.log("click " + url);
    // history.replaceState(undefined, undefined, "#hash_value")
    // window.location.href = url;
}