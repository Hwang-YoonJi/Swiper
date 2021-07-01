import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

export default class SwiperComponent extends Component {
  render() {
    return(
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text styles={styles.text}>hi</Text>
        </View>
        <View style={styles.slide2}>
          <Text styles={styles.text}>im</Text>
        </View>
        <View style={styles.slide3}>
          <Text styles={styles.text}>yoonji</Text>
        </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {

  },
  slide1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide3: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

AppRegistry.registerComponent('swiper', () => SwiperComponent)