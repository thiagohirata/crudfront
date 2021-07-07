import React, { useState } from 'react';
import type { Story, Meta } from '@storybook/react';
import InputText, { Props } from '../components/InputText';

export default {
    title: 'Components/InputText',
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<Props> = (args) => {
    const [value, setValue] = useState<string>()
    return <InputText {...args} value={args.value ? args.value : value} setValue={setValue}/>
}

export const Example1 = Template.bind({});
Example1.args = {
    label: "Name",
    disabled: false,
    required: false
};