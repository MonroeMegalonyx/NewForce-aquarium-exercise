import { useTips } from "./TipsDataProvider.js";
import { Tips } from "./Tips.js";

// console.log("this is fish collection", fishCollection)
let tipContainer = document.querySelector("#fishcare-tips");

export function TipList() {
    const allTheTips = useTips();

    let TipsListHTMLString = "";

    for (let i = 0; i < allTheTips.length; i++) {
        TipsListHTMLString += Tips(allTheTips[i]);
    }

    console.log(TipsListHTMLString);

    tipContainer.innerHTML = `<h2>Fish Tips</h2>${TipsListHTMLString}`;
}
