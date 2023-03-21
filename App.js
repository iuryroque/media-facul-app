import { StyleSheet, Text, View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Logo from './src/components/Logo/'
import Form from './src/components/Form/'

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Form/>
      <FlashMessage position="bottom" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09C',
    paddingTop: 80,
  },
});
