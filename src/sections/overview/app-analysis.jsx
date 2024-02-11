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

import { fToNow } from 'src/utils/format-time';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

export default function AppAnalysis({ title, subheader, list, ...other }) {
  return (
    <Card style={{ padding: '20px' }} {...other}>
      <Box marginBottom={2}> 
        <CardHeader title={title} subheader={subheader} />
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={4}>
        <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    우선순위
                    <Box marginBottom={1}> 
                        <CardHeader align='center' subheader="NO"/>
                    </Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    <br/>
                    <Box marginBottom={1}> 
                        <CardHeader align='center' subheader="PROJECT"/>
                    </Box>
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    <br/>
                    <Box marginBottom={1}> 
                        <CardHeader align='center' subheader="     "/>
                    </Box>
                  </Typography>
                </TableCell>
            
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='center'>1</TableCell>
                <TableCell align='center'>클라우드 인프라 구축</TableCell>
                <TableCell align='center'> </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>

        <Grid item xs={4}>
        <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    경쟁력
                    <Box marginBottom={1}> 
                        <CardHeader align='center' subheader="NO"/>
                    </Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    <br/>
                    <Box marginBottom={1}> 
                        <CardHeader align='center' subheader="TITLE"/>
                    </Box>
                  </Typography>
                </TableCell>

                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    <br/>
                    <Box marginBottom={1}> 
                        <CardHeader align='center' subheader="     "/>
                    </Box>
                  </Typography>
                </TableCell>
            
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='center'>1</TableCell>
                <TableCell align='center'>클라우드 인프라 구축 상위 2%</TableCell>
                <TableCell align='center'> </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>

        <Grid item xs={4}>
        <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    필요인력
                    <Box marginBottom={1}> 
                        <CardHeader align='center' subheader="NO"/>
                    </Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    <br/>
                    <Box marginBottom={1}> 
                        <CardHeader align='center' subheader="분야"/>
                    </Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    <br/>
                    <Box marginBottom={1}> 
                        <CardHeader align='center'subheader="인원"/>
                    </Box>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='center'>1</TableCell>
                <TableCell align='center'>클라우드 인프라 구축</TableCell>
                <TableCell align='center'>3</TableCell>
              </TableRow>
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
