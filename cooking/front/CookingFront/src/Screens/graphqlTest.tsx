import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from '../../style';
import { NestStackNavProp, RootStackNavProp } from '../Navigations';

export const GraphqlTestScreen: React.FC = () => {
  const main = ["エビフライ"];
  const sub = ["エリンギと小松菜炒め"];
  const soup = ["味噌汁"];
  return (
    <View style={styles.columnContainer}>
      <View style={{margin: 10}}></View>
      <View style={styles.rowContainer}>
        <Text>主菜</Text>
        <View style={{margin: 10}}></View>
        <Text>{main[0]}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text>副菜</Text>
        <View style={{margin: 10}}></View>
        <Text>{sub[0]}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text>汁物</Text>
        <View style={{margin: 10}}></View>
        <Text>{soup[0]}</Text>
      </View>
    </View>
  );
};