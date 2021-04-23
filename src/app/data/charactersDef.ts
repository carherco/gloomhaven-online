import { CharacterClass } from './../model/character-class';
import {
  Plus0,
  Plus1,
  Minus1,
  Plus1Immobilize,
  Plus2Muddle,
  Minus2,
  Plus2,
  Plus2Ice,
  Plus1Rolling,
  Pull1Rolling,
  MuddleRolling,
  ImmobilizeRolling,
  StunRolling,
  DisarmRolling,
  Push2Rolling,
  EarthRolling,
  WindRolling,
  LightRolling,
  DarkRolling,
  Plus3,
  FireRolling,
  Plus1Wound,
  Plus1Heal2,
  Plus1Poison,
  Plus1Curse,
  Plus0Stun,
  Plus2Fire,
  Plus2Frost,
  Heal1,
  Shield1Rolling,
  AddTargetRolling,
  Plus0AddTarget
} from './modifiers';

export const Brute: CharacterClass = {
  id: 'brute',
  key: 'BR',
  race: 'Inox',
  className: 'Brute',
  handCardSize: 10,
  image: 'Brute.png',
  hitPoints: [10, 12, 14, 16, 18, 20, 22, 24, 26],
  levelXCards: ['balanced-measure', 'skewer', 'wall-of-doom'],
  level1Cards: [
    'eye-for-an-eye', 'grab-and-go', 'leaping-cleave',
    'overwhelming-assault', 'provoking-roar', 'shield-bash',
    'spare-dagger', 'sweeping-blow', 'trample', 'warding-strength'
  ],
  level2Cards: ['fatal-advance', 'juggernaut'],
  level3Cards: ['brute-force', 'hook-and-chain'],
  level4Cards: ['devastating-hack', 'unstoppable-charge'],
  level5Cards: ['skirmishing-maneuver', 'whirlwind'],
  level6Cards: ['immovable-phalanx', 'quietus', ],
  level7Cards: ['crippling-offensive', 'deffensive-tactics'],
  level8Cards: ['frenzied-onslaught', 'selfish-retribution'],
  level9Cards: ['face-your-end', 'king-of-the-hill'],
  perks: [],
};

export const Cragheart: CharacterClass = {
  id: 'cragheart',
  key: 'CH',
  race: 'Savvas',
  className: 'Cragheart',
  handCardSize: 11,
  image: 'Cragheart.png',
  hitPoints: [10, 12, 14, 16, 18, 20, 22, 24, 26],
  levelXCards: ['forceful-storm', 'heaving-swing', 'natures-lift'],
  level1Cards: [
    'avalanche', 'backup-ammunition', 'crater',
    'crushing-grasp', 'dirt-tornado', 'earthen-clod',
    'massive-boulder', 'opposing-strike', 'rock-tunnel',
    'rumbling-advance', 'unstable-upheaval'
  ],
  level2Cards: ['explosive-punch', 'sentient-growth'],
  level3Cards: ['blunt-force', 'clear-the-way'],
  level4Cards: ['kinetic-assault', 'rock-slide'],
  level5Cards: ['petrify', 'stone-pummel'],
  level6Cards: ['cataclysm', 'dig-pit'],
  level7Cards: ['brutal-momentum', 'meteor'],
  level8Cards: ['lumbering-bash', 'rocky-end'],
  level9Cards: ['blind-destruction', 'pulverize'],
  perks: [
    { id: 'chPerk1', title: 'Remove Four +0 Cards', addModifiers: [], removeModifiers: [new Plus0(), new Plus0(), new Plus0(), new Plus0()] },
    { id: 'chPerk2-1', title: 'Replace One -1 Card With One +1 Card', addModifiers: [new Plus1()], removeModifiers: [new Minus1()] },
    { id: 'chPerk2-2', title: 'Replace One -1 Card With One +1 Card', addModifiers: [new Plus1()], removeModifiers: [new Minus1()] },
    { id: 'chPerk2-3', title: 'Replace One -1 Card With One +1 Card', addModifiers: [new Plus1()], removeModifiers: [new Minus1()] },
    { id: 'chPerk3', title: 'Add One -2 Card and Two +2 Cards', addModifiers: [new Minus2(), new Plus2(), new Plus2()], removeModifiers: [] },
    { id: 'chPerk4-1', title: 'Add One +1 Immobilize Card', addModifiers: [new Plus1Immobilize()], removeModifiers: [] },
    { id: 'chPerk4-2', title: 'Add One +1 Immobilize Card', addModifiers: [new Plus1Immobilize()], removeModifiers: [] },
    { id: 'chPerk5-1', title: 'Add One +2 Muddle Card', addModifiers: [new Plus2Muddle()], removeModifiers: [] },
    { id: 'chPerk5-2', title: 'Add One +2 Muddle Card', addModifiers: [new Plus2Muddle()], removeModifiers: [] },
    { id: 'chPerk6', title: 'Add Two Rolling Push 2 Cards', addModifiers: [new Push2Rolling(), new Push2Rolling()], removeModifiers: [] },
    { id: 'chPerk7-1', title: 'Add Two Rolling Infuse Earth Cards', addModifiers: [new EarthRolling(), new EarthRolling()], removeModifiers: [] },
    { id: 'chPerk7-2', title: 'Add Two Rolling Infuse Earth Cards', addModifiers: [new EarthRolling(), new EarthRolling()], removeModifiers: [] },
    { id: 'chPerk8', title: 'Add Two Rolling Infuse Wind Cards', addModifiers: [new WindRolling(), new WindRolling()], removeModifiers: [] },
    { id: 'chPerk9', title: 'Ignore Negative Item Effects', addModifiers: [], removeModifiers: [] },
    { id: 'chPerk10', title: 'Ignore Negative Scenario Effects', addModifiers: [], removeModifiers: [] },
  ],
};

export const Mindthief: CharacterClass = {
  id: 'mindthief',
  key: 'MT',
  race: 'Vermling',
  className: 'Mindthief',
  handCardSize: 10,
  image: 'Mindthief.png',
  hitPoints: [6, 7, 8, 9, 10, 11, 12, 13, 14],
  levelXCards: ['frigid-apparition', 'possession', 'withering-claw'],
  level1Cards: [
    'empathetic-assault', 'fearsome-blade', 'feedback-loop',
    'gnawing-horde', 'into-the-night', 'parasitic-influence',
    'perverse-edge', 'scurry', 'submissive-affliction', 'the-minds-weakness'
  ],
  level2Cards: ['hostile-takeover', 'withering-claw'],
  level3Cards: ['brain-leech', 'silent-scream'],
  level4Cards: ['cranium-overload', 'pilfer'],
  level5Cards: ['frozen-mind', 'mass-hysteria'],
  level6Cards: ['corrupting-embrace', 'dark-frenzy'],
  level7Cards: ['psychic-projection', 'vicious-blood'],
  level8Cards: ['domination', 'shared-nightmare'],
  level9Cards: ['many-as-one', 'phantasmal-killer'],
  perks: [
    { id: 'mtPerk1-1', title: 'Remove two -1 cards', addModifiers: [], removeModifiers: [new Minus1(), new Minus1()] },
    { id: 'mtPerk1-2', title: 'Remove two -1 cards', addModifiers: [], removeModifiers: [new Minus1(), new Minus1()] },
    { id: 'mtPerk2', title: 'Remove four +0 cards', addModifiers: [], removeModifiers: [new Plus0(), new Plus0(), new Plus0(), new Plus0()] },
    { id: 'mtPerk3', title: 'Replace two +1 cards with two +2 cards', addModifiers: [new Plus2(), new Plus2()], removeModifiers: [new Plus1(), new Plus1()] },
    { id: 'mtPerk4', title: 'Replace one -2 card with one 0 card', addModifiers: [new Plus0()], removeModifiers: [new Minus2()] },
    { id: 'mtPerk5-1', title: 'Add one +2 Infuse Ice card', addModifiers: [new Plus2Ice()], removeModifiers: [] },
    { id: 'mtPerk5-2', title: 'Add one +2 Infuse Ice card', addModifiers: [new Plus2Ice()], removeModifiers: [] },
    { id: 'mtPerk6-1', title: 'Add two Rolling +1 cards', addModifiers: [new Plus1Rolling()], removeModifiers: [] },
    { id: 'mtPerk6-2', title: 'Add two Rolling +1 cards', addModifiers: [new Plus1Rolling()], removeModifiers: [] },
    { id: 'mtPerk7', title: 'Add three Rolling Pull 1 Cards', addModifiers: [new Pull1Rolling(), new Pull1Rolling(), new Pull1Rolling()], removeModifiers: [] },
    { id: 'mtPerk8', title: 'Add three Rolling Muddle Cards', addModifiers: [new MuddleRolling(), new MuddleRolling(), new MuddleRolling()], removeModifiers: [] },
    { id: 'mtPerk9', title: 'Add two Rolling Immobilize Cards', addModifiers: [new ImmobilizeRolling(), new ImmobilizeRolling()], removeModifiers: [] },
    { id: 'mtPerk10', title: 'Add one Rolling Stun card', addModifiers: [new StunRolling()], removeModifiers: [] },
    { id: 'mtPerk11', title: 'Add one Rolling Disarm card and one Rolling Muddle card', addModifiers: [new DisarmRolling(), new MuddleRolling()], removeModifiers: [] },
    { id: 'mtPerk12', title: 'Ignore Negative Scenario Effects', addModifiers: [], removeModifiers: [] },
  ],
};

export const Spellweaver: CharacterClass = {
  id: 'spellweaver',
  key: 'SW',
  race: 'Orchid',
  className: 'Spellweaver',
  handCardSize: 8,
  image: 'Spellweaver.png',
  hitPoints: [6, 7, 8, 9, 10, 11, 12, 13, 14],
  levelXCards: ['aid-from-the-ether', 'crackling-air', 'hardened-spikes'],
  level1Cards: [
    'fire-orbs', 'flame-strike', 'freezing-nova',
    'frost-armor', 'impaling-eruption', 'mana-bolt',
    'reviving-ether', 'ride-the-wind'
  ],
  level2Cards: ['flashing-burst', 'icy-blast'],
  level3Cards: ['cold-fire', 'elemental-aid'],
  level4Cards: ['forked-beam', 'spirit-of-doom'],
  level5Cards: ['chromatic-explosion', 'engulfed-in-flames'],
  level6Cards: ['frozen-night', 'living-torch'],
  level7Cards: ['stone-fists', 'twin-restoration'],
  level8Cards: ['cold-front', 'zephyr-wings'],
  level9Cards: ['black-hole', 'inferno'],
  perks: [
    { id: 'swPerk1', title: 'Remove four +0 cards', addModifiers: [], removeModifiers: [new Plus0(), new Plus0(), new Plus0(), new Plus0()] },
    { id: 'swPerk2-1', title: 'Replace one -1 card with one +1 card', addModifiers: [new Plus1()], removeModifiers: [new Minus1()] },
    { id: 'swPerk2-2', title: 'Replace one -1 card with one +1 card', addModifiers: [new Plus1()], removeModifiers: [new Minus1()] },
    { id: 'swPerk3-1', title: 'Add two +1 cards', addModifiers: [new Plus1(), new Plus1()], removeModifiers: [] },
    { id: 'swPerk3-2', title: 'Add two +1 cards', addModifiers: [new Plus1(), new Plus1()], removeModifiers: [] },
    { id: 'swPerk4', title: 'Add one +0 Stun card', addModifiers: [new Plus0Stun()], removeModifiers: [] },
    { id: 'swPerk5', title: 'Add one +1 Wound card', addModifiers: [new Plus1Wound()], removeModifiers: [] },
    { id: 'swPerk6', title: 'Add one +1 Immobilize card', addModifiers: [new Plus1Immobilize()], removeModifiers: [] },
    { id: 'swPerk7', title: 'Add one +1 Curse card', addModifiers: [new Plus1Curse()], removeModifiers: [] },
    { id: 'swPerk8-1', title: 'Add one +2 Infuse Fire card', addModifiers: [new Plus2Fire()], removeModifiers: [] },
    { id: 'swPerk8-2', title: 'Add one +2 Infuse Fire card', addModifiers: [new Plus2Fire()], removeModifiers: [] },
    { id: 'swPerk9-1', title: 'Add one +2 Infuse Ice card', addModifiers: [new Plus2Frost()], removeModifiers: [] },
    { id: 'swPerk9-2', title: 'Add one +2 Infuse Ice card', addModifiers: [new Plus2Frost()], removeModifiers: [] },
    { id: 'swPerk10', title: 'Add one Rolling Infuse Earth and one Rolling Infuse Wind cards', addModifiers: [new EarthRolling(), new WindRolling()], removeModifiers: [] },
    { id: 'swPerk11', title: 'Add one Rolling Infuse Light and one Rolling Infuse Dark cards', addModifiers: [new LightRolling(), new DarkRolling()], removeModifiers: [] },
  ],
};

export const Scoundrel: CharacterClass = {
  id: 'scoundrel',
  key: 'SC',
  race: 'Human',
  className: 'Scoundrel',
  handCardSize: 10,
  image: 'Scoundrel.png',
  hitPoints: [8, 9, 11, 12, 14, 15, 17, 18, 20],
  levelXCards: [],
  level1Cards: [],
  level2Cards: [],
  level3Cards: [],
  level4Cards: [],
  level5Cards: [],
  level6Cards: [],
  level7Cards: [],
  level8Cards: [],
  level9Cards: [],
  perks: [],
};

export const Tinkerer: CharacterClass = {
  id: 'tinkerer',
  key: 'TI',
  race: 'Quatryl',
  className: 'Tinkerer',
  handCardSize: 12,
  image: 'Tinkerer.png',
  hitPoints: [8, 9, 11, 12, 14, 15, 17, 18, 20],
  levelXCards: ['potent-potables', 'reviving-shock', 'volatile-concoction'],
  level1Cards: [
    'energizing-tonic', 'enhancement-field',
    'flamethrower', 'harmless-contraption', 'hook-gun', 'ink-bomb',
    'net-shooter', 'proximity-mine', 'reinvigorating-elixir',
    'restorative-mist', 'stun-shot', 'toxic-bolt'
  ],
  level2Cards: ['disorienting-flash', 'stamina-booster'],
  level3Cards: ['crank-bow', 'tinkerers-tools'],
  level4Cards: ['dangerous-contraption', 'micro-bots'],
  level5Cards: ['disintegration-beam', 'noxious-vials'],
  level6Cards: ['auto-turret', 'gas-canister'],
  level7Cards: ['curative-aerosol', 'murderous-contraption'],
  level8Cards: ['harsh-stimulants', 'jet-propulsion'],
  level9Cards: ['chimeric-formula', 'lethal-injection'],
  perks: [
    { id: 'tiPerk1-1', title: 'Remove two -1 cards', addModifiers: [], removeModifiers: [new Minus1(), new Minus1()] },
    { id: 'tiPerk1-2', title: 'Remove two -1 cards', addModifiers: [], removeModifiers: [new Minus1(), new Minus1()] },
    { id: 'tiPerk2', title: 'Replace one -2 card with one 0 card', addModifiers: [new Plus0()], removeModifiers: [new Minus2()] },
    { id: 'tiPerk3', title: 'Add two +1 cards', addModifiers: [new Plus1(), new Plus1()], removeModifiers: [] },
    { id: 'tiPerk4', title: 'Add one +3 card', addModifiers: [new Plus3()], removeModifiers: [] },
    { id: 'tiPerk5', title: 'Add two Rolling Infuse Fire card', addModifiers: [new FireRolling(), new FireRolling()], removeModifiers: [] },
    { id: 'tiPerk6', title: 'Add three Rolling Muddle cards', addModifiers: [new MuddleRolling(), new MuddleRolling(), new MuddleRolling()], removeModifiers: [] },
    { id: 'tiPerk7-1', title: 'Add one +1 Wound cards', addModifiers: [new Plus1Wound()], removeModifiers: [] },
    { id: 'tiPerk7-2', title: 'Add one +1 Wound cards', addModifiers: [new Plus1Wound()], removeModifiers: [] },
    { id: 'tiPerk8-1', title: 'Add one +1 Immobilize card', addModifiers: [new Plus1Immobilize()], removeModifiers: [] },
    { id: 'tiPerk8-2', title: 'Add one +1 Immobilize card', addModifiers: [new Plus1Immobilize()], removeModifiers: [] },
    { id: 'tiPerk9-1', title: 'Add one +1 Heal 2 card', addModifiers: [new Plus1Heal2(), new Plus1Heal2()], removeModifiers: [] },
    { id: 'tiPerk9-2', title: 'Add one +1 Heal 2 card', addModifiers: [new Plus1Heal2(), new Plus1Heal2()], removeModifiers: [] },
    { id: 'tiPerk10', title: 'Add one +0 Add Target card', addModifiers: [new Plus0AddTarget()], removeModifiers: [] },
    { id: 'tiPerk11', title: 'Ignore Negative Scenario Effects', addModifiers: [], removeModifiers: [] },
  ],
};

export const Doomstalker: CharacterClass = {
  id: 'doomstalker',
  key: 'DS',
  race: 'Orchid',
  className: 'Doomstalker',
  handCardSize: 12,
  image: 'Doomstalker.png',
  hitPoints: [8, 9, 11, 12, 14, 15, 17, 18, 20],
  levelXCards: ['fresh-kill', 'sap-life', 'the-hunt-begins'],
  level1Cards: [
    'a-moments-peace', 'crippling-noose', 'detonation',
    'felling-swoop', 'foot-snare', 'frightening-curse',
    'multi-pronged-assault', 'race-to-the-grave', 'rain-of-arrows',
    'solid-bow', 'swift-trickery', 'vital-charge'
  ],
  level2Cards: ['expose', 'relentless-offensive'],
  level3Cards: ['darkened-skies', 'press-the-attack'],
  level4Cards: ['flight-of-flame', 'singular-focus'],
  level5Cards: ['inescapable-fate', 'wild-command'],
  level6Cards: ['camouflage', 'natures-hunger'],
  level7Cards: ['crashing-wave', 'impending-end'],
  level8Cards: ['feral-instincts', 'rising-momentum'],
  level9Cards: ['lead-to-slaughter', 'predator-and-prey'],
  perks: [
    { id: 'dsPerk1-1', title: 'Remove Two -1 Cards', addModifiers: [], removeModifiers: [new Minus1(), new Minus1()] },
    { id: 'dsPerk1-2', title: 'Remove Two -1 Cards', addModifiers: [], removeModifiers: [new Minus1(), new Minus1()] },
    { id: 'dsPerk2-1', title: 'Replace Two +0 Cards with Two +1 Cards', addModifiers: [new Plus1(), new Plus1()], removeModifiers: [new Plus0(), new Plus0()] },
    { id: 'dsPerk2-2', title: 'Replace Two +0 Cards with Two +1 Cards', addModifiers: [new Plus1(), new Plus1()], removeModifiers: [new Plus0(), new Plus0()] },
    { id: 'dsPerk2-3', title: 'Replace Two +0 Cards with Two +1 Cards', addModifiers: [new Plus1(), new Plus1()], removeModifiers: [new Plus0(), new Plus0()] },
    { id: 'dsPerk3-1', title: 'Add Two Rolling +1 Cards', addModifiers: [new Plus1Rolling(), new Plus1Rolling()], removeModifiers: [] },
    { id: 'dsPerk3-2', title: 'Add Two Rolling +1 Cards', addModifiers: [new Plus1Rolling(), new Plus1Rolling()], removeModifiers: [] },
    { id: 'dsPerk4', title: 'Add One +2 Muddle Card', addModifiers: [new Plus2Muddle()], removeModifiers: [] },
    { id: 'dsPerk5', title: 'Add One +1 Poison Card', addModifiers: [new Plus1Poison()], removeModifiers: [] },
    { id: 'dsPerk6', title: 'Add One +1 Wound Card', addModifiers: [new Plus1Wound()], removeModifiers: [] },
    { id: 'dsPerk7', title: 'Add One +1 Immobilize Card', addModifiers: [new Plus1Immobilize()], removeModifiers: [] },
    { id: 'dsPerk8', title: 'Add One +0 Stun Card', addModifiers: [new Plus0Stun()], removeModifiers: [] },
    { id: 'dsPerk9-1', title: 'Add One Rolling Add Target Card', addModifiers: [new AddTargetRolling()], removeModifiers: [] },
    { id: 'dsPerk9-2', title: 'Add One Rolling Add Target Card', addModifiers: [new AddTargetRolling()], removeModifiers: [] },
    { id: 'dsPerk10', title: 'Ignore Negative Scenario Effects', addModifiers: [], removeModifiers: [] },
  ],
};

export const Sunkeeper: CharacterClass = {
  id: 'sunkeeper',
  key: 'SK',
  race: 'Valrath',
  className: 'Sunkeeper',
  handCardSize: 11,
  image: 'Sunkeeper.png',
  hitPoints: [10, 12, 14, 16, 18, 20, 22, 24, 26],
  levelXCards: ['beacon-of-light', 'daybreak', 'glorious-bolt'],
  level1Cards: [
    'brilliant-prayer', 'cautious-advance', 'dazzling-charge',
    'defensive-stance', 'empowering-command', 'hammer-blow',
    'holy-strike', 'lay-on-hands', 'protective-blessing',
    'purifying-aura', 'tactical-order'
  ],
  level2Cards: ['practical-plans', 'unwavering-mandate'],
  level3Cards: ['burning-flash', 'mobilizing-axiom'],
  level4Cards: ['engulfing-radiance', 'righteous-strength'],
  level5Cards: ['path-of-glory', 'scales-of-justice'],
  level6Cards: ['illuminate-the-target', 'supportive-chant'],
  level7Cards: ['bright-aegis', 'weapon-of-purity'],
  level8Cards: ['cleansing-force', 'inspiring-sanctity'],
  level9Cards: ['angelic-ascension', 'divine-intervention'],
  perks: [
    { id: 'skPerk1-1', title: 'Remove Two -1 Cards', addModifiers: [], removeModifiers: [new Minus1(), new Minus1()] },
    { id: 'skPerk1-2', title: 'Remove Two -1 Cards', addModifiers: [], removeModifiers: [new Minus1(), new Minus1()] },
    { id: 'skPerk2', title: 'Replace Four +0 Cards', addModifiers: [], removeModifiers: [new Plus0(), new Plus0(), new Plus0(), new Plus0()] },
    { id: 'skPerk3', title: 'Replace One -2 Card with One 0 Card', addModifiers: [new Plus0()], removeModifiers: [new Minus2()] },
    { id: 'skPerk4', title: 'Replace One 0 Card with One +2 Card', addModifiers: [new Plus2()], removeModifiers: [new Plus0()] },
    { id: 'skPerk5-1', title: 'Add Two Rolling +1 Cards', addModifiers: [new Plus1Rolling(), new Plus1Rolling()], removeModifiers: [] },
    { id: 'skPerk5-2', title: 'Add Two Rolling +1 Cards', addModifiers: [new Plus1Rolling(), new Plus1Rolling()], removeModifiers: [] },
    { id: 'skPerk6-1', title: 'Add two Heal 1 Card', addModifiers: [new Heal1(), new Heal1()], removeModifiers: [] },
    { id: 'skPerk6-2', title: 'Add two Heal 1 Card', addModifiers: [new Heal1(), new Heal1()], removeModifiers: [] },
    { id: 'skPerk7', title: 'Add one Rolling Stun Card', addModifiers: [new StunRolling()], removeModifiers: [] },
    { id: 'skPerk8-1', title: 'Add Two Rolling Infuse Light Cards', addModifiers: [new LightRolling(), new LightRolling()], removeModifiers: [] },
    { id: 'skPerk8-2', title: 'Add Two Rolling Infuse Light Cards', addModifiers: [new LightRolling(), new LightRolling()], removeModifiers: [] },
    { id: 'skPerk9', title: 'Add Two Rolling Shield 1 Cards', addModifiers: [new Shield1Rolling(), new Shield1Rolling()], removeModifiers: [] },
    { id: 'skPerk10', title: 'Ignore Negative Item Effects and Add Two +1 Cards', addModifiers: [new Plus1(), new Plus1()], removeModifiers: [] },
    { id: 'skPerk11', title: 'Ignore Negative Scenario Effects', addModifiers: [], removeModifiers: [] },
  ],
};

export const Elementalist: CharacterClass = {
  id: 'elementalist',
  key: 'EL',
  race: 'Savvas',
  className: 'Elementalist',
  handCardSize: 11,
  image: 'Elementalist.jpg',
  hitPoints: [10, 12, 14, 16, 18, 20, 22, 24, 26],
  levelXCards: ['brilliant-flash', 'encompassing-shadow', 'malleable-evocation'],
  level1Cards: [
    'formless-power', 'frigid-torrent', 'ice-spikes',
    'infernal-vortex', 'lava-eruption', 'pure-augmentation',
    'raw-enhancement', 'shaping-the-ether', 'stoking-hail',
    'tremulant-cyclone'
  ],
  level2Cards: ['boiling-arc', 'crystallizing-blast'],
  level3Cards: ['burial', 'chain-lightning'],
  level4Cards: ['gravel-vortex', 'primal-duality'],
  level5Cards: ['obsidian-shards', 'winters-edge'],
  level6Cards: ['eye-of-the-hurricane', 'simulacrum'],
  level7Cards: ['pragmatic-reinforcement', 'vengeance'],
  level8Cards: ['elemental-aegis', 'volatile-consumption'],
  level9Cards: ['eternal-equilibrium', 'ethereal-manifestation'],
  perks: [
    { id: 'skPerk1-1', title: 'Remove Two -1 Cards', addModifiers: [], removeModifiers: [new Minus1(), new Minus1()] },
    { id: 'skPerk1-2', title: 'Remove Two -1 Cards', addModifiers: [], removeModifiers: [new Minus1(), new Minus1()] },
    { id: 'skPerk2', title: 'Replace Four +0 Cards', addModifiers: [], removeModifiers: [new Plus0(), new Plus0(), new Plus0(), new Plus0()] },
    { id: 'skPerk3', title: 'Replace One -2 Card with One 0 Card', addModifiers: [new Plus0()], removeModifiers: [new Minus2()] },
    { id: 'skPerk4', title: 'Replace One 0 Card with One +2 Card', addModifiers: [new Plus2()], removeModifiers: [new Plus0()] },
    { id: 'skPerk5-1', title: 'Add Two Rolling +1 Cards', addModifiers: [new Plus1Rolling(), new Plus1Rolling()], removeModifiers: [] },
    { id: 'skPerk5-2', title: 'Add Two Rolling +1 Cards', addModifiers: [new Plus1Rolling(), new Plus1Rolling()], removeModifiers: [] },
    { id: 'skPerk6-1', title: 'Add two Heal 1 Card', addModifiers: [new Heal1(), new Heal1()], removeModifiers: [] },
    { id: 'skPerk6-2', title: 'Add two Heal 1 Card', addModifiers: [new Heal1(), new Heal1()], removeModifiers: [] },
    { id: 'skPerk7', title: 'Add one Rolling Stun Card', addModifiers: [new StunRolling()], removeModifiers: [] },
    { id: 'skPerk8-1', title: 'Add Two Rolling Infuse Light Cards', addModifiers: [new LightRolling(), new LightRolling()], removeModifiers: [] },
    { id: 'skPerk8-2', title: 'Add Two Rolling Infuse Light Cards', addModifiers: [new LightRolling(), new LightRolling()], removeModifiers: [] },
    { id: 'skPerk9', title: 'Add Two Rolling Shield 1 Cards', addModifiers: [new Shield1Rolling(), new Shield1Rolling()], removeModifiers: [] },
    { id: 'skPerk10', title: 'Ignore Negative Item Effects and Add Two +1 Cards', addModifiers: [new Plus1(), new Plus1()], removeModifiers: [] },
    { id: 'skPerk11', title: 'Ignore Negative Scenario Effects', addModifiers: [], removeModifiers: [] },
  ],
};

export const AvailableCharacters: CharacterClass[] = [
  Brute,
  Cragheart,
  Mindthief,
  Spellweaver,
  Scoundrel,
  Tinkerer,
  Doomstalker,
  Sunkeeper,
  Elementalist
];
