import React, { useState } from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css' ;
import Button from '../UI/Button'
import ErrorModal from "../UI/ErrorModal";

const AddUser = () =>{

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [errorModal, setErrorModal] = useState(null)

    const namedChangeHandler = (event) =>{
        setName(event.target.value)
    }

    const ageChangeHandler = (event) =>{
        setAge(event.target.value)
    }

    const emailChangeHandler = (event) =>{
        setEmail(event.target.value)
    }

    const passwordChangeHandler = (event) =>{
        setPassword(event.target.value)
    }

    async function submit(event){
        event.preventDefault();

        if(+age < 18 || name.length < 3 || password.length < 6){
            if(name.length < 3){
                var msga = 'Błędna nazwa użytkownika. Nazwa użytkownika musi mieć więcej niż 2 znaki'
            }

            else if (password.length < 6){
                var msga = 'Błędne hasło. Hasło musi składać się z więcej niż 5 znaków'
            }
            else if (+age < 18){
                var msga = 'Błędny wiek. Użytkownik musi być pelnoletni'
            }

            setErrorModal({
                title:"Błąd",
                msg: msga
            });
            return;
        }
    
        const myObject={
          name: name,
          email: email,
          password: password,
          age: age
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

        setName('')
        setEmail('')
        setPassword('')
        setAge('')
    }


    return(
        <>
            {errorModal && <ErrorModal 
                    title={errorModal.title} 
                    msg={errorModal.msg}
                    removeError={() => setErrorModal(null)}
            />}
            <Card>
                <form onSubmit={submit} className={classes.input}>
                    <h1>REGISTER NOW</h1>
                    <div>
                        <input 
                            placeholder="Username"
                            id="username" 
                            type="text"
                            onChange = {namedChangeHandler}
                            value = {name}
                        />
                        <input
                            placeholder="Emial"
                            id = "email"
                            type ="text"
                            onChange = {emailChangeHandler} 
                            value = {email}
                        />
                        <input
                            placeholder="Password"
                            id = "password"
                            type = "password"
                            onChange = {passwordChangeHandler}
                            value = {password} 
                        />
                        <input 
                            placeholder="Age"
                            id="age" 
                            type="Number" 
                            onChange = {ageChangeHandler}
                            value = {age}
                        />
                    </div>
                    <img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjk2OWY5MzdmOGQ4OTkyYzgyN2FjNDgwZGNhODM5ZDdmZTI3YzM0NCZjdD1z/mGK3Dtq4orWK6s8vLG/giphy.gif'/>
                    <Button myType="submit"> Add user </Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser;