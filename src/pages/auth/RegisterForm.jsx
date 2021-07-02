import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import CandidateRegisterForm from './CandidateRegisterForm';
import CompanyRegister from './CompanyRegister';
const RegisterForm = () => {

    const [enable, setEnable] = useState(false)

    const handleClickTrue =()=>{
        setEnable(true)
    }
    const handleClickFalse=()=>{
        setEnable(false)
    }

    return (
        <div>
     <Button  color="red"  onClick={()=>handleClickTrue()}>Company Register </Button>
     <Button onClick={()=>handleClickFalse()}>Candidate Register </Button>

         {
             enable?<CompanyRegister/>:<CandidateRegisterForm/>
         }
            

        </div>
    );
}

export default RegisterForm;
