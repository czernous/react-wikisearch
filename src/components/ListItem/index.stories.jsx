import React from 'react';

import ListItem from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/SearchItem',
    component: ListItem,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ListItem {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    id: 'https://en.wikipedia.org/wiki/Elohim_City,_Oklahoma',
    label: 'Elohim City, Oklahoma',
};
