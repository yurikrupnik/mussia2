
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

describe('currency provider', () => {
    const Component = () => (
        <div>
            helo
        </div>
    );

    test('renders Projects Provider', () => {
        const wrapper = shallow((
            <Provider>
                <Component />
            </Provider>
        ));
        expect(wrapper).toMatchSnapshot();
    });

    test('should test fetch', async (done) => {
        const wrapper = shallow((
            <Provider>
                <Component />
            </Provider>
        ));
        const instance = wrapper.instance();
        await instance.fetch();
        expect(api.fetch).toHaveBeenCalledTimes(1);
        console.log('instance.state', instance.state);
        return done();
    });
});
