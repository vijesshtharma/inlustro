import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });

  const movePlayer = () => {
    setPlayerPosition({ x: playerPosition.x + 10, y: playerPosition.y });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.player, { left: playerPosition.x, top: playerPosition.y }]} />
      <TouchableOpacity onPress={movePlayer} style={styles.button}>
        <Text style={styles.buttonText}>Move Player</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  player: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    position: 'absolute',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2b2b2b',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});


