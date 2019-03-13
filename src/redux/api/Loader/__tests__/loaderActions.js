import createLoading from '../actions';
import createLoadingWithNamedType from '../reducer';

const name = 'users';

test('createLoadingWithNamedType', () => {
    const reducer = createLoadingWithNamedType();
    const d = createLoadingWithNamedType(name);
    // d();
    d(false, { action: {
        type: 'da'
        } });
});

test('test createLoading', () => {
    const ob = createLoading(name);
    ob.toggle();
});
