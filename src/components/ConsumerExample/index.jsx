import React from 'react';
import { Consumer } from '../../api/movies/context';

const ConsumerExample = () => {
    return (
        <div>
            <Consumer render={(p) => {
                console.log('p', p);
                return (
                    <div>
                        {p.search}
                    </div>
                );
            }}
            />
        </div>
    );
};

export default ConsumerExample;
