import React, {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Colors from '../themes/Colors';
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  hideScrollbar?: boolean;
  transparent?: boolean;
  inModal?: boolean;
};

const Container = ({
  children,
  hideScrollbar = true,
  transparent = false,
}: PropsWithChildren<Props>) => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={[styles.container, transparent && styles.transparent]}
      contentContainerStyle={[
        {paddingBottom: insets.bottom},
        transparent && styles.transparent,
      ]}
      showsHorizontalScrollIndicator={!hideScrollbar}
      showsVerticalScrollIndicator={!hideScrollbar}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  transparent: {
    backgroundColor: Colors.transparent,
  },
});

export default Container;
