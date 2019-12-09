import React, { memo, FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";
import { Button } from "../components";

const linkShape = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export const types = {
  links: PropTypes.arrayOf(PropTypes.shape(linkShape).isRequired).isRequired,
  onClick: PropTypes.func.isRequired
};

type LinksProps = InferProps<typeof types>;

const linkType = { ...linkShape, onClick: PropTypes.func.isRequired };
type LinkProps = InferProps<typeof linkType>;

const LinkButton: FunctionComponent<LinkProps> = memo(props => {
  const { icon, url, description, onClick } = props;
  return (
    <li>
      <Button
        className="link"
        onClick={() => {
          onClick(url);
        }}
      >
        <span className="link__container">
          <img alt={url} className="link__img" src={icon} />
          <span className="link__text">{description}</span>
        </span>
      </Button>
    </li>
  );
});

LinkButton.propTypes = linkType;

const Links: FunctionComponent<LinksProps> = props => {
  const { links, onClick } = props;
  return (
    <ul className="links">
      {links.map(link => {
        return (
          <LinkButton
            key={link.id}
            id={link.id}
            url={link.url}
            icon={link.icon}
            description={link.description}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

Links.propTypes = types;
export default Links;
