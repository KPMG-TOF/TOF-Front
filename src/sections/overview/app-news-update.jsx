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


// ----------------------------------------------------------------------

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
}

export  function AppNewsUpdate({ title, subheader, list, ...other }) {
  
const background = ['#DEE5F8', '#DEE5F8','#DEE5F8']
const color = ['#8B4513',  '#ADB74D','#3F7D6D']
const maxTitleLength = 20; 

function truncateTitle(itemTitle, maxLength) {
  if (itemTitle.length <= maxLength) {
    return itemTitle;
  }
  const truncatedTitle = itemTitle.slice(0, maxLength);
  const remainingPart = itemTitle.slice(maxLength);
  return (
    <span>
      {truncatedTitle}
      <br />
      {remainingPart}
    </span>
  );
}

  return (
    <Card style={{ padding: '20px' }} {...other}>
    <CardHeader title={title} subheader={subheader} />

      <Table>
        <TableHead>
          <TableRow>
          <TableCell>NO</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>기간</TableCell>
            <TableCell>작성자</TableCell>
            <TableCell>유사도</TableCell>
            <TableCell>키워드</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{truncateTitle(row.title, maxTitleLength)}</TableCell>
              <TableCell>{row.end_date}</TableCell>
              <TableCell>{row.manager}</TableCell>
              <TableCell>{row.similarity}</TableCell>
              <TableCell>
                {row.keyword.map((keyword, keywordIndex) => (
                 <div key={keywordIndex} 
                 style={{
                  backgroundColor: background[keywordIndex], // Light lantern background color
                  padding: '5px',
                  borderRadius: '5px',
                  margin: '5px',
                  textAlign: 'center',  // Center-align text
                  color: '#1841C6',     // Dark lantern text color
                }}>
                 {keyword}
               </div>
                ))}
              </TableCell>
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
    title: PropTypes.string,
    time: PropTypes.string,
    name: PropTypes.string,
    num: PropTypes.string,
  }),
};



// -----------------------------------



export function AppNewsUpdate2({ title, subheader, list, ...other }) {
  return (
    <Card style={{ padding: '20px' }} {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Table>
        <TableHead>
          <TableRow>
          <TableCell>NO</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>기간</TableCell>
            <TableCell>작성자</TableCell>
            <TableCell>link</TableCell>
            <TableCell>File Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{formatDate(row.end_date)}</TableCell>
              <TableCell>{row.manager}</TableCell>
              {row.link ? (
                <TableCell>
                  <a href={row.link} target="_blank" rel="noopener noreferrer">
                    link
                  </a>
                </TableCell>
              ) : (
                <TableCell/>
              )}

            {row.file ? (
                <TableCell>
                  <a href={row.file} target="_blank" rel="noopener noreferrer">
                    Download File
                  </a>
                </TableCell>
              ) : (
                <TableCell/>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

AppNewsUpdate2.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};
