import React, { useState } from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css' ;
import Button from '../UI/Button'
import ErrorModal from "../UI/ErrorModal";

const AddUser = () =>{

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [errorModal, setErrorModal] = useState(null)

    const namedChangeHandler = (event) =>{
        setName(event.target.value)
    }

    const ageChangeHandler = (event) =>{
        setAge(event.target.value)
    }

    const addUserHandler = (event) =>{
        event.preventDefault()

        if(+age < 1){
            setErrorModal({
                title:"Błęny wiek",
                msg:"LMAO"
            })
        }

        setName('')
        setAge('')
    }

    return(
        <>
            {errorModal && <ErrorModal title={errorModal.title} msg={errorModal.msg}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        type="text"
                        onChange = {namedChangeHandler}
                        value = {name}
                    />

                    <label htmlFor="age">Age</label>
                    <input 
                        id="age" 
                        type="Number" 
                        onChange={ageChangeHandler}
                        value = {age}
                    />

                    <Button myType="submit"> Add user </Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser;