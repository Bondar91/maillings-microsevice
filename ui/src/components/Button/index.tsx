import React, { FC } from 'react';
import { IButton } from './types';

const Button: FC<IButton> = ({
  color = 'blue',
  handleClick,
  children,
}): JSX.Element => (
  <button
    className={`bg-transparent hover:bg-${color}-500 text-${color}-700 font-semibold hover:text-white py-1 px-2 border border-${color}-500 hover:border-transparent rounded mr-2`}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default Button;
