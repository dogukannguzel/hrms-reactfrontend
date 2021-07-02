import React from 'react';
import { FormField,Label,Form } from 'semantic-ui-react';
import { ErrorMessage, Field, useField } from 'formik';

const DGTextInput = (props) => {
    
    const {label,...rest} = props
  
    const [field,meta]=useField(props)
     
    return (
        <FormField  widths="equal"   error={!!meta.error && meta.touched}  >
            <label>{label}</label>
            <input {...field} {...rest}  ></input>
            {!!meta.error && meta.touched?(
                   
                <Label pointing basic color="red" content={meta.error}  ></Label>
            
            ):null}
        </FormField>




        






    );
            }
export default DGTextInput;

