import { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Typography, Grid } from '@material-ui/core';

const Selection = ({question, onSelect, current}) => {
    const choices = question.choices;
    const [value, setValue] = useState(question?.selection ? question.selection : null);
    
    useEffect(() => {
        setValue(question?.selection ? question.selection : null);
    }, [question])

    const handleChange = (event) => {
        setValue(event.target.value);
        onSelect(event.target.value, current);
    };

    const mapping = {0: 'A', 1: 'B', 2 : 'C', 3: 'D'};
    
    return ( 
        <Grid container direction='column'>
            <Grid item>
                <FormControl component="fieldset">
                <FormLabel component="legend">Choose the Best Answer</FormLabel>
                <RadioGroup aria-label="choices" name="questionChoices" value={value} onChange={handleChange}>
                    {choices.map((choice, idx) => {
                        return (
                            <FormControlLabel value={choice} control={<Radio />} label={`${mapping[idx]}. ${choice}`} />
                        );
                    })}
                </RadioGroup>
                </FormControl>
            </Grid>
            <Grid>
                {/*<Typography variant='body1'>Your Answer: {mapping[value]}</Typography>*/}
            </Grid>
        </Grid> 
    );
}
 
export default Selection;