const devLens = document.getElementById("js-DevLens");
const styleSpy = document.getElementById("js-StyleSpy");
const speedBoost = document.getElementById("js-SpeedBoost");
const JSONWizard = document.getElementById("js-JSONWizard");
const tabMasterPro = document.getElementById("js-TabMaster");
const viewportBuddy = document.getElementById("js-ViewportBuddy");
const markupNotes = document.getElementById("js-MarkupNotes");
const gridGuides = document.getElementById("js-GridGuides");
const palettePicker = document.getElementById("js-PalettePicker");
const linkChecker = document.getElementById("js-LinkChecker");
const DOMSnapshot = document.getElementById("js-DOMSnapshot");
const consolePlus = document.getElementById("js-ConsolePlus");


const devLensCard = document.getElementById("devLens-card");
const styleSpyCard = document.getElementById("styleSpy-card");
const speedBoostCard = document.getElementById("speedBoost-card");
const JSONWizardCard = document.getElementById("JSONWizard-card");
const tabMasterProCard = document.getElementById("tabMasterPro-card");
const viewportBuddyCard = document.getElementById("viewportBuddy-card");
const markupNotesCard = document.getElementById("markupNotes-card");
const gridGuidesCard = document.getElementById("gridGuides-card");
const palettePickerCard = document.getElementById("palettePicker-card");
const linkCheckerCard = document.getElementById("linkChecker-card");
const DOMSnapshotCard = document.getElementById("DOMSnapshot-card");
const consolePlusCard = document.getElementById("consolePlus-card");




const allBtn = document.getElementById("all-Btn");
const activeBtn = document.getElementById("active-Btn");
const inactiveBtn = document.getElementById("inactive-Btn");

const allCheckbox = document.getElementById("all-checkbox");
const activeCheckbox = document.getElementById("active-checkbox");
const inactiveCheckbox = document.getElementById("inactive-checkbox");






let estensioni = [
  { nome: "devLens", attiva: false, el: devLens, card: devLensCard},
  { nome: "styleSpy", attiva: false, el: styleSpy, card: styleSpyCard },
  { nome: "speedBoost", attiva: false, el: speedBoost, card: speedBoostCard },
  { nome: "JSONWizard", attiva: false, el: JSONWizard, card: JSONWizardCard },
  { nome: "tabMasterPro", attiva: false, el: tabMasterPro, card: tabMasterProCard },
  { nome: "viewportBuddy", attiva: false, el: viewportBuddy, card: viewportBuddyCard },
  { nome: "markupNotes", attiva: false, el: markupNotes, card: markupNotesCard },
  { nome: "gridGuides", attiva: false, el: gridGuides, card: gridGuidesCard },
  { nome: "palettePicker", attiva: false, el: palettePicker, card: palettePickerCard },
  { nome: "linkChecker", attiva: false, el: linkChecker, card: linkCheckerCard },
  { nome: "DOMSnapshot", attiva: false, el: DOMSnapshot, card: DOMSnapshotCard },
  { nome: "consolePlus", attiva: false, el: consolePlus, card: consolePlusCard }
];


let selectors = [
    {tipo: "all", attiva: true, el: allCheckbox, btn: allBtn },
    {tipo: "active", attiva: false, el: activeCheckbox, btn: activeBtn},
    {tipo: "inactive", attiva: false, el: inactiveCheckbox, btn: inactiveBtn},
];



const devLensRemove = document.getElementById("devLens-remove");
const styleSpyRemove = document.getElementById("styleSpy-remove");
const speedBoostRemove = document.getElementById("speedBoost-remove");
const JSONWizardRemove = document.getElementById("JSONWizard-remove");
const tabMasterProRemove = document.getElementById("tabMasterPro-remove");
const viewportBuddyRemove = document.getElementById("viewportBuddy-remove");
const markupNotesRemove = document.getElementById("markupNotes-remove");
const gridGuidesRemove = document.getElementById("gridGuides-remove");
const palettePickerRemove = document.getElementById("palettePicker-remove");
const linkCheckerRemove = document.getElementById("linkChecker-remove");
const DOMSnapshotRemove = document.getElementById("DOMSnapshot-remove");
const consolePlusRemove = document.getElementById("consolePlus-remove");


const RemoveBtn = [
    { bottone: devLensRemove, removed: false, riferimento: devLensCard },
    { bottone: styleSpyRemove, removed: false, riferimento: styleSpyCard },
    { bottone: speedBoostRemove, removed: false, riferimento: speedBoostCard },
    { bottone: JSONWizardRemove, removed: false, riferimento: JSONWizardCard },
    { bottone: tabMasterProRemove, removed: false, riferimento: tabMasterProCard },
    { bottone: viewportBuddyRemove, removed: false, riferimento: viewportBuddyCard },
    { bottone: markupNotesRemove, removed: false, riferimento: markupNotesCard },
    { bottone: gridGuidesRemove, removed: false, riferimento: gridGuidesCard },
    { bottone: palettePickerRemove, removed: false, riferimento: palettePickerCard },
    { bottone: linkCheckerRemove, removed: false, riferimento: linkCheckerCard },
    { bottone: DOMSnapshotRemove, removed: false, riferimento: DOMSnapshotCard },
    { bottone: consolePlusRemove, removed: false, riferimento: consolePlusCard }
];