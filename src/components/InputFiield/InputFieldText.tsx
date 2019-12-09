import React, { memo, FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";
import InputField from "./InputField";

const types = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

type Props = InferProps<typeof types>;

const InputFieldText: FunctionComponent<Props> = memo(props => {
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <InputField
      type='text'
      {...props}
    />
  );
  /* eslint-enable react/jsx-props-no-spreading */
});

InputFieldText.propTypes = types;

InputFieldText.defaultProps = {
  className: ""
};

export default InputFieldText;