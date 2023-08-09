import type { Meta, StoryObj } from '@storybook/vue3'

import Alert from './Alert.vue'

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof Alert>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
 export const Information: Story = {
};
