import { ListItem, Stack, Typography } from '@mui/material';

export const LanguagesOthers = () => {
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
      <Stack>
        <Typography>Event Attendance</Typography>
        <Stack>
          <ListItem>AWS re:Invent 2024 as a participant</ListItem>
          <ListItem>AWS re:Invent 2023 as a participant</ListItem>
        </Stack>
      </Stack>
    </Stack>
  );
};
