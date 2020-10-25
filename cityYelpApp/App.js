import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const App = () => {
  
  const deneme = () => {
    console.log("merhaba");
   
  }

  return(
    <SafeAreaView>
      <View>
        <Text>Hello react-native</Text>
        <Button title="deneme" onPress={deneme} />
      </View>
    </SafeAreaView>
  );
}

export default App;