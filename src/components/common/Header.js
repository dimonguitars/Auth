import React from 'react';
import { View, Text } from 'react-native';


const Header = (props) => {
  const { viewStyles, textStyle } = styles;
    return (
      <View style={viewStyles} >
        <Text style={textStyle}>
          {props.headerText}
        </Text>
      </View>
    );
};
const styles = {
  viewStyles: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
};

export { Header };
