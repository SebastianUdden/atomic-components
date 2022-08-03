import styled from "styled-components";

interface Props {
  width: string;
  height: string;
  src: string;
}

const Video = ({ src, width = "100%", height = "100%" }: Props) => {
  // muted is required for autoPlay to work
  return (
    <Wrapper width={width} height={height} autoPlay muted controls loop>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </Wrapper>
  );
};

const Wrapper = styled.video`
  font-family: Helvetica, Arial, sans-serif;
`;

export default Video;
