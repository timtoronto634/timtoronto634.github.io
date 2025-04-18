import { Stack, Typography, Paper, Grid } from '@mui/material';
import skillsData from '../data/skills.yml';

interface SkillCategory {
  category: string;
  items: string[];
}

interface SkillsData {
  skills: SkillCategory[];
}

const Title: React.FC = () => (
  <Typography variant='h5' sx={{ p: 1, color: '#4A90E2', fontWeight: 'bold' }}>
    Skill
  </Typography>
);

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategoryComponent: React.FC<SkillCategoryProps> = ({ title, skills }) => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Stack spacing={2}>
      <Typography variant='h6' sx={{ color: '#333' }}>
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
              <Typography variant='body1'>{skill}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Stack>
  </Paper>
);

export const Skill: React.FC = () => {
  const data = skillsData as SkillsData;

  if (!data.skills || data.skills.length === 0) {
    return <Typography>No skills data found</Typography>;
  }

  return (
    <Stack spacing={4}>
      <Title />
      {data.skills.map((category, index) => (
        <SkillCategoryComponent key={index} title={category.category} skills={category.items} />
      ))}
    </Stack>
  );
};
