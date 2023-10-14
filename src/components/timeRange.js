import React, { useState } from "react";
import { View, Slider } from "react-native";
//import InputRange from 'react-input-range';

const TimeRange = ({ id }) => {
  const [value, setValue] = useState(0);

  function reubicar(val, id) {
    if (id === "rangeTime") {
      setValue(val);
      // Handle audio logic here
    } else {
      setValue(val);
      // Handle volume logic here
    }
  }

  return (
    <View>
        {/*<InputRange
            style={styles.inputRange}
            minimumValue={0}
            maximumValue={100}
            value={0}
            onValueChange={(value) => reubicar(value)}
        />*/}
    </View>
  );
};

const styles = {
    inputRange: {
      width: '900',
      height: '500',
      margin: '10px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: 'red',
    },
  };

export default TimeRange;