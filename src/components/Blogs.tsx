import { ListItem, Stack, Typography } from '@mui/material';

export const Blogs = () => {
  return (
    <Stack>
      <Stack>
        <Typography>Japanese</Typography>
        <Stack>
          <ListItem>【AWS re:Invent 2024】</ListItem>
        </Stack>
      </Stack>
      <Stack>
        <Typography>English</Typography>
      </Stack>
    </Stack>
  );
};
