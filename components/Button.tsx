// stories/Button.jsx
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export type ButtonProps = {
  onPress: () => void;
  text: string;
};

export const Button = ({ text, onPress }: ButtonProps) => (
  <View>
    <TouchableOpacity
      className="py-2 px-4 bg-purple-600 rounded-md"
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  </View>
);
