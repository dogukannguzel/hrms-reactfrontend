import React from 'react';
import { FormField, Label, Select, FormSelect } from 'semantic-ui-react';
import { useField ,Field} from 'formik';

const DGSelectInput = (props) => {

    const {options,label,name,...rest} = props


    const [field,meta]=useField(props)
    

  


    return (
        <div className="field">
             <label>{label}</label>
        <Field   {...field} name={name}  {...rest} className="ui fluid dropdown" as="select">
       
        <option  selected value="" >Default</option>
        {options.map(option=>(
            <option key={option.key} name={name} value={option.value} >{option.text}</option>
        ))}
        
     </Field>
     {!!meta.error && meta.touched?(
                   
                   <Label pointing basic color="red" content={meta.error}  ></Label>
               
               ):null}
        </div>



    
       
    );
}

export default DGSelectInput;
