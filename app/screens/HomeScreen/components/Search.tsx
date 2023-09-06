import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import {SAFE_SPACING} from '../../../constants/style';

export type SearchProps = {
  onSubmit: (value: string) => void;
  defaultValue?: string;
};

export const Search = (props: SearchProps) => {
  const [query, setQuery] = useState(props.defaultValue ?? '');

  const onChangeText: TextInputProps['onChangeText'] = text => setQuery(text);

  const onSubmit = () => {
    props.onSubmit(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
        placeholder="Find your city..."
        style={styles.textInput}
      />
      <Button title="Search" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: SAFE_SPACING,
    paddingTop: 12,
    alignItems: 'center',
  },
  textInput: {
    flexGrow: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
