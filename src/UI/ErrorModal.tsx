import React from "react"
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) =>{
    return(
        <>
            <div>
                <Card>
                    <header>
                        <h2>{props.title}</h2>
                    </header>
                    <div>
                        <p>{props.msg}</p>
                    </div>
                    <footer>
                        <Button> o ki doki </Button>
                    </footer>
                </Card>
            </div>
        </>
    )
}

export default ErrorModal;