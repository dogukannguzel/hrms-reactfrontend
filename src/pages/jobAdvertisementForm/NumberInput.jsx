import React from 'react';
import {Form, Input, Message } from 'semantic-ui-react'
const NumberInput = ({label,handleChange,name,value,error,touched}) => {
    return (
        <div>
              <Form.Field
                    control={Input}
                    type="number"
                    label={label}
                    onChange={handleChange}
                    value={value}
                    name={name}
                />
                 {error && touched && (
                    <Message color='red'>{error}</Message>
                )}
        </div>
    );
}

export default NumberInput;
