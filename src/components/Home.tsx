import { Typography, Stack, Link, Avatar, Paper, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import generalInfo from '../data/general_info.yml';

interface Contact {
  mail?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

interface GeneralInfo {
  name: string;
  title: string;
  contacts: Contact[];
}

const SocialLinks: React.FC<{ contacts: Contact[] }> = ({ contacts }) => {
  const contact = contacts[0]; // Assuming first contact object has all links
  
  return (
    <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
      {contact.github && (
        <IconButton
          component={Link}
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#333' }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      )}
      {contact.linkedin && (
        <IconButton
          component={Link}
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#0077b5' }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
      )}
      {contact.twitter && (
        <IconButton
          component={Link}
          href={contact.twitter}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#1DA1F2' }}
        >
          <TwitterIcon fontSize="large" />
        </IconButton>
      )}
      {contact.mail && (
        <IconButton
          component={Link}
          href={`mailto:${contact.mail}`}
          sx={{ color: '#EA4335' }}
        >
          <EmailIcon fontSize="large" />
        </IconButton>
      )}
    </Stack>
  );
};

export const Home: React.FC = () => {
  const data = generalInfo as GeneralInfo;

  if (!data.name || !data.title) {
    return <Typography>No general info found</Typography>;
  }

  const { name, title: jobTitle, contacts } = data;

  return (
    <Stack
      sx={{
        alignItems: 'center',
        spacing: 4,
        maxWidth: 800,
        mx: 'auto',
        pt: 4,
      }}
    >
      <Avatar
        src="images/Myself.jpg"
        alt={name}
        sx={{
          width: 200,
          height: 200,
          mb: 3,
          border: '4px solid #4A90E2',
        }}
      />
      
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center', width: '100%' }}>
        <Typography variant="h3" sx={{ mb: 2, color: '#333' }}>
          {name}
        </Typography>
        <Typography variant="h5" sx={{ mb: 3, color: '#666' }}>
          {jobTitle}
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3, color: '#666', maxWidth: 600, mx: 'auto' }}>
          I'm a passionate software engineer with expertise in full-stack development,
          focusing on creating efficient and scalable solutions. I enjoy working with
          modern technologies and contributing to innovative projects.
        </Typography>

        {contacts && <SocialLinks contacts={contacts} />}
      </Paper>
    </Stack>
  );
};
