import {useEffect, useState} from 'react'
import {
    Grid,
    Container,
    Box, 
    Button, 
    Typography, 
    Paper
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Question from './Question';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    content: {
        padding: 8,
        width: 800,
        height: 600,
    },
    heading: {
        textAlign: 'center',
    },
    grid: {
        height: '100%',
    }
});

const questionData = [
    {
        prompt: 'Question 1',
        choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
        answer: 0
    },
    {
        prompt: 'Question 2',
        choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
        answer: 3
    },
    {
        prompt: 'Question 3',
        choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
        answer: 2
    },
];

const Intro = () => {
    const classes = useStyles();
    const introText = '';
    return (
        <Grid item>
            <Box className={classes.heading}>
                <Typography variant='h5'>Get Ready to Take the Pledge</Typography>
            </Box>
            <Typography variant='body1'>{introText}</Typography>
        </Grid>
    )
}

const QuizControls = ({complete, prev, next}) => {
    const classes = useStyles();

    return (
        <Grid item container direction='row' justify='space-between' >
            <Button variant='contained' onClick={prev}>Previous</Button>
            {complete && <Button variant='contained'>Check My Answers!</Button>}
            <Button variant='contained' onClick={next}>Next</Button>
        </Grid>
    );
}

const Quiz = () => {
    const classes = useStyles();
    const [questions, setQuestions] = useState(questionData);
    const [started, setStarted] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [current, setCurrent] = useState(0);

    useEffect(()=>{
        setCompleted(current => questions.filter((question) => {
            return !question?.selection;
        }).length == 0);
    }, [questions]);

    const next = () => {
        setCurrent(current => Math.min(current + 1, questions.length - 1));
    };

    const prev = () => {
        setCurrent(current => Math.max(current - 1, 0));
    ;}

    const userSelection = (choice, current) => {
        console.log(current);
        setQuestions (cur => {
            let newQuestions = questions.slice();
            newQuestions[current]['selection'] = choice;
            return newQuestions;
        });
        console.log('questions', questions);
    };

    return ( 
        <Container className={classes.root}>
            <Paper className={classes.content}>
                <Grid className={classes.grid} container direction='column' justify='space-between'>
                    <Grid item>
                        {!started && <Intro/>}
                        {started && (<Question question={questions[current]} current={current} onSelect={userSelection}/>)}
                    </Grid>
                    <Grid item container justify='center' >
                        {!started ? <Button onClick={() => setStarted(true)} variant='contained' >Get started!</Button> : <QuizControls complete={completed} next={next} prev={prev}/>}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}
 
export default Quiz;