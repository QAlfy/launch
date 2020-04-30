import React from 'react';
import { useParams } from 'react-router-dom';

export const withLocationParams = (Component: any) => {
  return (props: any) => {
    const route = useParams();

    return <Component route={route} {...props} />;
  };
};