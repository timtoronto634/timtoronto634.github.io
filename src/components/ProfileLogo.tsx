import { Stack, Typography, SxProps, Theme } from '@mui/material';
import a2_logo_square from '/a2_logo_square.png';

interface ProfileLogoProps {
  sx?: SxProps<Theme>;
}

export const ProfileLogo: React.FC<ProfileLogoProps> = ({ sx }) => {
  return (
    <Stack
      direction='row'
      spacing={2}
      sx={{
        ...sx,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#333',
      }}
    >
      <img
        src={a2_logo_square}
        width={30}
        height='auto'
        alt='A2 Logo'
        style={{ objectFit: 'contain' }}
      />
      <Typography
        variant='h6'
        sx={{
          fontWeight: 'medium',
          color: '#4A90E2',
        }}
      >
        Atsuhiro Uchida
      </Typography>
    </Stack>
  );
};
