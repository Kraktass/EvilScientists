
const main = document.querySelector('.main-conent') as HTMLElement;
const submitForm = document.querySelector('#subform') as HTMLInputElement;

type scientists = {
    name: string;
    age: number | string;
    henchmen: number | string;
    description: string;
}


const evilScientists: scientists[] = [
    {
        name: 'Nostradamus',
        age: 65,
        henchmen: 1,
        description: 'Has plans to build a future-seeing machine',
    },
    {
        name: 'Mr.Freeze',
        age: 201,
        henchmen: 20,
        description: 'Wants to freeze the entire world',
    },
    {
        name: 'Dr.Frankenstein',
        age: 86,
        henchmen: 5,
        description: 'Dabbles in ressurection of humans',
    },
    {
        name: 'Nikola Tesla',
        age: 37,
        henchmen: 0,
        description: 'Wants to eradicate the world with his tesla coil',
    },
    {
        name: 'Robert Oppenheimer',
        age: 45,
        henchmen: 7,
        description: 'Wants to become death, the destroyer of worlds',
    },
]



function getScientistName () {
    let objectLength = evilScientists.length;
    for (let i = 0; i < objectLength; i++) {
        const scientistCards = document.getElementById("scientistCards");
        const cardContent = document.createElement("button");
        cardContent.textContent = evilScientists[i].name;
        scientistCards?.appendChild(cardContent);
        console.log(evilScientists[i].name);
    }
};

getScientistName();


submitForm?.addEventListener("click", function(e){
    e.preventDefault();
    
    let scientistName = document.querySelector('#name') as HTMLInputElement;
    let scientistAge = document.querySelector('#age') as HTMLInputElement;
    let numberOfHenchmen = document.querySelector('#henchmen') as HTMLInputElement;
    let scientistDescription = document.querySelector('#description') as HTMLInputElement;
    let cardContent = document.querySelector('#scientistCards') as HTMLElement;

    let arr: scientists = {
        name: scientistName.value,
        age: parseFloat(scientistAge.value),
        henchmen: parseFloat(numberOfHenchmen.value),
        description: scientistDescription.value,
    }
    console.log(arr);
    evilScientists.push(arr);
    console.log(arr);
    cardContent.innerHTML = "";
    getScientistName();
});


