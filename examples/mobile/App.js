/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import AsyncStorageFactory from '@react-native-community/async-storage';
import LegacyStorage from '@react-native-community/async-storage-legacy';

const legacy = new LegacyStorage();

const storage = AsyncStorageFactory.create(legacy, {});

const App = () => {
  const [state, updateState] = useState(null);

  function readLocalValue(key) {
    (async () => {
      const value = await storage.get(key);
      updateState(value);
    })();
  }

  function saveLocalValue(key, value) {
    (async () => {
      await storage.set(key, value);
      updateState(value);
    })();
  }

  useEffect(() => {
    readLocalValue('key');
  }, []);

  return (
    <View style={[styles.sectionContainer, styles.body]}>
      <Button
        title={'Save random'}
        onPress={() => saveLocalValue('key', '' + Math.random())}
      />
      <Text style={styles.sectionTitle}>{state}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
