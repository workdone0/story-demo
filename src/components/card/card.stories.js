import React from 'react';

import Card from './card.component';

export default {
  component: Card,
  title: 'Components/Card',
  argTypes: {
    borderRadius: {
      control: {
        type: 'radio',
        options: [true, false]
      }
    },
    size: {
      control: {
        type: 'radio',
        options: ['lg','md','sm']
      }
    },
}
}

const Template = (args) => <Card {...args} />;

//👇 Each story then reuses that template
export const UserCard = Template.bind({});

UserCard.args = {
  borderRadius:true, 
  size:'md',
  name: 'Shubham',
  profile: 'React Dev',
  workedAt: 'Airbnb'
};
