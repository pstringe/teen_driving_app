import {useState} from 'react'
import {
    Box, 
    Button, 
    Typography, 
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Selection from './Selection';

const useStyles = makeStyles({
    root: {
        padding: 8,
    },
});

const Question = ({question, current, onSelect}) => {
    const classes = useStyles();
    const {prompt, choices, answer} = question;
    return ( 
        <Box className={classes.root}>
            <Typography variant='h5'>{prompt}</Typography>
            <Selection question={question} current={current} onSelect={onSelect}/>
        </Box> 
    );
}
 
export default Question;