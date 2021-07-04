# React Native - Swiper
Swiper Study :)

## Demo

<img src="https://user-images.githubusercontent.com/63582123/124382909-b9b22680-dd04-11eb-8eaf-8ebe8b39f411.jpeg" width="347" height="599">
<img src="https://user-images.githubusercontent.com/63582123/124382962-fda52b80-dd04-11eb-99fe-f20f4e98acd0.jpeg" width="347" height="599">
<img src="https://user-images.githubusercontent.com/63582123/124382982-11509200-dd05-11eb-8c57-8e988e282a54.jpeg" width="347" height="599">

## Installation

```bash
npm i react-native-swiper --save
```

## Usage

### App.js

```jsx
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
```