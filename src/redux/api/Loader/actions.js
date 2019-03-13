export const LOADING = 'LOADING';

function toggleLoading(name) {
    return { type: `${LOADING}_${name.toUpperCase()}` };
}

function createLoading(name) {
    return {
        toggle: () => toggleLoading(name)
    };
}

export default createLoading;
