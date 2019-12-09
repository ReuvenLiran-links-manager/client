import React, { memo, useState, FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";

import { InputField, Icon } from "@components";
import { Icons } from "@components/types";

const types = {
  onChange: PropTypes.func.isRequired
};

type Props = InferProps<typeof types>;

const SearchBar: FunctionComponent<Props> = memo(props => {
  const { onChange } = props;
  const [SearchTerm, onSearch] = useState("");
  return (
    <div className="search-bar">
      <Icon>{Icons.SEARCH}</Icon>
      <InputField
        onChange={({ target: { value } }) => {
          onSearch(value);
          onChange(value);
        }}
        value={SearchTerm}
      />
    </div>
  );
});

SearchBar.propTypes = types;
export default SearchBar;
