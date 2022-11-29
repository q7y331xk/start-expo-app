import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'tomato', }}></View>
      <View style={{ flex: 1, backgroundColor: 'teal', }}></View>
      <View style={{ flex: 2, backgroundColor: 'orange', }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item1: {
    backgroundColor: 'tomato',
    width: 100,
    height: 100,
  },
  item2: {
    backgroundColor: 'teal'
  },
  item3: {
    backgroundColor: 'orange'
  },
});
