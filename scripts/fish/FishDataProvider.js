/*
Your job is to define what a JavaScript object would look like. What keys should you create on each fish object? Each fish will have the same keys, but the state of each will be different - meaning the keys will have different values.
 */

const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        length: 57,
        locationHarvested: "creek out back",
        typeOfFish: "Beta",
    },
    {
        name: "Poppy",
        food: "seeds",
        length: 100,
        locationHarvested: "Ohio River",
        typeOfFish: "Sun Fish",
    },
    {
        name: "Sam",
        food: "other fish",
        length: 68,
        locationHarvested: "South of France",
        typeOfFish: "Clown",
    },
    {
        name: "Marney",
        food: "Jelly Fish",
        length: 307,
        locationHarvested: "Atlantic",
        typeOfFish: "Big Fish",
    },
    {
        name: "Bruce",
        food: "Anything it wants ",
        length: 72,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark",
    },
    {
        name: "Nancy",
        food: "Anything it wants ",
        length: 85,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark",
    },
    {
        name: "Duke",
        food: "Anything it wants ",
        length: 8,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark",
    },
    {
        name: "Samson",
        food: "Anything it wants ",
        length: 48,
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark",
    },
];
// This is new code. Added this from GitHub exercise.
//export const useFish = () => {
//    return fishCollection.slice();
//};

// Adding a filtering function for 3 and 5 inch fish
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = [];

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {holyFish.push(fish)}
    };

    return holyFish;
};

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = [];

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0) {soldiers.push(fish)}
    };
    
    return soldiers;
};

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = [];

    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 & fish.length % 3 !== 0) {regularFish.push(fish)}
    };
    
    return regularFish;
};

// Now concat in order of importance and serve that array as useFish function from before

let orderedFishCollection = mostHolyFish();
orderedFishCollection = orderedFishCollection.concat(soldierFish());
orderedFishCollection = orderedFishCollection.concat(nonHolyFish());

export const useFish = () => {
    return orderedFishCollection.slice();
};
