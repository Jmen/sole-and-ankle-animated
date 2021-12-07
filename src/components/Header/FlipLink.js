import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

export const FlipLink = (props) => {
    return (
        <LinkWrapper>
            <NavLinkFront href="/sale">{props.children}</NavLinkFront>
            <NavLinkBack href="/sale">{props.children}</NavLinkBack>
        </LinkWrapper>
    );
}

const NavLinkFront = styled.a`
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  transition: transform 750ms;
  will-change: transform;
  
  backface-visibility: hidden;
`;

const NavLinkBack = styled.a`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.bold};

  transition: transform 750ms;
  will-change: transform;
  
  backface-visibility: hidden;
  transform: rotateX(180deg);
`;

const LinkWrapper = styled.div`
  position: relative;
  perspective: 500px;
  
  &:hover ${NavLinkFront} {
    transform: rotateX(180deg);
  }

  &:hover ${NavLinkBack} {
    transform: rotateX(0deg);
  }
`;