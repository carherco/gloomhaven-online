import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

  getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
  }

  checkCookie() {
    const characterSelection = this.getCookie('character');
    const currentLevel = this.getCookie('level');
    const perk1 = this.getCookie('perk1');
    const perk2 = this.getCookie('perk2');
    const perk3 = this.getCookie('perk3');
    const perk4 = this.getCookie('perk4');
    const perk5 = this.getCookie('perk5');
    const perk6 = this.getCookie('perk6');
    const perk7 = this.getCookie('perk7');
    const perk8 = this.getCookie('perk8');
    const perk9 = this.getCookie('perk9');
    const perk10 = this.getCookie('perk10');
    const perk11 = this.getCookie('perk11');
    const perk12 = this.getCookie('perk12');
    const perk13 = this.getCookie('perk13');
    const perk14 = this.getCookie('perk14');
    const perk15 = this.getCookie('perk15');


    // switch (currentLevel) {
    //   case '1':
    //     levelCount = 1;
    //     break;
    //   case '2':
    //     levelCount = 2;
    //     levelCounter.innerHTML = 'Level: ' + levelCount;
    //     levelDown.classList.remove('at-min');
    //     break;
    //   case '3':
    //     levelCount = 3;
    //     levelCounter.innerHTML = 'Level: ' + levelCount;
    //     levelDown.classList.remove('at-min');
    //     break;
    //   case '4':
    //     levelCount = 4;
    //     levelCounter.innerHTML = 'Level: ' + levelCount;
    //     levelDown.classList.remove('at-min');
    //     break;
    //   case '5':
    //     levelCount = 5;
    //     levelCounter.innerHTML = 'Level: ' + levelCount;
    //     levelDown.classList.remove('at-min');
    //     break;
    //   case '6':
    //     levelCount = 6;
    //     levelCounter.innerHTML = 'Level: ' + levelCount;
    //     levelDown.classList.remove('at-min');
    //     break;
    //   case '7':
    //     levelCount = 7;
    //     levelCounter.innerHTML = 'Level: ' + levelCount;
    //     levelDown.classList.remove('at-min');
    //     break;
    //   case '8':
    //     levelCount = 8;
    //     levelCounter.innerHTML = 'Level: ' + levelCount;
    //     levelDown.classList.remove('at-min');
    //     break;
    //   case '9':
    //     levelCount = 9;
    //     levelCounter.innerHTML = 'Level: ' + levelCount;
    //     levelDown.classList.remove('at-min');
    //     levelUp.classList.add('at-max;');
    //     break;
    //   default:
    //     levelCount = 1;
    //     break;
    // }
    // switch (characterSelection) {
    //   case 'cragheart':
    //     cragheart.classList.add('character-selected');
    //     characterSelected = true;
    //     confirmCharacterButton.classList.remove('not-without-more-selected');
    //     if (perk1 === 'chchosen') {
    //       chPerk1.classList.add('checked');
    //     }
    //     if (perk2 === 'chchosen') {
    //       chPerk2.classList.add('checked');
    //     }
    //     if (perk3 === 'chchosen') {
    //       chPerk3.classList.add('checked');
    //     }
    //     if (perk4 === 'chchosen') {
    //       chPerk4.classList.add('checked');
    //     }
    //     if (perk5 === 'chchosen') {
    //       chPerk5.classList.add('checked');
    //     }
    //     if (perk6 === 'chchosen') {
    //       chPerk6.classList.add('checked');
    //     }
    //     if (perk7 === 'chchosen') {
    //       chPerk7.classList.add('checked');
    //     }
    //     if (perk8 === 'chchosen') {
    //       chPerk8.classList.add('checked');
    //     }
    //     if (perk9 === 'chchosen') {
    //       chPerk9.classList.add('checked');
    //     }
    //     if (perk10 === 'chchosen') {
    //       chPerk10.classList.add('checked');
    //     }
    //     if (perk11 === 'chchosen') {
    //       chPerk11.classList.add('checked');
    //     }
    //     if (perk12 === 'chchosen') {
    //       chPerk12.classList.add('checked');
    //     }
    //     if (perk13 === 'chchosen') {
    //       chPerk13.classList.add('checked');
    //     }
    //     if (perk14 === 'chchosen') {
    //       chPerk14.classList.add('checked');
    //     }
    //     if (perk15 === 'chchosen') {
    //       chPerk15.classList.add('checked');
    //     }
    //     break;
    //   case 'brute':
    //     brute.classList.add('character-selected');
    //     characterSelected = true;
    //     confirmCharacterButton.classList.remove('not-without-more-selected');
    //     if (perk1 === 'brchosen') {
    //       brPerk1.classList.add('checked');
    //     }
    //     if (perk2 === 'brchosen') {
    //       brPerk2.classList.add('checked');
    //     }
    //     if (perk3 === 'brchosen') {
    //       brPerk3.classList.add('checked');
    //     }
    //     if (perk4 === 'brchosen') {
    //       brPerk4.classList.add('checked');
    //     }
    //     if (perk5 === 'brchosen') {
    //       brPerk5.classList.add('checked');
    //     }
    //     if (perk6 === 'brchosen') {
    //       brPerk6.classList.add('checked');
    //     }
    //     if (perk7 === 'brchosen') {
    //       brPerk7.classList.add('checked');
    //     }
    //     if (perk8 === 'brchosen') {
    //       brPerk8.classList.add('checked');
    //     }
    //     if (perk9 === 'brchosen') {
    //       brPerk9.classList.add('checked');
    //     }
    //     if (perk10 === 'brchosen') {
    //       brPerk10.classList.add('checked');
    //     }
    //     if (perk11 === 'brchosen') {
    //       brPerk11.classList.add('checked');
    //     }
    //     if (perk12 === 'brchosen') {
    //       brPerk12.classList.add('checked');
    //     }
    //     if (perk13 === 'brchosen') {
    //       brPerk13.classList.add('checked');
    //     }
    //     if (perk14 === 'brchosen') {
    //       brPerk14.classList.add('checked');
    //     }
    //     if (perk15 === 'brchosen') {
    //       brPerk15.classList.add('checked');
    //     }
    //     break;
    //   case 'mindthief':
    //     mindthief.classList.add('character-selected');
    //     characterSelected = true;
    //     confirmCharacterButton.classList.remove('not-without-more-selected');
    //     if (perk1 === 'mtchosen') {
    //       mtPerk1.classList.add('checked');
    //     }
    //     if (perk2 === 'mtchosen') {
    //       mtPerk2.classList.add('checked');
    //     }
    //     if (perk3 === 'mtchosen') {
    //       mtPerk3.classList.add('checked');
    //     }
    //     if (perk4 === 'mtchosen') {
    //       mtPerk4.classList.add('checked');
    //     }
    //     if (perk5 === 'mtchosen') {
    //       mtPerk5.classList.add('checked');
    //     }
    //     if (perk6 === 'mtchosen') {
    //       mtPerk6.classList.add('checked');
    //     }
    //     if (perk7 === 'mtchosen') {
    //       mtPerk7.classList.add('checked');
    //     }
    //     if (perk8 === 'mtchosen') {
    //       mtPerk8.classList.add('checked');
    //     }
    //     if (perk9 === 'mtchosen') {
    //       mtPerk9.classList.add('checked');
    //     }
    //     if (perk10 === 'mtchosen') {
    //       mtPerk10.classList.add('checked');
    //     }
    //     if (perk11 === 'mtchosen') {
    //       mtPerk11.classList.add('checked');
    //     }
    //     if (perk12 === 'mtchosen') {
    //       mtPerk12.classList.add('checked');
    //     }
    //     if (perk13 === 'mtchosen') {
    //       mtPerk13.classList.add('checked');
    //     }
    //     if (perk14 === 'mtchosen') {
    //       mtPerk14.classList.add('checked');
    //     }
    //     if (perk15 === 'mtchosen') {
    //       mtPerk15.classList.add('checked');
    //     }
    //     break;
    //   case 'scoundrel':
    //     scoundrel.classList.add('character-selected');
    //     characterSelected = true;
    //     confirmCharacterButton.classList.remove('not-without-more-selected');
    //     if (perk1 === 'scchosen') {
    //       scPerk1.classList.add('checked');
    //     }
    //     if (perk2 === 'scchosen') {
    //       scPerk2.classList.add('checked');
    //     }
    //     if (perk3 === 'scchosen') {
    //       scPerk3.classList.add('checked');
    //     }
    //     if (perk4 === 'scchosen') {
    //       scPerk4.classList.add('checked');
    //     }
    //     if (perk5 === 'scchosen') {
    //       scPerk5.classList.add('checked');
    //     }
    //     if (perk6 === 'scchosen') {
    //       scPerk6.classList.add('checked');
    //     }
    //     if (perk7 === 'scchosen') {
    //       scPerk7.classList.add('checked');
    //     }
    //     if (perk8 === 'scchosen') {
    //       scPerk8.classList.add('checked');
    //     }
    //     if (perk9 === 'scchosen') {
    //       scPerk9.classList.add('checked');
    //     }
    //     if (perk10 === 'scchosen') {
    //       scPerk10.classList.add('checked');
    //     }
    //     if (perk11 === 'scchosen') {
    //       scPerk11.classList.add('checked');
    //     }
    //     if (perk12 === 'scchosen') {
    //       scPerk12.classList.add('checked');
    //     }
    //     if (perk13 === 'scchosen') {
    //       scPerk13.classList.add('checked');
    //     }
    //     if (perk14 === 'scchosen') {
    //       scPerk14.classList.add('checked');
    //     }
    //     if (perk15 === 'scchosen') {
    //       scPerk15.classList.add('checked');
    //     }
    //     break;
    //   case 'spellweaver':
    //     spellweaver.classList.add('character-selected');
    //     characterSelected = true;
    //     confirmCharacterButton.classList.remove('not-without-more-selected');
    //     if (perk1 === 'swchosen') {
    //       swPerk1.classList.add('checked');
    //     }
    //     if (perk2 === 'swchosen') {
    //       swPerk2.classList.add('checked');
    //     }
    //     if (perk3 === 'swchosen') {
    //       swPerk3.classList.add('checked');
    //     }
    //     if (perk4 === 'swchosen') {
    //       swPerk4.classList.add('checked');
    //     }
    //     if (perk5 === 'swchosen') {
    //       swPerk5.classList.add('checked');
    //     }
    //     if (perk6 === 'swchosen') {
    //       swPerk6.classList.add('checked');
    //     }
    //     if (perk7 === 'swchosen') {
    //       swPerk7.classList.add('checked');
    //     }
    //     if (perk8 === 'swchosen') {
    //       swPerk8.classList.add('checked');
    //     }
    //     if (perk9 === 'swchosen') {
    //       swPerk9.classList.add('checked');
    //     }
    //     if (perk10 === 'swchosen') {
    //       swPerk10.classList.add('checked');
    //     }
    //     if (perk11 === 'swchosen') {
    //       swPerk11.classList.add('checked');
    //     }
    //     if (perk12 === 'swchosen') {
    //       swPerk12.classList.add('checked');
    //     }
    //     if (perk13 === 'swchosen') {
    //       swPerk13.classList.add('checked');
    //     }
    //     if (perk14 === 'swchosen') {
    //       swPerk14.classList.add('checked');
    //     }
    //     if (perk15 === 'swchosen') {
    //       swPerk15.classList.add('checked');
    //     }
    //     break;
    //   case 'tinkerer':
    //     tinkerer.classList.add('character-selected');
    //     characterSelected = true;
    //     confirmCharacterButton.classList.remove('not-without-more-selected');
    //     if (perk1 === 'tichosen') {
    //       tiPerk1.classList.add('checked');
    //     }
    //     if (perk2 === 'tichosen') {
    //       tiPerk2.classList.add('checked');
    //     }
    //     if (perk3 === 'tichosen') {
    //       tiPerk3.classList.add('checked');
    //     }
    //     if (perk4 === 'tichosen') {
    //       tiPerk4.classList.add('checked');
    //     }
    //     if (perk5 === 'tichosen') {
    //       tiPerk5.classList.add('checked');
    //     }
    //     if (perk6 === 'tichosen') {
    //       tiPerk6.classList.add('checked');
    //     }
    //     if (perk7 === 'tichosen') {
    //       tiPerk7.classList.add('checked');
    //     }
    //     if (perk8 === 'tichosen') {
    //       tiPerk8.classList.add('checked');
    //     }
    //     if (perk9 === 'tichosen') {
    //       tiPerk9.classList.add('checked');
    //     }
    //     if (perk10 === 'tichosen') {
    //       tiPerk10.classList.add('checked');
    //     }
    //     if (perk11 === 'tichosen') {
    //       tiPerk11.classList.add('checked');
    //     }
    //     if (perk12 === 'tichosen') {
    //       tiPerk12.classList.add('checked');
    //     }
    //     if (perk13 === 'tichosen') {
    //       tiPerk13.classList.add('checked');
    //     }
    //     if (perk14 === 'tichosen') {
    //       tiPerk14.classList.add('checked');
    //     }
    //     if (perk15 === 'tichosen') {
    //       tiPerk15.classList.add('checked');
    //     }
    //     break;
    //   case 'beasttyrant':
    //     beastTyrant.classList.add('character-selected');
    //     characterSelected = true;
    //     confirmCharacterButton.classList.remove('not-without-more-selected');
    //     if (perk1 === 'btchosen') {
    //       btPerk1.classList.add('checked');
    //     }
    //     if (perk2 === 'btchosen') {
    //       btPerk2.classList.add('checked');
    //     }
    //     if (perk3 === 'btchosen') {
    //       btPerk3.classList.add('checked');
    //     }
    //     if (perk4 === 'btchosen') {
    //       btPerk4.classList.add('checked');
    //     }
    //     if (perk5 === 'btchosen') {
    //       btPerk5.classList.add('checked');
    //     }
    //     if (perk6 === 'btchosen') {
    //       btPerk6.classList.add('checked');
    //     }
    //     if (perk7 === 'btchosen') {
    //       btPerk7.classList.add('checked');
    //     }
    //     if (perk8 === 'btchosen') {
    //       btPerk8.classList.add('checked');
    //     }
    //     if (perk9 === 'btchosen') {
    //       btPerk9.classList.add('checked');
    //     }
    //     if (perk10 === 'btchosen') {
    //       btPerk10.classList.add('checked');
    //     }
    //     if (perk11 === 'btchosen') {
    //       btPerk11.classList.add('checked');
    //     }
    //     if (perk12 === 'btchosen') {
    //       btPerk12.classList.add('checked');
    //     }
    //     if (perk13 === 'btchosen') {
    //       btPerk13.classList.add('checked');
    //     }
    //     if (perk14 === 'btchosen') {
    //       btPerk14.classList.add('checked');
    //     }
    //     if (perk15 === 'btchosen') {
    //       btPerk15.classList.add('checked');
    //     }
    //     break;
    //   case 'doomstalker':
    //     doomStalker.classList.add('character-selected');
    //     characterSelected = true;
    //     confirmCharacterButton.classList.remove('not-without-more-selected');
    //     if (perk1 === 'dschosen') {
    //       dsPerk1.classList.add('checked');
    //     }
    //     if (perk2 === 'dschosen') {
    //       dsPerk2.classList.add('checked');
    //     }
    //     if (perk3 === 'dschosen') {
    //       dsPerk3.classList.add('checked');
    //     }
    //     if (perk4 === 'dschosen') {
    //       dsPerk4.classList.add('checked');
    //     }
    //     if (perk5 === 'dschosen') {
    //       dsPerk5.classList.add('checked');
    //     }
    //     if (perk6 === 'dschosen') {
    //       dsPerk6.classList.add('checked');
    //     }
    //     if (perk7 === 'dschosen') {
    //       dsPerk7.classList.add('checked');
    //     }
    //     if (perk8 === 'dschosen') {
    //       dsPerk8.classList.add('checked');
    //     }
    //     if (perk9 === 'dschosen') {
    //       dsPerk9.classList.add('checked');
    //     }
    //     if (perk10 === 'dschosen') {
    //       dsPerk10.classList.add('checked');
    //     }
    //     if (perk11 === 'dschosen') {
    //       dsPerk11.classList.add('checked');
    //     }
    //     if (perk12 === 'dschosen') {
    //       dsPerk12.classList.add('checked');
    //     }
    //     if (perk13 === 'dschosen') {
    //       dsPerk13.classList.add('checked');
    //     }
    //     if (perk14 === 'dschosen') {
    //       dsPerk14.classList.add('checked');
    //     }
    //     if (perk15 === 'dschosen') {
    //       dsPerk15.classList.add('checked');
    //     }
    //     break;
    //   case 'nightshroud':
    //     nightshroud.classList.add('character-selected');
    //     characterSelected = true;
    //     confirmCharacterButton.classList.remove('not-without-more-selected');
    //     if (perk1 === 'nschosen') {
    //       nsPerk1.classList.add('checked');
    //     }
    //     if (perk2 === 'nschosen') {
    //       nsPerk2.classList.add('checked');
    //     }
    //     if (perk3 === 'nschosen') {
    //       nsPerk3.classList.add('checked');
    //     }
    //     if (perk4 === 'nschosen') {
    //       nsPerk4.classList.add('checked');
    //     }
    //     if (perk5 === 'nschosen') {
    //       nsPerk5.classList.add('checked');
    //     }
    //     if (perk6 === 'nschosen') {
    //       nsPerk6.classList.add('checked');
    //     }
    //     if (perk7 === 'nschosen') {
    //       nsPerk7.classList.add('checked');
    //     }
    //     if (perk8 === 'nschosen') {
    //       nsPerk8.classList.add('checked');
    //     }
    //     if (perk9 === 'nschosen') {
    //       nsPerk9.classList.add('checked');
    //     }
    //     if (perk10 === 'nschosen') {
    //       nsPerk10.classList.add('checked');
    //     }
    //     if (perk11 === 'nschosen') {
    //       nsPerk11.classList.add('checked');
    //     }
    //     if (perk12 === 'nschosen') {
    //       nsPerk12.classList.add('checked');
    //     }
    //     if (perk13 === 'nschosen') {
    //       nsPerk13.classList.add('checked');
    //     }
    //     if (perk14 === 'nschosen') {
    //       nsPerk14.classList.add('checked');
    //     }
    //     if (perk15 === 'nschosen') {
    //       nsPerk15.classList.add('checked');
    //     }
    //     break;
    //   default:
    //     characterSelected = false;
    //     break;
    // }

  }
}
