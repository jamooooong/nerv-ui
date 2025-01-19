import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { CheckBox } from "./CheckBox";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CheckBox> = {
  title: "Button/CheckBox",
  component: CheckBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "버튼의 크기를 설정합니다",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    color: {
      control: "select",
      options: ["shinji", "asuka", "rei", "misato"],
      description: "버튼의 색상을 설정합니다",
      table: {
        defaultValue: { summary: "shinji" },
      },
    },
    label: {
      control: "text",
      description: "버튼에 표시될 텍스트를 설정합니다",
      table: {
        defaultValue: { summary: "Button" },
      },
    },
    onClick: {
      description: "클릭 이벤트 핸들러",
    },
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
    size: "small",
    label: "Button",
    color: "shinji",
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본버튼: Story = {
  args: {
    label: "기본 버튼",
  },
};
