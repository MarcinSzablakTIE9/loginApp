import React from "react"
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css'

const ErrorModal = (props) =>{
    return(
        <>
            <div className={classes.backdrop}>
                <Card className={classes.modal}>
                    <header className={classes.header}>
                        <h2>{props.title}</h2>
                    </header>
                    <div className={classes.content}>
                        <p>{props.msg}</p>
                    </div>
                    <footer className={classes.action}>
                        <Button onClick={props.removeError}> OKI DOKI </Button>
                    </footer>
                </Card>
            </div>
        </>
    )
}

export default ErrorModal;