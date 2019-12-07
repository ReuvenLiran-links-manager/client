import React, { FunctionComponent } from 'react';
import PropTypes, { InferProps } from 'prop-types';

export enum Icons {
  MENU = 'menu',
  SEARCH = 'search'
}

export const types = {
  // icon: PropTypes.string
};

type Props = InferProps<typeof types>

interface FCWithIcons extends FunctionComponent<{icon: Icons}> {
  icon: Icons; 
}

const Icon: FunctionComponent<{icon: Icons}> = (props) => {
  const {
    icon,
  } = props;
  return (
    <i className="material-icons">{icon}</i>
  )
};

Icon.propTypes = types;
export default Icon;
