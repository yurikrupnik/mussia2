import React from 'react';
import {storiesOf} from '@storybook/react';
import Component from './index';

storiesOf(`${Component.name}`, module)
    .add('core', Component);
