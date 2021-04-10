
const playerPlusOneAbilityLines = {
  move: { cost: 30, title: 'Move', icon: 'generalMove' },
  attack: { cost: 50, title: 'Attack', icon: 'generalAttack' },
  range: { cost: 30, title: 'Range', icon: 'generalRange' },
  shield: { cost: 100, title: 'Shield', icon: 'generalShield' },
  push: { cost: 30, title: 'Push', icon: 'statusEffectPush' },
  pull: { cost: 30, title: 'Pull', icon: 'statusEffectPull' },
  pierce: { cost: 30, title: 'Pierce', icon: 'statusEffectPierce' },
  retaliate: { cost: 100, title: 'Retaliate', icon: 'generalRetaliate' },
  heal: { cost: 30, title: 'Heal', icon: 'generalHeal' },
  target: { cost: 50, title: 'Target', icon: 'generalTarget' },
};

const summonPlusOneAbilityLines = {
  move: { cost: 100, title: 'Move', icon: 'generalMove' },
  attack: { cost: 100, title: 'Attack', icon: 'generalAttack' },
  range: { cost: 50, title: 'Range', icon: 'generalRange' },
  hp: { cost: 50, title: 'HP', icon: 'generalHeal' },
};

const baseOtherEffects = {
  poison: { cost: 75, title: 'Poison', icon: 'statusEffectPoison' },
  wound: { cost: 75, title: 'Wound', icon: 'statusEffectWound' },
  muddle: { cost: 50, title: 'Muddle', icon: 'statusEffectMuddle' },
  immobilize: { cost: 100, title: 'Immobilize', icon: 'statusEffectImmobilize' },
  disarm: { cost: 150, title: 'Disarm', icon: 'statusEffectDisarm' },
  curse: { cost: 75, title: 'Curse', icon: 'statusEffectCurse' },
  strengthen: { cost: 50, title: 'Strengthen', icon: 'statusEffectStrengthen' },
  bless: { cost: 50, title: 'Bless', icon: 'statusEffectBless' },
  jump: { cost: 50, title: 'Jump', icon: 'generalJump' },
  anyElement: { cost: 150, title: 'Any Element', icon: 'elementAll' },
  specificElement: { cost: 100, title: 'Specific Element', icon: 'elementFire' },
};

const stickerTypes = {
  playerPlus1: { title: 'Player' },
  summonPlus1: { title: 'Summon' },
  attackHex: { title: 'Attack Hex' },
  otherEffect: { title: 'Other Effect' },
};

const levelCost = [0, 25, 50, 75, 100, 125, 150, 175, 200];
const previousEnhancementCost = [0, 75, 150, 225];

class EnhancementCalculatorComponent {

  private _state;
  public get state() {
    return this._state;
  }
  public set state(value) {
    this._state = value;
  }

  public setState(value) {
    this._state = value;
  }

  constructor() {

    this.state = {
      stickerType: '', // +1 / summon +1 / attack hex / else
      playerPlusOneAbility: '',
      baseOtherEffect: '',
      summonPlusOneAbility: '',
      numberOfCurrentlyTargetedHexes: 2,
      levelOfAbilityCard: 1,
      numberOfPreviousEnhancements: 0,
      multipleTargets: false
    };
  }

  calculateCost() {
    let cost = 0;

    if (this.state.stickerType === 'playerPlus1') {
      if (this.state.playerPlusOneAbility) {
        cost += playerPlusOneAbilityLines[this.state.playerPlusOneAbility].cost;
      }
      else {
        // cannot yet calculate
        return 0;
      }
    }
    else if (this.state.stickerType === 'summonPlus1') {
      if (this.state.summonPlusOneAbility) {
        cost += summonPlusOneAbilityLines[this.state.summonPlusOneAbility].cost;
      }
      else {
        // cannot yet calculate
        return 0;
      }
    }
    else if (this.state.stickerType === 'attackHex') {
      cost += Math.floor( 200 / this.state.numberOfCurrentlyTargetedHexes );
    }
    else if (this.state.stickerType === 'otherEffect') {
      if (this.state.baseOtherEffect) {
        cost += baseOtherEffects[this.state.baseOtherEffect].cost;
      }
      else {
        // cannot yet calculate
        return 0;
      }
    }
    else {
      // no legal option selected
      return 0;
    }

    // double BASE COST if multiple targets (does not apply for attack hex)
    if (this.state.multipleTargets && this.state.stickerType !== 'attackHex') {
      cost *= 2;
    }

    // extra cost for level of ability card
    cost += levelCost[this.state.levelOfAbilityCard - 1];

    // extra cost for previous enhancements to the same action
    cost += previousEnhancementCost[this.state.numberOfPreviousEnhancements];

    return cost;
  }

  stickerTypeClick(stickerType) {
    if (this.state.stickerType === stickerType) {
      this.setState({
        stickerType: ''
      });
    }
    else {
      this.setState({
        stickerType
      });
    }
  }

  summonPlusOneAbilityClick(effect) {
    if (this.state.summonPlusOneAbility === effect) {
      this.setState({
        summonPlusOneAbility: ''
      });
    }
    else {
      this.setState({
        summonPlusOneAbility: effect
      });
    }
  }

  baseOtherEffectClick(effect) {
    if (this.state.baseOtherEffect === effect) {
      this.setState({
        baseOtherEffect: ''
      });
    }
    else {
      this.setState({
        baseOtherEffect: effect
      });
    }
  }

  playerPlusOneAbilityClick(abilityLine) {
    if (this.state.playerPlusOneAbility === abilityLine) {
      this.setState({
        playerPlusOneAbility: ''
      });
    }
    else {
      this.setState({
        playerPlusOneAbility: abilityLine
      });
    }
  }

  levelClick(level) {
    this.setState({
      levelOfAbilityCard: level
    });
  }

  numberOfHexesClick(hexes) {
    this.setState({
      numberOfCurrentlyTargetedHexes: hexes
    });
  }

  previousEnhancementClick(number) {
    this.setState({
      numberOfPreviousEnhancements: number
    });
  }

  multipleTargetClick() {
    this.setState({
      multipleTargets: !this.state.multipleTargets
    });
  }

  showOtherOptions() {
    if (this.state.stickerType === 'playerPlus1') {
      if (this.state.playerPlusOneAbility) {
        return true;
      }
    }
    else if (this.state.stickerType === 'summonPlus1') {
      if (this.state.summonPlusOneAbility) {
        return true;
      }
    }
    else if (this.state.stickerType === 'attackHex') {
      return true;
    }
    else if (this.state.stickerType === 'otherEffect') {
      if (this.state.baseOtherEffect) {
        return true;
      }
    }

    return false;
  }


}
