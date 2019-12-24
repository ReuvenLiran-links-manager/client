import React, { memo, FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";
import classNames from "classnames";

const types = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  // eslint-disable-next-line react/require-default-props
  placeholder: PropTypes.string.isRequired
};

type Props = InferProps<typeof types>;

const InputField: FunctionComponent<Props> = memo(props => {
  const { placeholder = "", className, type = "text", ...otherProps } = props;

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames("input-field", className)}
      {...otherProps}
    />
  );
  /* eslint-enable react/jsx-props-no-spreading */
});

InputField.propTypes = types;

InputField.defaultProps = {
  className: "",
  // eslint-disable-next-line react/default-props-match-prop-types
  placeholder: ""
};

export default InputField;
