import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

import { fToNow } from 'src/utils/format-time';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
}

export default function AppNewsUpdate({ title, subheader, list, ...other }) {
  return (
    <Card style={{ padding: '20px' }} {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>기간</TableCell>
            <TableCell>작성자</TableCell>
            <TableCell>유사도</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{formatDate(row.end_date)}</TableCell>
              <TableCell>{row.manager}</TableCell>
              <TableCell>{row.similarity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

AppNewsUpdate.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

// ----------------------------------------------------------------------

function NewsItem({ news }) {
  const { title, time, name, num } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {title}
      </Typography>

      <Typography sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {time}
      </Typography>

      <Typography sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {name}
      </Typography>

      <Typography sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {num}
      </Typography>

      {/* <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
      />

      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {title}
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box> */}

    </Stack>
  );
}

NewsItem.propTypes = {
  news: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    postedAt: PropTypes.instanceOf(Date),
  }),
};
