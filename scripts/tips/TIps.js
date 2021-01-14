export function Tips(tipObject) {
    return `
    <h3>${tipObject.topic}</h3>
    <ul>
        <li>${tipObject.tip1}</li>
        <li>${tipObject.tip2}</li>
    </ul>`;
}
