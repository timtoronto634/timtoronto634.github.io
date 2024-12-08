import { Typography, Stack } from '@mui/material';

export const Home = () => {
  return (
    <Stack
      sx={{
        alignItems: 'center',
        direction: 'column',
      }}
    >
      <Stack>Hello, I'm A2, Atsuhiro Uchida</Stack>
      <Stack>
        <Typography>X / Twitter</Typography>
        <Typography>Linkedin</Typography>
        <Typography>Github</Typography>
      </Stack>
    </Stack>
  );
};
