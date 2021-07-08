import React, { useState, useCallback } from 'react'
import type { Story, Meta } from '@storybook/react'
import type { I18nContext } from '../context/I18nContext'
import type { Field } from '@crudfront/core'
import InputField, { Props } from '../components/InputField'
import ptBR from '../locales/pt-BR'
import enUS from '../locales/en-US'
import Root from '../components/Root'
import Grid from '@material-ui/core/Grid'

export default {
  title: 'Components/InputField',
} as Meta

const FIELDS: Partial<Field>[] = [
  {
    name: 'name',
    label: 'Nome',
    type: 'text',
    minLength: 5,
    required: true,
  },
  {
    name: 'state',
    label: 'Estado',
    type: 'text',
    pattern: '[A-Z]{2}',
    hint: 'Insira a sigla do estado',
    mask: 'AA',
  },
  {
    name: 'cpf',
    label: 'CPF',
    type: 'text',
    mask: '999.999.999-99',
  },
  {
    name: 'dob',
    label: 'Data de nascimento',
    type: 'date',
    required: true,
  },
]

const Template: Story<{ locale: I18nContext }> = function (args) {
  const [state, setState] = useState<any>({})
  const setField = useCallback(function <V>(name, value) {
    console.log([name, value])
    setState((v) => ({ ...v, [name]: value }))
  }, [])
  return (
    <Root locale={args.locale}>
      <Grid container spacing={3}>
        {FIELDS.map((field, index) => (
          <Grid item>
            <InputField
              key={index}
              {...field}
              value={state[field.name]}
              setValue={setField.bind(this, field.name)}
            />
          </Grid>
        ))}
      </Grid>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </Root>
  )
}

export const PtBR = Template.bind({})
PtBR.args = {
  locale: ptBR,
}

export const EnUS = Template.bind({})
EnUS.args = {
  locale: enUS,
}
