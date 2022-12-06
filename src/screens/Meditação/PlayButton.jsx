import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function PlayButton(props) {
  return (
    <TouchableOpacity
      style={styles.playButtonContainer}
      onPress={props.onPress}>
      <FontAwesome name={props.state} size={32} color="#FFF" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  playButtonContainer: {
    backgroundColor: '#8220FF',
    borderColor: '#D3B0FF',
    borderWidth: 16,
    width: 128,
    height: 128,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 32,
    shadowColor: '#5D3F6A',
    shadowRadius: 30,
    shadowOpacity: 0.5,
  },
});