import React, { useState } from 'react';
import type { Story, Meta } from '@storybook/react';
import InputDate, { Props } from '../components/InputDate';
import ptBR from '../locales/pt-BR'
import enUS from '../locales/en-US'
import Root from '../components/Root'
export default {
    title: 'Components/InputDate',
    argTypes: {
        value: {
            defaultValue: null,
            control: {
                type: 'text'
            }
        }
    }
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<Props> = function (args) {
    const [value, setValue] = useState<string>(null)
    return <Root locale={this}><InputDate {...args} value={args.value ? args.value : value} setValue={setValue} /></Root>
}

export const PtBR = Template.bind(ptBR);
PtBR.args = {
    label: "Data de nascimento",
    disabled: false,
    required: false,
    value: null
};

export const EnUS = Template.bind(enUS);
EnUS.args = {
    label: "Day of birth",
    disabled: false,
    required: false,
    value: null
};