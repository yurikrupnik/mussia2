import { Provider as users } from './users/context';
import { Provider as projects } from './projects/context';
import { Provider as currency } from './currency/context';

export default [
    users,
    projects,
    currency
];
