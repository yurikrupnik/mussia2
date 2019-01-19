const sass = require('node-sass'); // eslint-disable-line import/no-extraneous-dependencies
const sassUtils = require('node-sass-utils')(sass); // eslint-disable-line import/no-extraneous-dependencies
// Convert js strings to dimenssions
const convertStringToSassDimension = (result) => {
    // Only attempt to convert strings
    if (typeof result !== 'string') {
        return result;
    }

    const cssUnits = [
        'rem',
        'em',
        'vh',
        'vw',
        'vmin',
        'vmax',
        'ex',
        '%',
        'px',
        'cm',
        'mm',
        'in',
        'pt',
        'pc',
        'ch'
    ];
    const parts = result.match(/[a-zA-Z]+|[0-9]+/g);
    const value = parts[0];
    const unit = parts[parts.length - 1];
    return cssUnits.indexOf(unit) !== -1
        ? new sassUtils.SassDimension(parseInt(value, 10), unit)
        : result;
};

const getByKey = sassVars => (key) => {
    const keys = key.getValue().split('.');
    let result = sassVars;
    for (let i = 0; i < keys.length; i += 1) {
        result = result[keys[i]];
        if (typeof result === 'string') {
            result = convertStringToSassDimension(result);
        } else if (typeof result === 'object') {
            Object.keys(result).forEach((k) => { // eslint-disable-line no-loop-func
                result[k] = convertStringToSassDimension(result[k]);
            });
        }
    }
    return sassUtils.castToSass(result);
};

module.exports = vars => ({
    'get($keys)': getByKey(vars)
});
