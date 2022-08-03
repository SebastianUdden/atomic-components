import styled from "styled-components";

interface Props {
  center?: boolean;
  width?: string;
  height?: string;
  color?: string;
  bgColor?: string;
  children: React.ReactNode;
}

const Box = ({ center, width, height, color, bgColor, children }: Props) => {
  return (
    <Wrapper
      center={center}
      width={width}
      height={height}
      color={color}
      bgColor={bgColor}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  center?: boolean;
  width?: string;
  height?: string;
  color?: string;
  bgColor?: string;
}>`
  font-family: Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  background-color: ${(p) => p.bgColor || "inherit"};
  color: ${(p) => p.color || "inherit"};
  width: ${(p) => p.width || "inherit"};
  height: ${(p) => p.height || "inherit"};
  padding: 20px;
  ${(p) =>
    p.center &&
    `
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`;

export default Box;
