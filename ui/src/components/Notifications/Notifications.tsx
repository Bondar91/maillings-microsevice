import React from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { ISettingsNotifications } from './types';

export const Notifications = ({
  position,
  autoClose,
  hideProgressBar,
  newestOnTop,
  closeOnClick,
  rtl,
  pauseOnFocusLoss,
  draggable,
  pauseOnHover,
}: ISettingsNotifications) => {
  return (
    <ToastContainer
      position={position ?? 'bottom-right'}
      autoClose={autoClose ?? 5000}
      hideProgressBar={hideProgressBar ?? false}
      newestOnTop={newestOnTop ?? false}
      closeOnClick={closeOnClick ?? true}
      rtl={rtl ?? false}
      pauseOnFocusLoss={pauseOnFocusLoss ?? true}
      draggable={draggable ?? true}
      pauseOnHover={pauseOnHover ?? true}
    />
  );
};
