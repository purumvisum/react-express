import React from 'react';

//design
import Chip from 'material-ui/Chip';
import SocialSentimentVeryDissatisfied from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';
import Avatar from 'material-ui/Avatar';

const styles = {
    chip: {
        margin: '0 auto',
    }
};

export default function  MessageText ({text}) {
    return (
        <Chip style={styles.chip} >
            <Avatar size={40} color="black" icon={<SocialSentimentVeryDissatisfied />} />
            {text}
        </Chip>
    )
}
