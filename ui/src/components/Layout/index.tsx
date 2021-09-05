import React, { FC } from 'react';

import Navigation from '../Navigation';
import Table from '../Table';
import { ILayout } from './types';

const Layout: FC<ILayout> = ({ title, children }): JSX.Element => {
  return (
    <>
      <Navigation />
      <div className="md:container md:mx-auto">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mt-2">
          {title}
        </h2>

        {children}
      </div>
    </>
  );
};

export default Layout;
