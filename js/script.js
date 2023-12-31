/**
 * @type {object[]}
 */
const teamArray = [
    {
        name:  "Wayne Barnett",
        role: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg"  
    },
    
    {
        name:  "Angela Caroll",
        role: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg"  
    },

    {
        name:  "Walter Gordon",
        role: "Office Manager",
        picture: "walter-gordon-office-manager.jpg"  
    },
    
    {
        name:  "Angela Lopez",
        role: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"  
    },
    
    {
        name:  "Scott Estrada",
        role: "Developer",
        picture: "scott-estrada-developer.jpg"  
    },
    
    {
        name:  "Barbara Ramos",
        role: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"  
    },
    
]

/**
 * @type {Element}
 */
const memberListElement = document.querySelector("#memberList");


printArrayToConsole(teamArray);
printArrayToDOM(memberListElement, teamArray);

/**
 * Print a given array values to the console
 * @param {object[]} arrayToPrint The array that will be printed in console
 */
function printArrayToConsole(arrayToPrint) {
    arrayToPrint.forEach(element => console.log(`nome: ${element.name}, role: ${element.role}, picture: ${element.picture}`));
}

/**
 * Take values from a given array and they will be printed in a given Element in the DOM
 * @param {Element} htmlelement The Element in HTML where you want to print the array
 * @param {object[]} arrayToPrint The Array that contains the object that will be printed
 */
function printArrayToDOM(htmlelement, arrayToPrint) {
    arrayToPrint.forEach((element) => {
        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "fs-5", "text-center");
        listItem.textContent = `Nome: ${element.name}, Ruolo: ${element.role}, Foto: ${element.picture}`;
        htmlelement.append(listItem);
    })
}