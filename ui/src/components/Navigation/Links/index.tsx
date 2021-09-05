import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';
import { INavigationLinks } from '../types';
import { navigationLinks } from '../common/navigationLinks';

const Links: FC<INavigationLinks> = (): JSX.Element => (
  <>
    {navigationLinks.map((item, key) => (
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

export default Links;
