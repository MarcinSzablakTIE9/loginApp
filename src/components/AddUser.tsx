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
        //event.preventDefault()

        if(+age < 1){
            setErrorModal({
                title:"Błędny wiek",
                msg:"LMAO"
            })
        }

        setName('')
        setAge('')
    }

    async function submit(event){
        event.preventDefault();

        console.log('aaa')
    
        const myObject={
          myKey:'asdasdasds'
        }
    
        console.log(myObject)
        const res = await fetch('https://loginreactapp2-default-rtdb.firebaseio.com/dane.json',
        {
          method: 'POST',
          body: JSON.stringify(myObject),
          headers:{
            'Content-Type': 'applicatio.json'
          }
        });
        const data = await res.json();
        console.log(data);
    }


    return(
        <>
            {errorModal && <ErrorModal 
                    title={errorModal.title} 
                    msg={errorModal.msg}
                    removeError={errorHandler}
            />}
            <Card className={classes.input}>
                <form onSubmit={submit}>
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