import { Typography, Stack, ListItem, ListItemText, Paper } from '@mui/material';
import workData from '../data/work_experience.yml';

interface WorkExperience {
  position: string;
  period: string;
  details: string[];
}

interface WorkData {
  experience: WorkExperience[];
}

// Title Component
interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => (
  <Typography variant="h5" sx={{ p: 1, color: '#4A90E2', fontWeight: 'bold' }}>
    {text}
  </Typography>
);

// Position Component
interface PositionProps {
  position: string;
  period: string;
}

const Position: React.FC<PositionProps> = ({ position, period }) => (
  <Stack>
    <Typography variant="h6" sx={{ color: '#333' }}>
      {position}
    </Typography>
    <Typography variant="subtitle1" sx={{ color: 'grey.600' }}>
      {period}
    </Typography>
  </Stack>
);

// Details Component
interface DetailsProps {
  items: string[];
}

const Details: React.FC<DetailsProps> = ({ items }) => (
  <Stack spacing={1}>
    {items.map((detail, index) => (
      <ListItem key={index} sx={{ pl: 2 }}>
        <ListItemText>
          <Typography variant="body1">• {detail}</Typography>
        </ListItemText>
      </ListItem>
    ))}
  </Stack>
);

const Work: React.FC = () => {
  const data = workData as WorkData;

  if (!data.experience || data.experience.length === 0) {
    return <Typography>No work experience data found</Typography>;
  }

  return (
    <Stack spacing={4}>
      <Title text="Work Experience" />
      {data.experience.map((experience, index) => (
        <Paper key={index} elevation={2} sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Position position={experience.position} period={experience.period} />
            <Details items={experience.details} />
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
};

export default Work;
