/* eslint-disable import/no-anonymous-default-export */
import { action } from "@storybook/addon-actions";
import Button from "./index";
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    onClick: { action: "clicked" },
    backgroundColor: { control: "color" },
    secondary: { control: "boolean" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Primary",
  onClick: action("clicked"),
  backgroundColor: "#0070f3",
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: "Secondary",
  onClick: action("clicked"),
  backgroundColor: "#ccc",
  secondary: true,
};
