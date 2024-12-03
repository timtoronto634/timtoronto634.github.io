import a2_logo_square from '@/assets/a2_logo_square.png';
import { Stack, Typography } from '@mui/material';

export const ProfileLogo = () => {
  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        //  gap: 1,
        direction: 'row',
      }}
    >
      <>
        <img src={a2_logo_square} width={30} height={'auto'} alt='A2 Logo' />
      </>
      <Typography>Atsuhiro Uchida</Typography>
    </Stack>
  );
};
