import React from 'react';
import {IconButton,Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import SendIcon from '@material-ui/icons/Send'

export default function Buttons() {
    return (
        <div>   
            <h2>Buttons</h2>
            <Button variant="contained">Hello</Button>
            <Button variant="outlined">Hello</Button>
            <Button variant="text">Hello</Button>
            <h2>Color and event listener</h2>
            <Button variant="contained" style={{marginRight:"8px",backgroundColor:"lightgreen"}}>Hello</Button>
            <Button variant="outlined" color="secondary" href="https://material-ui.com/getting-started/installation/">Hello</Button>
            <Button variant="text" color="primary" onClick={()=>{alert("Hello")}}>Hello</Button>
            <h2>Icons inside buttons</h2>
            <Button variant="contained" color="primary" style={{marginRight:"8px"}} startIcon={<SendIcon></SendIcon>}>Send</Button>
            <Button variant="contained" color="primary" style={{marginRight:"8px"}} endIcon={<DeleteIcon></DeleteIcon>}>Delete</Button>
            <h3>Size</h3>
            <Button variant="contained" color="primary" style={{marginRight:"8px"}} startIcon={<SendIcon></SendIcon>} size="small">Send</Button>
            <Button variant="contained" color="primary" style={{marginRight:"8px"}} endIcon={<DeleteIcon></DeleteIcon>} size="large">Delete</Button>
            <h2>Icons</h2>
            <IconButton>
                <DeleteIcon onClick={()=>{alert("Delete")}}></DeleteIcon>
            </IconButton>
            <IconButton>
                <SendIcon></SendIcon>
            </IconButton>
        </div>
    )
}
