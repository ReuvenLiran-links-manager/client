import React, { FunctionComponent } from "react";
import { InferProps } from "prop-types";
import { checkEnum } from "@prop-types";

export enum Icons {
  MENU = "menu",
  SEARCH = "search",
  LIST_ADD = "playlist_add"
}

export const checkIcons = {
  isRequired: checkEnum(Icons)
};

const types = {
  children: Icons
};

type bla = {
  children: Record<Icons, string>;
};

type Props = InferProps<typeof types>;

const Icon: FunctionComponent<Props> = props => {
  const { children } = props;
  return <i className="material-icons">{children}</i>;
};

Icon.propTypes = {
  children: checkIcons.isRequired
};
export default Icon;
