import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';
import { Plus } from '../../assets/icons';

export default {
  title: 'Nebula/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      defaultValue: 'primary',
      options: ['primary', 'blue', 'black', 'minimal'],
    },
    size: {
      control: { type: 'inline-radio' },
      defaultValue: 'lg',
      options: ['lg', 'md', 'sm'],
    },
    children: { control: { type: 'text' } },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Default Button',
  },
};

export const Blue: Story = {
  args: {
    variant: 'blue',
    size: 'lg',
    children: 'Blue Button',
  },
};

export const Black: Story = {
  args: {
    variant: 'black',
    size: 'lg',
    children: 'Black Button',
  },
};

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    size: 'lg',
    children: 'Minimal Button',
  },
};

export const PrimaryPlusIcon: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    icon: <Plus />,
    children: 'Add ',
  },
};

export const BluePlusIcon: Story = {
  args: {
    variant: 'blue',
    size: 'lg',
    icon: <Plus />,
    children: 'Add',
  },
};
