import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
// AppAnalysis.js

import { priorityData, competitivenessData, workforceData } from '/src/data/reference'; // Adjust the path accordingly

export default function AppAnalysis({ title, subheader, list, ...other }) {
  return (
    <Card style={{ padding: '20px' }} {...other}>
      <Box marginBottom={2}>
        <CardHeader title={title} subheader={subheader} />
      </Box>

      <Grid container spacing={1}>
        {/* Priority */}
        <Grid item xs={4}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    우선순위
                    <Box marginBottom={1}>
                      <CardHeader align='center' subheader="NO" />
                    </Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    <br />
                    <Box marginBottom={1}>
                      <CardHeader align='center' subheader="PROJECT" />
                    </Box>
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    <br />

                  </Typography>
                </TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {priorityData.map((item) => (
                <TableRow key={item.no}>
                  <TableCell align='center'>{item.no}</TableCell>
                  <TableCell align='center'>{item.title}</TableCell>
                  <TableCell align='center'> </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>

        {/* Competitiveness */}
        <Grid item xs={4}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    경쟁력
                    <Box marginBottom={1}>
                      <CardHeader align='center' subheader="NO" />
                    </Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    <br />
                    <Box marginBottom={1}>
                      <CardHeader align='center' subheader="TITLE" />
                    </Box>
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    <br />

                  </Typography>
                </TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {competitivenessData.map((item) => (
                <TableRow key={item.no}>
                  <TableCell align='center'>{item.no}</TableCell>
                  <TableCell align='center'>{item.title}</TableCell>
                  <TableCell align='center'> </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>

        {/* Workforce */}
        <Grid item xs={4}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    필요인력
                    <Box marginBottom={1}>
                      <CardHeader align='center' subheader="NO" />
                    </Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    <br />
                    <Box marginBottom={1}>
                      <CardHeader align='center' subheader="TITLE" />
                    </Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    <br />
                    <Box marginBottom={1}>
                      <CardHeader align='center' subheader="PEOPLE" />
                    </Box>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workforceData.map((item) => (
                <TableRow key={item.no}>
                  <TableCell align='center'>{item.no}</TableCell>
                  <TableCell align='center'>{item.title}</TableCell>
                  <TableCell align='center'>{item.people}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Card>
  );
}

AppAnalysis.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};
