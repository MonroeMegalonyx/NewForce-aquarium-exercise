const tipCollection = [
    {
        topic: "Salinity",
        tip1: "Keep it salty",
        tip2: "Just dump in some salt",
    },
    {
        topic: "Temperature",
        tip1: "Very hot",
        tip2: "Basically boiling"
    },
];

export const useTips = () => {
    return tipCollection.slice();
};
