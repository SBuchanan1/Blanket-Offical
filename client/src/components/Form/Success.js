import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import deleteDialog from '../../hooks/DeleteDialog';
import { DialogActions, DialogTitle,} from '@material-ui/core';




export class Success extends Component {
    

 

    render() {
        return (
                
                    <Dialog
                        open
                        fullWidth
                        maxWidth='sm'

                    >
                        <DialogTitle id="Success">Success</DialogTitle>
                        
                        <h1>Thank You For Your Submission</h1>
                        <p>You will get an email with further instructions.</p>
                        <DialogActions>
                        <button onClick = "Open = (false)" >CLOSE</button> 
                        </DialogActions>
                             
                    </Dialog>
                
        );
    }
}

export default Success;

