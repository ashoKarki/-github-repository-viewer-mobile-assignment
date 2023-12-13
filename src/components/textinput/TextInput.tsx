import React, {FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  submitEditing: () => void;
  reset: () => void;
}

/**
 * @author Ashok Karki
 * @function @FormInput
 **/

const FormInput: FC<IProps> = props => {
  const {value, onChange, placeholder, submitEditing, reset} = props;
  const {container} = styles;
  return (
    <View style={container}>
      <AntDesign name={'search1'} size={24} color={'black'} />
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        returnKeyType="search"
        onSubmitEditing={submitEditing}
        onFocus={reset}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: 'black',
    borderRadius: 10,
  },
});

export default FormInput;
