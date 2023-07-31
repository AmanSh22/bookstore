import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'

const BookList = ({name}) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/')
    }

    return (
        <div style={{display:'flex', flexDirection:'column', width:160}}>
            this is BookList page by {name}

            {/* <button onClick={handleButtonClick}>go to home</button> */}

            {/* below is the implementation of material ui button */}
            <Button variant="contained" onClick={handleButtonClick}>go to home</Button>
        </div>

    )
}

export default BookList