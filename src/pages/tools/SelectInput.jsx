import React from 'react'
import { Form,Message } from 'semantic-ui-react'
export default function PositionSelected({ value, handleChange, defaultValue, options, name, label,touched,error }) {
  return (
    <div>

      <Form.Field name={name}  value={value}  onChange={handleChange} label={label} control='select'>
        <option name={name} selected value="">{defaultValue}</option>
        {
          options.map(prop => (
            <option key={prop.value} value={prop.value}>{prop.text}</option>
          ))
        }

      </Form.Field>

      {error && touched && (
                    <Message color='red'>{error}</Message>
                )}
    </div>
  )
}
