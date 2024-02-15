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
              <TableRow>
                <TableCell align='center'>2</TableCell>
                <TableCell align='center'>오프라인 결제 서비스 운영서비스 구축</TableCell>
                <TableCell align='center'> </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>3</TableCell>
                <TableCell align='center'>오프라인 결제 서비스 정산서비스 구축</TableCell>
                <TableCell align='center'> </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>4</TableCell>
                <TableCell align='center'>구축 종료 후 클라우드 서비스 운영</TableCell>
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
                   
                  </Typography>
                </TableCell>
            
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='center'>1</TableCell>
                <TableCell align='center'>클라우드 <br/>인프라 구축 상위 2%</TableCell>
                <TableCell align='center'> </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>2</TableCell>
                <TableCell align='center'>IT 컨설팅 경험</TableCell>
                <TableCell align='center'> </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>3</TableCell>
                <TableCell align='center'>금융 기업 관련 클라우드 전산망 구축</TableCell>
                <TableCell align='center'> </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>4</TableCell>
                <TableCell align='center'>테스트배드 구축</TableCell>
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
                        <CardHeader align='center' subheader="TITLE"/>
                    </Box>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    <br/>
                    <Box marginBottom={1}> 
                        <CardHeader align='center'subheader="PEOPLE"/>
                    </Box>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='center'>1</TableCell>
                <TableCell align='center'>클라우드 <br/> 인프라 구축</TableCell>
                <TableCell align='center'>3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>2</TableCell>
                <TableCell align='center'>서비스 <br/> 운영 개발</TableCell>
                <TableCell align='center'>2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>3</TableCell>
                <TableCell align='center'>클라우드<br/>보안</TableCell>
                <TableCell align='center'>1</TableCell>
              </TableRow> 
              <TableRow>
                <TableCell align='center'>4</TableCell>
                <TableCell align='center'>사후 관리</TableCell>
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
