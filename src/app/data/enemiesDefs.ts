export interface Stats {
  h: number; // hit points
  m?: number; // move points
  a?: number; // attack
  r?: number; // range
  s?: number; // shield
  ta?: number; // target
  re?: number; // retaliate
  pi?: number; // pierce
  po?: boolean; // poison
  mu?: boolean; // muddle
  wo?: boolean; // wound
  im?: boolean; // immobilize
  da?: boolean; // disarm
  cu?: boolean; // curse
  ad?: boolean; // advantage
  di?: boolean; // Attackers gain disadvantage
  special1?: string;
  special2?: string;
}

export interface EnemyDef {
  id: string;
  description: string;
  flying?: boolean;
  stats: {
    0: {normal: Stats, elite: Stats},
    1: {normal: Stats, elite: Stats},
    2: {normal: Stats, elite: Stats},
    3: {normal: Stats, elite: Stats},
    4: {normal: Stats, elite: Stats},
    5: {normal: Stats, elite: Stats},
    6: {normal: Stats, elite: Stats},
    7: {normal: Stats, elite: Stats}
  };
  cardsId: string;
}

export interface BossDef {
  id: string;
  description: string;
  flying?: boolean;
  inmuneTo?: {
    po: boolean;
    mu: boolean;
    wo: boolean;
    im: boolean;
    st: boolean;
    cu: boolean;
  };
  stats: {0?: Stats, 1?: Stats, 2?: Stats, 3?: Stats, 4?: Stats, 5?: Stats, 6?: Stats, 7?: Stats};
  cardsId: 'bo';
}

const AncientArtillery: EnemyDef = {
  id: 'Ancient-Artillery',
  description: '',
  stats: {
    0: {
        normal: {
            h: 4,
            m: 0,
            a: 2,
            r: 4
        },
        elite: {
            h: 7,
            m: 0,
            a: 3,
            r: 5
        }
    },
    1: {
        normal: {
            h: 6,
            m: 0,
            a: 2,
            r: 4
        },
        elite: {
            h: 9,
            m: 0,
            a: 3,
            r: 5
        }
    },
    2: {
        normal: {
            h: 7,
            m: 0,
            a: 2,
            r: 5
        },
        elite: {
            h: 11,
            m: 0,
            a: 3,
            r: 6
        }
    },
    3: {
        normal: {
            h: 8,
            m: 0,
            a: 3,
            r: 5
        },
        elite: {
            h: 13,
            m: 0,
            a: 4,
            r: 6
        }
    },
    4: {
        normal: {
            h: 9,
            m: 0,
            a: 4,
            r: 5
        },
        elite: {
            h: 13,
            m: 0,
            a: 4,
            r: 6,
            ta: 2
        }
    },
    5: {
        normal: {
            h: 11,
            m: 0,
            a: 4,
            r: 6
        },
        elite: {
            h: 15,
            m: 0,
            a: 4,
            r: 7,
            ta: 2
        }
    },
    6: {
        normal: {
            h: 14,
            m: 0,
            a: 4,
            r: 6
        },
        elite: {
            h: 16,
            m: 0,
            a: 5,
            r: 7,
            ta: 2
        }
    },
    7: {
        normal: {
            h: 16,
            m: 0,
            a: 4,
            r: 7
        },
        elite: {
            h: 20,
            m: 0,
            a: 5,
            r: 7,
            ta: 2
        }
    }
},
  cardsId: 'aa'
};

const BanditArcher: EnemyDef = {
  id: 'Bandit-Archer',
  description: '',
  stats: {
    0: {
        normal: {
            h: 4,
            m: 2,
            a: 2,
            r: 3
        },
        elite: {
            h: 6,
            m: 2,
            a: 3,
            r: 3
        }
    },
    1: {
        normal: {
            h: 5,
            m: 2,
            a: 2,
            r: 4
        },
        elite: {
            h: 7,
            m: 2,
            a: 3,
            r: 5
        }
    },
    2: {
        normal: {
            h: 6,
            m: 3,
            a: 2,
            r: 4
        },
        elite: {
            h: 9,
            m: 3,
            a: 3,
            r: 5
        }
    },
    3: {
        normal: {
            h: 6,
            m: 3,
            a: 3,
            r: 4
        },
        elite: {
            h: 10,
            m: 3,
            a: 4,
            r: 5
        }
    },
    4: {
        normal: {
            h: 8,
            m: 3,
            a: 3,
            r: 4
        },
        elite: {
            h: 10,
            m: 3,
            a: 4,
            r: 6,
            po: true
        }
    },
    5: {
        normal: {
            h: 10,
            m: 3,
            a: 3,
            r: 5
        },
        elite: {
            h: 12,
            m: 4,
            a: 4,
            r: 6,
            po: true
        }
    },
    6: {
        normal: {
            h: 10,
            m: 3,
            a: 4,
            r: 5
        },
        elite: {
            h: 13,
            m: 4,
            a: 5,
            r: 6,
            po: true
        }
    },
    7: {
        normal: {
            h: 13,
            m: 3,
            a: 4,
            r: 5
        },
        elite: {
            h: 17,
            m: 4,
            a: 5,
            r: 6,
            po: true
        }
    }
},
  cardsId: 'ar'
};

const BanditGuard: EnemyDef = {
  id: 'Bandit-Guard',
  description: '',
  stats: {
    0: {
        normal: {
            h: 5,
            m: 2,
            a: 2,
            r: 0
        },
        elite: {
            h: 9,
            m: 2,
            a: 3,
            r: 0
        }
    },
    1: {
        normal: {
            h: 6,
            m: 3,
            a: 2,
            r: 0
        },
        elite: {
            h: 9,
            m: 2,
            a: 3,
            r: 0,
            s: '1'
        }
    },
    2: {
        normal: {
            h: 6,
            m: 3,
            a: 3,
            r: 0
        },
        elite: {
            h: 10,
            m: 2,
            a: 4,
            r: 0,
            s: '1'
        }
    },
    3: {
        normal: {
            h: 9,
            m: 3,
            a: 3,
            r: 0
        },
        elite: {
            h: 10,
            m: 3,
            a: 4,
            r: 0,
            s: '2'
        }
    },
    4: {
        normal: {
            h: 10,
            m: 4,
            a: 3,
            r: 0
        },
        elite: {
            h: 11,
            m: 3,
            a: 4,
            r: 0,
            mu: true,
            s: '2'
        }
    },
    5: {
        normal: {
            h: 11,
            m: 4,
            a: 4,
            r: 0
        },
        elite: {
            h: 12,
            m: 3,
            a: 5,
            r: 0,
            mu: true,
            s: '2'
        }
    },
    6: {
        normal: {
            h: 14,
            m: 4,
            a: 4,
            r: 0
        },
        elite: {
            h: 14,
            m: 4,
            a: 5,
            r: 0,
            mu: true,
            s: '2'
        }
    },
    7: {
        normal: {
            h: 16,
            m: 5,
            a: 4,
            r: 0
        },
        elite: {
            h: 14,
            m: 3,
            a: 5,
            r: 0,
            mu: true,
            s: 3
        }
    }
},
  cardsId: 'gu'
};

const BlackImp: EnemyDef = {
  id: 'Black-Imp',
  description: '',
  stats: {
    0: {
        normal: {
            h: 3,
            m: 1,
            a: 1,
            r: 3
        },
        elite: {
            h: 4,
            m: 1,
            a: 2,
            r: 3,
            po: true
        }
    },
    1: {
        normal: {
            h: 4,
            m: 1,
            a: 1,
            r: 3,
            po: true
        },
        elite: {
            h: 6,
            m: 1,
            a: 2,
            r: 3,
            po: true
        }
    },
    2: {
        normal: {
            h: 5,
            m: 1,
            a: 1,
            r: 4,
            po: true
        },
        elite: {
            h: 8,
            m: 1,
            a: 2,
            r: 4,
            po: true
        }
    },
    3: {
        normal: {
            h: 5,
            m: 1,
            a: 2,
            r: 4,
            po: true
        },
        elite: {
            h: 8,
            m: 1,
            a: 3,
            r: 4,
            di: true,
            po: true
        }
    },
    4: {
        normal: {
            h: 7,
            m: 1,
            a: 2,
            r: 4,
            po: true
        },
        elite: {
            h: 11,
            m: 1,
            a: 3,
            r: 4,
            di: true,
            po: true
        }
    },
    5: {
        normal: {
            h: 9,
            m: 1,
            a: 2,
            r: 4,
            po: true
        },
        elite: {
            h: 12,
            m: 1,
            a: 3,
            r: 5,
            di: true,
            po: true
        }
    },
    6: {
        normal: {
            h: 10,
            m: 1,
            a: 3,
            r: 4,
            po: true
        },
        elite: {
            h: 14,
            m: 1,
            a: 4,
            r: 5,
            di: true,
            po: true
        }
    },
    7: {
        normal: {
            h: 12,
            m: 1,
            a: 3,
            r: 4,
            po: true
        },
        elite: {
            h: 17,
            m: 1,
            a: 4,
            r: 5,
            di: true,
            po: true
        }
    }
},
  cardsId: ''
};

const CaveBear: EnemyDef = {
  id: 'Cave-Bear',
  description: '',
  stats: {
    0: {
        normal: {
            h: 7,
            m: 3,
            a: 3,
            r: 0
        },
        elite: {
            h: 11,
            m: 3,
            a: 4,
            r: 0
        }
    },
    1: {
        normal: {
            h: 9,
            m: 3,
            a: 3,
            r: 0
        },
        elite: {
            h: 14,
            m: 3,
            a: 4,
            r: 0
        }
    },
    2: {
        normal: {
            h: 11,
            m: 4,
            a: 3,
            r: 0
        },
        elite: {
            h: 17,
            m: 4,
            a: 4,
            r: 0
        }
    },
    3: {
        normal: {
            h: 13,
            m: 4,
            a: 4,
            r: 0
        },
        elite: {
            h: 20,
            m: 4,
            a: 5,
            r: 0
        }
    },
    4: {
        normal: {
            h: 16,
            m: 4,
            a: 4,
            r: 0
        },
        elite: {
            h: 21,
            m: 5,
            a: 5,
            r: 0,
            wo: true
        }
    },
    5: {
        normal: {
            h: 17,
            m: 5,
            a: 4,
            r: 0,
            wo: true
        },
        elite: {
            h: 24,
            m: 5,
            a: 6,
            r: 0,
            wo: true
        }
    },
    6: {
        normal: {
            h: 19,
            m: 5,
            a: 5,
            r: 0,
            wo: true
        },
        elite: {
            h: 28,
            m: 5,
            a: 7,
            r: 0,
            wo: true
        }
    },
    7: {
        normal: {
            h: 22,
            m: 5,
            a: 5,
            r: 0,
            wo: true
        },
        elite: {
            h: 33,
            m: 5,
            a: 7,
            r: 0,
            wo: true
        }
    }
},
  cardsId: ''
};

const CityArcher: EnemyDef = {
  id: 'City-Archer',
  description: '',
  stats: {
    0: {
        normal: {
            h: 4,
            m: 1,
            a: 2,
            r: 3
        },
        elite: {
            h: 6,
            m: 1,
            a: 3,
            r: 4
        }
    },
    1: {
        normal: {
            h: 5,
            m: 1,
            a: 2,
            r: 4
        },
        elite: {
            h: 6,
            m: 1,
            a: 3,
            r: 5,
            pi: 1,
            s: 1
        }
    },
    2: {
        normal: {
            h: 6,
            m: 1,
            a: 3,
            r: 4
        },
        elite: {
            h: 7,
            m: 1,
            a: 4,
            r: 5,
            pi: 2,
            s: 1
        }
    },
    3: {
        normal: {
            h: 6,
            m: 2,
            a: 3,
            r: 4,
            s: 1
        },
        elite: {
            h: 8,
            m: 2,
            a: 4,
            r: 5,
            pi: 2,
            s: 2
        }
    },
    4: {
        normal: {
            h: 8,
            m: 2,
            a: 3,
            r: 5,
            s: 1
        },
        elite: {
            h: 10,
            m: 2,
            a: 4,
            r: 6,
            pi: 2,
            s: 2
        }
    },
    5: {
        normal: {
            h: 9,
            m: 2,
            a: 4,
            r: 5,
            s: 1
        },
        elite: {
            h: 11,
            m: 2,
            a: 5,
            r: 6,
            pi: 3,
            s: 2
        }
    },
    6: {
        normal: {
            h: 9,
            m: 3,
            a: 4,
            r: 5,
            s: 2
        },
        elite: {
            h: 12,
            m: 3,
            a: 6,
            r: 6,
            pi: 3,
            s: 2
        }
    },
    7: {
        normal: {
            h: 10,
            m: 3,
            a: 4,
            r: 6,
            s: 2
        },
        elite: {
            h: 13,
            m: 3,
            a: 6,
            r: 7,
            pi: 3,
            s: 3
        }
    }
},
  cardsId: 'ar'
};

const CityGuard: EnemyDef = {
  id: 'City-Guard',
  description: '',
  stats: {
    0: {
        normal: {
            h: 5,
            m: 2,
            a: 2,
            r: 0
        },
        elite: {
            h: 6,
            m: 2,
            a: 3,
            r: 0,
            s: 1
        }
    },
    1: {
        normal: {
            h: 5,
            m: 2,
            a: 2,
            r: 0,
            s: 1
        },
        elite: {
            h: 6,
            m: 2,
            a: 3,
            r: 0,
            s: 2
        }
    },
    2: {
        normal: {
            h: 7,
            m: 2,
            a: 2,
            r: 0,
            s: 1
        },
        elite: {
            h: 9,
            m: 2,
            a: 3,
            r: 0,
            s: 2
        }
    },
    3: {
        normal: {
            h: 8,
            m: 2,
            a: 3,
            r: 0,
            s: 1
        },
        elite: {
            h: 9,
            m: 2,
            a: 4,
            r: 0,
            re: 1,
            s: 2
        }
    },
    4: {
        normal: {
            h: 9,
            m: 3,
            a: 3,
            r: 0,
            s: 1
        },
        elite: {
            h: 10,
            m: 3,
            a: 4,
            r: 0,
            re: 2,
            s: 2
        }
    },
    5: {
        normal: {
            h: 10,
            m: 3,
            a: 3,
            r: 0,
            s: 2
        },
        elite: {
            h: 12,
            m: 3,
            a: 4,
            r: 0,
            re: 2,
            s: 3
        }
    },
    6: {
        normal: {
            h: 11,
            m: 3,
            a: 4,
            r: 0,
            s: 2
        },
        elite: {
            h: 13,
            m: 3,
            a: 5,
            r: 0,
            re: 3,
            s: 3
        }
    },
    7: {
        normal: {
            h: 13,
            m: 3,
            a: 4,
            r: 0,
            s: 2
        },
        elite: {
            h: 14,
            m: 3,
            a: 6,
            r: 0,
            re: 3,
            s: 3
        }
    }
},
  cardsId: 'gu'
};

const Cultist: EnemyDef = {
  id: 'Cultist',
  description: '',
  stats: {
    0: {
        normal: {
            h: 4,
            m: 2,
            a: 1,
            r: 0
        },
        elite: {
            h: 7,
            m: 2,
            a: 2,
            r: 0
        }
    },
    1: {
        normal: {
            h: 5,
            m: 2,
            a: 1,
            r: 0
        },
        elite: {
            h: 9,
            m: 2,
            a: 2,
            r: 0
        }
    },
    2: {
        normal: {
            h: 7,
            m: 2,
            a: 1,
            r: 0
        },
        elite: {
            h: 12,
            m: 2,
            a: 2,
            r: 0
        }
    },
    3: {
        normal: {
            h: 9,
            m: 3,
            a: 1,
            r: 0
        },
        elite: {
            h: 13,
            m: 3,
            a: 2,
            r: 0,
            cu: true
        }
    },
    4: {
        normal: {
            h: 10,
            m: 3,
            a: 2,
            r: 0
        },
        elite: {
            h: 15,
            m: 3,
            a: 3,
            r: 0,
            cu: true
        }
    },
    5: {
        normal: {
            h: 11,
            m: 3,
            a: 2,
            r: 0,
            cu: true
        },
        elite: {
            h: 18,
            m: 3,
            a: 3,
            r: 0,
            cu: true
        }
    },
    6: {
        normal: {
            h: 14,
            m: 3,
            a: 2,
            r: 0,
            cu: true
        },
        elite: {
            h: 22,
            m: 3,
            a: 3,
            r: 0,
            cu: true
        }
    },
    7: {
        normal: {
            h: 15,
            m: 3,
            a: 3,
            r: 0,
            cu: true
        },
        elite: {
            h: 25,
            m: 3,
            a: 4,
            r: 0,
            cu: true
        }
    }
},
  cardsId: ''
};

const DeepTerror: EnemyDef = {
  id: 'Deep-Terror',
  description: '',
  stats: {
    0: {
        normal: {
            h: 3,
            m: 0,
            a: 2,
            r: 0
        },
        elite: {
            h: 5,
            m: 0,
            a: 3,
            r: 0
        }
    },
    1: {
        normal: {
            h: 4,
            m: 0,
            a: 2,
            r: 0,
            re: 1
        },
        elite: {
            h: 6,
            m: 0,
            a: 3,
            r: 0,
            re: 1
        }
    },
    2: {
        normal: {
            h: 4,
            m: 0,
            a: 3,
            r: 0,
            re: 1
        },
        elite: {
            h: 7,
            m: 0,
            a: 4,
            r: 0,
            re: 1
        }
    },
    3: {
        normal: {
            h: 5,
            m: 0,
            a: 3,
            r: 0,
            re: 2
        },
        elite: {
            h: 8,
            m: 0,
            a: 4,
            r: 0,
            re: 2
        }
    },
    4: {
        normal: {
            h: 6,
            m: 0,
            a: 4,
            r: 0,
            re: 2
        },
        elite: {
            h: 9,
            m: 0,
            a: 5,
            r: 0,
            re: 2
        }
    },
    5: {
        normal: {
            h: 7,
            m: 0,
            a: 4,
            r: 0,
            re: 3
        },
        elite: {
            h: 11,
            m: 0,
            a: 5,
            r: 0,
            re: 3
        }
    },
    6: {
        normal: {
            h: 8,
            m: 0,
            a: 5,
            r: 0,
            re: 3
        },
        elite: {
            h: 13,
            m: 0,
            a: 6,
            r: 0,
            re: 3
        }
    },
    7: {
        normal: {
            h: 9,
            m: 0,
            a: 5,
            r: 0,
            re: 4
        },
        elite: {
            h: 15,
            m: 0,
            a: 6,
            r: 0,
            re: 4
        }
    }
},
  cardsId: ''
};

const EarthDemon: EnemyDef = {
  id: 'Earth-Demon',
  description: '',
  stats: {
    0: {
        normal: {
            h: 7,
            m: 1,
            a: 3,
            r: 0
        },
        elite: {
            h: 10,
            m: 2,
            a: 4,
            r: 0
        }
    },
    1: {
        normal: {
            h: 9,
            m: 1,
            a: 3,
            r: 0
        },
        elite: {
            h: 13,
            m: 2,
            a: 4,
            r: 0
        }
    },
    2: {
        normal: {
            h: 12,
            m: 1,
            a: 3,
            r: 0
        },
        elite: {
            h: 18,
            m: 2,
            a: 4,
            r: 0
        }
    },
    3: {
        normal: {
            h: 13,
            m: 2,
            a: 3,
            r: 0
        },
        elite: {
            h: 20,
            m: 2,
            a: 4,
            r: 0,
            im: true
        }
    },
    4: {
        normal: {
            h: 15,
            m: 2,
            a: 4,
            r: 0
        },
        elite: {
            h: 21,
            m: 3,
            a: 5,
            r: 0,
            im: true
        }
    },
    5: {
        normal: {
            h: 17,
            m: 2,
            a: 4,
            r: 0,
            im: true
        },
        elite: {
            h: 25,
            m: 3,
            a: 5,
            r: 0,
            im: true
        }
    },
    6: {
        normal: {
            h: 20,
            m: 2,
            a: 4,
            r: 0,
            im: true
        },
        elite: {
            h: 27,
            m: 3,
            a: 6,
            r: 0,
            im: true
        }
    },
    7: {
        normal: {
            h: 22,
            m: 3,
            a: 4,
            r: 0,
            im: true
        },
        elite: {
            h: 32,
            m: 3,
            a: 6,
            r: 0,
            im: true
        }
    }
},
  cardsId: 'ed'
};

const FlameDemon: EnemyDef = {
  id: 'Flame-Demon',
  description: '',
  flying: true,
  stats: {
    0: {
        normal: {
            h: 2,
            m: 3,
            a: 2,
            r: 3,
            s: 2
        },
        elite: {
            h: 3,
            m: 3,
            a: 2,
            r: 3,
            s: 3
        }
    },
    1: {
        normal: {
            h: 2,
            m: 3,
            a: 2,
            r: 3,
            s: 3
        },
        elite: {
            h: 3,
            m: 3,
            a: 2,
            r: 4,
            re: 2,
            s: 4
        }
    },
    2: {
        normal: {
            h: 3,
            m: 3,
            a: 3,
            r: 3,
            s: 3
        },
        elite: {
            h: 4,
            m: 3,
            a: 3,
            r: 4,
            re: 3,
            s: 4
        }
    },
    3: {
        normal: {
            h: 3,
            m: 3,
            a: 3,
            r: 4,
            re: 2,
            s: 3
        },
        elite: {
            h: 5,
            m: 3,
            a: 3,
            r: 5,
            re: 3,
            s: 4
        }
    },
    4: {
        normal: {
            h: 3,
            m: 4,
            a: 3,
            r: 4,
            re: 3,
            s: 3
        },
        elite: {
            h: 5,
            m: 4,
            a: 4,
            r: 5,
            re: 4,
            s: 4
        }
    },
    5: {
        normal: {
            h: 4,
            m: 4,
            a: 3,
            r: 4,
            re: 3,
            s: 4
        },
        elite: {
            h: 6,
            m: 4,
            a: 4,
            r: 5,
            re: 4,
            s: 5
        }
    },
    6: {
        normal: {
            h: 4,
            m: 4,
            a: 4,
            r: 4,
            re: 4,
            s: 4
        },
        elite: {
            h: 7,
            m: 4,
            a: 5,
            r: 5,
            re: 5,
            s: 5
        }
    },
    7: {
        normal: {
            h: 5,
            m: 4,
            a: 4,
            r: 5,
            re: 4,
            s: 4
        },
        elite: {
            h: 8,
            m: 4,
            a: 5,
            r: 6,
            re: 5,
            s: 5
        }
    }
},
  cardsId: ''
};

const FrostDemon: EnemyDef = {
  id: 'Frost-Demon',
  description: '',
  stats: {
    0: {
        normal: {
            h: 5,
            m: 2,
            a: 3,
            r: 0
        },
        elite: {
            h: 10,
            m: 3,
            a: 3,
            r: 0
        }
    },
    1: {
        normal: {
            h: 6,
            m: 2,
            a: 3,
            r: 0,
            re: 1
        },
        elite: {
            h: 10,
            m: 3,
            a: 3,
            r: 0,
            re: 2
        }
    },
    2: {
        normal: {
            h: 7,
            m: 3,
            a: 3,
            r: 0,
            re: 2
        },
        elite: {
            h: 12,
            m: 4,
            a: 4,
            r: 0,
            re: 2
        }
    },
    3: {
        normal: {
            h: 8,
            m: 3,
            a: 4,
            r: 0,
            re: 2
        },
        elite: {
            h: 14,
            m: 4,
            a: 4,
            r: 0,
            re: 3
        }
    },
    4: {
        normal: {
            h: 10,
            m: 3,
            a: 4,
            r: 0,
            re: 2
        },
        elite: {
            h: 18,
            m: 4,
            a: 4,
            r: 0,
            re: 3
        }
    },
    5: {
        normal: {
            h: 11,
            m: 3,
            a: 4,
            r: 0,
            re: 3
        },
        elite: {
            h: 20,
            m: 4,
            a: 5,
            r: 0,
            re: 3
        }
    },
    6: {
        normal: {
            h: 12,
            m: 3,
            a: 5,
            r: 0,
            re: 3
        },
        elite: {
            h: 22,
            m: 4,
            a: 5,
            r: 0,
            re: 4
        }
    },
    7: {
        normal: {
            h: 14,
            m: 3,
            a: 5,
            r: 0,
            re: 3
        },
        elite: {
            h: 25,
            m: 4,
            a: 5,
            r: 0,
            re: 4
        }
    }
},
  cardsId: ''
};

const ForestImp: EnemyDef = {
  id: 'Forest-Imp',
  description: '',
  stats: {
    0: {
        normal: {
            h: 1,
            m: 3,
            a: 1,
            r: 3,
            s: 1
        },
        elite: {
            h: 4,
            m: 3,
            a: 1,
            r: 3,
            s: 1
        }
    },
    1: {
        normal: {
            h: 2,
            m: 3,
            a: 1,
            r: 3,
            s: 1
        },
        elite: {
            h: 5,
            m: 3,
            a: 2,
            r: 3,
            s: 1
        }
    },
    2: {
        normal: {
            h: 2,
            m: 3,
            a: 2,
            r: 3,
            s: 1
        },
        elite: {
            h: 6,
            m: 3,
            a: 2,
            r: 3,
            cu: true,
            s: 1
        }
    },
    3: {
        normal: {
            h: 3,
            m: 4,
            a: 2,
            r: 4,
            s: 1
        },
        elite: {
            h: 7,
            m: 4,
            a: 2,
            r: 4,
            cu: true,
            s: 1
        }
    },
    4: {
        normal: {
            h: 3,
            m: 4,
            a: 2,
            r: 4,
            s: 2
        },
        elite: {
            h: 7,
            m: 4,
            a: 2,
            r: 4,
            cu: true,
            s: 2
        }
    },
    5: {
        normal: {
            h: 4,
            m: 4,
            a: 2,
            r: 4,
            cu: true,
            s: 2
        },
        elite: {
            h: 8,
            m: 4,
            a: 3,
            r: 4,
            cu: true,
            s: 2
        }
    },
    6: {
        normal: {
            h: 4,
            m: 4,
            a: 3,
            r: 4,
            cu: true,
            s: 2
        },
        elite: {
            h: 9,
            m: 4,
            a: 4,
            r: 4,
            cu: true,
            s: 2
        }
    },
    7: {
        normal: {
            h: 6,
            m: 4,
            a: 3,
            r: 4,
            cu: true,
            s: 2
        },
        elite: {
            h: 11,
            m: 4,
            a: 4,
            r: 4,
            cu: true,
            s: 2
        }
    }
},
  cardsId: ''
};

const GiantViper: EnemyDef = {
  id: 'Giant-Viper',
  description: '',
  stats: {
    0: {
        normal: {
            h: 2,
            m: 2,
            a: 1,
            r: 0,
            po: true
        },
        elite: {
            h: 3,
            m: 2,
            a: 2,
            r: 0,
            po: true
        }
    },
    1: {
        normal: {
            h: 3,
            m: 2,
            a: 1,
            r: 0,
            po: true
        },
        elite: {
            h: 5,
            m: 2,
            a: 2,
            r: 0,
            po: true
        }
    },
    2: {
        normal: {
            h: 4,
            m: 3,
            a: 1,
            r: 0,
            po: true
        },
        elite: {
            h: 7,
            m: 3,
            a: 2,
            r: 0,
            po: true
        }
    },
    3: {
        normal: {
            h: 4,
            m: 3,
            a: 2,
            r: 0,
            po: true
        },
        elite: {
            h: 8,
            m: 3,
            a: 3,
            r: 0,
            po: true
        }
    },
    4: {
        normal: {
            h: 6,
            m: 3,
            a: 2,
            r: 0,
            po: true
        },
        elite: {
            h: 11,
            m: 3,
            a: 3,
            r: 0,
            po: true
        }
    },
    5: {
        normal: {
            h: 7,
            m: 3,
            a: 3,
            r: 0,
            po: true
        },
        elite: {
            h: 13,
            m: 4,
            a: 3,
            r: 0,
            po: true
        }
    },
    6: {
        normal: {
            h: 8,
            m: 4,
            a: 3,
            r: 0,
            po: true
        },
        elite: {
            h: 14,
            m: 4,
            a: 4,
            r: 0,
            po: true
        }
    },
    7: {
        normal: {
            h: 10,
            m: 4,
            a: 3,
            r: 0,
            po: true
        },
        elite: {
            h: 17,
            m: 4,
            a: 4,
            r: 0,
            po: true
        }
    }
},
  cardsId: 'gv'
};

const HarrowerInfester: EnemyDef = {
  id: 'Harrower-Infester',
  description: '',
  stats: {
    0: {
        normal: {
            h: 6,
            m: 2,
            a: 2,
            r: 0
        },
        elite: {
            h: 12,
            m: 2,
            a: 2,
            r: 0
        }
    },
    1: {
        normal: {
            h: 7,
            m: 2,
            a: 2,
            r: 0,
            re: 1
        },
        elite: {
            h: 12,
            m: 3,
            a: 2,
            r: 0,
            re: 2
        }
    },
    2: {
        normal: {
            h: 8,
            m: 2,
            a: 2,
            r: 0,
            re: 2
        },
        elite: {
            h: 14,
            m: 3,
            a: 3,
            r: 0,
            re: 2
        }
    },
    3: {
        normal: {
            h: 10,
            m: 2,
            a: 3,
            r: 0,
            re: 2
        },
        elite: {
            h: 17,
            m: 3,
            a: 3,
            r: 0,
            re: 3
        }
    },
    4: {
        normal: {
            h: 12,
            m: 3,
            a: 3,
            r: 0,
            re: 2
        },
        elite: {
            h: 19,
            m: 3,
            a: 4,
            r: 0,
            re: 3
        }
    },
    5: {
        normal: {
            h: 12,
            m: 3,
            a: 4,
            r: 0,
            re: 3
        },
        elite: {
            h: 21,
            m: 3,
            a: 5,
            r: 0,
            re: 3
        }
    },
    6: {
        normal: {
            h: 15,
            m: 3,
            a: 4,
            r: 0,
            re: 3
        },
        elite: {
            h: 22,
            m: 4,
            a: 5,
            r: 0,
            re: 4
        }
    },
    7: {
        normal: {
            h: 17,
            m: 3,
            a: 4,
            r: 0,
            re: 4
        },
        elite: {
            h: 26,
            m: 4,
            a: 5,
            r: 0,
            re: 4
        }
    }
},
  cardsId: ''
};

const Hound: EnemyDef = {
  id: 'Hound',
  description: '',
  stats: {
    0: {
        normal: {
            h: 4,
            m: 3,
            a: 2,
            r: 0
        },
        elite: {
            h: 6,
            m: 5,
            a: 2,
            r: 0
        }
    },
    1: {
        normal: {
            h: 4,
            m: 4,
            a: 2,
            r: 0,
            re: 1
        },
        elite: {
            h: 6,
            m: 5,
            a: 2,
            r: 0,
            re: 2
        }
    },
    2: {
        normal: {
            h: 6,
            m: 4,
            a: 2,
            r: 0,
            re: 1
        },
        elite: {
            h: 7,
            m: 5,
            a: 3,
            r: 0,
            re: 2
        }
    },
    3: {
        normal: {
            h: 8,
            m: 4,
            a: 2,
            r: 0,
            re: 1
        },
        elite: {
            h: 8,
            m: 5,
            a: 4,
            r: 0,
            re: 2
        }
    },
    4: {
        normal: {
            h: 8,
            m: 4,
            a: 3,
            r: 0,
            re: 1
        },
        elite: {
            h: 11,
            m: 5,
            a: 4,
            r: 0,
            re: 2
        }
    },
    5: {
        normal: {
            h: 9,
            m: 4,
            a: 3,
            r: 0,
            re: 2
        },
        elite: {
            h: 12,
            m: 5,
            a: 4,
            r: 0,
            re: 3
        }
    },
    6: {
        normal: {
            h: 11,
            m: 5,
            a: 3,
            r: 0,
            re: 2
        },
        elite: {
            h: 15,
            m: 6,
            a: 4,
            r: 0,
            re: 3
        }
    },
    7: {
        normal: {
            h: 15,
            m: 5,
            a: 3,
            r: 0,
            re: 2
        },
        elite: {
            h: 15,
            m: 6,
            a: 5,
            r: 0,
            re: 4
        }
    }
},
  cardsId: 'ho'
};

const InoxArcher: EnemyDef = {
  id: 'Inox-Archer',
  description: '',
  stats: {
    0: {
        normal: {
            h: 5,
            m: 2,
            a: 2,
            r: 2
        },
        elite: {
            h: 7,
            m: 2,
            a: 3,
            r: 3
        }
    },
    1: {
        normal: {
            h: 6,
            m: 2,
            a: 2,
            r: 3
        },
        elite: {
            h: 8,
            m: 2,
            a: 3,
            r: 4
        }
    },
    2: {
        normal: {
            h: 8,
            m: 2,
            a: 2,
            r: 3
        },
        elite: {
            h: 11,
            m: 2,
            a: 3,
            r: 4
        }
    },
    3: {
        normal: {
            h: 9,
            m: 2,
            a: 3,
            r: 3
        },
        elite: {
            h: 13,
            m: 2,
            a: 4,
            r: 4
        }
    },
    4: {
        normal: {
            h: 10,
            m: 3,
            a: 3,
            r: 3
        },
        elite: {
            h: 14,
            m: 3,
            a: 4,
            r: 4,
            wo: true
        }
    },
    5: {
        normal: {
            h: 12,
            m: 3,
            a: 3,
            r: 4
        },
        elite: {
            h: 17,
            m: 3,
            a: 4,
            r: 5,
            wo: true
        }
    },
    6: {
        normal: {
            h: 12,
            m: 3,
            a: 4,
            r: 4,
            wo: true
        },
        elite: {
            h: 19,
            m: 3,
            a: 5,
            r: 5,
            wo: true
        }
    },
    7: {
        normal: {
            h: 15,
            m: 3,
            a: 4,
            r: 4,
            wo: true
        },
        elite: {
            h: 23,
            m: 3,
            a: 5,
            r: 5,
            wo: true
        }
    }
},
  cardsId: 'ar'
};

const InoxGuard: EnemyDef = {
  id: 'Inox-Guard',
  description: '',
  stats: {
    0: {
        normal: {
            h: 5,
            m: 2,
            a: 2,
            r: 0
        },
        elite: {
            h: 9,
            m: 1,
            a: 3,
            r: 0,
            re: 1
        }
    },
    1: {
        normal: {
            h: 8,
            m: 2,
            a: 2,
            r: 0
        },
        elite: {
            h: 10,
            m: 2,
            a: 3,
            r: 0,
            re: 2
        }
    },
    2: {
        normal: {
            h: 9,
            m: 2,
            a: 3,
            r: 0
        },
        elite: {
            h: 12,
            m: 2,
            a: 4,
            r: 0,
            re: 2
        }
    },
    3: {
        normal: {
            h: 11,
            m: 3,
            a: 3,
            r: 0
        },
        elite: {
            h: 15,
            m: 2,
            a: 4,
            r: 0,
            re: 3
        }
    },
    4: {
        normal: {
            h: 12,
            m: 3,
            a: 3,
            r: 0,
            re: 1
        },
        elite: {
            h: 17,
            m: 2,
            a: 5,
            r: 0,
            re: 3
        }
    },
    5: {
        normal: {
            h: 13,
            m: 3,
            a: 4,
            r: 0,
            re: 1
        },
        elite: {
            h: 19,
            m: 2,
            a: 5,
            r: 0,
            re: 4
        }
    },
    6: {
        normal: {
            h: 16,
            m: 3,
            a: 4,
            r: 0,
            re: 1
        },
        elite: {
            h: 21,
            m: 3,
            a: 5,
            r: 0,
            re: 4
        }
    },
    7: {
        normal: {
            h: 19,
            m: 3,
            a: 4,
            r: 0,
            re: 2
        },
        elite: {
            h: 23,
            m: 3,
            a: 6,
            r: 0,
            re: 4
        }
    }
},
  cardsId: 'gu'
};


const InoxShaman: EnemyDef = {
  id: 'Inox-Shaman',
  description: '',
  stats: {
    0: {
        normal: {
            h: 4,
            m: 1,
            a: 2,
            r: 3
        },
        elite: {
            h: 6,
            m: 2,
            a: 3,
            r: 3
        }
    },
    1: {
        normal: {
            h: 6,
            m: 1,
            a: 2,
            r: 3
        },
        elite: {
            h: 9,
            m: 2,
            a: 3,
            r: 3
        }
    },
    2: {
        normal: {
            h: 7,
            m: 2,
            a: 2,
            r: 3
        },
        elite: {
            h: 11,
            m: 3,
            a: 3,
            r: 3
        }
    },
    3: {
        normal: {
            h: 9,
            m: 2,
            a: 2,
            r: 4
        },
        elite: {
            h: 14,
            m: 3,
            a: 3,
            r: 4
        }
    },
    4: {
        normal: {
            h: 10,
            m: 2,
            a: 3,
            r: 4
        },
        elite: {
            h: 16,
            m: 3,
            a: 4,
            r: 4
        }
    },
    5: {
        normal: {
            h: 13,
            m: 2,
            a: 3,
            r: 4
        },
        elite: {
            h: 20,
            m: 3,
            a: 4,
            r: 4
        }
    },
    6: {
        normal: {
            h: 15,
            m: 3,
            a: 3,
            r: 4
        },
        elite: {
            h: 24,
            m: 4,
            a: 4,
            r: 4
        }
    },
    7: {
        normal: {
            h: 16,
            m: 3,
            a: 4,
            r: 4
        },
        elite: {
            h: 27,
            m: 4,
            a: 5,
            r: 4
        }
    }
},
  cardsId: ''
};

const LivingBones: EnemyDef = {
  id: 'Living-Bones',
  description: '',
  stats: {
    0: {
        normal: {
            h: 5,
            m: 2,
            a: 1,
            r: 0,
            ta: 2
        },
        elite: {
            h: 6,
            m: 4,
            a: 2,
            r: 0,
            ta: 2
        }
    },
    1: {
        normal: {
            h: 5,
            m: 3,
            a: 1,
            r: 0,
            ta: 2,
            s: 1
        },
        elite: {
            h: 6,
            m: 4,
            a: 2,
            r: 0,
            ta: 3,
            s: 1
        }
    },
    2: {
        normal: {
            h: 5,
            m: 3,
            a: 2,
            r: 0,
            ta: 2,
            s: 1
        },
        elite: {
            h: 7,
            m: 4,
            a: 3,
            r: 0,
            ta: 3,
            s: 1
        }
    },
    3: {
        normal: {
            h: 7,
            m: 3,
            a: 2,
            r: 0,
            ta: 2,
            s: 1
        },
        elite: {
            h: 10,
            m: 4,
            a: 3,
            r: 0,
            ta: 3,
            s: 1
        }
    },
    4: {
        normal: {
            h: 7,
            m: 3,
            a: 3,
            r: 0,
            ta: 2,
            s: 1
        },
        elite: {
            h: 11,
            m: 4,
            a: 4,
            r: 0,
            ta: 3,
            s: 1
        }
    },
    5: {
        normal: {
            h: 9,
            m: 3,
            a: 3,
            r: 0,
            ta: 2,
            s: 1
        },
        elite: {
            h: 11,
            m: 4,
            a: 4,
            r: 0,
            ta: 3,
            s: 2
        }
    },
    6: {
        normal: {
            h: 10,
            m: 4,
            a: 3,
            r: 0,
            ta: 2,
            s: 1
        },
        elite: {
            h: 11,
            m: 6,
            a: 4,
            r: 0,
            ta: 3,
            s: 2
        }
    },
    7: {
        normal: {
            h: 13,
            m: 4,
            a: 3,
            r: 0,
            ta: 2,
            s: 1
        },
        elite: {
            h: 14,
            m: 6,
            a: 4,
            r: 0,
            ta: 3,
            s: 2
        }
    }
},
  cardsId: 'lb'
};


const LivingCorpse: EnemyDef = {
  id: 'Living-Corpse',
  description: '',
  stats: {
    0: {
        normal: {
            h: 5,
            m: 1,
            a: 3,
            r: 0
        },
        elite: {
            h: 10,
            m: 1,
            a: 3,
            r: 0
        }
    },
    1: {
        normal: {
            h: 7,
            m: 1,
            a: 3,
            r: 0
        },
        elite: {
            h: 10,
            m: 1,
            a: 4,
            r: 0
        }
    },
    2: {
        normal: {
            h: 9,
            m: 1,
            a: 3,
            r: 0
        },
        elite: {
            h: 13,
            m: 1,
            a: 4,
            r: 0
        }
    },
    3: {
        normal: {
            h: 10,
            m: 1,
            a: 4,
            r: 0
        },
        elite: {
            h: 13,
            m: 2,
            a: 5,
            r: 0
        }
    },
    4: {
        normal: {
            h: 11,
            m: 2,
            a: 4,
            r: 0
        },
        elite: {
            h: 15,
            m: 2,
            a: 5,
            r: 0,
            po: true
        }
    },
    5: {
        normal: {
            h: 13,
            m: 2,
            a: 4,
            r: 0
        },
        elite: {
            h: 17,
            m: 2,
            a: 6,
            r: 0,
            po: true
        }
    },
    6: {
        normal: {
            h: 14,
            m: 2,
            a: 4,
            r: 0,
            po: true
        },
        elite: {
            h: 21,
            m: 2,
            a: 6,
            r: 0,
            po: true
        }
    },
    7: {
        normal: {
            h: 15,
            m: 2,
            a: 5,
            r: 0,
            po: true
        },
        elite: {
            h: 25,
            m: 2,
            a: 6,
            r: 0,
            po: true
        }
    }
},
  cardsId: 'lc'
};

const LivingSpirit: EnemyDef = {
  id: 'Living-Spirit',
  description: '',
  flying: true,
  stats: {
    0: {
        normal: {
            h: 2,
            m: 2,
            a: 2,
            r: 2,
            s: 1
        },
        elite: {
            h: 3,
            m: 3,
            a: 3,
            r: 3,
            s: 2
        }
    },
    1: {
        normal: {
            h: 2,
            m: 2,
            a: 2,
            r: 2,
            s: 2
        },
        elite: {
            h: 3,
            m: 3,
            a: 3,
            r: 3,
            s: 3
        }
    },
    2: {
        normal: {
            h: 2,
            m: 3,
            a: 2,
            r: 3,
            s: 2
        },
        elite: {
            h: 3,
            m: 4,
            a: 3,
            r: 4,
            s: 3
        }
    },
    3: {
        normal: {
            h: 3,
            m: 3,
            a: 3,
            r: 3,
            s: 2
        },
        elite: {
            h: 4,
            m: 4,
            a: 4,
            r: 4,
            s: 3
        }
    },
    4: {
        normal: {
            h: 3,
            m: 3,
            a: 3,
            r: 3,
            s: 3
        },
        elite: {
            h: 4,
            m: 4,
            a: 4,
            r: 4,
            s: 4
        }
    },
    5: {
        normal: {
            h: 4,
            m: 3,
            a: 3,
            r: 4,
            s: 3
        },
        elite: {
            h: 6,
            m: 4,
            a: 4,
            r: 4,
            s: 4
        }
    },
    6: {
        normal: {
            h: 4,
            m: 3,
            a: 4,
            r: 4,
            s: 3
        },
        elite: {
            h: 7,
            m: 4,
            a: 5,
            r: 5,
            s: 4
        }
    },
    7: {
        normal: {
            h: 6,
            m: 3,
            a: 4,
            r: 4,
            s: 3
        },
        elite: {
            h: 9,
            m: 4,
            a: 5,
            r: 5,
            s: 4
        }
    }
},
  cardsId: 'ls'
};

const Lurker: EnemyDef = {
  id: 'Lurker',
  description: '',
  stats: {
    0: {
        normal: {
            h: 5,
            m: 2,
            a: 2,
            r: 0,
            ta: 2
        },
        elite: {
            h: 7,
            m: 2,
            a: 3,
            r: 0,
            ta: 2,
            s: 1
        }
    },
    1: {
        normal: {
            h: 7,
            m: 2,
            a: 2,
            r: 0,
            ta: 2,
            pi: 1
        },
        elite: {
            h: 9,
            m: 2,
            a: 3,
            r: 0,
            ta: 2,
            pi: 1,
            s: 1
        }
    },
    2: {
        normal: {
            h: 9,
            m: 3,
            a: 2,
            r: 0,
            ta: 2,
            pi: 1
        },
        elite: {
            h: 12,
            m: 3,
            a: 3,
            r: 0,
            ta: 2,
            pi: 2,
            s: 1
        }
    },
    3: {
        normal: {
            h: 10,
            m: 3,
            a: 3,
            r: 0,
            ta: 2,
            pi: 2
        },
        elite: {
            h: 14,
            m: 3,
            a: 4,
            r: 0,
            ta: 2,
            pi: 2,
            s: 1
        }
    },
    4: {
        normal: {
            h: 10,
            m: 3,
            a: 3,
            r: 0,
            ta: 2,
            pi: 2,
            s: 1
        },
        elite: {
            h: 14,
            m: 3,
            a: 4,
            r: 0,
            ta: 2,
            pi: 3,
            s: 2
        }
    },
    5: {
        normal: {
            h: 11,
            m: 3,
            a: 4,
            r: 0,
            ta: 2,
            pi: 2,
            s: 1
        },
        elite: {
            h: 15,
            m: 3,
            a: 5,
            r: 0,
            ta: 2,
            pi: 3,
            s: 2
        }
    },
    6: {
        normal: {
            h: 12,
            m: 4,
            a: 4,
            r: 0,
            ta: 2,
            pi: 3,
            s: 1
        },
        elite: {
            h: 16,
            m: 4,
            a: 5,
            r: 0,
            ta: 2,
            pi: 4,
            s: 2
        }
    },
    7: {
        normal: {
            h: 14,
            m: 4,
            a: 4,
            r: 0,
            ta: 2,
            pi: 3,
            s: 1
        },
        elite: {
            h: 18,
            m: 4,
            a: 5,
            r: 0,
            ta: 2,
            pi: 4,
            s: 2
        }
    }
},
  cardsId: ''
};

const Ooze: EnemyDef = {
  id: 'Ooze',
  description: '',
  stats: {
    0: {
        normal: {
            h: 4,
            m: 1,
            a: 2,
            r: 2
        },
        elite: {
            h: 8,
            m: 1,
            a: 2,
            r: 3
        }
    },
    1: {
        normal: {
            h: 5,
            m: 1,
            a: 2,
            r: 2,
            s: 1
        },
        elite: {
            h: 9,
            m: 1,
            a: 2,
            r: 3,
            s: 1
        }
    },
    2: {
        normal: {
            h: 7,
            m: 1,
            a: 2,
            r: 3,
            s: 1
        },
        elite: {
            h: 11,
            m: 1,
            a: 3,
            r: 3,
            s: 1
        }
    },
    3: {
        normal: {
            h: 8,
            m: 1,
            a: 3,
            r: 3,
            s: 1
        },
        elite: {
            h: 11,
            m: 2,
            a: 3,
            r: 4,
            po: true,
            s: 1
        }
    },
    4: {
        normal: {
            h: 9,
            m: 2,
            a: 3,
            r: 3,
            s: 1
        },
        elite: {
            h: 13,
            m: 2,
            a: 4,
            r: 4,
            po: true,
            s: 1
        }
    },
    5: {
        normal: {
            h: 10,
            m: 2,
            a: 3,
            r: 3,
            po: true,
            s: 1
        },
        elite: {
            h: 15,
            m: 3,
            a: 4,
            r: 4,
            po: true,
            s: 1
        }
    },
    6: {
        normal: {
            h: 12,
            m: 2,
            a: 4,
            r: 3,
            po: true,
            s: 1
        },
        elite: {
            h: 16,
            m: 3,
            a: 4,
            r: 4,
            po: true,
            s: 2
        }
    },
    7: {
        normal: {
            h: 14,
            m: 2,
            a: 4,
            r: 3,
            po: true,
            s: 1
        },
        elite: {
            h: 18,
            m: 3,
            a: 5,
            r: 4,
            po: true,
            s: 2
        }
    }
},
  cardsId: 'oo'
};

const NightDemon: EnemyDef = {
  id: 'Night-Demon',
  description: '',
  stats: {
    0: {
        normal: {
            h: 3,
            m: 3,
            a: 3,
            r: 0,
            di: true
        },
        elite: {
            h: 5,
            m: 4,
            a: 4,
            r: 0,
            di: true
        }
    },
    1: {
        normal: {
            h: 5,
            m: 3,
            a: 3,
            r: 0,
            di: true
        },
        elite: {
            h: 8,
            m: 4,
            a: 4,
            r: 0,
            di: true
        }
    },
    2: {
        normal: {
            h: 6,
            m: 3,
            a: 4,
            r: 0,
            di: true
        },
        elite: {
            h: 11,
            m: 4,
            a: 4,
            r: 0,
            di: true
        }
    },
    3: {
        normal: {
            h: 7,
            m: 4,
            a: 4,
            r: 0,
            di: true
        },
        elite: {
            h: 13,
            m: 4,
            a: 5,
            r: 0,
            di: true
        }
    },
    4: {
        normal: {
            h: 8,
            m: 4,
            a: 5,
            r: 0,
            di: true
        },
        elite: {
            h: 15,
            m: 5,
            a: 5,
            r: 0,
            di: true
        }
    },
    5: {
        normal: {
            h: 11,
            m: 4,
            a: 5,
            r: 0,
            di: true
        },
        elite: {
            h: 17,
            m: 5,
            a: 6,
            r: 0,
            di: true
        }
    },
    6: {
        normal: {
            h: 14,
            m: 4,
            a: 5,
            r: 0,
            di: true
        },
        elite: {
            h: 21,
            m: 5,
            a: 6,
            r: 0,
            di: true
        }
    },
    7: {
        normal: {
            h: 15,
            m: 4,
            a: 6,
            r: 0,
            di: true
        },
        elite: {
            h: 21,
            m: 5,
            a: 8,
            r: 0,
            di: true
        }
    }
},
  cardsId: 'nd'
};

const RendingDrake: EnemyDef = {
  id: 'Rending-Drake',
  description: '',
  stats: {
    0: {
        normal: {
            h: 5,
            m: 3,
            a: 3,
            r: 0
        },
        elite: {
            h: 7,
            m: 4,
            a: 4,
            r: 0
        }
    },
    1: {
        normal: {
            h: 6,
            m: 3,
            a: 3,
            r: 0,
            wo: true
        },
        elite: {
            h: 7,
            m: 4,
            a: 5,
            r: 0,
            wo: true
        }
    },
    2: {
        normal: {
            h: 7,
            m: 4,
            a: 3,
            r: 0,
            wo: true
        },
        elite: {
            h: 9,
            m: 5,
            a: 5,
            r: 0,
            wo: true
        }
    },
    3: {
        normal: {
            h: 7,
            m: 4,
            a: 4,
            r: 0,
            wo: true
        },
        elite: {
            h: 10,
            m: 5,
            a: 6,
            r: 0,
            wo: true
        }
    },
    4: {
        normal: {
            h: 9,
            m: 4,
            a: 4,
            r: 0,
            wo: true
        },
        elite: {
            h: 11,
            m: 6,
            a: 6,
            r: 0,
            wo: true
        }
    },
    5: {
        normal: {
            h: 10,
            m: 4,
            a: 5,
            r: 0,
            wo: true
        },
        elite: {
            h: 14,
            m: 6,
            a: 6,
            r: 0,
            wo: true
        }
    },
    6: {
        normal: {
            h: 11,
            m: 5,
            a: 5,
            r: 0,
            wo: true
        },
        elite: {
            h: 15,
            m: 6,
            a: 7,
            r: 0,
            wo: true
        }
    },
    7: {
        normal: {
            h: 14,
            m: 5,
            a: 5,
            r: 0,
            wo: true
        },
        elite: {
            h: 18,
            m: 6,
            a: 7,
            r: 0,
            wo: true
        }
    }
},
  cardsId: 'rd'
};

const SavvasIcestorm: EnemyDef = {
  id: 'Savvas Icestorm',
  description: '',
  stats: {
    0: {
        normal: {
            h: 7,
            m: 2,
            a: 2,
            r: 3,
            pi: 3
        },
        elite: {
            h: 12,
            m: 2,
            a: 3,
            r: 4,
            pi: 3
        }
    },
    1: {
        normal: {
            h: 10,
            m: 2,
            a: 2,
            r: 4,
            pi: 3
        },
        elite: {
            h: 12,
            m: 2,
            a: 3,
            r: 5,
            pi: 3,
            s: 1
        }
    },
    2: {
        normal: {
            h: 12,
            m: 3,
            a: 2,
            r: 4,
            pi: 3
        },
        elite: {
            h: 15,
            m: 3,
            a: 3,
            r: 5,
            pi: 3,
            s: 1
        }
    },
    3: {
        normal: {
            h: 12,
            m: 3,
            a: 3,
            r: 4,
            pi: 3,
            s: 1
        },
        elite: {
            h: 18,
            m: 3,
            a: 4,
            r: 6,
            pi: 3,
            s: 1
        }
    },
    4: {
        normal: {
            h: 14,
            m: 3,
            a: 3,
            r: 5,
            pi: 3,
            s: 1
        },
        elite: {
            h: 19,
            m: 4,
            a: 4,
            r: 6,
            pi: 3,
            s: 2
        }
    },
    5: {
        normal: {
            h: 16,
            m: 3,
            a: 4,
            r: 5,
            pi: 3,
            s: 1
        },
        elite: {
            h: 21,
            m: 4,
            a: 5,
            r: 6,
            pi: 3,
            s: 2
        }
    },
    6: {
        normal: {
            h: 16,
            m: 3,
            a: 4,
            r: 5,
            pi: 3,
            s: 2
        },
        elite: {
            h: 23,
            m: 4,
            a: 6,
            r: 6,
            pi: 3,
            s: 2
        }
    },
    7: {
        normal: {
            h: 17,
            m: 4,
            a: 4,
            r: 6,
            pi: 3,
            s: 2
        },
        elite: {
            h: 24,
            m: 4,
            a: 6,
            r: 6,
            pi: 4,
            s: 3
        }
    }
},
  cardsId: 'si'
};

const SavvasLavaflow: EnemyDef = {
  id: 'Savvas-Lavaflow',
  description: '',
  flying: true,
  stats: {
    0: {
        normal: {
            h: 8,
            m: 3,
            a: 2,
            r: 0
        },
        elite: {
            h: 13,
            m: 3,
            a: 3,
            r: 0
        }
    },
    1: {
        normal: {
            h: 9,
            m: 3,
            a: 2,
            r: 0,
            po: true
        },
        elite: {
            h: 15,
            m: 3,
            a: 3,
            r: 0,
            wo: true
        }
    },
    2: {
        normal: {
            h: 11,
            m: 3,
            a: 3,
            r: 0,
            po: true
        },
        elite: {
            h: 18,
            m: 3,
            a: 3,
            r: 0,
            po: true,
            wo: true
        }
    },
    3: {
        normal: {
            h: 14,
            m: 3,
            a: 3,
            r: 0,
            po: true
        },
        elite: {
            h: 21,
            m: 3,
            a: 4,
            r: 0,
            po: true,
            wo: true
        }
    },
    4: {
        normal: {
            h: 16,
            m: 3,
            a: 4,
            r: 0,
            po: true
        },
        elite: {
            h: 24,
            m: 4,
            a: 4,
            r: 0,
            po: true,
            wo: true
        }
    },
    5: {
        normal: {
            h: 18,
            m: 3,
            a: 4,
            r: 0,
            po: true,
            wo: true
        },
        elite: {
            h: 27,
            m: 4,
            a: 5,
            r: 0,
            po: true,
            wo: true
        }
    },
    6: {
        normal: {
            h: 20,
            m: 4,
            a: 4,
            r: 0,
            po: true,
            wo: true
        },
        elite: {
            h: 30,
            m: 4,
            a: 6,
            r: 0,
            po: true,
            wo: true
        }
    },
    7: {
        normal: {
            h: 24,
            m: 4,
            a: 4,
            r: 0,
            po: true,
            wo: true
        },
        elite: {
            h: 35,
            m: 4,
            a: 6,
            r: 0,
            po: true,
            wo: true
        }
    }
},
  cardsId: 'sl'
};

const SpittingDrake: EnemyDef = {
  id: 'Spitting-Drake',
  description: '',
  flying: true,
  stats: {
    0: {
        normal: {
            h: 5,
            m: 3,
            a: 3,
            r: 3
        },
        elite: {
            h: 8,
            m: 3,
            a: 4,
            r: 4
        }
    },
    1: {
        normal: {
            h: 6,
            m: 3,
            a: 3,
            r: 3
        },
        elite: {
            h: 9,
            m: 3,
            a: 4,
            r: 4,
            mu: true
        }
    },
    2: {
        normal: {
            h: 8,
            m: 3,
            a: 3,
            r: 3,
            mu: true
        },
        elite: {
            h: 10,
            m: 3,
            a: 5,
            r: 4,
            mu: true
        }
    },
    3: {
        normal: {
            h: 8,
            m: 3,
            a: 4,
            r: 4,
            mu: true
        },
        elite: {
            h: 12,
            m: 3,
            a: 5,
            r: 5,
            mu: true
        }
    },
    4: {
        normal: {
            h: 9,
            m: 4,
            a: 4,
            r: 4,
            mu: true
        },
        elite: {
            h: 14,
            m: 4,
            a: 5,
            r: 5,
            mu: true
        }
    },
    5: {
        normal: {
            h: 12,
            m: 4,
            a: 4,
            r: 4,
            mu: true
        },
        elite: {
            h: 16,
            m: 4,
            a: 6,
            r: 5,
            mu: true
        }
    },
    6: {
        normal: {
            h: 13,
            m: 4,
            a: 5,
            r: 4,
            mu: true
        },
        elite: {
            h: 19,
            m: 4,
            a: 6,
            r: 5,
            mu: true
        }
    },
    7: {
        normal: {
            h: 16,
            m: 4,
            a: 5,
            r: 4,
            mu: true
        },
        elite: {
            h: 21,
            m: 4,
            a: 7,
            r: 5,
            mu: true
        }
    }
},
  cardsId: 'spd'
};

const StoneGolem: EnemyDef = {
  id: 'Stone-Golem',
  description: '',
  stats: {
    0: {
        normal: {
            h: 10,
            m: 1,
            a: 3,
            r: 0
        },
        elite: {
            h: 10,
            m: 2,
            a: 4,
            r: 0,
            s: 1
        }
    },
    1: {
        normal: {
            h: 10,
            m: 1,
            a: 3,
            r: 0,
            s: 1
        },
        elite: {
            h: 11,
            m: 2,
            a: 4,
            r: 0,
            s: 2
        }
    },
    2: {
        normal: {
            h: 11,
            m: 1,
            a: 4,
            r: 0,
            s: 1
        },
        elite: {
            h: 14,
            m: 2,
            a: 5,
            r: 0,
            s: 2
        }
    },
    3: {
        normal: {
            h: 11,
            m: 1,
            a: 4,
            r: 0,
            s: 2
        },
        elite: {
            h: 15,
            m: 2,
            a: 5,
            r: 0,
            s: 3
        }
    },
    4: {
        normal: {
            h: 12,
            m: 2,
            a: 4,
            r: 0,
            s: 2
        },
        elite: {
            h: 17,
            m: 2,
            a: 6,
            r: 0,
            s: 3
        }
    },
    5: {
        normal: {
            h: 13,
            m: 2,
            a: 5,
            r: 0,
            s: 2
        },
        elite: {
            h: 19,
            m: 3,
            a: 6,
            r: 0,
            s: 3
        }
    },
    6: {
        normal: {
            h: 16,
            m: 2,
            a: 5,
            r: 0,
            s: 2
        },
        elite: {
            h: 20,
            m: 3,
            a: 7,
            r: 0,
            s: 3
        }
    },
    7: {
        normal: {
            h: 16,
            m: 2,
            a: 5,
            r: 0,
            s: 3
        },
        elite: {
            h: 21,
            m: 3,
            a: 7,
            r: 0,
            s: 4
        }
    }
},
  cardsId: 'sg'
};

const SunDemon: EnemyDef = {
  id: 'Sun-Demon',
  description: '',
  flying: true,
  stats: {
    0: {
        normal: {
            h: 5,
            m: 2,
            a: 2,
            r: 0,
            ad: true,
            s: 1
        },
        elite: {
            h: 9,
            m: 2,
            a: 3,
            r: 0,
            ad: true,
            s: 1
        }
    },
    1: {
        normal: {
            h: 7,
            m: 2,
            a: 2,
            r: 0,
            ad: true,
            s: 1
        },
        elite: {
            h: 12,
            m: 2,
            a: 3,
            r: 0,
            ad: true,
            s: 1
        }
    },
    2: {
        normal: {
            h: 9,
            m: 2,
            a: 2,
            r: 0,
            ad: true,
            s: 1
        },
        elite: {
            h: 13,
            m: 2,
            a: 4,
            r: 0,
            ad: true,
            s: 1
        }
    },
    3: {
        normal: {
            h: 10,
            m: 2,
            a: 3,
            r: 0,
            ad: true,
            s: 1
        },
        elite: {
            h: 15,
            m: 3,
            a: 4,
            r: 0,
            ad: true,
            s: 1
        }
    },
    4: {
        normal: {
            h: 11,
            m: 3,
            a: 3,
            r: 0,
            ad: true,
            s: 1
        },
        elite: {
            h: 16,
            m: 3,
            a: 5,
            r: 0,
            ad: true,
            s: 1
        }
    },
    5: {
        normal: {
            h: 11,
            m: 3,
            a: 3,
            r: 0,
            ad: true,
            s: 2
        },
        elite: {
            h: 16,
            m: 3,
            a: 5,
            r: 0,
            ad: true,
            s: 2
        }
    },
    6: {
        normal: {
            h: 12,
            m: 3,
            a: 4,
            r: 0,
            ad: true,
            s: 2
        },
        elite: {
            h: 18,
            m: 4,
            a: 5,
            r: 0,
            ad: true,
            s: 2
        }
    },
    7: {
        normal: {
            h: 15,
            m: 3,
            a: 4,
            r: 0,
            ad: true,
            s: 2
        },
        elite: {
            h: 22,
            m: 4,
            a: 5,
            r: 0,
            ad: true,
            s: 2
        }
    }
},
  cardsId: 'sud'
};

const VermlingScout: EnemyDef = {
  id: 'Vermling-Scout',
  description: '',
  stats: {
    0: {
        normal: {
            h: 2,
            m: 3,
            a: 1,
            r: 0
        },
        elite: {
            h: 4,
            m: 3,
            a: 2,
            r: 0
        }
    },
    1: {
        normal: {
            h: 3,
            m: 3,
            a: 1,
            r: 0
        },
        elite: {
            h: 5,
            m: 3,
            a: 2,
            r: 0
        }
    },
    2: {
        normal: {
            h: 3,
            m: 3,
            a: 2,
            r: 0
        },
        elite: {
            h: 5,
            m: 4,
            a: 3,
            r: 0
        }
    },
    3: {
        normal: {
            h: 5,
            m: 3,
            a: 2,
            r: 0
        },
        elite: {
            h: 7,
            m: 4,
            a: 3,
            r: 0
        }
    },
    4: {
        normal: {
            h: 6,
            m: 3,
            a: 3,
            r: 0
        },
        elite: {
            h: 8,
            m: 4,
            a: 4,
            r: 0
        }
    },
    5: {
        normal: {
            h: 8,
            m: 3,
            a: 3,
            r: 0
        },
        elite: {
            h: 11,
            m: 4,
            a: 4,
            r: 0
        }
    },
    6: {
        normal: {
            h: 9,
            m: 4,
            a: 3,
            r: 0
        },
        elite: {
            h: 12,
            m: 5,
            a: 4,
            r: 0
        }
    },
    7: {
        normal: {
            h: 11,
            m: 4,
            a: 3,
            r: 0
        },
        elite: {
            h: 15,
            m: 5,
            a: 4,
            r: 0
        }
    }
},
  cardsId: 'sc'
};

const VermlingShaman: EnemyDef = {
  id: 'Vermling-Shaman',
  description: '',
  stats: {
    0: {
        normal: {
            h: 2,
            m: 2,
            a: 1,
            r: 3,
            s: 2
        },
        elite: {
            h: 3,
            m: 3,
            a: 2,
            r: 3,
            s: 2
        }
    },
    1: {
        normal: {
            h: 2,
            m: 2,
            a: 1,
            r: 3,
            s: 3
        },
        elite: {
            h: 3,
            m: 3,
            a: 2,
            r: 3,
            s: 3
        }
    },
    2: {
        normal: {
            h: 3,
            m: 2,
            a: 1,
            r: 4,
            s: 3
        },
        elite: {
            h: 4,
            m: 3,
            a: 2,
            r: 4,
            s: 3
        }
    },
    3: {
        normal: {
            h: 3,
            m: 2,
            a: 2,
            r: 4,
            s: 3
        },
        elite: {
            h: 5,
            m: 3,
            a: 3,
            r: 4,
            s: 3
        }
    },
    4: {
        normal: {
            h: 3,
            m: 3,
            a: 2,
            r: 4,
            mu: true,
            s: 3
        },
        elite: {
            h: 5,
            m: 3,
            a: 3,
            r: 4,
            mu: true,
            s: 4
        }
    },
    5: {
        normal: {
            h: 4,
            m: 3,
            a: 3,
            r: 4,
            mu: true,
            s: 3
        },
        elite: {
            h: 6,
            m: 3,
            a: 4,
            r: 4,
            mu: true,
            s: 4
        }
    },
    6: {
        normal: {
            h: 5,
            m: 3,
            a: 4,
            r: 4,
            mu: true,
            s: 3
        },
        elite: {
            h: 6,
            m: 3,
            a: 4,
            r: 4,
            mu: true,
            s: 5
        }
    },
    7: {
        normal: {
            h: 7,
            m: 3,
            a: 4,
            r: 4,
            mu: true,
            s: 3
        },
        elite: {
            h: 8,
            m: 3,
            a: 4,
            r: 4,
            mu: true,
            s: 5
        }
    }
},
  cardsId: ''
};

const WindDemon: EnemyDef = {
  id: 'Wind-Demon',
  description: '',
  flying: true,
  stats: {
    0: {
        normal: {
            h: 3,
            m: 3,
            a: 2,
            r: 3,
            s: 1
        },
        elite: {
            h: 5,
            m: 4,
            a: 3,
            r: 4,
            s: 1
        }
    },
    1: {
        normal: {
            h: 3,
            m: 3,
            a: 2,
            r: 3,
            s: 2
        },
        elite: {
            h: 5,
            m: 4,
            a: 3,
            r: 4,
            s: 2
        }
    },
    2: {
        normal: {
            h: 4,
            m: 4,
            a: 2,
            r: 3,
            s: 2
        },
        elite: {
            h: 7,
            m: 5,
            a: 3,
            r: 4,
            s: 2
        }
    },
    3: {
        normal: {
            h: 5,
            m: 4,
            a: 3,
            r: 3,
            s: 2
        },
        elite: {
            h: 8,
            m: 5,
            a: 4,
            r: 4,
            s: 2
        }
    },
    4: {
        normal: {
            h: 7,
            m: 4,
            a: 3,
            r: 3,
            s: 2
        },
        elite: {
            h: 8,
            m: 5,
            a: 4,
            r: 4,
            da: true,
            s: 2
        }
    },
    5: {
        normal: {
            h: 9,
            m: 4,
            a: 3,
            r: 4,
            s: 2
        },
        elite: {
            h: 11,
            m: 5,
            a: 4,
            r: 4,
            da: true,
            s: 2
        }
    },
    6: {
        normal: {
            h: 10,
            m: 4,
            a: 3,
            r: 4,
            s: 3
        },
        elite: {
            h: 12,
            m: 5,
            a: 4,
            r: 4,
            da: true,
            s: 3
        }
    },
    7: {
        normal: {
            h: 11,
            m: 4,
            a: 4,
            r: 4,
            s: 3
        },
        elite: {
            h: 13,
            m: 5,
            a: 5,
            r: 4,
            da: true,
            s: 3
        }
    }
},
  cardsId: 'wd'
};

const TheColorless: BossDef = {
  id: 'The-Colorless',
  description: '',
  stats: {
    1: {
      h: 40, m: 3, a: 3,
      special1: 'Invisible, Self. Consumes Night => Summon Night Demon',
      special2: 'Heal 4, Self. Shield 1. Consumes Sun => Summon Sun Demon',
    },
    2: {
      h: 44, m: 4, a: 3,
      special1: 'Invisible, Self. Consumes Night => Summon Night Demon',
      special2: 'Heal 5, Self. Shield 1. Consumes Sun => Summon Sun Demon',
    },
    3: {
      h: 48, m: 4, a: 4,
      special1: 'Invisible, Self. Consumes Night => Summon Night Demon',
      special2: 'Heal 5, Self. Shield 1. Consumes Sun => Summon Sun Demon',
    },
  },
  cardsId: 'bo'
};


export const EnemyDefs = {
  'Ancient-Artillery': AncientArtillery,
  'Bandit-Archer': BanditArcher,
  'Bandit-Guard': BanditGuard,
  'Black-Imp': BlackImp,
  'Cave-Bear': CaveBear,
  'City-Archer': CityArcher,
  'City-Guard': CityGuard,
  Cultist,
  'Deep-Terror': DeepTerror,
  'Earth-Demon': EarthDemon,
  'Flame-Demon': FlameDemon,
  'Frost-Demon': FrostDemon,
  'Forest-Imp': ForestImp,
  'Giant-Viper': GiantViper,
  'Harrower-Infester': HarrowerInfester,
  Hound,
  'Inox-Archer': InoxArcher,
  'Inox-Guard': InoxGuard,
  'Inox Shaman': InoxShaman,
  'Living-Bones': LivingBones,
  'Living-Corpse': LivingCorpse,
  'Living-Spirit': LivingSpirit,
  Lurker,
  Ooze,
  'Night-Demon': NightDemon,
  'Rending-Drake': RendingDrake,
  'Savvas-Icestorm': SavvasIcestorm,
  'Savvas-Lavaflow': SavvasLavaflow,
  'Spitting-Drake': SpittingDrake,
  'Stone-Golem': StoneGolem,
  'Sun-Demon': SunDemon,
  'Vermling-Scout': VermlingScout,
  'Vermling-Shaman': VermlingShaman,
  'Wind-Demon': WindDemon,
};

export const BossDefs = {
  'The-Colorless': TheColorless,
};
