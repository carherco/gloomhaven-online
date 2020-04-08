import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attack-modifier-deck',
  templateUrl: './attack-modifier-deck.component.html',
  styleUrls: ['./attack-modifier-deck.component.css']
})
export class AttackModifierDeckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //attack modifiers
// let modifierDeck = document.getElementById('amDeck');
// let playedModifiers = document.getElementById('playedModifiers');
// let mod1 = "assets/plus0.png";
// let mod2 = "assets/plus0.png";
// let mod3 = "assets/plus0.png";
// let mod4 = "assets/plus0.png";
// let mod5 = "assets/plus0.png";
// let mod6 = "assets/plus0.png";
// let mod7 = "assets/plus1.png";
// let mod8 = "assets/plus1.png";
// let mod9 = "assets/plus1.png";
// let mod10 = "assets/plus1.png";
// let mod11 = "assets/plus1.png";
// let mod12 = "assets/minus1.png";
// let mod13 = "assets/minus1.png";
// let mod14 = "assets/minus1.png";
// let mod15 = "assets/minus1.png";
// let mod16 = "assets/minus1.png";
// let mod17 = "assets/minus2.png";
// let mod18 = "assets/plus2.png";
// let mod19 = "assets/curseShuffle.png";
// let mod20 = "assets/blessShuffle.png";
// let blessCard = "assets/bless.png";
// let curseCard = "assets/curse.png";
// let minus1 = "assets/newMinus1.png";
// let modDeckArray = [mod1, mod2, mod3, mod4, mod5, mod6, mod7, mod8, mod9, mod10, mod11, mod12, mod13, mod14, mod15, mod16, mod17, mod18, mod19, mod20];
// let defaultDeckArray = [];
// let playedModifierArray = [];
// let mustShuffle = document.getElementById("mustShuffle");
// let blessButton = document.getElementById('bless');
// let curseButton = document.getElementById('curse');
// let shuffleModsButton = document.getElementById('shuffleMods');
// let numOfCurses = 0;
// let numOfBlesses = 0;
// let addMinusOne = document.getElementById('add-minus-1');
// let cardsInDeckText = document.getElementById("cardsInDeck");
// let resetDeckButton = document.getElementById("reset-deck");
// let usedMods = document.getElementById("used-modifier-cards");

// modifierDeck.onclick = () => {
//   if(modDeckArray.length>0){
//     playedModifierArray.push(modDeckArray[0]);
//     var DOM_img = document.createElement("img");
//     DOM_img.src = playedModifierArray[playedModifierArray.length - 1];
//     usedMods.appendChild(DOM_img);
//     playedModifiers.classList.remove('hiding');
//     playedModifiers.src = playedModifierArray[playedModifierArray.length - 1];
//     playedModifiers.classList.add(`${modDeckArray[0]}`);
//     modDeckArray.splice(0, 1);
//     if (modDeckArray.length === 0){
//       modifierDeck.classList.add("hiding");
//     }
//     if (playedModifiers.classList.contains("assets/curseShuffle.png") || playedModifiers.classList.contains("assets/blessShuffle.png")){
//       mustShuffle.classList.remove("invisible");
//     }
//     if (playedModifiers.classList.contains("assets/curse.png")){
//       numOfCurses--;
//       cursesInDeck.innerHTML = "Extra Curses in Deck: "+numOfCurses;
//     }
//     if (playedModifiers.classList.contains("assets/bless.png")){
//       numOfBlesses--;
//       blessesInDeck.innerHTML = "Extra Blesses in Deck: "+numOfBlesses;
//     }
//     if (playedModifiers.classList.contains("assets/bless.png") || playedModifiers.classList.contains("assets/curse.png")){
//       playedModifierArray.splice((playedModifierArray.length-1), 1);
//       playedModifiers.classList.remove("assets/bless.png");
//       playedModifiers.classList.remove("assets/curse.png");
//     }
//     cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//   }
// }

// function shuffleModifierDeck (){
//   while (playedModifierArray.length > 0){
//     modDeckArray.push(playedModifierArray[playedModifierArray.length - 1]);
//     playedModifierArray.pop();
//     playedModifiers.src = '';
//     modifierDeck.src = "assets/amBack.png"
//     mustShuffle.classList.add('invisible');
//     playedModifiers.className = "attack-modifier";
//     playedModifiers.classList.add('hiding');
//     modifierDeck.classList.remove("hiding");
//     cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     usedMods.innerHTML = "";
//     shuffleDeck();
//   }
// }

// function shuffleDeck (){
//   var deckCopy = modDeckArray.slice();
//   modDeckArray = [];
//   while (deckCopy.length>0){
//     var randomNumber = Math.floor(Math.random()*deckCopy.length);
//     modDeckArray.push(deckCopy[randomNumber]);
//     deckCopy.splice(randomNumber,1);
//   }
// }

// shuffleModsButton.onclick = () => {
//   shuffleModifierDeck();
// }

// function blessDeck (){
//   if(numOfBlesses<10){
//     modDeckArray.push(blessCard);
//     modifierDeck.classList.remove("hiding");
//     numOfBlesses++
//     cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     shuffleDeck();
//     blessesInDeck.innerHTML = "Extra Blesses in Deck: "+numOfBlesses;
//   }
// }

// blessButton.onclick = () => {
//   blessDeck();
// }

// function curseDeck (){
//   if (numOfCurses<10){
//     modDeckArray.push(curseCard);
//     modifierDeck.classList.remove("hiding");
//     numOfCurses++
//     cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     shuffleDeck();
//     cursesInDeck.innerHTML = "Extra Curses in Deck: "+numOfCurses;
//   }
// }

// curseButton.onclick = () => {
//   curseDeck();
// }

// function addMinus1 (){
//   modDeckArray.push(minus1);
//   cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
// }

// addMinusOne.onclick = () => {
//   addMinus1();
// }

// function resetDeck () {
//   shuffleModifierDeck();
//   modDeckArray = defaultDeckArray.slice();
//   numOfCurses = 0;
//   numOfBlesses = 0;
//   cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//   blessesInDeck.innerHTML = "Extra Blesses in Deck: "+numOfBlesses;
//   cursesInDeck.innerHTML = "Extra Curses in Deck: "+numOfCurses;
//   shuffleDeck();
// }

// resetDeckButton.onclick = () => {
//   resetDeck();
// }


//Modal for showing what is in the played modifier deck

// var zoomModal = document.getElementById("zoomModal");
// var close = document.getElementsByClassName("close")[0];
// playedModifiers.onclick = function() {
//   zoomModal.style.display = "block";
//     }

// close.onclick = function() {
//     zoomModal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == zoomModal) {
//         zoomModal.style.display = "none";
//     }
// }


// //Doomstalker Perks
// let dsConfirmPerksButton = document.getElementById("dsConfirmPerksButton");
// let dsPerk1 = document.getElementById("dsRemove2minus1-1");
// let dsPerk2 = document.getElementById("dsRemove2minus1-2");
// let dsPerk3 = document.getElementById("dsReplacePlus0withPlus1-1");
// let dsPerk4 = document.getElementById("dsReplacePlus0withPlus1-2");
// let dsPerk5 = document.getElementById("dsReplacePlus0withPlus1-3");
// let dsPerk6 = document.getElementById("dsAddRollingPlus1-1");
// let dsPerk7 = document.getElementById("dsAddRollingPlus1-2");
// let dsPerk8 = document.getElementById("dsAddPlus2Muddle");
// let dsPerk9 = document.getElementById("dsAddPlus1Poison");
// let dsPerk10 = document.getElementById("dsAddPlus1Wound");
// let dsPerk11 = document.getElementById("dsAddPlus1Immobilize");
// let dsPerk12 = document.getElementById("dsAddPlus0Stun");
// let dsPerk13 = document.getElementById("dsAddRollingAddTarget-1");
// let dsPerk14 = document.getElementById("dsAddRollingAddTarget-2");
// let dsPerk15 = document.getElementById("dsIgnoreNegEffects");
// dsConfirmPerksButton.onclick = () =>{
// if(dsPerk1.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod12){
//       modDeckArray.splice(i, 2);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk1", "dschosen", 365);
// } else {
//   setCookie("perk1", "notChosen", 365);
// }
// if(dsPerk2.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod14){
//       modDeckArray.splice(i, 2);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk2", "dschosen", 365);
// } else {
//   setCookie("perk2", "notChosen", 365);
// }
// if (dsPerk3.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod1){
//       modDeckArray.splice(i, 2);
//       let newCard = "assets/dsPerks/dsPlus1.png";
//       modDeckArray.push(newCard);
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk3", "dschosen", 365);
// } else {
//   setCookie("perk3", "notChosen", 365);
// }
// if (dsPerk4.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod3){
//       modDeckArray.splice(i, 2);
//       let newCard = "assets/dsPerks/dsPlus1.png";
//       modDeckArray.push(newCard);
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk4", "dschosen", 365);
// } else {
//   setCookie("perk4", "notChosen", 365);
// }
// if (dsPerk5.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod5){
//       modDeckArray.splice(i, 2);
//       let newCard = "assets/dsPerks/dsPlus1.png";
//       modDeckArray.push(newCard);
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk5", "dschosen", 365);
// } else {
//   setCookie("perk5", "notChosen", 365);
// }
// if (dsPerk6.classList.contains('checked')){
//   let newCard = "assets/dsPerks/dsRollingPlus1.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk6", "dschosen", 365);
// } else {
//   setCookie("perk6", "notChosen", 365);
// }
// if (dsPerk7.classList.contains('checked')){
//   let newCard = "assets/dsPerks/dsRollingPlus1.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk7", "dschosen", 365);
// } else {
//   setCookie("perk7", "notChosen", 365);
// }
// if (dsPerk8.classList.contains('checked')){
//   let newCard = "assets/dsPerks/dsPlus2Muddle.png";
//   modDeckArray.push(newCard);
//   setCookie("perk8", "dschosen", 365);
// } else {
//   setCookie("perk8", "notChosen", 365);
// }
// if (dsPerk9.classList.contains('checked')){
//   let newCard = "assets/dsPerks/dsPlus1Poison.png";
//   modDeckArray.push(newCard);
//   setCookie("perk9", "dschosen", 365);
// } else {
//   setCookie("perk9", "notChosen", 365);
// }
// if (dsPerk10.classList.contains('checked')){
//   let newCard = "assets/dsPerks/dsPlus1Wound.png";
//   modDeckArray.push(newCard);
//   setCookie("perk10", "dschosen", 365);
// } else {
//   setCookie("perk10", "notChosen", 365);
// }
// if (dsPerk11.classList.contains('checked')){
//   let newCard = "assets/dsPerks/dsPlus1Immobilize.png";
//   modDeckArray.push(newCard);
//   setCookie("perk11", "dschosen", 365);
// } else {
//   setCookie("perk11", "notChosen", 365);
// }
// if (dsPerk12.classList.contains('checked')){
//   let newCard = "assets/dsPerks/dsPlus0Stun.png";
//   modDeckArray.push(newCard);
//   setCookie("perk12", "dschosen", 365);
// } else {
//   setCookie("perk12", "notChosen", 365);
// }
// if (dsPerk13.classList.contains('checked')){
//   let newCard = "assets/dsPerks/dsRollingAddTarget.png";
//   modDeckArray.push(newCard);
//   setCookie("perk13", "dschosen", 365);
// } else {
//   setCookie("perk13", "notChosen", 365);
// }
// if (dsPerk14.classList.contains('checked')){
//   let newCard = "assets/dsPerks/dsRollingAddTarget.png";
//   modDeckArray.push(newCard);
//   setCookie("perk14", "dschosen", 365);
// } else {
//   setCookie("perk14", "notChosen", 365);
// }
// if (dsPerk15.classList.contains('checked')){
//   setCookie("perk15", "dschosen", 365);
// } else {
//   setCookie("perk15", "notChosen", 365);
// }
// defaultDeckArray = modDeckArray.slice();
// confirmPerks();
// }
// //Mindthief perks

// let mtConfirmPerksButton = document.getElementById("mtConfirmPerksButton");
// let mtPerk1 = document.getElementById("mtRemove2minus1-1");
// let mtPerk2 = document.getElementById("mtRemove2minus1-2");
// let mtPerk3 = document.getElementById("mtRemove4Plus0");
// let mtPerk4 = document.getElementById("mtReplaceTwoPlus1WithTwoPlus2");
// let mtPerk5 = document.getElementById("mtReplaceMinus2WithPlus0");
// let mtPerk6 = document.getElementById("mtPlus2Frost1");
// let mtPerk7 = document.getElementById("mtPlus2Frost2");
// let mtPerk8 = document.getElementById("mtAddTwoRollingPlus11");
// let mtPerk9 = document.getElementById("mtAddTwoRollingPlus12");
// let mtPerk10 = document.getElementById("mtAddRollingPull1");
// let mtPerk11 = document.getElementById("mtAddRollingMuddle");
// let mtPerk12 = document.getElementById("mtAddRollingImmobilize");
// let mtPerk13 = document.getElementById("mtAddRollingStun");
// let mtPerk14 = document.getElementById("mtAddRollingDisarmAndMuddle");
// let mtPerk15 = document.getElementById("mtIgnoreNegEffects");
// mtConfirmPerksButton.onclick = () => {

// if(mtPerk1.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod12){
//       modDeckArray.splice(i, 2);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk1", "mtchosen", 365);
// } else {
//   setCookie("perk1", "notChosen", 365);
// }
// if(mtPerk2.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod14){
//       modDeckArray.splice(i, 2);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk2", "mtchosen", 365);
// } else {
//   setCookie("perk2", "notChosen", 365);
// }
// if (mtPerk3.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod1){
//       modDeckArray.splice(i, 4);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk3", "mtchosen", 365);
// } else {
//   setCookie("perk3", "notChosen", 365);
// }
// if (mtPerk4.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod7){
//       modDeckArray.splice(i, 2);
//       let newCard = "assets/mtPerks/mtPlus2.png";
//       modDeckArray.push(newCard);
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk4", "mtchosen", 365);
// } else {
//   setCookie("perk4", "notChosen", 365);
// }
// if (mtPerk5.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod17){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/mtPerks/mtPlus0.png";
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk5", "mtchosen", 365);
// } else {
//   setCookie("perk5", "notChosen", 365);
// }
// if (mtPerk6.classList.contains('checked')){
//   let newCard = "assets/mtPerks/mtFrostPlus2.png";
//   modDeckArray.push(newCard);
//   setCookie("perk6", "mtchosen", 365);
// } else {
//   setCookie("perk6", "notChosen", 365);
// }
// if (mtPerk7.classList.contains('checked')){
//   let newCard = "assets/mtPerks/mtFrostPlus2.png";
//   modDeckArray.push(newCard);
//   setCookie("perk7", "mtchosen", 365);
// } else {
//   setCookie("perk7", "notChosen", 365);
// }
// if (mtPerk8.classList.contains('checked')){
//   let newCard = "assets/mtPerks/mtRollingPlus1.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk8", "mtchosen", 365);
// } else {
//   setCookie("perk8", "notChosen", 365);
// }
// if (mtPerk9.classList.contains('checked')){
//   let newCard = "assets/mtPerks/mtRollingPlus1.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk9", "mtchosen", 365);
// } else {
//   setCookie("perk9", "notChosen", 365);
// }
// if (mtPerk10.classList.contains('checked')){
//   let newCard = "assets/mtPerks/mtRollingPull1.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk10", "mtchosen", 365);
// } else {
//   setCookie("perk10", "notChosen", 365);
// }
// if (mtPerk11.classList.contains('checked')){
//   let newCard = "assets/mtPerks/mtRollingMuddle.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk11", "mtchosen", 365);
// } else {
//   setCookie("perk11", "notChosen", 365);
// }
// if (mtPerk12.classList.contains('checked')){
//   let newCard = "assets/mtPerks/mtRollingImmobilize.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk12", "mtchosen", 365);
// } else {
//   setCookie("perk12", "notChosen", 365);
// }
// if (mtPerk13.classList.contains('checked')){
//   let newCard = "assets/mtPerks/mtRollingStun.png";
//   modDeckArray.push(newCard);
//   setCookie("perk13", "mtchosen", 365);
// } else {
//   setCookie("perk13", "notChosen", 365);
// }
// if (mtPerk14.classList.contains('checked')){
//   let newCard1 = "assets/mtPerks/mtRollingDisarm.png";
//   let newCard2 = "assets/mtPerks/mtRollingMuddle.png";
//   modDeckArray.push(newCard1);
//   modDeckArray.push(newCard2);
//   setCookie("perk14", "mtchosen", 365);
// } else {
//   setCookie("perk14", "notChosen", 365);
// }
// if (mtPerk15.classList.contains('checked')){
//   setCookie("perk15", "mtchosen", 365);
// } else {
//   setCookie("perk15", "notChosen", 365);
// }
// defaultDeckArray = modDeckArray.slice();
// confirmPerks();
// }

// function confirmPerks(){
// document.getElementById("initial-table").classList.remove("hiding");
// document.getElementById('hand-cards').classList.remove("hiding");
// let revealedCards = document.querySelectorAll(".hand");
// for (let i = 0; i<handSize; i++){
//   let revealedCard = revealedCards[i];
//   revealedCard.classList.remove("hiding");
// };
// document.getElementById("confirm-buttons").classList.remove("hiding");
// chooseCardsNumber.innerHTML = "Choose "+ handSize+ " Cards";
// cardCounter.innerHTML = "0/"+handSize;
// healthCounter.innerHTML = health + "/" + maxHealth;
// bearHealthCounter.innerHTML = "Bear Health<br/>"+ bearHealth + "/" + bearMaxHealth;
// xpCounter.innerHTML = xpCount;
// chosenCard1.src = flippedCard;
// chosenCard2.src = flippedCard;
// trackerSizeCounter.innerHTML = "Tracker Size: "+ trackerSize;
// document.getElementById("perk-section").classList.add("hiding");
// goBack2.classList.remove("hiding");
// }

// let brConfirmPerksButton = document.getElementById('brConfirmPerksButton');
// let btConfirmPerksButton = document.getElementById('btConfirmPerksButton');
// let chConfirmPerksButton = document.getElementById('chConfirmPerksButton');
// let swConfirmPerksButton = document.getElementById('swConfirmPerksButton');
// let scConfirmPerksButton = document.getElementById('scConfirmPerksButton');
// let tiConfirmPerksButton = document.getElementById('tiConfirmPerksButton');
// let nsConfirmPerksButton = document.getElementById('nsConfirmPerksButton');


// //Cragheart

// let chPerk1 = document.getElementById("chPerk1");
// let chPerk2 = document.getElementById("chPerk2-1");
// let chPerk3 = document.getElementById("chPerk2-2");
// let chPerk4 = document.getElementById("chPerk2-3");
// let chPerk5 = document.getElementById("chPerk3");
// let chPerk6 = document.getElementById("chPerk4-1");
// let chPerk7 = document.getElementById("chPerk4-2");
// let chPerk8 = document.getElementById("chPerk5-1");
// let chPerk9 = document.getElementById("chPerk5-2");
// let chPerk10 = document.getElementById("chPerk6");
// let chPerk11 = document.getElementById("chPerk7-1");
// let chPerk12 = document.getElementById("chPerk7-2");
// let chPerk13 = document.getElementById("chPerk8");
// let chPerk14 = document.getElementById("chPerk9");
// let chPerk15 = document.getElementById("chPerk10");
// chConfirmPerksButton.onclick = () => {
// if(chPerk1.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod1){
//       modDeckArray.splice(i, 4);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk1", "chchosen", 365);
// } else {
//   setCookie("perk1", "notChosen", 365);
// }
// if(chPerk2.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod12){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/chPerks/chPlus1.png"
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk2", "chchosen", 365);
// } else {
//   setCookie("perk2", "notChosen", 365);
// }
// if(chPerk3.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod13){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/chPerks/chPlus1.png"
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk3", "chchosen", 365);
// } else {
//   setCookie("perk3", "notChosen", 365);
// }
// if(chPerk4.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod14){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/chPerks/chPlus1.png"
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk4", "chchosen", 365);
// } else {
//   setCookie("perk4", "notChosen", 365);
// }
// if (chPerk5.classList.contains('checked')){
//     let newCard1 = "assets/chPerks/chMinus2.png";
//     let newCard2 = "assets/chPerks/chPlus2.png";
//     modDeckArray.push(newCard1);
//     modDeckArray.push(newCard2);
//     modDeckArray.push(newCard2);
//     cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     setCookie("perk5", "chchosen", 365);
// } else {
//   setCookie("perk5", "notChosen", 365);
// }
// if (chPerk6.classList.contains('checked')){
//   let newCard = "assets/chPerks/chPlus1Immobilize.png";
//   modDeckArray.push(newCard);
//   setCookie("perk6", "chchosen", 365);
// } else {
//   setCookie("perk6", "notChosen", 365);
// }
// if (chPerk7.classList.contains('checked')){
//   let newCard = "assets/chPerks/chPlus1Immobilize.png";
//   modDeckArray.push(newCard);
//   setCookie("perk7", "chchosen", 365);
// } else {
//   setCookie("perk7", "notChosen", 365);
// }
// if (chPerk8.classList.contains('checked')){
//   let newCard = "assets/chPerks/chPlus2Muddle.png";
//   modDeckArray.push(newCard);
//   setCookie("perk8", "chchosen", 365);
// } else {
//   setCookie("perk8", "notChosen", 365);
// }
// if (chPerk9.classList.contains('checked')){
//   let newCard = "assets/chPerks/chPlus2Muddle.png";
//   modDeckArray.push(newCard);
//   setCookie("perk9", "chchosen", 365);
// } else {
//   setCookie("perk9", "notChosen", 365);
// }
// if (chPerk10.classList.contains('checked')){
//   let newCard = "assets/chPerks/chRollingPush2.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk10", "chchosen", 365);
// } else {
//   setCookie("perk10", "notChosen", 365);
// }
// if (chPerk11.classList.contains('checked')){
//   let newCard = "assets/chPerks/chRollingEarth.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk11", "chchosen", 365);
// } else {
//   setCookie("perk11", "notChosen", 365);
// }
// if (chPerk12.classList.contains('checked')){
//   let newCard = "assets/chPerks/chRollingEarth.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk12", "chchosen", 365);
// } else {
//   setCookie("perk12", "notChosen", 365);
// }
// if (chPerk13.classList.contains('checked')){
//   let newCard = "assets/chPerks/chRollingWind.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk13", "chchosen", 365);
// } else {
//   setCookie("perk13", "notChosen", 365);
// }
// if (chPerk14.classList.contains('checked')){
//   setCookie("perk14", "chchosen", 365);
// } else {
//   setCookie("perk14", "notChosen", 365);
// }
// if (chPerk15.classList.contains('checked')){
//   setCookie("perk15", "chchosen", 365);
// } else {
//   setCookie("perk15", "notChosen", 365);
// }
// defaultDeckArray = modDeckArray.slice();
// confirmPerks();
// }

// //Brute
// let brPerk1 = document.getElementById("brPerk1");
// let brPerk2 = document.getElementById("brPerk2");
// let brPerk3 = document.getElementById("brPerk3-1");
// let brPerk4 = document.getElementById("brPerk3-2");
// let brPerk5 = document.getElementById("brPerk4");
// let brPerk6 = document.getElementById("brPerk5-1");
// let brPerk7 = document.getElementById("brPerk5-2");
// let brPerk8 = document.getElementById("brPerk6");
// let brPerk9 = document.getElementById("brPerk7-1");
// let brPerk10 = document.getElementById("brPerk7-2");
// let brPerk11 = document.getElementById("brPerk8");
// let brPerk12 = document.getElementById("brPerk9-1");
// let brPerk13 = document.getElementById("brPerk9-2");
// let brPerk14 = document.getElementById("brPerk10");
// let brPerk15 = document.getElementById("brPerk11");

// brConfirmPerksButton.onclick = () => {
// if(brPerk1.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod12){
//       modDeckArray.splice(i, 2);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk1", "brchosen", 365);
// } else {
//   setCookie("perk1", "notChosen", 365);
// }
// if(brPerk2.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod14){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/brPerks/brPlus1.png"
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk2", "brchosen", 365);
// } else {
//   setCookie("perk2", "notChosen", 365);
// }
// if(brPerk3.classList.contains('checked')){
//   let newCard = "assets/brPerks/brPlus1.png"
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//   setCookie("perk3", "brchosen", 365);
// } else {
//   setCookie("perk3", "notChosen", 365);
// }
// if(brPerk4.classList.contains('checked')){
//   let newCard = "assets/brPerks/brPlus1.png"
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//   setCookie("perk4", "brchosen", 365);
// } else {
//   setCookie("perk4", "notChosen", 365);
// }
// if (brPerk5.classList.contains('checked')){
//     let newCard = "assets/brPerks/brPlus3.png";
//     modDeckArray.push(newCard);
//     cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     setCookie("perk5", "brchosen", 365);
// } else {
//   setCookie("perk5", "notChosen", 365);
// }
// if (brPerk6.classList.contains('checked')){
//   let newCard = "assets/brPerks/brRollingPush1.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk6", "brchosen", 365);
// } else {
//   setCookie("perk6", "notChosen", 365);
// }
// if (brPerk7.classList.contains('checked')){
//   let newCard = "assets/brPerks/brRollingPush1.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk7", "brchosen", 365);
// } else {
//   setCookie("perk7", "notChosen", 365);
// }
// if (brPerk8.classList.contains('checked')){
//   let newCard = "assets/brPerks/brRollingPierce3.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk8", "brchosen", 365);
// } else {
//   setCookie("perk8", "notChosen", 365);
// }
// if (brPerk9.classList.contains('checked')){
//   let newCard = "assets/brPerks/brRollingStun.png";
//   modDeckArray.push(newCard);
//   setCookie("perk9", "brchosen", 365);
// } else {
//   setCookie("perk9", "notChosen", 365);
// }
// if (brPerk10.classList.contains('checked')){
//   let newCard = "assets/brPerks/brRollingStun.png";
//   modDeckArray.push(newCard);
//   setCookie("perk10", "brchosen", 365);
// } else {
//   setCookie("perk10", "notChosen", 365);
// }
// if (brPerk11.classList.contains('checked')){
//   let newCard1 = "assets/brPerks/brRollingDisarm.png";
//   let newCard2 = "assets/brPerks/brRollingMuddle.png";
//   modDeckArray.push(newCard1);
//   modDeckArray.push(newCard2);
//   setCookie("perk11", "brchosen", 365);
// } else {
//   setCookie("perk11", "notChosen", 365);
// }
// if (brPerk12.classList.contains('checked')){
//   let newCard = "assets/brPerks/brRollingAddTarget.png";
//   modDeckArray.push(newCard);
//   setCookie("perk12", "brchosen", 365);
// } else {
//   setCookie("perk12", "notChosen", 365);
// }
// if (brPerk13.classList.contains('checked')){
//   let newCard = "assets/brPerks/brRollingAddTarget.png";
//   modDeckArray.push(newCard);
//   setCookie("perk13", "brchosen", 365);
// } else {
//   setCookie("perk13", "notChosen", 365);
// }
// if (brPerk14.classList.contains('checked')){
//   let newCard = "assets/brPerks/brPlus1Shield.png";
//   modDeckArray.push(newCard);
//   setCookie("perk14", "brchosen", 365);
// } else {
//   setCookie("perk14", "notChosen", 365);
// }
// if (brPerk15.classList.contains('checked')){
//   let newCard = "assets/brPerks/brPlus1.png";
//   modDeckArray.push(newCard);
//   setCookie("perk15", "brchosen", 365);
// } else {
//   setCookie("perk15", "notChosen", 365);
// }
// defaultDeckArray = modDeckArray.slice();
// confirmPerks();
// }

// //spellweaver

// let swPerk1 = document.getElementById("swPerk1");
// let swPerk2 = document.getElementById("swPerk2-1");
// let swPerk3 = document.getElementById("swPerk2-2");
// let swPerk4 = document.getElementById("swPerk3-1");
// let swPerk5 = document.getElementById("swPerk3-2");
// let swPerk6 = document.getElementById("swPerk4");
// let swPerk7 = document.getElementById("swPerk5");
// let swPerk8 = document.getElementById("swPerk6");
// let swPerk9 = document.getElementById("swPerk7");
// let swPerk10 = document.getElementById("swPerk8-1");
// let swPerk11 = document.getElementById("swPerk8-2");
// let swPerk12 = document.getElementById("swPerk9-1");
// let swPerk13 = document.getElementById("swPerk9-2");
// let swPerk14 = document.getElementById("swPerk10");
// let swPerk15 = document.getElementById("swPerk11");

// swConfirmPerksButton.onclick = () => {
// if(swPerk1.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod1){
//       modDeckArray.splice(i, 4);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk1", "swchosen", 365);
// } else {
//   setCookie("perk1", "notChosen", 365);
// }
// if(swPerk2.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod12){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/swPerks/swPlus1.png"
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk2", "swchosen", 365);
// } else {
//   setCookie("perk2", "notChosen", 365);
// }
// if(swPerk3.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod13){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/swPerks/swPlus1.png"
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk3", "swchosen", 365);
// } else {
//   setCookie("perk3", "notChosen", 365);
// }
// if(swPerk4.classList.contains('checked')){
//   let newCard = "assets/swPerks/swPlus1.png"
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//   setCookie("perk4", "swchosen", 365);
// } else {
//   setCookie("perk4", "notChosen", 365);
// }
// if (swPerk5.classList.contains('checked')){
//   let newCard = "assets/swPerks/swPlus1.png"
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//   setCookie("perk5", "swchosen", 365);
// } else {
//   setCookie("perk5", "notChosen", 365);
// }
// if (swPerk6.classList.contains('checked')){
//   let newCard = "assets/swPerks/swPlus0Stun.png";
//   modDeckArray.push(newCard);
//   setCookie("perk6", "swchosen", 365);
// } else {
//   setCookie("perk6", "notChosen", 365);
// }
// if (swPerk7.classList.contains('checked')){
//   let newCard = "assets/swPerks/swPlus1Wound.png";
//   modDeckArray.push(newCard);
//   setCookie("perk7", "swchosen", 365);
// } else {
//   setCookie("perk7", "notChosen", 365);
// }
// if (swPerk8.classList.contains('checked')){
//   let newCard = "assets/swPerks/swPlus1Immobilize.png";
//   modDeckArray.push(newCard);
//   setCookie("perk8", "swchosen", 365);
// } else {
//   setCookie("perk8", "notChosen", 365);
// }
// if (swPerk9.classList.contains('checked')){
//   let newCard = "assets/swPerks/swPlus1Curse.png";
//   modDeckArray.push(newCard);
//   setCookie("perk9", "swchosen", 365);
// } else {
//   setCookie("perk9", "notChosen", 365);
// }
// if (swPerk10.classList.contains('checked')){
//   let newCard = "assets/swPerks/swPlus2Fire.png";
//   modDeckArray.push(newCard);
//   setCookie("perk10", "swchosen", 365);
// } else {
//   setCookie("perk10", "notChosen", 365);
// }
// if (swPerk11.classList.contains('checked')){
//   let newCard = "assets/swPerks/swPlus2Fire.png";
//   modDeckArray.push(newCard);
//   setCookie("perk11", "swchosen", 365);
// } else {
//   setCookie("perk11", "notChosen", 365);
// }
// if (swPerk12.classList.contains('checked')){
//   let newCard = "assets/swPerks/swPlus2Frost.png";
//   modDeckArray.push(newCard);
//   setCookie("perk12", "swchosen", 365);
// } else {
//   setCookie("perk12", "notChosen", 365);
// }
// if (swPerk13.classList.contains('checked')){
//   let newCard = "assets/swPerks/swPlus2Frost.png";
//   modDeckArray.push(newCard);
//   setCookie("perk13", "swchosen", 365);
// } else {
//   setCookie("perk13", "notChosen", 365);
// }
// if (swPerk14.classList.contains('checked')){
//   let newCard1 = "assets/swPerks/swRollingEarth.png";
//   let newCard2 = "assets/swPerks/swRollingWind.png"
//   modDeckArray.push(newCard1);
//   modDeckArray.push(newCard2);
//   setCookie("perk14", "swchosen", 365);
// } else {
//   setCookie("perk14", "notChosen", 365);
// }
// if (swPerk15.classList.contains('checked')){
//   let newCard1 = "assets/swPerks/swRollingLight.png";
//   let newCard2 = "assets/swPerks/swRollingDark.png"
//   modDeckArray.push(newCard1);
//   modDeckArray.push(newCard2);
//   setCookie("perk15", "swchosen", 365);
// } else {
//   setCookie("perk15", "notChosen", 365);
// }
// defaultDeckArray = modDeckArray.slice();
// confirmPerks();
// }

// //Scoundrel

// let scPerk1 = document.getElementById("scPerk1-1");
// let scPerk2 = document.getElementById("scPerk1-2");
// let scPerk3 = document.getElementById("scPerk2");
// let scPerk4 = document.getElementById("scPerk3");
// let scPerk5 = document.getElementById("scPerk4");
// let scPerk6 = document.getElementById("scPerk5-1");
// let scPerk7 = document.getElementById("scPerk5-2");
// let scPerk8 = document.getElementById("scPerk6-1");
// let scPerk9 = document.getElementById("scPerk6-2");
// let scPerk10 = document.getElementById("scPerk7");
// let scPerk11 = document.getElementById("scPerk8-1");
// let scPerk12 = document.getElementById("scPerk8-2");
// let scPerk13 = document.getElementById("scPerk9");
// let scPerk14 = document.getElementById("scPerk10");
// let scPerk15 = document.getElementById("scPerk11");

// scConfirmPerksButton.onclick = () => {
// if(scPerk1.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod12){
//       modDeckArray.splice(i, 2);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk1", "scchosen", 365);
// } else {
//   setCookie("perk1", "notChosen", 365);
// }
// if(scPerk2.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod14){
//       modDeckArray.splice(i, 2);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk2", "scchosen", 365);
// } else {
//   setCookie("perk2", "notChosen", 365);
// }
// if(scPerk3.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod1){
//       modDeckArray.splice(i, 4);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk3", "scchosen", 365);
// } else {
//   setCookie("perk3", "notChosen", 365);
// }
// if(scPerk4.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod17){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/scPerks/scPlus0.png";
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk4", "scchosen", 365);
// } else {
//   setCookie("perk4", "notChosen", 365);
// }
// if (scPerk5.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod16){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/scPerks/scPlus1.png";
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk5", "scchosen", 365);
// } else {
//   setCookie("perk5", "notChosen", 365);
// }
// if (scPerk6.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod5){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/scPerks/scPlus2.png";
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk6", "scchosen", 365);
// } else {
//   setCookie("perk6", "notChosen", 365);
// }
// if (scPerk7.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod6){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/scPerks/scPlus2.png";
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk7", "scchosen", 365);
// } else {
//   setCookie("perk7", "notChosen", 365);
// }
// if (scPerk8.classList.contains('checked')){
//   let newCard = "assets/scPerks/scRollingPlus1.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk8", "scchosen", 365);
// } else {
//   setCookie("perk8", "notChosen", 365);
// }
// if (scPerk9.classList.contains('checked')){
//   let newCard = "assets/scPerks/scRollingPlus1.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk9", "scchosen", 365);
// } else {
//   setCookie("perk9", "notChosen", 365);
// }
// if (scPerk10.classList.contains('checked')){
//   let newCard = "assets/scPerks/scRollingPierce3.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk10", "scchosen", 365);
// } else {
//   setCookie("perk10", "notChosen", 365);
// }
// if (scPerk11.classList.contains('checked')){
//   let newCard = "assets/scPerks/scRollingPoison.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk11", "scchosen", 365);
// } else {
//   setCookie("perk11", "notChosen", 365);
// }
// if (scPerk12.classList.contains('checked')){
//   let newCard = "assets/scPerks/scRollingPoison.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk12", "scchosen", 365);
// } else {
//   setCookie("perk12", "notChosen", 365);
// }
// if (scPerk13.classList.contains('checked')){
//   let newCard = "assets/scPerks/scRollingMuddle.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk13", "scchosen", 365);
// } else {
//   setCookie("perk13", "notChosen", 365);
// }
// if (scPerk14.classList.contains('checked')){
//   let newCard = "assets/scPerks/scRollingInvisible.png";
//   modDeckArray.push(newCard);
//   setCookie("perk14", "scchosen", 365);
// } else {
//   setCookie("perk14", "notChosen", 365);
// }
// if (scPerk15.classList.contains('checked')){
//   setCookie("perk15", "scchosen", 365);
// } else {
//   setCookie("perk15", "notChosen", 365);
// }
// defaultDeckArray = modDeckArray.slice();
// confirmPerks();
// }

// //Tinkerer
// let tiPerk1 = document.getElementById("tiPerk1-1");
// let tiPerk2 = document.getElementById("tiPerk1-2");
// let tiPerk3 = document.getElementById("tiPerk2");
// let tiPerk4 = document.getElementById("tiPerk3");
// let tiPerk5 = document.getElementById("tiPerk4");
// let tiPerk6 = document.getElementById("tiPerk5");
// let tiPerk7 = document.getElementById("tiPerk6");
// let tiPerk8 = document.getElementById("tiPerk7-1");
// let tiPerk9 = document.getElementById("tiPerk7-2");
// let tiPerk10 = document.getElementById("tiPerk8-1");
// let tiPerk11 = document.getElementById("tiPerk8-2");
// let tiPerk12 = document.getElementById("tiPerk9-1");
// let tiPerk13 = document.getElementById("tiPerk9-2");
// let tiPerk14 = document.getElementById("tiPerk10");
// let tiPerk15 = document.getElementById("tiPerk11");

// tiConfirmPerksButton.onclick = () => {
// if(tiPerk1.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod12){
//       modDeckArray.splice(i, 2);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk1", "tichosen", 365);
// } else {
//   setCookie("perk1", "notChosen", 365);
// }
// if(tiPerk2.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod14){
//       modDeckArray.splice(i, 2);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk2", "tichosen", 365);
// } else {
//   setCookie("perk2", "notChosen", 365);
// }
// if(tiPerk3.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod17){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/tiPerks/tiPlus0.png"
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk3", "tichosen", 365);
// } else {
//   setCookie("perk3", "notChosen", 365);
// }
// if(tiPerk4.classList.contains('checked')){
//   let newCard = "assets/tiPerks/tiPlus1.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk4", "tichosen", 365);
// } else {
//   setCookie("perk4", "notChosen", 365);
// }
// if (tiPerk5.classList.contains('checked')){
//   let newCard = "assets/tiPerks/tiPlus3.png";
//   modDeckArray.push(newCard);
//   setCookie("perk5", "tichosen", 365);
// } else {
//   setCookie("perk5", "notChosen", 365);
// }
// if (tiPerk6.classList.contains('checked')){
//   let newCard = "assets/tiPerks/tiRollingFire.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk6", "tichosen", 365);
// } else {
//   setCookie("perk6", "notChosen", 365);
// }
// if (tiPerk7.classList.contains('checked')){
//   let newCard = "assets/tiPerks/tiRollingMuddle.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk7", "tichosen", 365);
// } else {
//   setCookie("perk7", "notChosen", 365);
// }
// if (tiPerk8.classList.contains('checked')){
//   let newCard = "assets/tiPerks/tiPlus1Wound.png";
//   modDeckArray.push(newCard);
//   setCookie("perk8", "tichosen", 365);
// } else {
//   setCookie("perk8", "notChosen", 365);
// }
// if (tiPerk9.classList.contains('checked')){
//   let newCard = "assets/tiPerks/tiPlus1Wound.png";
//   modDeckArray.push(newCard);
//   setCookie("perk9", "tichosen", 365);
// } else {
//   setCookie("perk9", "notChosen", 365);
// }
// if (tiPerk10.classList.contains('checked')){
//   let newCard = "assets/tiPerks/tiPlus1Immobilize.png";
//   modDeckArray.push(newCard);
//   setCookie("perk10", "tichosen", 365);
// } else {
//   setCookie("perk10", "notChosen", 365);
// }
// if (tiPerk11.classList.contains('checked')){
//   let newCard = "assets/tiPerks/tiPlus1Immobilize.png";
//   modDeckArray.push(newCard);
//   setCookie("perk11", "tichosen", 365);
// } else {
//   setCookie("perk11", "notChosen", 365);
// }
// if (tiPerk12.classList.contains('checked')){
//   let newCard = "assets/tiPerks/tiPlus1Heal2.png";
//   modDeckArray.push(newCard);
//   setCookie("perk12", "tichosen", 365);
// } else {
//   setCookie("perk12", "notChosen", 365);
// }
// if (tiPerk13.classList.contains('checked')){
//   let newCard = "assets/tiPerks/tiPlus1Heal2.png";
//   modDeckArray.push(newCard);
//   setCookie("perk13", "tichosen", 365);
// } else {
//   setCookie("perk13", "notChosen", 365);
// }
// if (tiPerk14.classList.contains('checked')){
//   let newCard = "assets/tiPerks/tiPlus0AddTarget.png";
//   modDeckArray.push(newCard);
//   setCookie("perk14", "tichosen", 365);
// } else {
//   setCookie("perk14", "notChosen", 365);
// }
// if (tiPerk15.classList.contains('checked')){
//   setCookie("perk15", "tichosen", 365);
// } else {
//   setCookie("perk15", "notChosen", 365);
// }
// defaultDeckArray = modDeckArray.slice();
// confirmPerks();
// }

// //Beast tyrant
// let btPerk1 = document.getElementById("btPerk1");
// let btPerk2 = document.getElementById("btPerk2-1");
// let btPerk3 = document.getElementById("btPerk2-2");
// let btPerk4 = document.getElementById("btPerk2-3");
// let btPerk5 = document.getElementById("btPerk3-1");
// let btPerk6 = document.getElementById("btPerk3-2");
// let btPerk7 = document.getElementById("btPerk4-1");
// let btPerk8 = document.getElementById("btPerk4-2");
// let btPerk9 = document.getElementById("btPerk5-1");
// let btPerk10 = document.getElementById("btPerk5-2");
// let btPerk11 = document.getElementById("btPerk6-1");
// let btPerk12 = document.getElementById("btPerk6-2");
// let btPerk13 = document.getElementById("btPerk6-3");
// let btPerk14 = document.getElementById("btPerk7");
// let btPerk15 = document.getElementById("btPerk8");

// btConfirmPerksButton.onclick = () => {
// if(btPerk1.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod12){
//       modDeckArray.splice(i, 2);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk1", "btchosen", 365);
// } else {
//   setCookie("perk1", "notChosen", 365);
// }
// if(btPerk2.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod14){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/btPerks/btPlus1.png";
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk2", "btchosen", 365);
// } else {
//   setCookie("perk2", "notChosen", 365);
// }
// if(btPerk3.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod15){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/btPerks/btPlus1.png";
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk3", "btchosen", 365);
// } else {
//   setCookie("perk3", "notChosen", 365);
// }
// if(btPerk4.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod16){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/btPerks/btPlus1.png";
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk4", "btchosen", 365);
// } else {
//   setCookie("perk4", "notChosen", 365);
// }
// if (btPerk5.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod1){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/btPerks/btPlus2.png";
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk5", "btchosen", 365);
// } else {
//   setCookie("perk5", "notChosen", 365);
// }
// if (btPerk6.classList.contains('checked')){
//   for (var i = 0; i<modDeckArray.length; i++){
//     if(modDeckArray[i] === mod2){
//       modDeckArray.splice(i, 1);
//       let newCard = "assets/btPerks/btPlus2.png";
//       modDeckArray.push(newCard);
//       i = modDeckArray.length;
//       cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     }
//   }
//   setCookie("perk6", "btchosen", 365);
// } else {
//   setCookie("perk6", "notChosen", 365);
// }
// if (btPerk7.classList.contains('checked')){
//   let newCard = "assets/btPerks/btPlus1Wound.png";
//   modDeckArray.push(newCard);
//   setCookie("perk7", "btchosen", 365);
// } else {
//   setCookie("perk7", "notChosen", 365);
// }
// if (btPerk8.classList.contains('checked')){
//   let newCard = "assets/btPerks/btPlus1Wound.png";
//   modDeckArray.push(newCard);
//   setCookie("perk8", "btchosen", 365);
// } else {
//   setCookie("perk8", "notChosen", 365);
// }
// if (btPerk9.classList.contains('checked')){
//   let newCard = "assets/btPerks/btPlus1Immobilize.png";
//   modDeckArray.push(newCard);
//   setCookie("perk9", "btchosen", 365);
// } else {
//   setCookie("perk9", "notChosen", 365);
// }
// if (btPerk10.classList.contains('checked')){
//   let newCard = "assets/btPerks/btPlus1Immobilize.png";
//   modDeckArray.push(newCard);
//   setCookie("perk10", "btchosen", 365);
// } else {
//   setCookie("perk10", "notChosen", 365);
// }
// if (btPerk11.classList.contains('checked')){
//   let newCard = "assets/btPerks/btRollingHeal1.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk11", "btchosen", 365);
// } else {
//   setCookie("perk11", "notChosen", 365);
// }
// if (btPerk12.classList.contains('checked')){
//   let newCard = "assets/btPerks/btRollingHeal1.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk12", "btchosen", 365);
// } else {
//   setCookie("perk12", "notChosen", 365);
// }
// if (btPerk13.classList.contains('checked')){
//   let newCard = "assets/btPerks/btRollingHeal1.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk13", "btchosen", 365);
// } else {
//   setCookie("perk13", "notChosen", 365);
// }
// if (btPerk14.classList.contains('checked')){
//   let newCard = "assets/btPerks/btRollingEarth.png";
//   modDeckArray.push(newCard);
//   modDeckArray.push(newCard);
//   setCookie("perk14", "btchosen", 365);
// } else {
//   setCookie("perk14", "notChosen", 365);
// }
// if (btPerk15.classList.contains('checked')){
//   setCookie("perk15", "btchosen", 365);
// } else {
//   setCookie("perk15", "notChosen", 365);
// }
// defaultDeckArray = modDeckArray.slice();
// confirmPerks();
// }

// //nightshroud

// let nsPerk1 = document.getElementById("nsPerk1-1");
// let nsPerk2 = document.getElementById("nsPerk1-2");
// let nsPerk3 = document.getElementById("nsPerk2");
// let nsPerk4 = document.getElementById("nsPerk3-1");
// let nsPerk5 = document.getElementById("nsPerk3-2");
// let nsPerk6 = document.getElementById("nsPerk4-1");
// let nsPerk7 = document.getElementById("nsPerk4-2");
// let nsPerk8 = document.getElementById("nsPerk5-1");
// let nsPerk9 = document.getElementById("nsPerk5-2");
// let nsPerk10 = document.getElementById("nsPerk6-1");
// let nsPerk11 = document.getElementById("nsPerk6-2");
// let nsPerk12 = document.getElementById("nsPerk7");
// let nsPerk13 = document.getElementById("nsPerk8");
// let nsPerk14 = document.getElementById("nsPerk9");
// let nsPerk15 = document.getElementById("nsPerk10");
// let hasMinus1 = 0;

// nsConfirmPerksButton.onclick = () => {
// if(nsPerk1.classList.contains('checked')){
// for (var i = 0; i<modDeckArray.length; i++){
//   if(modDeckArray[i] === mod12){
//     modDeckArray.splice(i, 2);
//     i = modDeckArray.length;
//     cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//   }
// }
// setCookie("perk1", "nschosen", 365);
// } else {
// setCookie("perk1", "notChosen", 365);
// }
// if(nsPerk2.classList.contains('checked')){
// for (var i = 0; i<modDeckArray.length; i++){
//   if(modDeckArray[i] === mod14){
//     modDeckArray.splice(i, 2);
//     i = modDeckArray.length;
//     cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//   }
// }
// setCookie("perk2", "nschosen", 365);
// } else {
// setCookie("perk2", "notChosen", 365);
// }
// if(nsPerk3.classList.contains('checked')){
// for (var i = 0; i<modDeckArray.length; i++){
//   if(modDeckArray[i] === mod1){
//     modDeckArray.splice(i, 4);
//     i = modDeckArray.length;
//     cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//   }
// }
// setCookie("perk3", "nschosen", 365);
// } else {
// setCookie("perk3", "notChosen", 365);
// }
// if(nsPerk4.classList.contains('checked')){
// let newCard = "assets/nsPerks/nsMinus1Dark.png";
// modDeckArray.push(newCard);
// hasMinus1++;
// cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
// setCookie("perk4", "nschosen", 365);
// } else {
// setCookie("perk4", "notChosen", 365);
// }
// if (nsPerk5.classList.contains('checked')){
// let newCard = "assets/nsPerks/nsMinus1Dark.png";
// modDeckArray.push(newCard);
// hasMinus1++;
// cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
// setCookie("perk5", "nschosen", 365);
// } else {
//   setCookie("perk5", "notChosen", 365);
// }
// if (nsPerk6.classList.contains('checked') && (hasMinus1> 0)){
//     hasMinus1--;
//     modDeckArray.pop();
//     let newCard = "assets/nsPerks/nsPlus1Dark.png";
//     modDeckArray.unshift(newCard);
//     cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//     setCookie("perk6", "nschosen", 365);
//   } else {
//     setCookie("perk6", "notChosen", 365);
//   }
// if (nsPerk7.classList.contains('checked') && (hasMinus1> 0)){
//   hasMinus1--;
//   modDeckArray.pop();
//   let newCard = "assets/nsPerks/nsPlus1Dark.png";
//   modDeckArray.unshift(newCard);
//   cardsInDeckText.innerHTML = "Cards in Deck: "+ modDeckArray.length;
//   setCookie("perk7", "nschosen", 365);
// } else {
// setCookie("perk7", "notChosen", 365);
// }
// if (nsPerk8.classList.contains('checked')){
// let newCard = "assets/nsPerks/nsPlus1Invisible.png";
// modDeckArray.push(newCard);
// setCookie("perk8", "nschosen", 365);
// } else {
// setCookie("perk8", "notChosen", 365);
// }
// if (nsPerk9.classList.contains('checked')){
// let newCard = "assets/nsPerks/nsPlus1Invisible.png";
// modDeckArray.push(newCard);
// setCookie("perk9", "nschosen", 365);
// } else {
// setCookie("perk9", "notChosen", 365);
// }
// if (nsPerk10.classList.contains('checked')){
// let newCard = "assets/nsPerks/nsRollingMuddle.png";
// modDeckArray.push(newCard);
// modDeckArray.push(newCard);
// modDeckArray.push(newCard);
// setCookie("perk10", "nschosen", 365);
// } else {
// setCookie("perk10", "notChosen", 365);
// }
// if (nsPerk11.classList.contains('checked')){
// let newCard = "assets/nsPerks/nsRollingMuddle.png";
// modDeckArray.push(newCard);
// modDeckArray.push(newCard);
// modDeckArray.push(newCard);
// setCookie("perk11", "nschosen", 365);
// } else {
// setCookie("perk11", "notChosen", 365);
// }
// if (nsPerk12.classList.contains('checked')){
// let newCard = "assets/nsPerks/nsRollingHeal1.png";
// modDeckArray.push(newCard);
// modDeckArray.push(newCard);
// setCookie("perk12", "nschosen", 365);
// } else {
// setCookie("perk12", "notChosen", 365);
// }
// if (nsPerk13.classList.contains('checked')){
// let newCard = "assets/nsPerks/nsRollingCurse.png";
// modDeckArray.push(newCard);
// modDeckArray.push(newCard);
// setCookie("perk13", "nschosen", 365);
// } else {
// setCookie("perk13", "notChosen", 365);
// }
// if (nsPerk14.classList.contains('checked')){
// let newCard = "assets/nsPerks/nsRollingAddTarget.png";
// modDeckArray.push(newCard);
// setCookie("perk14", "nschosen", 365);
// } else {
// setCookie("perk14", "notChosen", 365);
// }
// if (nsPerk15.classList.contains('checked')){
// let newCard = "assets/nsPerks/nsPlus1.png";
// modDeckArray.push(newCard);
// modDeckArray.push(newCard);
// setCookie("perk15", "nschosen", 365);
// } else {
// setCookie("perk15", "notChosen", 365);
// }
// defaultDeckArray = modDeckArray.slice();
// confirmPerks();
// }



}
