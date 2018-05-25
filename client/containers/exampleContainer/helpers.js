import React, { Component } from 'react';
import faker from 'faker';
import User from '../../components/User';

const renderUser = (user, onDelete) => (
  <li key={user.id}><User user={user} onDelete={onDelete} /></li>
);

export const getNewUser = ({
  id: faker.random.number(),
  name: faker.name.findName(),
  title: faker.name.jobTitle(),
});

export const renderUsers = (users, onDelete) => (
  users.map(user => renderUser(user, onDelete))
);
