import { createContext } from 'react';

const { Provider, Consumer } = createContext({
    data: [],
    loading: false,
    selected: '',
    fetch: () => {}
});

export { Provider, Consumer };
