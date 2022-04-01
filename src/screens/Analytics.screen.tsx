import React from 'react';
import { View, Text } from 'react-native';
import { useAppContext } from '../App.provider';
import groupBy from 'lodash/groupBy';
import { VictoryPie, VictoryTheme } from 'victory-native';

export const Analytics: React.FC = () => {
  const appContext = useAppContext();
  const data = Object.entries(groupBy(appContext.moodList, 'mood.emoji')).map(
    ([key, value]) => ({
      x: key,
      y: value.length,
    }),
  );
  return (
    <View>
      <Text>Analytics Screen</Text>
      <VictoryPie data={data} theme={VictoryTheme.material} />
    </View>
  );
};
