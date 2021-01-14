/*
Your job is to define what a JavaScript object would look like. What keys should you create on each fish object? Each fish will have the same keys, but the state of each will be different - meaning the keys will have different values.
 */

const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        length: "57cm",
        locationHarvested: "creek out back",
        typeOfFish: "Beta",
    },
    {
        name: "Poppy",
        food: "seeds",
        length: "100cm",
        locationHarvested: "Ohio River",
        typeOfFish: "Sun Fish",
    },
    {
        name: "Sam",
        food: "other fish",
        length: "68cm",
        locationHarvested: "South of France",
        typeOfFish: "Clown",
    },
    {
        name: "Marney",
        food: "Jelly Fish",
        length: "307cm",
        locationHarvested: "Atlantic",
        typeOfFish: "Big Fish",
    },
    {
        name: "Bruce",
        food: "Anything it wants ",
        length: "1020cm",
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark",
    },
    {
        name: "Nancy",
        food: "Anything it wants ",
        length: "1020cm",
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark",
    },
    {
        name: "Duke",
        food: "Anything it wants ",
        length: "1020cm",
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark",
    },
    {
        name: "Samson",
        food: "Anything it wants ",
        length: "1020cm",
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark",
    },
    {
        name: "Bart",
        food: "crustaceans",
        length: "57cm",
        locationHarvested: "creek out back",
        typeOfFish: "Beta",
    },
    {
        name: "Poppy",
        food: "seeds",
        length: "100cm",
        locationHarvested: "Ohio River",
        typeOfFish: "Sun Fish",
    },
    {
        name: "Sam",
        food: "other fish",
        length: "68cm",
        locationHarvested: "South of France",
        typeOfFish: "Clown",
    },
    {
        name: "Marney",
        food: "Jelly Fish",
        length: "307cm",
        locationHarvested: "Atlantic",
        typeOfFish: "Big Fish",
    },
    {
        name: "Bruce",
        food: "Anything it wants ",
        length: "1020cm",
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark",
    },
    {
        name: "Nancy",
        food: "Anything it wants ",
        length: "1020cm",
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark",
    },
    {
        name: "Duke",
        food: "Anything it wants ",
        length: "1020cm",
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark",
    },
    {
        name: "Samson",
        food: "Anything it wants ",
        length: "1020cm",
        locationHarvested: "Pacific Ocean",
        typeOfFish: "Great White Shark",
    },
];
// This is new code. Added this from GitHub exercise.
export const useFish = () => {
    return fishCollection.slice();
};
