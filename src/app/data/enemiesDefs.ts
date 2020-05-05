export interface Stats {
  h: number; // hit points
  m?: number; // move points
  a?: number; // attack
  r?: number; // range
  s?: number; // shield
  ta?: number; // target
  re?: number; // retaliate
  po?: boolean; // poison
  mu?: boolean; // muddle
  wo?: boolean; // wound
  im?: boolean; // immobilize
}

export interface EnemyDef {
  id: string;
  description: string;
  isBoss?: boolean;
  flying?: boolean
  stats: {1: {normal: Stats, elite: Stats}, 2: {normal: Stats, elite: Stats}, 3: {normal: Stats, elite: Stats}};
}

const AncientArtillery: EnemyDef = {
  id: 'Ancient-Artillery',
  description: '',
  stats: {
    1: {
      normal: {h:6, a:2, r:4},
      elite: {h:9, a:3, r:5},
    },
    2: {
      normal: {h:7, a:2, r:5},
      elite: {h:11, a:3, r:6},
    },
    3: {
      normal: {h:8, a:3, r:5},
      elite: {h:13, a:4, r:6},
    }
  }
};

const LivingBones: EnemyDef = {
  id: 'Living-Bones',
  description: '',
  stats: {
    1: {
      normal: {h:5, m:3, a:1, s:1, ta:2},
      elite: {h:6, m:4, a:2, s:1, ta:3},
    },
    2: {
      normal: {h:5, m:3, a:2, s:1, ta:2},
      elite: {h:7, m:4, a:3, s:1, ta:3},
    },
    3: {
      normal: {h:7, m:3, a:2, s:1, ta:2},
      elite: {h:10, m:4, a:3, s:1, ta:3},
    }
  }
};

const LivingCorpse: EnemyDef = {
  id: 'Living-Corpse',
  description: '',
  stats: {
    1: {
      normal: {h:7, m:1, a:3},
      elite: {h:10, m:1, a:4},
    },
    2: {
      normal: {h:9, m:1, a:3},
      elite: {h:13, m:1, a:4},
    },
    3: {
      normal: {h:10, m:1, a:4},
      elite: {h:13, m:2, a:5},
    }
  }
};

const LivingSpirit: EnemyDef = {
  id: 'Living-Spirit',
  description: '',
  flying: true,
  stats: {
    1: {
      normal: {h:2, m:2, a:2, r:2, s:2},
      elite: {h:3, m:3, a:3, r:3, s:3},
    },
    2: {
      normal: {h:2, m:3, a:2, r:3, s:2},
      elite: {h:3, m:4, a:3, r:4, s:3},
    },
    3: {
      normal: {h:3, m:3, a:3, r:3, s:2},
      elite: {h:4, m:4, a:4, r:4, s:3},
    }
  }
};

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
      normal: {h:3, m:2, a:1, po:true},
      elite: {h:5, m:2, a:2, po:true},
    },
    2: {
      normal: {h:4, m:3, a:1, po:true},
      elite: {h:7, m:3, a:2, po:true},
    },
    3: {
      normal: {h:4, m:3, a:2, po:true},
      elite: {h:8, m:3, a:3, po:true},
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
      elite: {h:11, m:2, a:3, r:4, s:1, po:true},
    }
  }
};

const InoxGuard: EnemyDef = {
  id: 'Inox-Guard',
  description: '',
  stats: {
    1: {
      normal: {h:8, m:2, a:2},
      elite: {h:10, m:2, a:3, re:2},
    },
    2: {
      normal: {h:9, m:2, a:3},
      elite: {h:12, m:2, a:4, re:2},
    },
    3: {
      normal: {h:11, m:3, a:3},
      elite: {h:15, m:2, a:4, re:3},
    }
  }
};

const InoxArcher: EnemyDef = {
  id: 'Inox-Archer',
  description: '',
  stats: {
    1: {
      normal: {h:6, m:2, a:2, r:3},
      elite: {h:8, m:2, a:3, r:4},
    },
    2: {
      normal: {h:8, m:2, a:2, r:3},
      elite: {h:11, m:2, a:3, r:4},
    },
    3: {
      normal: {h:9, m:2, a:3, r:3},
      elite: {h:13, m:2, a:4, r:4},
    }
  }
};

const SpittingDrake: EnemyDef = {
  id: 'Spitting-Drake',
  description: '',
  flying: true,
  stats: {
    1: {
      normal: {h:6, m:3, a:3, r:3},
      elite: {h:9, m:3, a:4, r:4, mu: true},
    },
    2: {
      normal: {h:8, m:3, a:3, r:3, mu: true},
      elite: {h:10, m:3, a:5, r:4, mu: true},
    },
    3: {
      normal: {h:8, m:3, a:4, r:4, mu: true},
      elite: {h:12, m:3, a:5, r:5, mu: true},
    }
  }
};

const RendingDrake: EnemyDef = {
  id: 'Rending-Drake',
  description: '',
  stats: {
    1: {
      normal: {h:6, m:3, a:3, wo: true},
      elite: {h:7, m:4, a:5, wo: true},
    },
    2: {
      normal: {h:7, m:4, a:3, wo: true},
      elite: {h:9, m:5, a:5, wo: true},
    },
    3: {
      normal: {h:7, m:4, a:4, wo: true},
      elite: {h:10, m:5, a:6, wo: true},
    }
  }
};

const Hound: EnemyDef = {
  id: 'Hound',
  description: '',
  stats: {
    1: {
      normal: {h:4, m:4, a:2, re:1},
      elite: {h:6, m:5, a:2, re:2},
    },
    2: {
      normal: {h:6, m:4, a:2, re:1},
      elite: {h:7, m:5, a:3, re:2},
    },
    3: {
      normal: {h:8, m:4, a:2, re:1},
      elite: {h:86, m:5, a:4, re:2},
    }
  }
};

const EarthDemon: EnemyDef = {
  id: 'Earth-Demon',
  description: '',
  stats: {
    1: {
      normal: {h:9, m:1, a:3},
      elite: {h:12, m:2, a:4},
    },
    2: {
      normal: {h:12, m:1, a:3},
      elite: {h:18, m:2, a:4},
    },
    3: {
      normal: {h:13, m:2, a:3},
      elite: {h:20, m:2, a:4, im: true},
    }
  }
};

const WindDemon: EnemyDef = {
  id: 'Wind-Demon',
  description: '',
  flying: true,
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
      elite: {h:11, m:2, a:3, r:4, s:1, po:true},
    }
  }
};

const StoneGolem: EnemyDef = {
  id: 'Stone-Golem',
  description: '',
  stats: {
    1: {
      normal: {h:10, m:1, a:3, s:1},
      elite: {h:11, m:2, a:4, s:2},
    },
    2: {
      normal: {h:11, m:1, a:4, s:1},
      elite: {h:14, m:2, a:5, s:2},
    },
    3: {
      normal: {h:11, m:1, a:4, s:2},
      elite: {h:15, m:2, a:5, s:3},
    }
  }
};


export const EnemyDefs = {
  'Ancient-Artillery': AncientArtillery,
  'Living-Bones': LivingBones,
  'Living-Corpse': LivingCorpse,
  'Living-Spirit': LivingSpirit,
  'Inox-Guard': InoxGuard,
  'Inox-Archer': InoxArcher,
  'Earth-Demon': EarthDemon,
  'Wind-Demon': WindDemon,
  'Vermling-Scout': VermlingScout,
  'Giant-Viper': GiantViper,
  Ooze,
  'Spitting-Drake': SpittingDrake,
  'Rending-Drake': RendingDrake,
  Hound,
  'Stone-Golem': StoneGolem
};
