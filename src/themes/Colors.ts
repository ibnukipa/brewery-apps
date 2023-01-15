import {Leaves} from '../types/general';

const Colors = {
  // Neutral
  neutralMainText: '#222223',
  neutralSecondaryText: '#747474',
  neutralDisabled: '#AAABAD',
  neutralBorder: '#E3E3E4',
  neutralContainer: '#F3F5F6',
  neutralSecondaryBg: '#F3F5F6',
  neutralWhite: '#FFF',

  // Flip Orange
  orangePlus2: '#7E3221',
  orangePlus1: '#D35437',
  orange: '#FD6542',
  orangeMin1: '#FE9881',
  orangeMin2: '#FEC1B3',
  orangeMin3: '#FFF5F3',

  // Golden Yellow
  goldenYellowPlus2: '#543D07',
  goldenYellowPlus1: '#A87A0D',
  goldenYellow: '#FFB207',
  goldenYellowMin1: '#FDCF62',
  goldenYellowMin2: '#FEE7B1',
  goldenYellowMin3: '#FDF6DC',

  // Crimson Red
  crimsonRedPlus2: '#8A1A38',
  crimsonRedPlus1: '#C61F4D',
  crimsonRed: '#EE255C',
  crimsonRedMin1: '#F46E92',
  crimsonRedMin2: '#F9B6C9',
  crimsonRedMin3: '#FDE9EF',

  // Jade Green
  jadeGreenPlus2: '#236057',
  jadeGreenPlus1: '#2F7F74',
  jadeGreen: '#46BFAE',
  jadeGreenMin1: '#84D4C9',
  jadeGreenMin2: '#C1EAE4',
  jadeGreenMin3: '#DAF2EF',

  // Sapphire Blue
  sapphireBluePlus2: '#1D2D44',
  sapphireBluePlus1: '#3A5988',
  sapphireBlue: '#5785CC',
  sapphireBlueMin1: '#8FAEDD',
  sapphireBlueMin2: '#C7D7EE',
  sapphireBlueMin3: '#DDE7F5',

  // Mauve Purple
  mauvePurplePlus2: '#3B0A2D',
  mauvePurplePlus1: '#75135B',
  mauvePurple: '#B01D88',
  mauvePurpleMin1: '#CA68B0',
  mauvePurpleMin2: '#E5B4D7',
  mauvePurpleMin3: '#EFD2E7',

  blackSolid: '#000000',
  blackSolid05: 'rgba(0, 0, 0, 0.05)',
  blackSolid15: 'rgba(0, 0, 0, 0.15)',
  blackSolid30: 'rgba(0, 0, 0, 0.3)',
  blackSolid50: 'rgba(0, 0, 0, 0.5)',
  blackSolid80: 'rgba(0, 0, 0, 0.8)',

  transparent: 'transparent',
};

export type IColors = Leaves<typeof Colors>;
export default Colors;
