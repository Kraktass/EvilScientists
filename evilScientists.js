var main = document.querySelector('.main-conent');
var submitForm = document.querySelector('#subform');
var evilScientists = [
    {
        name: 'Nostradamus',
        age: 65,
        henchmen: 1,
        description: 'Has plans to build a future-seeing machine'
    },
    {
        name: 'Mr.Freeze',
        age: 201,
        henchmen: 20,
        description: 'Wants to freeze the entire world'
    },
    {
        name: 'Dr.Frankenstein',
        age: 86,
        henchmen: 5,
        description: 'Dabbles in ressurection of humans'
    },
    {
        name: 'Nikola Tesla',
        age: 37,
        henchmen: 0,
        description: 'Wants to eradicate the world with his tesla coil'
    },
    {
        name: 'Robert Oppenheimer',
        age: 45,
        henchmen: 7,
        description: 'Wants to become death, the destroyer of worlds'
    },
];
function getScientistName() {
    var objectLength = evilScientists.length;
    for (var i = 0; i < objectLength; i++) {
        var scientistCards = document.getElementById("scientistCards");
        var cardContent = document.createElement("button");
        cardContent.textContent = evilScientists[i].name;
        scientistCards === null || scientistCards === void 0 ? void 0 : scientistCards.appendChild(cardContent);
        console.log(evilScientists[i].name);
    }
}
;
getScientistName();
submitForm === null || submitForm === void 0 ? void 0 : submitForm.addEventListener("click", function (e) {
    e.preventDefault();
    var scientistName = document.querySelector('#name');
    var scientistAge = document.querySelector('#age');
    var numberOfHenchmen = document.querySelector('#henchmen');
    var scientistDescription = document.querySelector('#description');
    var cardContent = document.querySelector('#scientistCards');
    var arr = {
        name: scientistName.value,
        age: parseFloat(scientistAge.value),
        henchmen: parseFloat(numberOfHenchmen.value),
        description: scientistDescription.value
    };
    console.log(arr);
    evilScientists.push(arr);
    console.log(arr);
    cardContent.innerHTML = "";
    getScientistName();
});
