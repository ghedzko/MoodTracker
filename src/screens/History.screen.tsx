import React from 'react';
import { View, Text } from 'react-native';
import { useAppContext } from '../App.provider';

export const History: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View>
      <Text>{`History Screen ${appContext.greeting}.`}</Text>
    </View>
  );
};
