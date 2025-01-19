import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Icon/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    name: {
      control: "select",
      options: [
        "add",
        "arrow_back",
        "arrow_forward",
        "close",
        "delete",
        "edit",
        "menu",
        "search",
      ],
      description: "아이콘의 종류를 설정합니다",
      table: {
        defaultValue: { summary: "add" },
      },
    },

    color: {
      control: "select",
      options: ["red", "black"],
      description: "아이콘의 색상을 설정합니다",
      table: {
        defaultValue: { summary: "red" },
      },
    },

    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "아이콘의 크기를 설정합니다",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
  },

  args: {
    name: "add",
    color: "red",
    size: "medium",
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    name: "add",
    color: "red",
    size: "medium",
  },
};
