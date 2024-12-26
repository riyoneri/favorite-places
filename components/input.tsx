import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import { Colors } from "../constants/style";

interface InputProperties<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  inputConfig?: TextInputProps;
}

export default function Input<T extends FieldValues>({
  label,
  control,
  inputConfig,
  name,
}: InputProperties<T>) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        name={name}
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            style={styles.input}
            {...inputConfig}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  label: {
    color: Colors.primary500,
    fontSize: 19,
  },
  input: {
    backgroundColor: Colors.primary100,
    borderBottomWidth: 3,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    paddingHorizontal: 7,
    paddingVertical: 10,
  },
});
