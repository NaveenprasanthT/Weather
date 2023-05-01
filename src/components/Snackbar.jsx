import React from 'react';
import {Snackbar} from '@mui/material'
import {Alert} from '@mui/material'

const Message = ({open, setOpen}) =>{

    const handleClose = (event, reason) =>{
        if(reason === 'clickaway') return;

        setOpen(false)
    }

    return(
        <div>
            <Snackbar 
                anchorOrigin={{vertical:"top", horizontal:"right"}}
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity="error" elevation={6} variant='filled'>
                    Enter a valid City name!
                </Alert>
            </Snackbar> 
        </div>
    );
}

export default Message;