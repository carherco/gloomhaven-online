export type Treasure = {
  title: string;
};

export const TREASURES: Treasure[] = [
	{ title: 'dummy' }, // dummy treasure zero (there is no treasure zero)
	{ title: 'Random Item Design' },
	{ title: 'Tower Shield (Item 32)' },
	{ title: 'Splintmail (Item 44)' },
	{ title: '15 gold' },
	{ title: 'Chainmail (Item 23)' }, // 5
	{ title: 'Hooked Chain (Item 39)' },
	{ title: 'Random Side Scenario' },
	{ title: 'Gain 1 checkmark' },
	{ title: 'Wave Crest (Item 111)' },
	{ title: 'Gain 10 experience' }, // 10
	{ title: 'Random Item Design' },
	{ title: 'Magma Waders (Item 99)' },
	{ title: 'Suffer 5 damage, gain POISON and WOUND' },
	{ title: 'Gain 10 experience' },
	{ title: 'Pendant of Dark Pacts (Item 45)' }, // 15
	{ title: '10 gold' },
	{ title: '20 gold' },
	{ title: '15 gold' },
	{ title: 'Random Item Design' },
	{ title: 'Random Item Design' }, // 20
	{ title: 'Suffer 5 damage' },
	{ title: 'Random Item Design' },
	{ title: 'Drakescale Armor (Item 103)' },
	{ title: 'Suffer 5 damage' },
	{ title: '25 gold' }, // 25
	{ title: '20 gold' },
	{ title: 'Orb of Twilight (Item 122)' },
	{ title: '15 gold' },
	{ title: 'Endurance Footwraps (Item 97)' },
	{ title: 'Gain 1 checkmark' }, // 30
	{ title: 'Random Item Design' },
	{ title: 'Random Item Design' },
	{ title: 'Weighted Net (Item 19)' },
	{ title: 'Amulet of Life (Item 24)' },
	{ title: 'Drakescale Boots (Item 98)' }, // 35
	{ title: 'Rocket Boots DESIGN (Item 96)' },
	{ title: 'Gain 1 checkmark' },
	{ title: 'Ring of Skulls DESIGN (Item 123)' },
	{ title: 'Suffer 5 damage' },
	{ title: 'Random Item Design' }, // 40
	{ title: 'Black Knife (Item 53)' },
	{ title: 'Random Item Design' },
	{ title: 'Suffer 5 damage, gain POISON and WOUND' },
	{ title: 'Random Side Scenario' },
	{ title: 'Random Item Design' }, // 45
	{ title: 'Suffer 3 damage, gain POISON' },
	{ title: 'Steam Armor (Item 104)' },
	{ title: '30 gold' },
	{ title: 'New Scenario: Lost Island (17 / K-17)' },
	{ title: 'Second Skin (Item 101)' }, // 50
	{ title: 'Random Side Scenario' },
	{ title: 'Heart of the Betrayer (Item 131)' },
	{ title: 'Random Item Design' },
	{ title: 'Doomed Compass (Item 124)' },
	{ title: 'Gain 1 checkmark' }, // 55
	{ title: 'Star Earring (Item 69)' },
	{ title: '15 gold' },
	{ title: 'Drakescale Helm (Item 108)' },
	{ title: 'Random Item Design' },
	{ title: 'Skullbane Axe (Item 113)' }, // 60
	{ title: 'Versatile Dagger (Item 40)' },
	{ title: 'Helm of the Mountain (Item 110) and Mountain Hammer (Item 115)' },
	{ title: 'Random Item Design' },
	{ title: '30 gold' },
	{ title: 'Horned Helm DESIGN (Item 107)' }, // 65
	{ title: 'Volatile Bomb (Item 33)' },
	{ title: '10 gold' },
	{ title: 'Helix Ring (Item 130)' },
	{ title: 'Robes of Summoning (Item 100)' },
	{ title: 'Random Side Scenario' }, // 70
	{ title: 'Random Side Scenario' },
	{ title: 'Fueled Falchion DESIGN (Item 116)' },
	{ title: 'Random Item Design' },
	{ title: 'Random Item Design' },
	{ title: 'A Mysterious Message (please see Scenario Book to view)' }, // 75
	{ title: 'Major Stamina Potion (Item 34)' }, // 76 (K1)
	{ title: 'A Mysterious Diagram (please see Kickstarter Scenario Book to view)' }, // 77 (K2)
];

export const DONATION_MILESTONES = [10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100];

// index: scenario number; value: treasure tiles in that scenario
export const SCENARIO_TREAURES = [
	[], // dummy treasure tile for "scenario zero"
	[7],
	[67],
	[65],
	[38, 46],
	[4, 28], // 5
	[50],
	[],
	[51],
	[],
	[11], // 10
	[5],
	[34],
	[10],
	[26],
	[], // 15
	[1],
	[71],
	[63],
	[17],
	[60], // 20
	[15],
	[21],
	[39, 72],
	[70],
	[58], // 25
	[66],
	[],
	[32],
	[41],
	[], // 30
	[69],
	[],
	[],
	[23],
	[61], // 35
	[2],
	[49],
	[29],
	[73],
	[47], // 40
	[24],
	[30, 55],
	[35],
	[],
	[74], // 45
	[48],
	[57, 18],
	[64],
	[44],
	[], // 50
	[56],
	[],
	[31],
	[25],
	[], // 55
	[45],
	[3, 22],
	[],
	[],
	[], // 60
	[],
	[59],
	[12],
	[9],
	[], // 65
	[16, 36],
	[14],
	[33],
	[],
	[6], // 70
	[],
	[],
	[],
	[20],
	[53], // 75
	[75],
	[],
	[],
	[52],
	[], // 80
	[68],
	[62],
	[],
	[42],
	[], // 85
	[],
	[40],
	[8, 37],
	[13, 27, 43],
	[19], // 90
	[],
	[],
	[54],
	[],
	[], // 95
	[], // K1
	[],
	[],
	[],
	[], // 100 - K5
	[],
	[],
	[76],
	[],
	[77], // 105 - K6
];

// index: treasure number; value: scenario number that treasure appears in
export const TREASURE_SCENARIOS = [
	-1, // treasure zero doesn't exist
	16,
	36,
	57,
	5,
  11,
  70,
  1,
  88,
  64,
  13, // 10
  10,
  63,
  89,
  67,
  21,
  66,
  19,
  47,
  90,
  74, // 20
  22,
  57,
  34,
  41,
  54,
  14,
  89,
  5,
  38,
  42, // 30
  53,
  28,
  68,
  12,
  43,
  66,
  88,
  4,
  23,
  87, // 40
  29,
  84,
  89,
  49,
  56,
  4,
  40,
  46,
  37,
  6, // 50
  8,
  79,
  75,
  93,
  42,
  51,
  47,
  25,
  62,
  20, // 60
  35,
  82,
  18,
  48,
  3,
  26,
  2,
  81,
  31,
  24, // 70
  17,
  23,
  39,
  45,
  76, // 75
  95 + 8, // K8
  95 + 10// k10
];
