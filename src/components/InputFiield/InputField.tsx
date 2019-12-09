import React, { FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";
import classNames from "classnames";

const types = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

type Props = InferProps<typeof types>;

const InputField: FunctionComponent<Props> = props => {
  const { className, type = "text", ...otherProps } = props;

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <input
      type={type}
      className={classNames("input-field", className)}
      {...otherProps}
    />
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

InputField.propTypes = types;

InputField.defaultProps = {
  className: ""
};

export default InputField;
