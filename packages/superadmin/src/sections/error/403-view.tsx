import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { ForbiddenIllustration } from 'src/assets/illustrations';

import { MotionContainer, varBounce } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function View403() {
  return (
    <MotionContainer
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
      }}
    >
      <m.div variants={varBounce().in}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          No permission
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography sx={{ color: 'text.secondary' }}>
          The page you&apos;re trying access has restricted access.
          <br />
          Please refer to your system administrator
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </Box>
      </m.div>

      <Button component={RouterLink} href="/" size="large" variant="contained">
        Go to Home
      </Button>
    </MotionContainer>
  );
}
