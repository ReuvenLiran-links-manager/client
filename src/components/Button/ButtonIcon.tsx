import React, { FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";
import Button from "./Button";
import Icon, { Icons } from "../Icon/Icon";

const types = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

type Props = InferProps<typeof types>;

interface IProps extends Props {
  children: Icons;
}

const ButtonIcon: FunctionComponent<IProps> = props => {
  const { children, ...otherProps } = props;
  return (
    <Button {...otherProps}>
      <Icon>{children}</Icon>
    </Button>
  );
};

ButtonIcon.propTypes = types;
export default ButtonIcon;
