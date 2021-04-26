import {useState} from 'react'
import {
    Box, 
    Button, 
    Typography, 
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: 8,
    },
});

const Question = (props) => {
    const classes = useStyles();
    const {prompt, choices, answer} = props.question;
    return ( 
        <Box className={classes.root}>
            <Typography variant='h5'>{prompt}</Typography>
            <form>

            </form>
        </Box> 
    );
}
 
export default Question;