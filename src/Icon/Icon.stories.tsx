import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Icon/Icon",
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: "svg 아이콘을 렌더링합니다",
      },
    },
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
        "done",
        "edit",
        "favorite",
        "home",
        "menu",
        "notifications",
        "person",
        "search",
        "settings",
        "share",
        "star",
        "thumb_up",
      ],
      description: "아이콘의 종류를 설정합니다",
      table: {
        defaultValue: { summary: "add" },
      },
    },

    color: {
      control: "select",
      options: ["shinji", "asuka", "rei", "misato", "gray"],
      description: "아이콘의 색상을 설정합니다",
      table: {
        defaultValue: { summary: "shinji" },
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
    color: "shinji",
    size: "medium",
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    name: "add",
    color: "shinji",
    size: "medium",
  },
};
