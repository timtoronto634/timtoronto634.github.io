import { Stack, Typography, Paper, Grid } from '@mui/material';
import workData from '../data/work.yml';

interface SkillCategory {
  [key: string]: string[];
}

interface SkillsData {
  sections: {
    title: string;
    content: SkillCategory[];
  }[];
}

const Title: React.FC = () => (
  <Typography variant="h5" sx={{ p: 1, color: '#4A90E2', fontWeight: 'bold' }}>
    Skills
  </Typography>
);

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategoryComponent: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Stack spacing={2}>
      <Typography variant="h6" sx={{ color: '#333' }}>
        {title}
      </Typography>
      <Grid container spacing={1}>
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Paper
              sx={{
                px: 2,
                py: 1,
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
              }}
            >
              <Typography variant="body1">{skill}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Stack>
  </Paper>
);

export const Skills: React.FC = () => {
  const data = workData as SkillsData;
  const skillsSection = data.sections.find(section => section.title === 'Skills');

  if (!skillsSection) {
    return <Typography>No skills data found</Typography>;
  }

  return (
    <Stack spacing={4}>
      <Title />
      {skillsSection.content.map((categoryObj, index) => {
        const [categoryName, skills] = Object.entries(categoryObj)[0];
        return (
          <SkillCategoryComponent
            key={index}
            title={categoryName}
            skills={skills}
          />
        );
      })}
    </Stack>
  );
};
