import styled from "styled-components";
import Button from "../../atoms/button/Button";

interface Props {
  bgColor?: string;
  color?: string;
  selectedLink?: string;
  links: string[];
}

const Navbar = ({ bgColor, color, selectedLink, links }: Props) => {
  return (
    <Wrapper>
      {links.map((link) => (
        <Navbutton
          onClick={() => null}
          selected={selectedLink === link}
          bgColor={bgColor}
          color={color}
        >
          {link}
        </Navbutton>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  @media (min-width: 600px) {
    flex-direction: column;
  }
`;
const Navbutton = styled(Button)<{
  bgColor?: string;
  color?: string;
  selected?: boolean;
}>`
  width: 100%;
  background-color: ${(p) => p.bgColor || "#222"};
  color: ${(p) => p.color || "white"};
  box-shadow: none;
  transition: transform 300ms ease, box-shadow 500ms ease, opacity 200ms ease;
  @media (min-width: 600px) {
    margin-bottom: 2px;
  }
  ${(p) =>
    p.selected &&
    `
    transform: translateY(-2px);
    @media (min-width: 600px) {
      transform: translateY(0) translateX(-2px);
    }
  `}
  :hover {
    opacity: 0.93;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transform: translateY(-2px);
    @media (min-width: 600px) {
      transform: translateY(0) translateX(-2px);
    }
  }
  :active {
    box-shadow: none;
    transform: translateY(1px);
    @media (min-width: 600px) {
      transform: translateY(0) translateX(1px);
    }
  }
`;

export default Navbar;
