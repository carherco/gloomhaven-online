export interface MonsterAbilityCard {
  name: string;
  initiative?: number;
  mustShuffle?: boolean;
  points: number;
  image: string;
  xws: string;
}

export const MonsterAbilityCards: MonsterAbilityCard[] = [
  {
    name: 'ma-aa-1',
    initiative: 46, mustShuffle: false, points: 0,
    image: 'monster-ability-cards/ancient-artillery/ma-aa-1.png',
    xws: 'maaa1'
  },
  {
    name: 'ma-aa-2',
    initiative: 71, mustShuffle: true, points: 1,
    image: 'monster-ability-cards/ancient-artillery/ma-aa-2.png',
    xws: 'maaa2'
  },
  {
    name: 'ma-aa-3',
    initiative: 71, mustShuffle: true, points: 2,
    image: 'monster-ability-cards/ancient-artillery/ma-aa-3.png',
    xws: 'maaa3'
  },
  {
    name: 'ma-aa-4',
    initiative: 37, mustShuffle: false, points: 3,
    image: 'monster-ability-cards/ancient-artillery/ma-aa-4.png',
    xws: 'maaa4'
  },
  {
    name: 'ma-aa-5',
    initiative: 37, mustShuffle: false, points: 4,
    image: 'monster-ability-cards/ancient-artillery/ma-aa-5.png',
    xws: 'maaa5'
  },
  {
    name: 'ma-aa-6',
    initiative: 95, mustShuffle: false, points: 5,
    image: 'monster-ability-cards/ancient-artillery/ma-aa-6.png',
    xws: 'maaa6'
  },
  {
    name: 'ma-aa-7',
    initiative: 17, mustShuffle: false, points: 6,
    image: 'monster-ability-cards/ancient-artillery/ma-aa-7.png',
    xws: 'maaa7'
  },
  {
    name: 'ma-aa-8',
    initiative: 46, mustShuffle: false, points: 7,
    image: 'monster-ability-cards/ancient-artillery/ma-aa-8.png',
    xws: 'maaa8'
  },
  {
    name: 'ma-aa-back',
    points: 8,
    image: 'monster-ability-cards/ancient-artillery/ma-aa-back.png',
    xws: 'maaaback'
  },
  {
    name: 'ma-ar-1',
    initiative: 16, mustShuffle: false, points: 9,
    image: 'monster-ability-cards/archer/ma-ar-1.png',
    xws: 'maar1'
  },
  {
    name: 'ma-ar-2',
    initiative: 31, mustShuffle: false, points: 10,
    image: 'monster-ability-cards/archer/ma-ar-2.png',
    xws: 'maar2'
  },
  {
    name: 'ma-ar-3',
    initiative: 32, mustShuffle: false, points: 11,
    image: 'monster-ability-cards/archer/ma-ar-3.png',
    xws: 'maar3'
  },
  {
    name: 'ma-ar-4',
    initiative: 44, mustShuffle: false, points: 12,
    image: 'monster-ability-cards/archer/ma-ar-4.png',
    xws: 'maar4'
  },
  {
    name: 'ma-ar-5',
    initiative: 56, mustShuffle: false, points: 13,
    image: 'monster-ability-cards/archer/ma-ar-5.png',
    xws: 'maar5'
  },
  {
    name: 'ma-ar-6',
    initiative: 68, mustShuffle: true, points: 14,
    image: 'monster-ability-cards/archer/ma-ar-6.png',
    xws: 'maar6'
  },
  {
    name: 'ma-ar-7',
    initiative: 14, mustShuffle: false, points: 15,
    image: 'monster-ability-cards/archer/ma-ar-7.png',
    xws: 'maar7'
  },
  {
    name: 'ma-ar-8',
    initiative: 29, mustShuffle: true, points: 16,
    image: 'monster-ability-cards/archer/ma-ar-8.png',
    xws: 'maar8'
  },
  {
    name: 'ma-ar-back',
    points: 17,
    image: 'monster-ability-cards/archer/ma-ar-back.png',
    xws: 'maarback'
  },
  {
    name: 'ma-bo-1',
    initiative: 11, mustShuffle: false, points: 18,
    image: 'monster-ability-cards/boss/ma-bo-1.png',
    xws: 'mabo1'
  },
  {
    name: 'ma-bo-2',
    initiative: 14, mustShuffle: false, points: 19,
    image: 'monster-ability-cards/boss/ma-bo-2.png',
    xws: 'mabo2'
  },
  {
    name: 'ma-bo-3',
    initiative: 17, mustShuffle: true, points: 20,
    image: 'monster-ability-cards/boss/ma-bo-3.png',
    xws: 'mabo3'
  },
  {
    name: 'ma-bo-4',
    initiative: 85, mustShuffle: true, points: 21,
    image: 'monster-ability-cards/boss/ma-bo-4.png',
    xws: 'mabo4'
  },
  {
    name: 'ma-bo-5',
    initiative: 79, mustShuffle: false, points: 22,
    image: 'monster-ability-cards/boss/ma-bo-5.png',
    xws: 'mabo5'
  },
  {
    name: 'ma-bo-6',
    initiative: 73, mustShuffle: false, points: 23,
    image: 'monster-ability-cards/boss/ma-bo-6.png',
    xws: 'mabo6'
  },
  {
    name: 'ma-bo-7',
    initiative: 36, mustShuffle: false, points: 24,
    image: 'monster-ability-cards/boss/ma-bo-7.png',
    xws: 'mabo7'
  },
  {
    name: 'ma-bo-8',
    initiative: 52, mustShuffle: false, points: 25,
    image: 'monster-ability-cards/boss/ma-bo-8.png',
    xws: 'mabo8'
  },
  {
    name: 'ma-bo-back',
    initiative: 46, mustShuffle: false, points: 26,
    image: 'monster-ability-cards/boss/ma-bo-back.png',
    xws: 'maboback'
  },
  {
    name: 'ma-cb-1',
    initiative: 14, mustShuffle: false, points: 27,
    image: 'monster-ability-cards/cave-bear/ma-cb-1.png',
    xws: 'macb1'
  },
  {
    name: 'ma-cb-2',
    initiative: 34, mustShuffle: true, points: 28,
    image: 'monster-ability-cards/cave-bear/ma-cb-2.png',
    xws: 'macb2'
  },
  {
    name: 'ma-cb-3',
    initiative: 13, mustShuffle: false, points: 29,
    image: 'monster-ability-cards/cave-bear/ma-cb-3.png',
    xws: 'macb3'
  },
  {
    name: 'ma-cb-4',
    initiative: 41, mustShuffle: false, points: 30,
    image: 'monster-ability-cards/cave-bear/ma-cb-4.png',
    xws: 'macb4'
  },
  {
    name: 'ma-cb-5',
    initiative: 60, mustShuffle: false, points: 31,
    image: 'monster-ability-cards/cave-bear/ma-cb-5.png',
    xws: 'macb5'
  },
  {
    name: 'ma-cb-6',
    initiative: 80, mustShuffle: true, points: 32,
    image: 'monster-ability-cards/cave-bear/ma-cb-6.png',
    xws: 'macb6'
  },
  {
    name: 'ma-cb-7',
    initiative: 61, mustShuffle: false, points: 33,
    image: 'monster-ability-cards/cave-bear/ma-cb-7.png',
    xws: 'macb7'
  },
  {
    name: 'ma-cb-8',
    initiative: 3, mustShuffle: false, points: 34,
    image: 'monster-ability-cards/cave-bear/ma-cb-8.png',
    xws: 'macb8'
  },
  {
    name: 'ma-cb-back',
    initiative: 46, mustShuffle: false, points: 35,
    image: 'monster-ability-cards/cave-bear/ma-cb-back.png',
    xws: 'macbback'
  },
  {
    name: 'ma-cu-1',
    initiative: 10, mustShuffle: false, points: 36,
    image: 'monster-ability-cards/cultist/ma-cu-1.png',
    xws: 'macu1'
  },
  {
    name: 'ma-cu-2',
    initiative: 10, mustShuffle: false, points: 37,
    image: 'monster-ability-cards/cultist/ma-cu-2.png',
    xws: 'macu2'
  },
  {
    name: 'ma-cu-3',
    initiative: 27, mustShuffle: false, points: 38,
    image: 'monster-ability-cards/cultist/ma-cu-3.png',
    xws: 'macu3'
  },
  {
    name: 'ma-cu-4',
    initiative: 27, mustShuffle: false, points: 39,
    image: 'monster-ability-cards/cultist/ma-cu-4.png',
    xws: 'macu4'
  },
  {
    name: 'ma-cu-5',
    initiative: 39, mustShuffle: false, points: 40,
    image: 'monster-ability-cards/cultist/ma-cu-5.png',
    xws: 'macu5'
  },
  {
    name: 'ma-cu-6',
    initiative: 63, mustShuffle: true, points: 41,
    image: 'monster-ability-cards/cultist/ma-cu-6.png',
    xws: 'macu6'
  },
  {
    name: 'ma-cu-7',
    initiative: 63, mustShuffle: true, points: 42,
    image: 'monster-ability-cards/cultist/ma-cu-7.png',
    xws: 'macu7'
  },
  {
    name: 'ma-cu-8',
    initiative: 31, mustShuffle: false, points: 43,
    image: 'monster-ability-cards/cultist/ma-cu-8.png',
    xws: 'macu8'
  },
  {
    name: 'ma-cu-back',
    initiative: 46, mustShuffle: false, points: 44,
    image: 'monster-ability-cards/cultist/ma-cu-back.png',
    xws: 'macuback'
  },
  {
    name: 'ma-dt-1',
    initiative: 65, mustShuffle: false, points: 45,
    image: 'monster-ability-cards/deep-terror/ma-dt-1.png',
    xws: 'madt1'
  },
  {
    name: 'ma-dt-2',
    initiative: 60, mustShuffle: true, points: 46,
    image: 'monster-ability-cards/deep-terror/ma-dt-2.png',
    xws: 'madt2'
  },
  {
    name: 'ma-dt-3',
    initiative: 60, mustShuffle: true, points: 47,
    image: 'monster-ability-cards/deep-terror/ma-dt-3.png',
    xws: 'madt3'
  },
  {
    name: 'ma-dt-4',
    initiative: 84, mustShuffle: false, points: 48,
    image: 'monster-ability-cards/deep-terror/ma-dt-4.png',
    xws: 'madt4'
  },
  {
    name: 'ma-dt-5',
    initiative: 75, mustShuffle: false, points: 49,
    image: 'monster-ability-cards/deep-terror/ma-dt-5.png',
    xws: 'madt5'
  },
  {
    name: 'ma-dt-6',
    initiative: 75, mustShuffle: false, points: 50,
    image: 'monster-ability-cards/deep-terror/ma-dt-6.png',
    xws: 'madt6'
  },
  {
    name: 'ma-dt-7',
    initiative: 96, mustShuffle: false, points: 51,
    image: 'monster-ability-cards/deep-terror/ma-dt-7.png',
    xws: 'madt7'
  },
  {
    name: 'ma-dt-8',
    initiative: 54, mustShuffle: false, points: 52,
    image: 'monster-ability-cards/deep-terror/ma-dt-8.png',
    xws: 'madt8'
  },
  {
    name: 'ma-dt-back',
    initiative: 46, mustShuffle: false, points: 53,
    image: 'monster-ability-cards/deep-terror/ma-dt-back.png',
    xws: 'madtback'
  },
  {
    name: 'ma-ed-1',
    initiative: 40, mustShuffle: true, points: 54,
    image: 'monster-ability-cards/earth-demon/ma-ed-1.png',
    xws: 'maed1'
  },
  {
    name: 'ma-ed-2',
    initiative: 42, mustShuffle: true, points: 55,
    image: 'monster-ability-cards/earth-demon/ma-ed-2.png',
    xws: 'maed2'
  },
  {
    name: 'ma-ed-3',
    initiative: 62, mustShuffle: false, points: 56,
    image: 'monster-ability-cards/earth-demon/ma-ed-3.png',
    xws: 'maed3'
  },
  {
    name: 'ma-ed-4',
    initiative: 71, mustShuffle: false, points: 57,
    image: 'monster-ability-cards/earth-demon/ma-ed-4.png',
    xws: 'maed4'
  },
  {
    name: 'ma-ed-5',
    initiative: 83, mustShuffle: false, points: 58,
    image: 'monster-ability-cards/earth-demon/ma-ed-5.png',
    xws: 'maed5'
  },
  {
    name: 'ma-ed-6',
    initiative: 93, mustShuffle: false, points: 59,
    image: 'monster-ability-cards/earth-demon/ma-ed-6.png',
    xws: 'maed6'
  },
  {
    name: 'ma-ed-7',
    initiative: 79, mustShuffle: false, points: 60,
    image: 'monster-ability-cards/earth-demon/ma-ed-7.png',
    xws: 'maed7'
  },
  {
    name: 'ma-ed-8',
    initiative: 87, mustShuffle: false, points: 61,
    image: 'monster-ability-cards/earth-demon/ma-ed-8.png',
    xws: 'maed8'
  },
  {
    name: 'ma-ed-back',
    initiative: 46, mustShuffle: false, points: 62,
    image: 'monster-ability-cards/earth-demon/ma-ed-back.png',
    xws: 'maedback'
  },
  {
    name: 'ma-fld-1',
    initiative: 3, mustShuffle: false, points: 63,
    image: 'monster-ability-cards/flame-demon/ma-fld-1.png',
    xws: 'mafld1'
  },
  {
    name: 'ma-fld-2',
    initiative: 24, mustShuffle: false, points: 64,
    image: 'monster-ability-cards/flame-demon/ma-fld-2.png',
    xws: 'mafld2'
  },
  {
    name: 'ma-fld-3',
    initiative: 46, mustShuffle: true, points: 65,
    image: 'monster-ability-cards/flame-demon/ma-fld-3.png',
    xws: 'mafld3'
  },
  {
    name: 'ma-fld-4',
    initiative: 49, mustShuffle: false, points: 66,
    image: 'monster-ability-cards/flame-demon/ma-fld-4.png',
    xws: 'mafld4'
  },
  {
    name: 'ma-fld-5',
    initiative: 67, mustShuffle: false, points: 67,
    image: 'monster-ability-cards/flame-demon/ma-fld-5.png',
    xws: 'mafld5'
  },
  {
    name: 'ma-fld-6',
    initiative: 77, mustShuffle: true, points: 68,
    image: 'monster-ability-cards/flame-demon/ma-fld-6.png',
    xws: 'mafld6'
  },
  {
    name: 'ma-fld-7',
    initiative: 30, mustShuffle: true, points: 69,
    image: 'monster-ability-cards/flame-demon/ma-fld-7.png',
    xws: 'mafld7'
  },
  {
    name: 'ma-fld-8',
    initiative: 8, mustShuffle: false, points: 70,
    image: 'monster-ability-cards/flame-demon/ma-fld-8.png',
    xws: 'mafld8'
  },
  {
    name: 'ma-fld-back',
    initiative: 46, mustShuffle: false, points: 71,
    image: 'monster-ability-cards/flame-demon/ma-fld-back.png',
    xws: 'mafldback'
  },
  {
    name: 'ma-frd-1',
    initiative: 18, mustShuffle: false, points: 72,
    image: 'monster-ability-cards/frost-demon/ma-frd-1.png',
    xws: 'mafrd1'
  },
  {
    name: 'ma-frd-2',
    initiative: 38, mustShuffle: false, points: 73,
    image: 'monster-ability-cards/frost-demon/ma-frd-2.png',
    xws: 'mafrd2'
  },
  {
    name: 'ma-frd-3',
    initiative: 58, mustShuffle: false, points: 74,
    image: 'monster-ability-cards/frost-demon/ma-frd-3.png',
    xws: 'mafrd3'
  },
  {
    name: 'ma-frd-4',
    initiative: 58, mustShuffle: false, points: 75,
    image: 'monster-ability-cards/frost-demon/ma-frd-4.png',
    xws: 'mafrd4'
  },
  {
    name: 'ma-frd-5',
    initiative: 78, mustShuffle: true, points: 76,
    image: 'monster-ability-cards/frost-demon/ma-frd-5.png',
    xws: 'mafrd5'
  },
  {
    name: 'ma-frd-6',
    initiative: 78, mustShuffle: true, points: 77,
    image: 'monster-ability-cards/frost-demon/ma-frd-6.png',
    xws: 'mafrd6'
  },
  {
    name: 'ma-frd-7',
    initiative: 58, mustShuffle: false, points: 78,
    image: 'monster-ability-cards/frost-demon/ma-frd-7.png',
    xws: 'mafrd7'
  },
  {
    name: 'ma-frd-8',
    initiative: 18, mustShuffle: false, points: 79,
    image: 'monster-ability-cards/frost-demon/ma-frd-8.png',
    xws: 'mafrd8'
  },
  {
    name: 'ma-frd-back',
    initiative: 46, mustShuffle: false, points: 80,
    image: 'monster-ability-cards/frost-demon/ma-frd-back.png',
    xws: 'mafrdback'
  },
  {
    name: 'ma-gv-1',
    initiative: 32, mustShuffle: true, points: 81,
    image: 'monster-ability-cards/giant-viper/ma-gv-1.png',
    xws: 'magv1'
  },
  {
    name: 'ma-gv-2',
    initiative: 32, mustShuffle: true, points: 82,
    image: 'monster-ability-cards/giant-viper/ma-gv-2.png',
    xws: 'magv2'
  },
  {
    name: 'ma-gv-3',
    initiative: 11, mustShuffle: false, points: 83,
    image: 'monster-ability-cards/giant-viper/ma-gv-3.png',
    xws: 'magv3'
  },
  {
    name: 'ma-gv-4',
    initiative: 43, mustShuffle: false, points: 84,
    image: 'monster-ability-cards/giant-viper/ma-gv-4.png',
    xws: 'magv4'
  },
  {
    name: 'ma-gv-5',
    initiative: 58, mustShuffle: false, points: 85,
    image: 'monster-ability-cards/giant-viper/ma-gv-5.png',
    xws: 'magv5'
  },
  {
    name: 'ma-gv-6',
    initiative: 58, mustShuffle: false, points: 86,
    image: 'monster-ability-cards/giant-viper/ma-gv-6.png',
    xws: 'magv6'
  },
  {
    name: 'ma-gv-7',
    initiative: 43, mustShuffle: false, points: 87,
    image: 'monster-ability-cards/giant-viper/ma-gv-7.png',
    xws: 'magv7'
  },
  {
    name: 'ma-gv-8',
    initiative: 23, mustShuffle: false, points: 88,
    image: 'monster-ability-cards/giant-viper/ma-gv-8.png',
    xws: 'magv8'
  },
  {
    name: 'ma-gv-back',
    initiative: 46, mustShuffle: false, points: 89,
    image: 'monster-ability-cards/giant-viper/ma-gv-back.png',
    xws: 'magvback'
  },
  {
    name: 'ma-gu-1',
    initiative: 15, mustShuffle: true, points: 90,
    image: 'monster-ability-cards/guard/ma-gu-1.png',
    xws: 'magu1'
  },
  {
    name: 'ma-gu-2',
    initiative: 30, mustShuffle: false, points: 91,
    image: 'monster-ability-cards/guard/ma-gu-2.png',
    xws: 'magu2'
  },
  {
    name: 'ma-gu-3',
    initiative: 35, mustShuffle: false, points: 92,
    image: 'monster-ability-cards/guard/ma-gu-3.png',
    xws: 'magu3'
  },
  {
    name: 'ma-gu-4',
    initiative: 50, mustShuffle: false, points: 93,
    image: 'monster-ability-cards/guard/ma-gu-4.png',
    xws: 'magu4'
  },
  {
    name: 'ma-gu-5',
    initiative: 50, mustShuffle: false, points: 94,
    image: 'monster-ability-cards/guard/ma-gu-5.png',
    xws: 'magu5'
  },
  {
    name: 'ma-gu-6',
    initiative: 70, mustShuffle: false, points: 95,
    image: 'monster-ability-cards/guard/ma-gu-6.png',
    xws: 'magu6'
  },
  {
    name: 'ma-gu-7',
    initiative: 55, mustShuffle: false, points: 96,
    image: 'monster-ability-cards/guard/ma-gu-7.png',
    xws: 'magu7'
  },
  {
    name: 'ma-gu-8',
    initiative: 15, mustShuffle: true, points: 97,
    image: 'monster-ability-cards/guard/ma-gu-8.png',
    xws: 'magu8'
  },
  {
    name: 'ma-gu-back',
    initiative: 46, mustShuffle: false, points: 98,
    image: 'monster-ability-cards/guard/ma-gu-back.png',
    xws: 'maguback'
  },
  {
    name: 'ma-hi-1',
    initiative: 38, mustShuffle: false, points: 99,
    image: 'monster-ability-cards/harrower-infester/ma-hi-1.png',
    xws: 'mahi1'
  },
  {
    name: 'ma-hi-2',
    initiative: 7, mustShuffle: false, points: 100,
    image: 'monster-ability-cards/harrower-infester/ma-hi-2.png',
    xws: 'mahi2'
  },
  {
    name: 'ma-hi-3',
    initiative: 16, mustShuffle: false, points: 101,
    image: 'monster-ability-cards/harrower-infester/ma-hi-3.png',
    xws: 'mahi3'
  },
  {
    name: 'ma-hi-4',
    initiative: 16, mustShuffle: false, points: 102,
    image: 'monster-ability-cards/harrower-infester/ma-hi-4.png',
    xws: 'mahi4'
  },
  {
    name: 'ma-hi-5',
    initiative: 2, mustShuffle: true, points: 103,
    image: 'monster-ability-cards/harrower-infester/ma-hi-5.png',
    xws: 'mahi5'
  },
  {
    name: 'ma-hi-6',
    initiative: 30, mustShuffle: false, points: 104,
    image: 'monster-ability-cards/harrower-infester/ma-hi-6.png',
    xws: 'mahi6'
  },
  {
    name: 'ma-hi-7',
    initiative: 38, mustShuffle: false, points: 105,
    image: 'monster-ability-cards/harrower-infester/ma-hi-7.png',
    xws: 'mahi7'
  },
  {
    name: 'ma-hi-8',
    initiative: 7, mustShuffle: true, points: 106,
    image: 'monster-ability-cards/harrower-infester/ma-hi-8.png',
    xws: 'mahi8'
  },
  {
    name: 'ma-hi-back',
    initiative: 46, mustShuffle: false, points: 107,
    image: 'monster-ability-cards/harrower-infester/ma-hi-back.png',
    xws: 'mahiback'
  },
  {
    name: 'ma-ho-1',
    initiative: 6, mustShuffle: false, points: 108,
    image: 'monster-ability-cards/hound/ma-ho-1.png',
    xws: 'maho1'
  },
  {
    name: 'ma-ho-2',
    initiative: 7, mustShuffle: false, points: 109,
    image: 'monster-ability-cards/hound/ma-ho-2.png',
    xws: 'maho2'
  },
  {
    name: 'ma-ho-3',
    initiative: 19, mustShuffle: true, points: 110,
    image: 'monster-ability-cards/hound/ma-ho-3.png',
    xws: 'maho3'
  },
  {
    name: 'ma-ho-4',
    initiative: 19, mustShuffle: true, points: 111,
    image: 'monster-ability-cards/hound/ma-ho-4.png',
    xws: 'maho4'
  },
  {
    name: 'ma-ho-5',
    initiative: 26, mustShuffle: false, points: 112,
    image: 'monster-ability-cards/hound/ma-ho-5.png',
    xws: 'maho5'
  },
  {
    name: 'ma-ho-6',
    initiative: 26, mustShuffle: false, points: 113,
    image: 'monster-ability-cards/hound/ma-ho-6.png',
    xws: 'maho6'
  },
  {
    name: 'ma-ho-7',
    initiative: 83, mustShuffle: false, points: 114,
    image: 'monster-ability-cards/hound/ma-ho-7.png',
    xws: 'maho7'
  },
  {
    name: 'ma-ho-8',
    initiative: 72, mustShuffle: false, points: 115,
    image: 'monster-ability-cards/hound/ma-ho-8.png',
    xws: 'maho8'
  },
  {
    name: 'ma-ho-back',
    initiative: 46, mustShuffle: false, points: 116,
    image: 'monster-ability-cards/hound/ma-ho-back.png',
    xws: 'mahoback'
  },
  {
    name: 'ma-im-1',
    initiative: 5, mustShuffle: false, points: 117,
    image: 'monster-ability-cards/imp/ma-im-1.png',
    xws: 'maim1'
  },
  {
    name: 'ma-im-2',
    initiative: 37, mustShuffle: false, points: 118,
    image: 'monster-ability-cards/imp/ma-im-2.png',
    xws: 'maim2'
  },
  {
    name: 'ma-im-3',
    initiative: 37, mustShuffle: false, points: 119,
    image: 'monster-ability-cards/imp/ma-im-3.png',
    xws: 'maim3'
  },
  {
    name: 'ma-im-4',
    initiative: 42, mustShuffle: false, points: 120,
    image: 'monster-ability-cards/imp/ma-im-4.png',
    xws: 'maim4'
  },
  {
    name: 'ma-im-5',
    initiative: 43, mustShuffle: true, points: 121,
    image: 'monster-ability-cards/imp/ma-im-5.png',
    xws: 'maim5'
  },
  {
    name: 'ma-im-6',
    initiative: 76, mustShuffle: false, points: 122,
    image: 'monster-ability-cards/imp/ma-im-6.png',
    xws: 'maim6'
  },
  {
    name: 'ma-im-7',
    initiative: 43, mustShuffle: true, points: 123,
    image: 'monster-ability-cards/imp/ma-im-7.png',
    xws: 'maim7'
  },
  {
    name: 'ma-im-8',
    initiative: 24, mustShuffle: false, points: 124,
    image: 'monster-ability-cards/imp/ma-im-8.png',
    xws: 'maim8'
  },
  {
    name: 'ma-im-back',
    initiative: 46, mustShuffle: false, points: 125,
    image: 'monster-ability-cards/imp/ma-im-back.png',
    xws: 'maimback'
  },
  {
    name: 'ma-lb-1',
    initiative: 64, mustShuffle: false, points: 126,
    image: 'monster-ability-cards/living-bones/ma-lb-1.png',
    xws: 'malb1'
  },
  {
    name: 'ma-lb-2',
    initiative: 20, mustShuffle: true, points: 127,
    image: 'monster-ability-cards/living-bones/ma-lb-2.png',
    xws: 'malb2'
  },
  {
    name: 'ma-lb-3',
    initiative: 25, mustShuffle: false, points: 128,
    image: 'monster-ability-cards/living-bones/ma-lb-3.png',
    xws: 'malb3'
  },
  {
    name: 'ma-lb-4',
    initiative: 45, mustShuffle: false, points: 129,
    image: 'monster-ability-cards/living-bones/ma-lb-4.png',
    xws: 'malb4'
  },
  {
    name: 'ma-lb-5',
    initiative: 45, mustShuffle: false, points: 130,
    image: 'monster-ability-cards/living-bones/ma-lb-5.png',
    xws: 'malb5'
  },
  {
    name: 'ma-lb-6',
    initiative: 81, mustShuffle: false, points: 131,
    image: 'monster-ability-cards/living-bones/ma-lb-6.png',
    xws: 'malb6'
  },
  {
    name: 'ma-lb-7',
    initiative: 74, mustShuffle: false, points: 132,
    image: 'monster-ability-cards/living-bones/ma-lb-7.png',
    xws: 'malb7'
  },
  {
    name: 'ma-lb-8',
    initiative: 12, mustShuffle: true, points: 133,
    image: 'monster-ability-cards/living-bones/ma-lb-8.png',
    xws: 'malb8'
  },
  {
    name: 'ma-lb-back',
    initiative: 46, mustShuffle: false, points: 134,
    image: 'monster-ability-cards/living-bones/ma-lb-back.png',
    xws: 'malbback'
  },
  {
    name: 'ma-lc-1',
    initiative: 21, mustShuffle: false, points: 135,
    image: 'monster-ability-cards/living-corpse/ma-lc-1.png',
    xws: 'malc1'
  },
  {
    name: 'ma-lc-2',
    initiative: 47, mustShuffle: false, points: 136,
    image: 'monster-ability-cards/living-corpse/ma-lc-2.png',
    xws: 'malc2'
  },
  {
    name: 'ma-lc-3',
    initiative: 66, mustShuffle: true, points: 137,
    image: 'monster-ability-cards/living-corpse/ma-lc-3.png',
    xws: 'malc3'
  },
  {
    name: 'ma-lc-4',
    initiative: 66, mustShuffle: true, points: 138,
    image: 'monster-ability-cards/living-corpse/ma-lc-4.png',
    xws: 'malc4'
  },
  {
    name: 'ma-lc-5',
    initiative: 82, mustShuffle: false, points: 139,
    image: 'monster-ability-cards/living-corpse/ma-lc-5.png',
    xws: 'malc5'
  },
  {
    name: 'ma-lc-6',
    initiative: 91, mustShuffle: false, points: 140,
    image: 'monster-ability-cards/living-corpse/ma-lc-6.png',
    xws: 'malc6'
  },
  {
    name: 'ma-lc-7',
    initiative: 71, mustShuffle: false, points: 141,
    image: 'monster-ability-cards/living-corpse/ma-lc-7.png',
    xws: 'malc7'
  },
  {
    name: 'ma-lc-8',
    initiative: 32, mustShuffle: false, points: 142,
    image: 'monster-ability-cards/living-corpse/ma-lc-8.png',
    xws: 'malc8'
  },
  {
    name: 'ma-lc-back',
    initiative: 46, mustShuffle: false, points: 143,
    image: 'monster-ability-cards/living-corpse/ma-lc-back.png',
    xws: 'malcback'
  },
  {
    name: 'ma-ls-1',
    initiative: 22, mustShuffle: true, points: 144,
    image: 'monster-ability-cards/living-spirit/ma-ls-1.png',
    xws: 'mals1'
  },
  {
    name: 'ma-ls-2',
    initiative: 33, mustShuffle: true, points: 145,
    image: 'monster-ability-cards/living-spirit/ma-ls-2.png',
    xws: 'mals2'
  },
  {
    name: 'ma-ls-3',
    initiative: 48, mustShuffle: false, points: 146,
    image: 'monster-ability-cards/living-spirit/ma-ls-3.png',
    xws: 'mals3'
  },
  {
    name: 'ma-ls-4',
    initiative: 48, mustShuffle: false, points: 147,
    image: 'monster-ability-cards/living-spirit/ma-ls-4.png',
    xws: 'mals4'
  },
  {
    name: 'ma-ls-5',
    initiative: 61, mustShuffle: false, points: 148,
    image: 'monster-ability-cards/living-spirit/ma-ls-5.png',
    xws: 'mals5'
  },
  {
    name: 'ma-ls-6',
    initiative: 75, mustShuffle: false, points: 149,
    image: 'monster-ability-cards/living-spirit/ma-ls-6.png',
    xws: 'mals6'
  },
  {
    name: 'ma-ls-7',
    initiative: 55, mustShuffle: false, points: 150,
    image: 'monster-ability-cards/living-spirit/ma-ls-7.png',
    xws: 'mals7'
  },
  {
    name: 'ma-ls-8',
    initiative: 67, mustShuffle: false, points: 151,
    image: 'monster-ability-cards/living-spirit/ma-ls-8.png',
    xws: 'mals8'
  },
  {
    name: 'ma-ls-back',
    initiative: 46, mustShuffle: false, points: 152,
    image: 'monster-ability-cards/living-spirit/ma-ls-back.png',
    xws: 'malsback'
  },
  {
    name: 'ma-lu-1',
    initiative: 11, mustShuffle: true, points: 153,
    image: 'monster-ability-cards/lurker/ma-lu-1.png',
    xws: 'malu1'
  },
  {
    name: 'ma-lu-2',
    initiative: 28, mustShuffle: false, points: 154,
    image: 'monster-ability-cards/lurker/ma-lu-2.png',
    xws: 'malu2'
  },
  {
    name: 'ma-lu-3',
    initiative: 38, mustShuffle: false, points: 155,
    image: 'monster-ability-cards/lurker/ma-lu-3.png',
    xws: 'malu3'
  },
  {
    name: 'ma-lu-4',
    initiative: 38, mustShuffle: false, points: 156,
    image: 'monster-ability-cards/lurker/ma-lu-4.png',
    xws: 'malu4'
  },
  {
    name: 'ma-lu-5',
    initiative: 61, mustShuffle: false, points: 157,
    image: 'monster-ability-cards/lurker/ma-lu-5.png',
    xws: 'malu5'
  },
  {
    name: 'ma-lu-6',
    initiative: 64, mustShuffle: false, points: 158,
    image: 'monster-ability-cards/lurker/ma-lu-6.png',
    xws: 'malu6'
  },
  {
    name: 'ma-lu-7',
    initiative: 41, mustShuffle: false, points: 159,
    image: 'monster-ability-cards/lurker/ma-lu-7.png',
    xws: 'malu7'
  },
  {
    name: 'ma-lu-8',
    initiative: 23, mustShuffle: true, points: 160,
    image: 'monster-ability-cards/lurker/ma-lu-8.png',
    xws: 'malu8'
  },
  {
    name: 'ma-lu-back',
    initiative: 46, mustShuffle: false, points: 161,
    image: 'monster-ability-cards/lurker/ma-lu-back.png',
    xws: 'maluback'
  },
  {
    name: 'ma-nd-1',
    initiative: 4, mustShuffle: false, points: 162,
    image: 'monster-ability-cards/night-demon/ma-nd-1.png',
    xws: 'mand1'
  },
  {
    name: 'ma-nd-2',
    initiative: 7, mustShuffle: false, points: 163,
    image: 'monster-ability-cards/night-demon/ma-nd-2.png',
    xws: 'mand2'
  },
  {
    name: 'ma-nd-3',
    initiative: 22, mustShuffle: false, points: 164,
    image: 'monster-ability-cards/night-demon/ma-nd-3.png',
    xws: 'mand3'
  },
  {
    name: 'ma-nd-4',
    initiative: 26, mustShuffle: false, points: 165,
    image: 'monster-ability-cards/night-demon/ma-nd-4.png',
    xws: 'mand4'
  },
  {
    name: 'ma-nd-5',
    initiative: 46, mustShuffle: true, points: 166,
    image: 'monster-ability-cards/night-demon/ma-nd-5.png',
    xws: 'mand5'
  },
  {
    name: 'ma-nd-6',
    initiative: 41, mustShuffle: true, points: 167,
    image: 'monster-ability-cards/night-demon/ma-nd-6.png',
    xws: 'mand6'
  },
  {
    name: 'ma-nd-7',
    initiative: 35, mustShuffle: false, points: 168,
    image: 'monster-ability-cards/night-demon/ma-nd-7.png',
    xws: 'mand7'
  },
  {
    name: 'ma-nd-8',
    initiative: 15, mustShuffle: false, points: 169,
    image: 'monster-ability-cards/night-demon/ma-nd-8.png',
    xws: 'mand8'
  },
  {
    name: 'ma-nd-back',
    initiative: 46, mustShuffle: false, points: 170,
    image: 'monster-ability-cards/night-demon/ma-nd-back.png',
    xws: 'mandback'
  },
  {
    name: 'ma-oo-1',
    initiative: 36, mustShuffle: false, points: 171,
    image: 'monster-ability-cards/ooze/ma-oo-1.png',
    xws: 'maoo1'
  },
  {
    name: 'ma-oo-2',
    initiative: 57, mustShuffle: false, points: 172,
    image: 'monster-ability-cards/ooze/ma-oo-2.png',
    xws: 'maoo2'
  },
  {
    name: 'ma-oo-3',
    initiative: 59, mustShuffle: false, points: 173,
    image: 'monster-ability-cards/ooze/ma-oo-3.png',
    xws: 'maoo3'
  },
  {
    name: 'ma-oo-4',
    initiative: 66, mustShuffle: false, points: 174,
    image: 'monster-ability-cards/ooze/ma-oo-4.png',
    xws: 'maoo4'
  },
  {
    name: 'ma-oo-5',
    initiative: 94, mustShuffle: false, points: 175,
    image: 'monster-ability-cards/ooze/ma-oo-5.png',
    xws: 'maoo5'
  },
  {
    name: 'ma-oo-6',
    initiative: 94, mustShuffle: false, points: 176,
    image: 'monster-ability-cards/ooze/ma-oo-6.png',
    xws: 'maoo6'
  },
  {
    name: 'ma-oo-7',
    initiative: 66, mustShuffle: false, points: 177,
    image: 'monster-ability-cards/ooze/ma-oo-7.png',
    xws: 'maoo7'
  },
  {
    name: 'ma-oo-8',
    initiative: 85, mustShuffle: false, points: 178,
    image: 'monster-ability-cards/ooze/ma-oo-8.png',
    xws: 'maoo8'
  },
  {
    name: 'ma-oo-back',
    initiative: 46, mustShuffle: false, points: 179,
    image: 'monster-ability-cards/ooze/ma-oo-back.png',
    xws: 'maooback'
  },
  {
    name: 'ma-rd-1',
    initiative: 12, mustShuffle: false, points: 180,
    image: 'monster-ability-cards/rending-drake/ma-rd-1.png',
    xws: 'mard1'
  },
  {
    name: 'ma-rd-2',
    initiative: 13, mustShuffle: true, points: 181,
    image: 'monster-ability-cards/rending-drake/ma-rd-2.png',
    xws: 'mard2'
  },
  {
    name: 'ma-rd-3',
    initiative: 25, mustShuffle: false, points: 182,
    image: 'monster-ability-cards/rending-drake/ma-rd-3.png',
    xws: 'mard3'
  },
  {
    name: 'ma-rd-4',
    initiative: 39, mustShuffle: false, points: 183,
    image: 'monster-ability-cards/rending-drake/ma-rd-4.png',
    xws: 'mard4'
  },
  {
    name: 'ma-rd-5',
    initiative: 54, mustShuffle: false, points: 184,
    image: 'monster-ability-cards/rending-drake/ma-rd-5.png',
    xws: 'mard5'
  },
  {
    name: 'ma-rd-6',
    initiative: 59, mustShuffle: false, points: 185,
    image: 'monster-ability-cards/rending-drake/ma-rd-6.png',
    xws: 'mard6'
  },
  {
    name: 'ma-rd-7',
    initiative: 72, mustShuffle: true, points: 186,
    image: 'monster-ability-cards/rending-drake/ma-rd-7.png',
    xws: 'mard7'
  },
  {
    name: 'ma-rd-8',
    initiative: 6, mustShuffle: true, points: 187,
    image: 'monster-ability-cards/rending-drake/ma-rd-8.png',
    xws: 'mard8'
  },
  {
    name: 'ma-rd-back',
    initiative: 46, mustShuffle: false, points: 188,
    image: 'monster-ability-cards/rending-drake/ma-rd-back.png',
    xws: 'mardback'
  },
  {
    name: 'ma-si-1',
    initiative: 70, mustShuffle: false, points: 189,
    image: 'monster-ability-cards/savvas-icestorm/ma-si-1.png',
    xws: 'masi1'
  },
  {
    name: 'ma-si-2',
    initiative: 98, mustShuffle: false, points: 190,
    image: 'monster-ability-cards/savvas-icestorm/ma-si-2.png',
    xws: 'masi2'
  },
  {
    name: 'ma-si-3',
    initiative: 98, mustShuffle: false, points: 191,
    image: 'monster-ability-cards/savvas-icestorm/ma-si-3.png',
    xws: 'masi3'
  },
  {
    name: 'ma-si-4',
    initiative: 19, mustShuffle: false, points: 192,
    image: 'monster-ability-cards/savvas-icestorm/ma-si-4.png',
    xws: 'masi4'
  },
  {
    name: 'ma-si-5',
    initiative: 14, mustShuffle: false, points: 193,
    image: 'monster-ability-cards/savvas-icestorm/ma-si-5.png',
    xws: 'masi5'
  },
  {
    name: 'ma-si-6',
    initiative: 14, mustShuffle: false, points: 194,
    image: 'monster-ability-cards/savvas-icestorm/ma-si-6.png',
    xws: 'masi6'
  },
  {
    name: 'ma-si-7',
    initiative: 47, mustShuffle: true, points: 195,
    image: 'monster-ability-cards/savvas-icestorm/ma-si-7.png',
    xws: 'masi7'
  },
  {
    name: 'ma-si-8',
    initiative: 35, mustShuffle: true, points: 196,
    image: 'monster-ability-cards/savvas-icestorm/ma-si-8.png',
    xws: 'masi8'
  },
  {
    name: 'ma-si-back',
    initiative: 46, mustShuffle: false, points: 197,
    image: 'monster-ability-cards/savvas-icestorm/ma-si-back.png',
    xws: 'masiback'
  },
  {
    name: 'ma-sl-1',
    initiative: 97, mustShuffle: false, points: 198,
    image: 'monster-ability-cards/savvas-lavaflow/ma-sl-1.png',
    xws: 'masl1'
  },
  {
    name: 'ma-sl-2',
    initiative: 97, mustShuffle: false, points: 199,
    image: 'monster-ability-cards/savvas-lavaflow/ma-sl-2.png',
    xws: 'masl2'
  },
  {
    name: 'ma-sl-3',
    initiative: 22, mustShuffle: false, points: 200,
    image: 'monster-ability-cards/savvas-lavaflow/ma-sl-3.png',
    xws: 'masl3'
  },
  {
    name: 'ma-sl-4',
    initiative: 68, mustShuffle: true, points: 201,
    image: 'monster-ability-cards/savvas-lavaflow/ma-sl-4.png',
    xws: 'masl4'
  },
  {
    name: 'ma-sl-5',
    initiative: 41, mustShuffle: false, points: 202,
    image: 'monster-ability-cards/savvas-lavaflow/ma-sl-5.png',
    xws: 'masl5'
  },
  {
    name: 'ma-sl-6',
    initiative: 51, mustShuffle: false, points: 203,
    image: 'monster-ability-cards/savvas-lavaflow/ma-sl-6.png',
    xws: 'masl6'
  },
  {
    name: 'ma-sl-7',
    initiative: 31, mustShuffle: false, points: 204,
    image: 'monster-ability-cards/savvas-lavaflow/ma-sl-7.png',
    xws: 'masl7'
  },
  {
    name: 'ma-sl-8',
    initiative: 68, mustShuffle: true, points: 205,
    image: 'monster-ability-cards/savvas-lavaflow/ma-sl-8.png',
    xws: 'masl8'
  },
  {
    name: 'ma-sl-back',
    initiative: 46, mustShuffle: false, points: 206,
    image: 'monster-ability-cards/savvas-lavaflow/ma-sl-back.png',
    xws: 'maslback'
  },
  {
    name: 'ma-sc-1',
    initiative: 29, mustShuffle: false, points: 207,
    image: 'monster-ability-cards/scout/ma-sc-1.png',
    xws: 'masc1'
  },
  {
    name: 'ma-sc-2',
    initiative: 40, mustShuffle: false, points: 208,
    image: 'monster-ability-cards/scout/ma-sc-2.png',
    xws: 'masc2'
  },
  {
    name: 'ma-sc-3',
    initiative: 53, mustShuffle: false, points: 209,
    image: 'monster-ability-cards/scout/ma-sc-3.png',
    xws: 'masc3'
  },
  {
    name: 'ma-sc-4',
    initiative: 54, mustShuffle: false, points: 210,
    image: 'monster-ability-cards/scout/ma-sc-4.png',
    xws: 'masc4'
  },
  {
    name: 'ma-sc-5',
    initiative: 69, mustShuffle: false, points: 211,
    image: 'monster-ability-cards/scout/ma-sc-5.png',
    xws: 'masc5'
  },
  {
    name: 'ma-sc-6',
    initiative: 92, mustShuffle: true, points: 212,
    image: 'monster-ability-cards/scout/ma-sc-6.png',
    xws: 'masc6'
  },
  {
    name: 'ma-sc-7',
    initiative: 79, mustShuffle: false, points: 213,
    image: 'monster-ability-cards/scout/ma-sc-7.png',
    xws: 'masc7'
  },
  {
    name: 'ma-sc-8',
    initiative: 35, mustShuffle: true, points: 214,
    image: 'monster-ability-cards/scout/ma-sc-8.png',
    xws: 'masc8'
  },
  {
    name: 'ma-sc-back',
    initiative: 46, mustShuffle: false, points: 215,
    image: 'monster-ability-cards/scout/ma-sc-back.png',
    xws: 'mascback'
  },
  {
    name: 'ma-sh-1',
    initiative: 8, mustShuffle: false, points: 216,
    image: 'monster-ability-cards/shaman/ma-sh-1.png',
    xws: 'mash1'
  },
  {
    name: 'ma-sh-2',
    initiative: 8, mustShuffle: false, points: 217,
    image: 'monster-ability-cards/shaman/ma-sh-2.png',
    xws: 'mash2'
  },
  {
    name: 'ma-sh-3',
    initiative: 23, mustShuffle: true, points: 218,
    image: 'monster-ability-cards/shaman/ma-sh-3.png',
    xws: 'mash3'
  },
  {
    name: 'ma-sh-4',
    initiative: 23, mustShuffle: true, points: 219,
    image: 'monster-ability-cards/shaman/ma-sh-4.png',
    xws: 'mash4'
  },
  {
    name: 'ma-sh-5',
    initiative: 62, mustShuffle: false, points: 220,
    image: 'monster-ability-cards/shaman/ma-sh-5.png',
    xws: 'mash5'
  },
  {
    name: 'ma-sh-6',
    initiative: 74, mustShuffle: false, points: 221,
    image: 'monster-ability-cards/shaman/ma-sh-6.png',
    xws: 'mash6'
  },
  {
    name: 'ma-sh-7',
    initiative: 89, mustShuffle: false, points: 222,
    image: 'monster-ability-cards/shaman/ma-sh-7.png',
    xws: 'mash7'
  },
  {
    name: 'ma-sh-8',
    initiative: 9, mustShuffle: false, points: 223,
    image: 'monster-ability-cards/shaman/ma-sh-8.png',
    xws: 'mash8'
  },
  {
    name: 'ma-sh-back',
    initiative: 46, mustShuffle: false, points: 224,
    image: 'monster-ability-cards/shaman/ma-sh-back.png',
    xws: 'mashback'
  },
  {
    name: 'ma-spd-1',
    initiative: 32, mustShuffle: false, points: 225,
    image: 'monster-ability-cards/spitting-drake/ma-spd-1.png',
    xws: 'maspd1'
  },
  {
    name: 'ma-spd-2',
    initiative: 52, mustShuffle: false, points: 226,
    image: 'monster-ability-cards/spitting-drake/ma-spd-2.png',
    xws: 'maspd2'
  },
  {
    name: 'ma-spd-3',
    initiative: 57, mustShuffle: true, points: 227,
    image: 'monster-ability-cards/spitting-drake/ma-spd-3.png',
    xws: 'maspd3'
  },
  {
    name: 'ma-spd-4',
    initiative: 27, mustShuffle: false, points: 228,
    image: 'monster-ability-cards/spitting-drake/ma-spd-4.png',
    xws: 'maspd4'
  },
  {
    name: 'ma-spd-5',
    initiative: 87, mustShuffle: false, points: 229,
    image: 'monster-ability-cards/spitting-drake/ma-spd-5.png',
    xws: 'maspd5'
  },
  {
    name: 'ma-spd-6',
    initiative: 89, mustShuffle: false, points: 230,
    image: 'monster-ability-cards/spitting-drake/ma-spd-6.png',
    xws: 'maspd6'
  },
  {
    name: 'ma-spd-7',
    initiative: 6, mustShuffle: false, points: 231,
    image: 'monster-ability-cards/spitting-drake/ma-spd-7.png',
    xws: 'maspd7'
  },
  {
    name: 'ma-spd-8',
    initiative: 89, mustShuffle: true, points: 232,
    image: 'monster-ability-cards/spitting-drake/ma-spd-8.png',
    xws: 'maspd8'
  },
  {
    name: 'ma-spd-back',
    initiative: 46, mustShuffle: false, points: 233,
    image: 'monster-ability-cards/spitting-drake/ma-spd-back.png',
    xws: 'maspdback'
  },
  {
    name: 'ma-sg-1',
    initiative: 11, mustShuffle: false, points: 234,
    image: 'monster-ability-cards/stone-golem/ma-sg-1.png',
    xws: 'masg1'
  },
  {
    name: 'ma-sg-2',
    initiative: 28, mustShuffle: false, points: 235,
    image: 'monster-ability-cards/stone-golem/ma-sg-2.png',
    xws: 'masg2'
  },
  {
    name: 'ma-sg-3',
    initiative: 51, mustShuffle: false, points: 236,
    image: 'monster-ability-cards/stone-golem/ma-sg-3.png',
    xws: 'masg3'
  },
  {
    name: 'ma-sg-4',
    initiative: 65, mustShuffle: false, points: 237,
    image: 'monster-ability-cards/stone-golem/ma-sg-4.png',
    xws: 'masg4'
  },
  {
    name: 'ma-sg-5',
    initiative: 72, mustShuffle: false, points: 238,
    image: 'monster-ability-cards/stone-golem/ma-sg-5.png',
    xws: 'masg5'
  },
  {
    name: 'ma-sg-6',
    initiative: 90, mustShuffle: true, points: 239,
    image: 'monster-ability-cards/stone-golem/ma-sg-6.png',
    xws: 'masg6'
  },
  {
    name: 'ma-sg-7',
    initiative: 83, mustShuffle: false, points: 240,
    image: 'monster-ability-cards/stone-golem/ma-sg-7.png',
    xws: 'masg7'
  },
  {
    name: 'ma-sg-8',
    initiative: 28, mustShuffle: false, points: 241,
    image: 'monster-ability-cards/stone-golem/ma-sg-8.png',
    xws: 'masg8'
  },
  {
    name: 'ma-sg-back',
    initiative: 46, mustShuffle: false, points: 242,
    image: 'monster-ability-cards/stone-golem/ma-sg-back.png',
    xws: 'masgback'
  },
  {
    name: 'ma-sud-1',
    initiative: 17, mustShuffle: true, points: 243,
    image: 'monster-ability-cards/sun-demon/ma-sud-1.png',
    xws: 'masud1'
  },
  {
    name: 'ma-sud-2',
    initiative: 36, mustShuffle: false, points: 244,
    image: 'monster-ability-cards/sun-demon/ma-sud-2.png',
    xws: 'masud2'
  },
  {
    name: 'ma-sud-3',
    initiative: 36, mustShuffle: false, points: 245,
    image: 'monster-ability-cards/sun-demon/ma-sud-3.png',
    xws: 'masud3'
  },
  {
    name: 'ma-sud-4',
    initiative: 68, mustShuffle: false, points: 246,
    image: 'monster-ability-cards/sun-demon/ma-sud-4.png',
    xws: 'masud4'
  },
  {
    name: 'ma-sud-5',
    initiative: 73, mustShuffle: true, points: 247,
    image: 'monster-ability-cards/sun-demon/ma-sud-5.png',
    xws: 'masud5'
  },
  {
    name: 'ma-sud-6',
    initiative: 95, mustShuffle: false, points: 248,
    image: 'monster-ability-cards/sun-demon/ma-sud-6.png',
    xws: 'masud6'
  },
  {
    name: 'ma-sud-7',
    initiative: 88, mustShuffle: false, points: 249,
    image: 'monster-ability-cards/sun-demon/ma-sud-7.png',
    xws: 'masud7'
  },
  {
    name: 'ma-sud-8',
    initiative: 50, mustShuffle: true, points: 250,
    image: 'monster-ability-cards/sun-demon/ma-sud-8.png',
    xws: 'masud8'
  },
  {
    name: 'ma-sud-back',
    initiative: 46, mustShuffle: false, points: 251,
    image: 'monster-ability-cards/sun-demon/ma-sud-back.png',
    xws: 'masudback'
  },
  {
    name: 'ma-wd-1',
    initiative: 9, mustShuffle: false, points: 252,
    image: 'monster-ability-cards/wind-demon/ma-wd-1.png',
    xws: 'mawd1'
  },
  {
    name: 'ma-wd-2',
    initiative: 21, mustShuffle: true, points: 253,
    image: 'monster-ability-cards/wind-demon/ma-wd-2.png',
    xws: 'mawd2'
  },
  {
    name: 'ma-wd-3',
    initiative: 21, mustShuffle: true, points: 254,
    image: 'monster-ability-cards/wind-demon/ma-wd-3.png',
    xws: 'mawd3'
  },
  {
    name: 'ma-wd-4',
    initiative: 29, mustShuffle: false, points: 255,
    image: 'monster-ability-cards/wind-demon/ma-wd-4.png',
    xws: 'mawd4'
  },
  {
    name: 'ma-wd-5',
    initiative: 37, mustShuffle: false, points: 256,
    image: 'monster-ability-cards/wind-demon/ma-wd-5.png',
    xws: 'mawd5'
  },
  {
    name: 'ma-wd-6',
    initiative: 43, mustShuffle: false, points: 257,
    image: 'monster-ability-cards/wind-demon/ma-wd-6.png',
    xws: 'mawd6'
  },
  {
    name: 'ma-wd-7',
    initiative: 43, mustShuffle: false, points: 258,
    image: 'monster-ability-cards/wind-demon/ma-wd-7.png',
    xws: 'mawd7'
  },
  {
    name: 'ma-wd-8',
    initiative: 2, mustShuffle: false, points: 259,
    image: 'monster-ability-cards/wind-demon/ma-wd-8.png',
    xws: 'mawd8'
  },
  {
    name: 'ma-wd-back',
    initiative: 46, mustShuffle: false, points: 260,
    image: 'monster-ability-cards/wind-demon/ma-wd-back.png',
    xws: 'mawdback'
  },
  {
    name: 'ma-ab-1',
    initiative: 46, mustShuffle: false, points: 261,
    image: 'monster-ability-cards/ashblade/ma-ab-1.png',
    xws: 'maab1'
  },
  {
    name: 'ma-ab-2',
    initiative: 46, mustShuffle: false, points: 262,
    image: 'monster-ability-cards/ashblade/ma-ab-2.png',
    xws: 'maab2'
  },
  {
    name: 'ma-ab-3',
    initiative: 46, mustShuffle: false, points: 263,
    image: 'monster-ability-cards/ashblade/ma-ab-3.png',
    xws: 'maab3'
  },
  {
    name: 'ma-ab-4',
    initiative: 46, mustShuffle: false, points: 264,
    image: 'monster-ability-cards/ashblade/ma-ab-4.png',
    xws: 'maab4'
  },
  {
    name: 'ma-ab-5',
    initiative: 46, mustShuffle: false, points: 265,
    image: 'monster-ability-cards/ashblade/ma-ab-5.png',
    xws: 'maab5'
  },
  {
    name: 'ma-ab-6',
    initiative: 46, mustShuffle: false, points: 266,
    image: 'monster-ability-cards/ashblade/ma-ab-6.png',
    xws: 'maab6'
  },
  {
    name: 'ma-ab-7',
    initiative: 46, mustShuffle: false, points: 267,
    image: 'monster-ability-cards/ashblade/ma-ab-7.png',
    xws: 'maab7'
  },
  {
    name: 'ma-ab-8',
    initiative: 46, mustShuffle: false, points: 268,
    image: 'monster-ability-cards/ashblade/ma-ab-8.png',
    xws: 'maab8'
  },
  {
    name: 'ma-ab-back',
    initiative: 46, mustShuffle: false, points: 269,
    image: 'monster-ability-cards/ashblade/ma-ab-back.png',
    xws: 'maabback'
  },
  {
    name: 'ma-sv-1',
    initiative: 46, mustShuffle: false, points: 270,
    image: 'monster-ability-cards/savage/ma-sv-1.png',
    xws: 'masv1'
  },
  {
    name: 'ma-sv-2',
    initiative: 46, mustShuffle: false, points: 271,
    image: 'monster-ability-cards/savage/ma-sv-2.png',
    xws: 'masv2'
  },
  {
    name: 'ma-sv-3',
    initiative: 46, mustShuffle: false, points: 272,
    image: 'monster-ability-cards/savage/ma-sv-3.png',
    xws: 'masv3'
  },
  {
    name: 'ma-sv-4',
    initiative: 46, mustShuffle: false, points: 273,
    image: 'monster-ability-cards/savage/ma-sv-4.png',
    xws: 'masv4'
  },
  {
    name: 'ma-sv-5',
    initiative: 46, mustShuffle: false, points: 274,
    image: 'monster-ability-cards/savage/ma-sv-5.png',
    xws: 'masv5'
  },
  {
    name: 'ma-sv-6',
    initiative: 46, mustShuffle: false, points: 275,
    image: 'monster-ability-cards/savage/ma-sv-6.png',
    xws: 'masv6'
  },
  {
    name: 'ma-sv-7',
    initiative: 46, mustShuffle: false, points: 276,
    image: 'monster-ability-cards/savage/ma-sv-7.png',
    xws: 'masv7'
  },
  {
    name: 'ma-sv-8',
    initiative: 46, mustShuffle: false, points: 277,
    image: 'monster-ability-cards/savage/ma-sv-8.png',
    xws: 'masv8'
  },
  {
    name: 'ma-sv-back',
    initiative: 46, mustShuffle: false, points: 278,
    image: 'monster-ability-cards/savage/ma-sv-back.png',
    xws: 'masvback'
  },
  {
    name: 'ma-tr-1',
    initiative: 46, mustShuffle: false, points: 279,
    image: 'monster-ability-cards/tracker/ma-tr-1.png',
    xws: 'matr1'
  },
  {
    name: 'ma-tr-2',
    initiative: 46, mustShuffle: false, points: 280,
    image: 'monster-ability-cards/tracker/ma-tr-2.png',
    xws: 'matr2'
  },
  {
    name: 'ma-tr-3',
    initiative: 46, mustShuffle: false, points: 281,
    image: 'monster-ability-cards/tracker/ma-tr-3.png',
    xws: 'matr3'
  },
  {
    name: 'ma-tr-4',
    initiative: 46, mustShuffle: false, points: 282,
    image: 'monster-ability-cards/tracker/ma-tr-4.png',
    xws: 'matr4'
  },
  {
    name: 'ma-tr-5',
    initiative: 46, mustShuffle: false, points: 283,
    image: 'monster-ability-cards/tracker/ma-tr-5.png',
    xws: 'matr5'
  },
  {
    name: 'ma-tr-6',
    initiative: 46, mustShuffle: false, points: 284,
    image: 'monster-ability-cards/tracker/ma-tr-6.png',
    xws: 'matr6'
  },
  {
    name: 'ma-tr-7',
    initiative: 46, mustShuffle: false, points: 285,
    image: 'monster-ability-cards/tracker/ma-tr-7.png',
    xws: 'matr7'
  },
  {
    name: 'ma-tr-8',
    initiative: 46, mustShuffle: false, points: 286,
    image: 'monster-ability-cards/tracker/ma-tr-8.png',
    xws: 'matr8'
  },
  {
    name: 'ma-tr-back',
    initiative: 46, mustShuffle: false, points: 287,
    image: 'monster-ability-cards/tracker/ma-tr-back.png',
    xws: 'matrback'
  },
  {
    name: 'blistering heat',
    initiative: 46, mustShuffle: false, points: 288,
    image: 'monster-ability-cards/manifestation-of-corruption/blistering-heat.png',
    xws: 'blisteringheat'
  },
  {
    name: 'corrupting presence',
    initiative: 46, mustShuffle: false, points: 289,
    image: 'monster-ability-cards/manifestation-of-corruption/corrupting-presence.png',
    xws: 'corruptingpresence'
  },
  {
    name: 'endless legions',
    initiative: 46, mustShuffle: false, points: 290,
    image: 'monster-ability-cards/manifestation-of-corruption/endless-legions.png',
    xws: 'endlesslegions'
  },
  {
    name: 'flame lance',
    initiative: 46, mustShuffle: false, points: 291,
    image: 'monster-ability-cards/manifestation-of-corruption/flame-lance.png',
    xws: 'flamelance'
  },
  {
    name: 'harsh entrapment',
    initiative: 46, mustShuffle: false, points: 292,
    image: 'monster-ability-cards/manifestation-of-corruption/harsh-entrapment.png',
    xws: 'harshentrapment'
  },
  {
    name: 'heed my call',
    initiative: 46, mustShuffle: false, points: 293,
    image: 'monster-ability-cards/manifestation-of-corruption/heed-my-call.png',
    xws: 'heedmycall'
  },
  {
    name: 'legendary - domination',
    initiative: 46, mustShuffle: false, points: 294,
    image: 'monster-ability-cards/manifestation-of-corruption/legendary-domination.png',
    xws: 'legendarydomination'
  },
  {
    name: 'legendary - gloom',
    initiative: 46, mustShuffle: false, points: 295,
    image: 'monster-ability-cards/manifestation-of-corruption/legendary-gloom.png',
    xws: 'legendarygloom'
  },
  {
    name: 'legendary - shadows',
    initiative: 46, mustShuffle: false, points: 296,
    image: 'monster-ability-cards/manifestation-of-corruption/legendary-shadows.png',
    xws: 'legendaryshadows'
  },
  {
    name: 'legendary - void',
    initiative: 46, mustShuffle: false, points: 297,
    image: 'monster-ability-cards/manifestation-of-corruption/legendary-void.png',
    xws: 'legendaryvoid'
  },
  {
    name: 'lure them in',
    initiative: 46, mustShuffle: false, points: 298,
    image: 'monster-ability-cards/manifestation-of-corruption/lure-them-in.png',
    xws: 'lurethemin'
  },
  {
    name: 'marked for death',
    initiative: 46, mustShuffle: false, points: 299,
    image: 'monster-ability-cards/manifestation-of-corruption/marked-for-death.png',
    xws: 'markedfordeath'
  },
  {
    name: 'mc-back',
    initiative: 46, mustShuffle: false, points: 300,
    image: 'monster-ability-cards/manifestation-of-corruption/mc-back.png',
    xws: 'mcback'
  },
  {
    name: 'nightmare spheres',
    initiative: 46, mustShuffle: false, points: 301,
    image: 'monster-ability-cards/manifestation-of-corruption/nightmare-spheres.png',
    xws: 'nightmarespheres'
  },
  {
    name: 'plague their dreams',
    initiative: 46, mustShuffle: false, points: 302,
    image: 'monster-ability-cards/manifestation-of-corruption/plague-their-dreams.png',
    xws: 'plaguetheirdreams'
  },
  {
    name: 'pulse of malice',
    initiative: 46, mustShuffle: false, points: 303,
    image: 'monster-ability-cards/manifestation-of-corruption/pulse-of-malice.png',
    xws: 'pulseofmalice'
  },
  {
    name: 'searing vapors',
    initiative: 46, mustShuffle: false, points: 304,
    image: 'monster-ability-cards/manifestation-of-corruption/searing vapors.png',
    xws: 'searingvapors'
  },
  {
    name: 'toxic blast',
    initiative: 46, mustShuffle: false, points: 305,
    image: 'monster-ability-cards/manifestation-of-corruption/toxic-blast.png',
    xws: 'toxicblast'
  },
  {
    name: 'unfathomable fortitude',
    initiative: 46, mustShuffle: false, points: 306,
    image: 'monster-ability-cards/manifestation-of-corruption/unfathomable-fortitude.png',
    xws: 'unfathomablefortitude'
  },
  {
    name: 'what\'s yours is mine',
    initiative: 46, mustShuffle: false, points: 307,
    image: 'monster-ability-cards/manifestation-of-corruption/whats-yours-is-mine.png',
    xws: 'whatsyoursismine'
  },
  {
    name: 'you dare to defy me',
    initiative: 46, mustShuffle: false, points: 308,
    image: 'monster-ability-cards/manifestation-of-corruption/you-dare-to-defy-me.png',
    xws: 'youdaretodefyme'
  }
]
