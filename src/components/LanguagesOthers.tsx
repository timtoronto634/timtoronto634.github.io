import { Stack, Typography, Paper, LinearProgress, Box, Link } from '@mui/material';

interface Language {
  name: string;
  level: string;
  proficiency: number; // 0-100
}

interface Event {
  name: string;
  role: string;
  date: string;
  location?: string;
  description?: string;
}

interface OSSContribution {
  project: string;
  description: string;
  link: string;
  status: string;
  date: string;
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
            {event.date} - {event.role}
          </Typography>
          {event.description && (
            <Typography variant="body2" sx={{ color: 'grey.600', mt: 0.5 }}>
              {event.description}
            </Typography>
          )}
          {event.location && (
            <Typography variant="body2" sx={{ color: 'grey.600', mt: 0.5 }}>
              {event.location}
            </Typography>
          )}
        </Box>
      ))}
    </Stack>
  </Paper>
);

const OSSSection: React.FC<{ contributions: OSSContribution[] }> = ({ contributions }) => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant="h6" sx={{ color: '#333', mb: 3 }}>
      OSS Contributions
    </Typography>
    <Stack spacing={2}>
      {contributions.map((contribution, index) => (
        <Box key={index}>
          <Typography variant="subtitle1" sx={{ color: '#333' }}>
            {contribution.project}
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.600' }}>
            {contribution.description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.600' }}>
            Status: {contribution.status} ({contribution.date})
          </Typography>
          <Link href={contribution.link} target="_blank" rel="noopener noreferrer" sx={{ mt: 0.5, display: 'block' }}>
            View Pull Requests
          </Link>
        </Box>
      ))}
    </Stack>
  </Paper>
);

export const LanguagesOthers: React.FC = () => {
  const languages: Language[] = [
    { name: 'Japanese', level: 'Native', proficiency: 100 },
    { name: 'English', level: 'Proficient', proficiency: 85 },
  ];

  const events: Event[] = [
    { name: 'AWS re:Invent 2024', role: 'Participant', date: '2024' },
    { 
      name: 'Go Conference', 
      role: 'Event Management Staff', 
      date: '2023', 
      location: 'Tokyo, Japan', 
      description: 'Assisted in organizing and managing the Go programming language conference' 
    },
    { name: 'AWS re:Invent 2023', role: 'Participant', date: '2023' },
  ];

  const contributions: OSSContribution[] = [
    {
      project: "rubocop/rubocop",
      description: "RuboCop is a Ruby static code analyzer (a.k.a. linter) and code formatter.",
      link: "https://github.com/rubocop/rubocop/pulls?q=is%3Apr+author%3Atimtoronto634",
      status: "Merged",
      date: "2023"
    }
  ];

  return (
    <Stack spacing={4}>
      <Title />
      <LanguageSection languages={languages} />
      <EventsSection events={events} />
      <OSSSection contributions={contributions} />
    </Stack>
  );
};
