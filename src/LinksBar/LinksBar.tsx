import React, { memo, useState, FunctionComponent } from "react";
import { InferProps } from "prop-types";
import Links, { types as linksType } from "./Links";
import SearchBar from "./SearchBar/SearchBar";
import { ButtonIcon } from "@components";
import { Icons } from "@components/types";

import classNames from "classnames";

const types = {
  ...linksType
};

type Props = InferProps<typeof types>;

const LinksBar: FunctionComponent<Props> = memo(props => {
  const { links, onClick } = props;
  const [shrinked, onShrink] = useState(true);

  return (
    <nav
      className={classNames("links-bar", { "links-bar--shrink": shrinked })}
    >
      <header className="links-bar__header">
        <ButtonIcon
          className="btn-primary"
          onClick={() => {
            onShrink(!shrinked);
          }}
        >
          {Icons.MENU}
        </ButtonIcon>
        <SearchBar onChange={() => {}} />
      </header>
      <Links links={links} onClick={onClick} />
    </nav>
  );
});

LinksBar.propTypes = types;
export default LinksBar;
