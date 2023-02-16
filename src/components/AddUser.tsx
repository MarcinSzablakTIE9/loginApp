import React, { useState } from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css' ;
import Button from '../UI/Button'

const AddUser = () =>{

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const namedChangeHandler = (event) =>{
        setName(event.target.value)
    }

    const ageChangeHandler = (event) =>{
        setAge(event.target.value)
    }

    const addUserHandler = (event) =>{
        event.preventDefault()
        console.log(name,age)
        setName('')
        setAge('')
    }

    return(
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
    )
}

export default AddUser;