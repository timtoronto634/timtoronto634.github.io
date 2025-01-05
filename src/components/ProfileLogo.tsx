import { Stack, Typography } from '@mui/material';
import a2_logo_square from '/a2_logo_square.png';

export const ProfileLogo: React.FC = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        color: '#333',
      }}
    >
      <img 
        src={a2_logo_square} 
        width={30} 
        height="auto" 
        alt="A2 Logo"
        style={{ objectFit: 'contain' }}
      />
      <Typography 
        variant="h6"
        sx={{ 
          fontWeight: 'medium',
          color: '#4A90E2'
        }}
      >
        Atsuhiro Uchida
      </Typography>
    </Stack>
  );
};
