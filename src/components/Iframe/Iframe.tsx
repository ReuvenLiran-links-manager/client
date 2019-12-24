import React, { FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";

const types = {
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object
};

// type Props = InferProps<typeof types>;

type Props = {
  src: string;
  id: string;
  style?: React.CSSProperties;
};

const Iframe: FunctionComponent<Props> = props => {
  const { id, src, style, ...otherProps } = props;

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <iframe
      id={id}
      src={src}
      name={src}
      title={src}
      style={style}
      // style={style}
      {...otherProps}
      // src="/new/https:%2F%2Fwww.google.com"
    />
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

const mystyles = {} as React.CSSProperties;

Iframe.propTypes = types;
Iframe.defaultProps = {
  style: mystyles
};

export default Iframe;
