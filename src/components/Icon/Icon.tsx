import React, { FunctionComponent } from 'react';
import PropTypes, { InferProps } from 'prop-types';

export enum Icons {
  MENU = 'menu',
  SEARCH = 'search',
  LIST_ADD = 'playlist_add'
}

export const types = {
  // icon: PropTypes.string
};

type Props = InferProps<typeof types>

interface FCWithIcons extends FunctionComponent<{icon: Icons}> {
  children: Icons; 
}

const Icon: FunctionComponent<{children: Icons}> = (props) => {
  const {
    children,
  } = props;
  return (
    <i className="material-icons">{children}</i>
  )
};

Icon.propTypes = types;
export default Icon;
