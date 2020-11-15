"use strict"

window.onload = (e) => {
    init();
}

function init(){
    let pageDoc = document.getElementsByClassName("container");


    Array.prototype.forEach.call(pageDoc, docSpread => {

    console.log(pageDoc);
    console.log(`./${docSpread.dataset.file}.json`)
    let url = `./${docSpread.dataset.file}.json`;
    getData(url);
    });

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
    
        let pageGrid = document.querySelector(".pagegrid");
    
        for (let i = 0; i < projects.length; i++){ //for loop looping through project object to create project tiles
            let pageBlock = projects[i];
            // let pageBlockDiv = pageGrid.appendChild(document.createElement("div"));
            // pageBlockDiv.className = "pageblock";
            // pageBlockDiv.classList.add(pageBlock.size);

            if (pageBlock.type == "h1"){
                createH1(pageBlock.text, pageBlock.size, pageBlock.column, pageBlock.row);
            }

            else if (pageBlock.type == "h2"){
                createH2(pageBlock.text, pageBlock.size, pageBlock.column, pageBlock.row);
            }

            else if (pageBlock.type == "p"){
                createParagraph(pageBlock.text, pageBlock.size, pageBlock.column, pageBlock.row);
            }

            else if (pageBlock.type == "img"){
                createPic(pageBlock.url, pageBlock.size, pageBlock.column, pageBlock.row, pageBlock.fancybox);
            }

            else if (pageBlock.type == "video"){
                createmyVideo(pageBlock.url, pageBlock.size, pageBlock.column, pageBlock.row, pageBlock.controls, pageBlock.autoplay, pageBlock.loop);
            }

            else if (pageBlock.type == "header"){
                createHeader(pageBlock.title, pageBlock.date, pageBlock.description);
            }

            else if (pageBlock.type == "flexbox"){
                createFlexbox(pageBlock.title, pageBlock.date, pageBlock.description);
            }


            else {
                console.log("something went wrong reading the element block")
            }
        }
    }
    
    function dataError(e){
        console.log("An error occurred loading a json resource");
    }


    
    function createH1(text, size, column, row){
        let pageGrid = document.querySelector(".pagegrid");
        let newElement = pageGrid.appendChild(document.createElement("div"));
        newElement.classList.add("pagegrid__item", size, column);
        // newElement.style.gridColumnStart = column;
        newElement.style.gridRowStart = row;
        

        let blockTitle = newElement.appendChild(document.createElement("h1"));
        blockTitle.innerHTML = text;
    }


    function createH2(text, size, column, row){
        let pageGrid = document.querySelector(".pagegrid");
        let newElement = pageGrid.appendChild(document.createElement("div"));
        newElement.classList.add("pagegrid__item", size, column);
        // newElement.style.gridColumnStart = column;
        newElement.style.gridRowStart = row;
        

        let blockTitle = newElement.appendChild(document.createElement("h2"));
        blockTitle.innerHTML = text;
    }

    function createParagraph(text, size, column, row){
        let pageGrid = document.querySelector(".pagegrid");
        let newElement = pageGrid.appendChild(document.createElement("div"));
        newElement.classList.add("pagegrid__item", size, column);
        // newElement.style.gridColumnStart = column;
        newElement.style.gridRowStart = row;

        let blockTitle = newElement.appendChild(document.createElement("p"));
        blockTitle.innerHTML = text;
    }

    function createPic(url, size, column, row, fancybox){
        let pageGrid = document.querySelector(".pagegrid");

        if (fancybox == "true"){let newElement = pageGrid.appendChild(document.createElement("a"));
        newElement.classList.add("pagegrid__item", size, column);
        newElement.setAttribute("data-fancybox", "gallery")
        newElement.href = url;
        // newElement.style.gridColumnStart = column;
        newElement.style.gridRowStart = row;
        
        let blockTitle = newElement.appendChild(document.createElement("img"));
        blockTitle.src = url;
        blockTitle.classList.add("image");
        }

        else {
        let newElement = pageGrid.appendChild(document.createElement("img"));
        newElement.classList.add("pagegrid__item", size, column);
        newElement.src = url;
        // newElement.style.gridColumnStart = column;
        newElement.style.gridRowStart = row;
        }
        
    }

    function createmyVideo(url, size, column, row, controls, autoplay, loop){
        let pageGrid = document.querySelector(".pagegrid");
        let newElement = pageGrid.appendChild(document.createElement("video"));
        newElement.classList.add("pagegrid__item", size, column);
        newElement.src = url;
        // newElement.style.gridColumnStart = column;
        newElement.style.gridRowStart = row;

        if (controls == "true") {
            newElement.controls = "true";
        }
        else {
            newElement.controls = "";
        }
    
        if (autoplay == "true"){
            newElement.autoplay = "true";
        }
        else {
            newElement.autoplay = "";
        }
    
        if (loop == "true"){
        newElement.loop = "true";
        }
        else {
            newElement.loop = "";
        }
    }

    function createHeader(title, date, description){
        let pageGrid = document.querySelector(".pagegrid");
        let newElement = pageGrid.appendChild(document.createElement("div"));
        newElement.classList.add("pagegrid__item", "pagegrid__header");
        let headerH1 = newElement.appendChild(document.createElement("h1"));
        headerH1.classList.add("pagegrid__header__H1");
        headerH1.innerHTML = title;
        let headerDate = newElement.appendChild(document.createElement("h2"));
        headerDate.classList.add("pagegrid__header__date");
        headerDate.innerHTML = date;
        let headerDescription = newElement.appendChild(document.createElement("p"));
        headerDescription.classList.add("pagegrid__header__description");
        headerDescription.innerHTML = description;
    }

    function createFlexbox(title, date, description){
        let pageGrid = document.querySelector(".pagegrid");
        let newElement = pageGrid.appendChild(document.createElement("div"));
        newElement.classList.add();
    }