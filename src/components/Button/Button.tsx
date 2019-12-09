import React, { FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";
import classNames from "classnames";

const types = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

type Props = InferProps<typeof types>;

const Button: FunctionComponent<Props> = props => {
  const { className, ...otherProps } = props;

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <button
      type="button"
      className={classNames("btn", className)}
      {...otherProps}
    />
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

Button.propTypes = types;
Button.defaultProps = {
  className: ""
};

export default Button;
