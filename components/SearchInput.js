import React, { useState } from 'react';
import { TextInput } from 'react-native';

export default function SearchInput() {
  const [value, onChangeText] = useState('Search');

  return (
    <TextInput
      style={{ height: 30, width:'90%', marginLeft:5, fontSize:24 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}