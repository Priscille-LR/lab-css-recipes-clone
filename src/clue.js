// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'priest',
        age: 63,
        color: 'green',
        
    },
    {
        firstName: 'Scarlett',
        lastName: 'Scarlett',
        occupation: 'femme fatale',
        age: 31,
        color: 'red',
        
    },
    {
        firstName: 'Margaret',
        lastName: 'White',
        occupation: 'maid',
        age: 46,
        color: 'white',
        
    },
    {
        firstName: 'Edgar',
        lastName: 'Plum',
        occupation: 'professor',
        age: 35,
        color: 'purple',
        
    },
    {
        firstName: 'Algernon',
        lastName: 'Mustard',
        occupation: 'military',
        age: 50,
        color: 'yellow',
        
    },
    {
        firstName: 'Henrietta',
        lastName: 'Peacock',
        occupation: 'ornithologist ',
        age: 62,
        color: 'green',
        
    }

];

// Rooms Array

const roomsArray = [
    {
        name: "Bathroom" 
    }, 
    {
        name: "Study" 
    },
    {
        name: "Dining Room" 
    },
    {
        name: "Game Room" 
    },
    {
        name: "Bedroom1" 
    },
    {
        name: "Bedroom2" 
    },
    {
        name: "Bedroom3" 
    },
    {
        name: "Bedroom4" 
    },
    {
        name: "Living Room" 
    },
    {
        name: "Kitchen" 
    },
    {
        name: "Courtyard" 
    },
    {
        name: "Cellar" 
    },
    {
        name: "Attic" 
    },
    {
        name: "Secret Room" 
    },
    {
        name: "Toilets" 
    },
];

// Weapons Array

const weaponsArray = [
    {
        name: 'Revolver',
        weight: 600
    },
    {
        name: 'Dagger',
        weight: 400
    },
    {
        name: 'Lead Pipe',
        weight: 800
    },
    {
        name: 'Rope',
        weight: 200
    },
    {
        name: 'Candlestick',
        weight: 1500
    },
    {
        name: 'Wrench',
        weight: 600
    },
    {
        name: 'Rifle',
        weight: 1200
    },
    {
        name: 'Kitchen knife',
        weight: 400
    },
    {
        name: 'Cricket bat',
        weight: 1100
    }
];


// ITERATION 2

function selectRandom(array) {
    return randomElement = array[Math.floor(Math.random() * array.length)]
}

function pickMystery() {
    return {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }
}


// ITERATION 3

function revealMystery(envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name} !!!`
}


///console.log(selectRandom(suspectsArray))
const mystery = pickMystery()
console.log(mystery)
console.log(revealMystery(mystery))