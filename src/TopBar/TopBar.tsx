import React, { useState, FunctionComponent } from "react";
import { InferProps } from "prop-types";
import { InputFieldText, ButtonIcon } from "../components";
import { Icons } from "../components/types";

const types = {};

type Props = InferProps<typeof types>;

const TopBar: FunctionComponent<Props> = () => {
  const [link, setLink] = useState("");

  return (
    <header className="top-bar">
      <InputFieldText
        onChange={({ target: { value } }) => setLink(value)}
        value={link}
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
