import { useLocales } from "./LocationsDataProvider.js";
import { Locales } from "./Locations.js";

let localesContainer = document.querySelector("#location-list");

export function LocalesList() {
    const allTheLocales = useLocales();

    let LocalesListHTMLString = "";

    for (let i = 0; i < allTheLocales.length; i++) {
        LocalesListHTMLString += Locales(allTheLocales[i]);
    }

    console.log(LocalesListHTMLString);

    localesContainer.innerHTML = `<h2>Places I've Been</h2>${LocalesListHTMLString}`;
}
