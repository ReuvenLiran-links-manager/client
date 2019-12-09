import React, { memo, useState, FunctionComponent } from "react";
import { InferProps } from "prop-types";
import classNames from "classnames";

import { Icons } from "@components/types";
import { ButtonIcon } from "@components";

import Links, { types as linksType } from "./Links";
import SearchBar from "./SearchBar/SearchBar";

const types = {
  ...linksType
};

type Props = InferProps<typeof types>;

const LinksBar: FunctionComponent<Props> = memo(props => {
  const { links, onClick } = props;
  const [shrinked, onShrink] = useState(true);

  return (
    <nav className={classNames("links-bar", { "links-bar--shrink": shrinked })}>
      <header className="links-bar__header">
        <ButtonIcon
          className="btn-primary"
          onClick={() => {
            onShrink(!shrinked);
          }}
        >
          {Icons.MENU}
        </ButtonIcon>
        <SearchBar
          onChange={() => {
            console.log("empty");
          }}
        />
      </header>
      <Links links={links} onClick={onClick} />
    </nav>
  );
});

LinksBar.propTypes = types;
export default LinksBar;
