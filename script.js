import config from "./config.json" assert { type: "json" };

const listElem = document.querySelector("[data-list]");
const headerElem = document.querySelector("[data-header]");
const titleElem = document.querySelector("[data-title]");
const faviconElem = document.querySelector("[data-favicon]");
const rootElem = document.documentElement;

const availableIcons = [
    {name: "fab fa-facebook-f", back: "4267B2", text: "456cba"},
    {name: "fab fa-twitter", back: "1DA1F2", text: "26a4f2"},
    {name: "fab fa-instagram", back: "E1306C", text: "e23670"},
    {name: "fab fa-linkedin-in", back: "2867B2", text: "2a6cbb"},
    {name: "fab fa-youtube", back: "ff0000", text: "ff1a1a"},
    {name: "fab fa-discord", back: "5865F2", text: "5979F6"},
    {name: "fab fa-pinterest", back: "E60023", text: "E60938"},
    {name: "fab fa-whatsapp", back: "25D366", text: "12D156"},
    {name: "fab fa-tiktok", back: "010101", text: "666"},
    {name: "fab fa-reddit", back: "FF4500", text: "FF4909"},
    {name: "fab fa-quora", back: "801B00", text: "A82400"},
    {name: "fab fa-telegram", back: "229ED9", text: "2AABEE"},
    {name: "fab fa-skype", back: "009EDC", text: "059EDB"},
    {name: "fab fa-github", back: "333", text: "f5f5f5"},
    {name: "fab fa-spotify", back: "1DB954", text: "2DB954"}
];

const getColorsByClassName = (className) => {
    const i = availableIcons.findIndex(icon => icon.name === className);
    if (i <= -1 || availableIcons[i].back == null || availableIcons[i].text == null || availableIcons[i].back === "" || availableIcons[i].text === "" ) return {name: className, back: "fff", text: "fff"};
    else return availableIcons[i];
};

const redirectTo = (link, target = "") => {
    if (target !== "_blank") {
        window.location.href = link;
    } else {
        window.open(link, target);
    }
};


config.selectedIcons.forEach((icon, index) => {
    let iconObj = document.createElement("li");
    let iconElem = document.createElement("i");

    let className = availableIcons[icon.index].name;
    iconElem.className = className;
    let incrementedIndex = index + 1;

    iconObj.addEventListener("click", e => redirectTo(icon.link, "_blank"));
    iconObj.appendChild(iconElem);
    listElem.appendChild(iconObj);

    const colors = getColorsByClassName(className);
    rootElem.style.setProperty(`--btn-hover-txt-${incrementedIndex}`, `#${colors.text}`);
    rootElem.style.setProperty(`--btn-hover-back-${incrementedIndex}`, `#${colors.back}`);
});
headerElem.innerHTML = config.username;
titleElem.textContent = config.username;
faviconElem.href = config.favicon;