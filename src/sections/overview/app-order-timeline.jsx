import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';


import { fDateTime } from 'src/utils/format-time';

// ----------------------------------------------------------------------

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
}

export default function AnalyticsOrderTimeline({ title, subheader, list, list2, ...other }) {
  return (
    <Card style={{ padding: '1em' }} {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                회사
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ fontSize: '1em' }}>
                {list2.company}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                사업기간
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ fontSize: '1em' }}>
                {formatDate(list.start_date)}-{formatDate(list.end_date)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                주제
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ fontSize: '1em' }}>
              {list.subject.map((row, index) => (
                <div key={index}>
                  {row}
                </div>
              ))}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                요구사항
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{ fontSize: '1em' }}>
              {list.requirement.map((row, index, array) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  {index + 1}. {row}
                </div>
              ))}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
}

AnalyticsOrderTimeline.propTypes = {
  list: PropTypes.array,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function OrderItem({ item, lastTimeline }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color={
            (type === 'order1' && 'primary') ||
            (type === 'order2' && 'success') ||
            (type === 'order3' && 'info') ||
            (type === 'order4' && 'warning') ||
            'error'
          }
        />
        {lastTimeline ? null : <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>

        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

OrderItem.propTypes = {
  item: PropTypes.object,
  lastTimeline: PropTypes.bool,
};
