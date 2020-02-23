import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
    theme: create({
        base: 'light',

        brandTitle: 'PROTOTYP<br />react-language-switcher',
        brandUrl: 'https://prototyp.digital'
    })
});
