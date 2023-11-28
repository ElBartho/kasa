import { Box, BoxTitle } from './banner';

function Banner({ title = '', background }) {
  return (
    <Box background={background}>
      <BoxTitle>{title}</BoxTitle>
    </Box>
  );
}

export default Banner;
