// stories/Button.stories.jsx
import React from "react";
import { Button } from "./Button";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { View } from "react-native";

export default {
  component: Button,
  decorators: [
    (Story) => (
      <View className="items-start">
        <Story />
      </View>
    ),
  ],
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStoryObj<typeof Button> = {
  args: {
    text: "Hello World",
  },
};
