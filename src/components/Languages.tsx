import { ListItem, Stack, Typography } from '@mui/material';

export const Languages = () => {
  return (
    <Stack>
      <Stack>
        <Typography>Languages</Typography>
        <Stack>
          <ListItem>Japanese: Native</ListItem>
          <ListItem>English: Proficient</ListItem>
        </Stack>
      </Stack>
      <Stack>
        <Typography>OSS Contribution</Typography>
      </Stack>
    </Stack>
  );
};
