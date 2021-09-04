import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

const navigationItems = [
  {
    text: 'Subscribers',
    to: '/subscribers',
  },
  {
    text: 'SubscriberLists',
    to: '/subscribersLists',
  },
  {
    text: 'Templates',
    to: '/templates',
  },
  {
    text: 'Maillings',
    to: '/maillings',
  },
];

const Link = () => (
  <>
    {navigationItems.map((item, key) => (
      <NavLink
        key={key}
        to={item.to}
        className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        {item.text}
      </NavLink>
    ))}
  </>
);

export default Link;
