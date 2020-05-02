export interface Stats {
  h: number; // hit points
  m?: number; // move points
  a?: number; // attack
  r?: number; // range
  f?: boolean; // flying
  s?: number; // shield
  p?: true; // poison
  re?: number; // retaliate
}

export interface EnemyDef {
  id: string;
  description: string;
  isBoss?: boolean;
  stats: {1: {normal: Stats, elite: Stats}, 2: {normal: Stats, elite: Stats}, 3: {normal: Stats, elite: Stats}};
}

const VermlingScout: EnemyDef = {
  id: 'Vermling-Scout',
  description: '',
  stats: {
    1: {
      normal: {h:3, m:3, a:1},
      elite: {h:5, m:3, a:2},
    },
    2: {
      normal: {h:3, m:3, a:2},
      elite: {h:5, m:4, a:3},
    },
    3: {
      normal: {h:5, m:3, a:3},
      elite: {h:7, m:4, a:3},
    }
  }
};

const GiantViper: EnemyDef = {
  id: 'Giant-Viper',
  description: '',
  stats: {
    1: {
      normal: {h:3, m:2, a:1, p:true},
      elite: {h:5, m:2, a:2, p:true},
    },
    2: {
      normal: {h:4, m:3, a:1, p:true},
      elite: {h:7, m:3, a:2, p:true},
    },
    3: {
      normal: {h:4, m:3, a:2, p:true},
      elite: {h:8, m:3, a:3, p:true},
    }
  }
};

const Ooze: EnemyDef = {
  id: 'Ooze',
  description: '',
  stats: {
    1: {
      normal: {h:5, m:1, a:2, r:2, s:1},
      elite: {h:9, m:1, a:2, r:3, s:1},
    },
    2: {
      normal: {h:7, m:1, a:2, r:3, s:1},
      elite: {h:11, m:1, a:3, r:3, s:1},
    },
    3: {
      normal: {h:8, m:1, a:3, r:3, s:1},
      elite: {h:11, m:2, a:3, r:4, s:1, p:true},
    }
  }
};

export const EnemyDefs = {
  'Vermling-Scout': VermlingScout,
  'Giant-Viper': GiantViper,
  Ooze
};
