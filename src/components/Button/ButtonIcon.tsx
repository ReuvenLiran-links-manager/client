import React, { FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";
import Icon, { Icons, checkIcons } from "../Icon/Icon";
import Button from "./Button";

const types = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

type Props = InferProps<typeof types>;

interface Iprops extends Props {
  children: Icons;
}

const ButtonIcon: FunctionComponent<Iprops> = props => {
  const { children, ...otherProps } = props;

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Button {...otherProps}>
      <Icon>{children}</Icon>
    </Button>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

ButtonIcon.propTypes = { ...types, children: checkIcons.isRequired };
export default ButtonIcon;
