import React, { useState, FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";
import { InputField, ButtonIcon } from "../components";
import { Icons } from '../components/types';

const types = {};

type Props = InferProps<typeof types>;

const TopBar: FunctionComponent<Props> = props => {
  const [link, setLink] = useState("");

  return (
    <header className="top-bar">
      <InputField
        onChange={({ target: { value } }) => setLink(value)}
        value={link}
      />
      <ButtonIcon className="btn-primary" onClick={_ => {}}>
        {Icons.LIST_ADD}
      </ButtonIcon>
    </header>
  );
};

TopBar.propTypes = types;

export default TopBar;
