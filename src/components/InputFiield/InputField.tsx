import React, { FunctionComponent } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import classNames from 'classnames';

const types = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired
};

type Props = InferProps<typeof types>

const InputField: FunctionComponent<Props> = (props) => {
  const {
    className,
    ...otherProps
  } = props;

  return (
    <input
    type="text"
      className={classNames('input-field', className)}
      {...otherProps}
    />
  );
};

InputField.propTypes =  types;

export default InputField;
