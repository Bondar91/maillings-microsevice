import React, { FC } from 'react';

import { Loader, Navigation } from '../../components';
import { ILayout } from './types';

export const Layout: FC<ILayout> = ({
  title,
  children,
  isLoading = false,
}): JSX.Element => {
  return (
    <>
      <Navigation />
      <div className={`md:container md:mx-auto`}>
        <h2
          className={`text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mt-2`}
        >
          {title}
        </h2>

        {isLoading ? <Loader /> : <>{children}</>}
      </div>
    </>
  );
};
