import React from 'react';
import {Grid} from '@material-ui/core';

const Item = React.memo(function (props) {
    const {id, onSelect, name, image, score} = props;
    return (
        <Grid
            item data-id={id} onClick={onSelect}
        >
            <div>{name}</div>
            <div>
                <img src={image.medium} alt={name}/>
            </div>
            <div>score: {score}</div>
        </Grid>
    )
});

const ShowsList = ({data = [], onSelect}) => {
    return (
        <Grid container spacing={24}>
            {data.map(({score, show}) => {
                const {image, id, name} = show;
                if (!image) {
                    return false;
                }

                return (
                    <Item
                        key={id}
                        id={id}
                        onSelect={onSelect}
                        score={score}
                        image={image}
                        name={name}
                    />
                );
            })}
        </Grid>
    );
};

export default React.memo(ShowsList);
