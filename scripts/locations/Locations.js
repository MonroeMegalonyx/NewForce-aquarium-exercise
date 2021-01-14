export function Locales(localesObject) {
    return `
    <section class="location-card">
    <img
      class="location-card__image"
      src="https://www.telegraph.co.uk/content/dam/Travel/2017/june/madagascar-miavana.jpg"
      alt="Place Picture"
    />
      <p>${localesObject.name}</p>
  </section>`;
}