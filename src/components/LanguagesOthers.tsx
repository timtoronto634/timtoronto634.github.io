import { Stack, Typography, Paper, LinearProgress, Box } from '@mui/material';

interface Language {
  name: string;
  level: string;
  proficiency: number; // 0-100
}

interface Event {
  name: string;
  role: string;
  year: string;
}

const Title: React.FC = () => (
  <Typography variant="h5" sx={{ p: 1, color: '#4A90E2', fontWeight: 'bold' }}>
    Languages & Activities
  </Typography>
);

const LanguageSection: React.FC<{ languages: Language[] }> = ({ languages }) => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant="h6" sx={{ color: '#333', mb: 3 }}>
      Languages
    </Typography>
    <Stack spacing={2}>
      {languages.map((lang, index) => (
        <Box key={index}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="subtitle1" sx={{ color: '#333' }}>
              {lang.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.600' }}>
              {lang.level}
            </Typography>
          </Stack>
          <LinearProgress
            variant="determinate"
            value={lang.proficiency}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: 'rgba(74, 144, 226, 0.1)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#4A90E2',
                borderRadius: 4,
              },
            }}
          />
        </Box>
      ))}
    </Stack>
  </Paper>
);

const EventsSection: React.FC<{ events: Event[] }> = ({ events }) => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant="h6" sx={{ color: '#333', mb: 3 }}>
      Event Attendance
    </Typography>
    <Stack spacing={2}>
      {events.map((event, index) => (
        <Box key={index}>
          <Typography variant="subtitle1" sx={{ color: '#333' }}>
            {event.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.600' }}>
            {event.year} - {event.role}
          </Typography>
        </Box>
      ))}
    </Stack>
  </Paper>
);

const OSSSection: React.FC = () => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant="h6" sx={{ color: '#333', mb: 3 }}>
      OSS Contributions
    </Typography>
    <Typography variant="body1" sx={{ color: 'grey.600' }}>
      Actively contributing to open-source projects. Details coming soon...
    </Typography>
  </Paper>
);

export const LanguagesOthers: React.FC = () => {
  const languages: Language[] = [
    { name: 'Japanese', level: 'Native', proficiency: 100 },
    { name: 'English', level: 'Proficient', proficiency: 85 },
  ];

  const events: Event[] = [
    { name: 'AWS re:Invent 2024', role: 'Participant', year: '2024' },
    { name: 'AWS re:Invent 2023', role: 'Participant', year: '2023' },
  ];

  return (
    <Stack spacing={4}>
      <Title />
      <LanguageSection languages={languages} />
      <EventsSection events={events} />
      <OSSSection />
    </Stack>
  );
};
