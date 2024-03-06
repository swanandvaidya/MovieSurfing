import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';

const bgImage = require('../../assets/images/bg_movie_splash.png');

export default function Welcome() {
  return (
    <View style={styles.conainer}>
      <ImageBackground source={bgImage} style={styles.conainer} />
      <View style={styles.sectionTitlesBackground}>
        <Text style={[styles.sectionTitleWhite, styles.section]}>
          Discover Your
        </Text>
        <Text style={[styles.sectionTitleOrange, styles.section]}>
          Favourite Show
        </Text>
        <Text style={[styles.sectionTitleWhite, styles.section]}>
          Watch Now or Watch Later
        </Text>
        <Text style={styles.sectionSubTitle}>
          You can browse movies and shows by genre, search for specific title or
          check out our recommendation for you.
        </Text>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnGetStarted}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
