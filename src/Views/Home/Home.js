import {Grid} from '@material-ui/core';
import Carousel from './Carousel';
import Section from '../../Components/Section';

const Home = () => {
    const sections = [
        {
            title: 'Facts about Teen Driving',
            description: 'How do your behaviors and habits affect the saftey of everyone on the road?',
            path: '/facts',
            image: null,
        },
        {
            title: 'Featured Story',
            description: 'Hear the experience of alma and marium when their son was in a car accident.',
            path: '/stories',
            image: null,
        },
        {
            title: 'Take the pledge to save lives',
            description: 'Learn about the perks of earning you safe driving pledge certificate',
            path: '/quiz',
            image: null,
        },
       
    ]
    return ( 
        <Grid container direction='column'>
            <Carousel features={sections}/>
            {sections.map((section, idx) => {
                return (
                    <Section info={section} />
                );
            })}
        </Grid> 
    );
}
 
export default Home;