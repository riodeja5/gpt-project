import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View, Text } from 'react-native';
import styles from '../../style';
import { NestStackNavProp, RootStackNavProp } from '../Navigations';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<RootStackNavProp<'Home'>>();

  return (
    <View style={styles.container}>
      <Button 
        title="本日のおすすめメニュー" 
        onPress={() => navigation.navigate('本日のおすすめメニュー')} 
      />
      <View style={{margin: 10}}></View>
      <Button 
        title="メニュー追加" 
        onPress={() => navigation.navigate('Tab')} 
      />
    </View>
  )
}

export const RecommendScreen: React.FC = () => {
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