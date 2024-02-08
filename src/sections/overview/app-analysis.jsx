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
        <CardHeader title={title} subheader={subheader} />

        <Grid container spacing={1}>
            <Grid item xs={4}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>NO</TableCell>
                        <TableCell>PROJECT</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>클라우드 인프라 구축</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Grid>
            <Grid item xs={4}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>NO</TableCell>
                        <TableCell>PROJECT</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>클라우드 인프라 구축</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Grid>
            <Grid item xs={4}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>NO</TableCell>
                        <TableCell>PROJECT</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>클라우드 인프라 구축</TableCell>
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