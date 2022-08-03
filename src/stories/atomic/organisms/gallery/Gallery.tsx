import React from "react";
import styled from "styled-components";

interface Props {
  columns?: number;
  gap?: string;
  items: React.ReactNode[];
}

const Gallery = ({ columns = 3, gap = "5px", items }: Props) => {
  return (
    <Wrapper columns={columns} gap={gap}>
      {items.map((item) => item)}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ columns: number; gap: string }>`
  display: grid;
  grid-template-columns: ${(p) => `repeat(${p.columns}, 1fr)`};
  grid-gap: ${(p) => p.gap};
`;

export default Gallery;
