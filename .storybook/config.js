import { configure } from '@storybook/react';

function loadStories() {
  require('../src/Formik.stories');
}

configure(loadStories, module);
