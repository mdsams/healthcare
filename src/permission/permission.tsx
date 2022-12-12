import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  accelerometer,
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';

setUpdateIntervalForType(SensorTypes.accelerometer, 400); // defaults to 100ms

const Permission = () => {
  const [accelerometerData, setaccelerometerData] = useState<any>();

  useEffect(() => {
    const subscription = setInterval(() => {
      accelerometer.subscribe(({ x, y, z, timestamp }) => {
        console.log({ x, y, z, timestamp }), setaccelerometerData(timestamp);
      });
    }, 50000);

    // setTimeout(() => {
    //   // If it's the last subscription to accelerometer it will stop polling in the native API
    //   subscription.unsubscribe();
    // }, 1000);
  }, [accelerometerData]);

  return (
    <View>
      <Text>Timestamp: {accelerometerData}</Text>
    </View>
  );
};

export default Permission;
