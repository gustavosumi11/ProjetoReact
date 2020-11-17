import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function App(){
return (
<View style={styles.container}>
    <Text> Hello World</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#00ced1',
alignItems: 'center',
justifyContent: 'center',
},
text: {
color: '#fff',
}

});