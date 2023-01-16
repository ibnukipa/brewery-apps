import React, {useCallback, useEffect, useMemo} from 'react';
import {ActivityIndicator, StyleSheet, View, Linking} from 'react-native';
import Colors from '../themes/Colors';
import {BreweryType, Button, Text} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '../models/store';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../navigations/Root';
import BreweryDateTime from '../components/BreweryDateTime';
import Styles from '../themes/Styles';

const Brewery: any = () => {
  const dispatch = useDispatch<Dispatch>();
  const route = useRoute<RouteProp<RootStackParamList, 'Brewery'>>();
  const breweryState = useSelector((state: RootState) => state.brewery);

  const brewery = useMemo(() => {
    return breweryState?.data;
  }, [breweryState]);

  const openWeb = useCallback(() => {
    Linking.openURL(brewery?.website_url);
  }, [brewery?.website_url]);

  useEffect(() => {
    if (route?.params?.id) {
      dispatch.brewery.fetchData(route?.params?.id);
    }

    return () => {
      dispatch.brewery.reset();
    };
  }, [dispatch.brewery, route?.params?.id]);

  return (
    <View style={styles.container}>
      {breweryState?.isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size={'large'} color={Colors.sapphireBlue} />
        </View>
      ) : (
        <>
          <View style={styles.meta}>
            <BreweryType type={brewery.brewery_type} />
            <BreweryDateTime dateTime={brewery.updated_at} />
          </View>
          <View>
            <Text style={[Styles.hugeHeader, Styles.textCenter]}>
              {brewery.name}
            </Text>
            <View style={styles.addressContainer}>
              <Text style={[Styles.h4, Styles.textCenter]}>
                {brewery.street}, {brewery.city}, {brewery.state}{' '}
                {brewery.postal_code}
              </Text>
              {brewery.address_2 && (
                <Text style={[Styles.subtitle, Styles.textCenter]}>
                  {brewery.address_2}
                </Text>
              )}
              {brewery.address_3 && (
                <Text style={[Styles.subtitle, Styles.textCenter]}>
                  {brewery.address_3}
                </Text>
              )}
              <Text style={[Styles.body, Styles.textCenter]}>
                {brewery.country}
              </Text>
            </View>
          </View>
        </>
      )}
      <View style={styles.actionContainer}>
        <Button
          isDisabled={!brewery?.website_url}
          onPress={openWeb}
          type={'secondary'}
          text={'Open Link'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: Colors.neutralWhite,
    justifyContent: 'space-between',
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressContainer: {
    marginVertical: 8,
  },
  actionContainer: {
    marginBottom: 16,
  },
});

export default Brewery;
