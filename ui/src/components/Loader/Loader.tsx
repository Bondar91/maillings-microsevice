import React from 'react';
import ImportedLoader from 'react-loader-spinner';

export const Loader = () => (
  <div className="flex h-screen">
    <div className="m-auto">
      <ImportedLoader type="ThreeDots" color="#000f39" height={80} width={80} />
    </div>
  </div>
);
