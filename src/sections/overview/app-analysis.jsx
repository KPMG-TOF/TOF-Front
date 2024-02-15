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
                <TableCell align='center'>클라우드 기반 전자결제 서비스 구성</TableCell>
                <TableCell align='center'> </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>2</TableCell>
                <TableCell align='center'>클라우드 서비스 안정성 확보</TableCell>
                <TableCell align='center'> </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>3</TableCell>
                <TableCell align='center'>국내외 클라우드 및 전자금융 관리규정 준수</TableCell>
                <TableCell align='center'> </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>4</TableCell>
                <TableCell align='center'>서비스 운영에 대한 기술적 지원 및 추후관리</TableCell>
                <TableCell align='center'> </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>5</TableCell>
                <TableCell align='center'>규정 최신화에 따른 고려사항 식별 가이드 제공</TableCell>
                <TableCell align='center'> </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>6</TableCell>
                <TableCell align='center'>보안 위협 시나리오 및 해결방법 도출</TableCell>
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
                <TableCell align='center'>해외 개인정보 관련 법률 전문가</TableCell>
                <TableCell align='center'>1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>2</TableCell>
                <TableCell align='center'>ISO27001/27701, ISMS-P 등의 인증심사원 자격을 지닌 개인정보 전문가</TableCell>
                <TableCell align='center'>2</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>3</TableCell>
                <TableCell align='center'>AWS 클라우드 아키텍처 전문가</TableCell>
                <TableCell align='center'>2</TableCell>
              </TableRow> 
              <TableRow>
                <TableCell align='center'>4</TableCell>
                <TableCell align='center'>AWS 클라우드 보안 전문가</TableCell>
                <TableCell align='center'>1</TableCell>
              </TableRow> 
              <TableRow>
                <TableCell align='center'>5</TableCell>
                <TableCell align='center'>금융권 인프라 구축 및 보안 프로젝트 경력자</TableCell>
                <TableCell align='center'>1</TableCell>
              </TableRow> 
              <TableRow>
                <TableCell align='center'>6</TableCell>
                <TableCell align='center'>시스템 엔지니어</TableCell>
                <TableCell align='center'>1</TableCell>
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
