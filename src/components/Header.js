import React from 'react';
import {View, Text} from 'react-native';

const Header = () => (
    <View style={styles.headerContainer}>
        <Text>Cryptocurrency App</Text>
    </View>
)

const styles = {
    headerContainer: {
        display: "flex",
        marginTop: 55,
        alignItems: "center",
    },
    header: {
        fontWeight: "bold",        
        fontSize: 20,
    }
}

export default Header;