import { View, Text } from 'react-native';
import React from 'react';

type Props = {};

const Missing = (props: Props) => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Page Not Found!</Text>
    </View>
  );
};

export default Missing;
