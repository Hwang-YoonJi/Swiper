import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

const SwiperComponent = () => {
    return(
        <View style={styles.container}>
          <Swiper pagingEnabled={true}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hi</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>I'm</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>HYJ</Text>
            </View>
          </Swiper>
        </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#81d4fa'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8bbd0'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ce93d8'
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default SwiperComponent;