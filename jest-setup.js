import '@testing-library/jest-dom'
import { render } from '@testing-library/react';

jest.mock('react-intl', () => {
    const reactIntl = jest.requireActual('react-intl');
    const intl      = reactIntl.createIntl({
        locale: 'en'
    })
    return {
        ...reactIntl,
        useIntl: () => intl,
    }
});

jest.mock('axios', () => {
    return {
        defaults: {
            headers: {
                common: {
                    Authorization: ''
                }
            }
        }
    }
})