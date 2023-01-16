import {StyleSheet} from 'react-native';
import Colors from './Colors';

const Styles = StyleSheet.create({
  // Typography
  hugeHeader: {
    fontSize: 46,
    color: Colors.sapphireBlue,
  },
  h1: {
    fontSize: 28,
    lineHeight: 34,
    color: Colors.sapphireBlue,
  },
  h2: {
    fontSize: 24,
    lineHeight: 34,
    color: Colors.sapphireBlue,
  },
  h4: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.neutralSecondaryText,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 24,
    color: Colors.neutralSecondaryText,
  },
  body: {
    fontSize: 14,
    color: Colors.sapphireBluePlus2,
  },
  caption: {
    fontSize: 10,
    color: Colors.sapphireBluePlus2,
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default Styles;
