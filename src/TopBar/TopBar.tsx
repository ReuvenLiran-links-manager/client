import React, { useState, FunctionComponent } from "react";
import { InferProps } from "prop-types";
import { InputField, ButtonIcon } from "../components";
import { Icons } from "../components/types";

const types = {};

type Props = InferProps<typeof types>;

const TopBar: FunctionComponent<Props> = () => {
  const [link, setLink] = useState("");

  return (
    <header className="top-bar">
      <h4>Linkim</h4>
      <InputField
        type='text'
        onChange={({ target: { value } }) => setLink(value)}
        value={link}
        placeholder='Enter url here'
      />
      <ButtonIcon
        className="btn-primary"
        onClick={_ => {
          console.log("add");
        }}
      >
        {Icons.LIST_ADD}
      </ButtonIcon>
    </header>
  );
};

TopBar.propTypes = types;

export default TopBar;
