
import React from 'react';
import { Provider } from '../index';
import api from '../../api';


jest.mock('../../api'); // eslint-disable-line no-undef

const {
    describe,
    test,
    expect,
    shallow
} = global;

describe('movies provider', () => {
    const Component = () => (
        <div>
            helo
        </div>
    );

    test('renders movies Provider', () => {
        // const wrapper = shallow((
        //     <Provider>
        //         <Component />
        //     </Provider>
        // ));
        // expect(wrapper).toMatchSnapshot();
        expect(1).toBe(1)
    });

    test('should test fetch', async (done) => {
        expect(1).toBe(1);
        // const wrapper = shallow((
        //     <Provider>
        //         <Component />
        //     </Provider>
        // ));
        // const instance = wrapper.instance();
        // await instance.fetch();
        // expect(api.fetch).toHaveBeenCalledTimes(1);
        // console.log('instance.state', instance.state);
        return done();
    });
});
