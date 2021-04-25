import {
    Grid,
    Typography,
} from '@material-ui/core';

const Section = ({section}) => {
    return ( 
        <Grid container>
            <Typography variant='h5'>{section.title}</Typography>
            <Typography variant='body1'>{section.longSummary}</Typography>
        </Grid>
    );
}
 
export default Section;