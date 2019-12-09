import React, { memo, useState, FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";

import { Icons } from "@components/types";
import { InputFieldText, Icon } from "@components";

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
      <InputFieldText
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
