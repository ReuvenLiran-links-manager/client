import React, { FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";

const types = {
  src: PropTypes.string.isRequired
};

type Props = InferProps<typeof types>;

const Iframe: FunctionComponent<Props> = props => {
  const { src, ...otherProps } = props;

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <iframe
      id="sss"
      src={src}
      name={src}
      title={src}
      {...otherProps}
      // src="/new/https:%2F%2Fwww.google.com"
    />
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

Iframe.propTypes = types;

export default Iframe;
