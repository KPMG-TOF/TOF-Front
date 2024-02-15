import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function AppWidgetSummary({ subject, requirement, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 3,
        py: 5,
        borderRadius: 2,
        ...sx,
      }}
      {...other}
    >

      <Stack spacing={0.5}>
        <Typography fontSize="0.8em" sx={{ color: 'text.disabled' }}>
          {subject}
        </Typography>

        <Typography fontSize="0.9em" fontWeight="bold" sx={{ height: '60px' }}>{requirement}</Typography>
      </Stack>
      {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>}
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  subject: PropTypes.string,
  requirement: PropTypes.string,
};
