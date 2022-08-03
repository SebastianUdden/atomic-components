import styled from "styled-components";
import Box from "../../atoms/box/Box";
import Button from "../../atoms/button/Button";

interface Props {
  onClick?: Function;
  center?: boolean;
  color?: string;
  bgColor?: string;
  width?: string;
  height?: string;
  children: React.ReactNode;
}

const Card = ({
  onClick = undefined,
  center,
  color,
  bgColor,
  width,
  height,
  children,
}: Props) => {
  const child = (
    <Box
      center={center}
      color={color}
      bgColor={bgColor}
      width={width}
      height={height}
    >
      {children}
    </Box>
  );
  return onClick ? (
    <CardButton onClick={onClick}>{child}</CardButton>
  ) : (
    <Wrapper>{child}</Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: inline-block;
`;
const CardButton = styled(Button)`
  padding: 0;
`;

export default Card;
