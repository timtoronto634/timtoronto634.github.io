import { Stack, Typography, Paper } from '@mui/material';
import educationData from '../data/education.yml';

interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

interface EducationData {
  education: Education[];
}

const Title: React.FC = () => (
  <Typography variant="h5" sx={{ p: 1, color: '#4A90E2', fontWeight: 'bold' }}>
    Education
  </Typography>
);

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Stack spacing={1}>
      <Typography variant="h6" sx={{ color: '#333' }}>
        {education.degree}
      </Typography>
      <Typography variant="subtitle1" sx={{ color: 'grey.600' }}>
        {education.institution}
      </Typography>
      <Typography variant="subtitle2" sx={{ color: 'grey.500' }}>
        {education.period}
      </Typography>
      {education.details && (
        <Stack spacing={1} sx={{ mt: 1 }}>
          {education.details.map((detail, index) => (
            <Typography key={index} variant="body1" sx={{ pl: 2 }}>
              • {detail}
            </Typography>
          ))}
        </Stack>
      )}
    </Stack>
  </Paper>
);

export const Education: React.FC = () => {
  const data = educationData as EducationData;

  if (!data.education || data.education.length === 0) {
    return <Typography>No education data found</Typography>;
  }

  return (
    <Stack spacing={4}>
      <Title />
      {data.education.map((edu, index) => (
        <EducationItem key={index} education={edu} />
      ))}
    </Stack>
  );
};
