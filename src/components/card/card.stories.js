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
  workedAt: 'Airbnb',
  mainBg: 'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80', 
  profileImg: 'https://images.unsplash.com/photo-1461800919507-79b16743b257?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1', 
  skillImg: 'https://miro.medium.com/max/1838/1*6ahbWjp_g9hqhaTDSJOL1Q.png',
};
