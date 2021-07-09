import React, { useState, useCallback } from 'react'
import type { Story, Meta } from '@storybook/react'
import type { I18nContext } from '../context/I18nContext'
import type { Field } from '@crudfront/core'
import InputObject, { Props } from '../components/InputObject'
import ptBR from '../locales/pt-BR'
import enUS from '../locales/en-US'
import Root from '../components/Root'
import Grid from '@material-ui/core/Grid'

export default {
  title: 'Components/InputObject',
} as Meta

type PartialField = Omit<Partial<Field>, 'fields'> & { fields?: Array<PartialField> }
const FIELDS: PartialField = [
  {
    name: 'name',
    label: 'Nome',
    type: 'text',
    minLength: 5,
    required: true,
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
  {
    name: 'address',
    label: 'Endereço',
    type: 'object',
    fields: [
      {
        name: 'route',
        label: 'Logradouro',
        type: 'text',
        required: true,
      },
      {
        name: 'complement',
        label: 'Complemento',
        type: 'text',
      },
      {
        name: 'state',
        label: 'Estado',
        type: 'text',
        pattern: '[A-Z]{2}',
        hint: 'Insira a sigla do estado',
        mask: 'AA',
        required: true,
      },
    ],
  },
]

const Template: Story<{ locale: I18nContext }> = function (args) {
  const [state, setState] = useState<any>({
    name: 'John',
    state: 'SP',
  })
  return (
    <Root locale={args.locale}>
      <InputObject fields={FIELDS} value={state} setValue={setState} />
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
