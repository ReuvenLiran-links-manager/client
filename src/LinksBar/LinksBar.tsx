import React, { memo, FunctionComponent } from "react";
import { InferProps } from "prop-types";
import Links, { types as linksType } from "./Links";
import SearchBar from "./SearchBar/SearchBar";
import { ButtonIcon } from '@components';
import { Icons} from '@components/types';

import classNames from "classnames";

const types = {
  ...linksType
};

type Props = InferProps<typeof types>;

const LinksBar: FunctionComponent<Props> = memo(props => {
  const { links, onClick, expanded } = props;
  return (
    <nav
      className={classNames("links-bar", { "links-bar--expanded": expanded })}
    >
      <header className='links-bar__header'>
        <ButtonIcon
          icon={Icons.MENU}
          className="btn-primary"
          onClick={() => {}}
        />
        <SearchBar onChange={() => {}} />
      </header>
      <Links links={links} onClick={onClick} expanded={expanded} />
    </nav>
  );
});

LinksBar.propTypes = types;
export default LinksBar;
