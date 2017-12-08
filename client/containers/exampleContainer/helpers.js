import React, { Component } from 'react';
import faker from 'faker';
import User from '../../components/User';

const helpers = {
  getNewUser: () => ({
    id: faker.random.number(),
    name: faker.name.findName(),
    title: faker.name.jobTitle(),
  }),
  allUsers: (users, onDelete) => (
    users.map(user => (
      <li key={user.id}><User user={user} onDelete={onDelete} /></li>)
    )
  ),
};

export default helpers;
