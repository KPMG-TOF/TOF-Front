import { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';


import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import TableNoData from '../table-no-data';
import UserTableRow from '../user-table-row';
import UserTableHead from '../user-table-head';
import TableEmptyRows from '../table-empty-rows';
import UserTableToolbar from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import RFPpopup from '../RFP-Popup';
import {ref_list, ref_update_progress, ref_delete_progress, ref_file_upload} from '../../../apis/rfplist';

// ----------------------------------------------------------------------
// 수정 RFP LIST

export default function UserPage() {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('id');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [rfpList, setrfpList] = useState([]);

  const [openPopup, setOpenPopup] = useState(false);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rfpList.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

 const handleStatusChange = async (no, newStatus) => {
    setrfpList((currentList) =>
      currentList.map((item) =>
        item.no === no ? { ...item, status: newStatus } : item
      )
    );

    const res = await ref_update_progress(no);
    if (res.data.result === "success") {
      console.log("res: ", res.data.result);
    }

  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };


  useEffect(() => {
    const initFetch = async () => {
      const fetchedData = await fetchrfpdump();
      setrfpList(fetchedData);
    };
  
    initFetch();
  }, []);

  const handlePopup = () => {
    setOpenPopup(!openPopup);
  };
  

  const fetchrfpdump = async () => {
    try {

      // const res = await ref_list();
      // if (res.data.result === "success") {
      //   const rfpdumpData =res.data.rfp_list;

      const res = await ref_list();
      if (res.data.result === "success") {
        const rfpdumpData =res.data.rfp_list;
      
      // const rfpdumpData = [
      //   { id: '1', name: 'RFP title1', upload_date: '2024.04.02', progress: true},
      //   { id: '2', name: 'RFP title2', upload_date: '2024.04.08', progress: true},
      //   // 여기에 더 많은 더미 데이터 객체 추가
      //       ];

      const rfpdump = rfpdumpData.map(rfp => ({
        no: rfp.id,
        name: rfp.file, 
        date: rfp.upload_date,
        status: rfp.progress,
        link: `http://localhost:3030/rfp`
      }));

      return rfpdump;
    }
    return [];
    } catch (error) {
      console.error('사용자 데이터를 불러오는 데 실패했습니다.', error);
      return []; // 에러 발생 시 빈 배열 반환
    }
  };

  const dataFiltered = applyFilter({
    inputData: rfpList,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">RFP List</Typography>

        <Button 
          variant="contained" 
          color="inherit" 
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => {
            console.log('Opening popup');
            setOpenPopup(true);
          }}
        >
          New RFP
        </Button>
      </Stack>

       <RFPpopup openPopup={openPopup} handlePopup={handlePopup} />

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                rowCount={rfpList.length}
                numSelected={selected.length}
                onRequestSort={handleSort}
                onSelectAllClick={handleSelectAllClick}
                headLabel={[
                  { id: 'no', label: 'No' },
                  { id: 'name', label: 'Title'},
                  { id: 'date', label: '업로드 날짜', align: 'center' },
                  { id: 'status', label: '진행여부' },
                  { id: 'link', label: '바로가기' },
                  { id: '' },
                ]}
              />
              <TableBody>
              {dataFiltered
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <UserTableRow
                      key={row.no}
                      no={row.no}
                      name={row.name}
                      date={row.date}
                      status={row.status}
                      link={row.link}
                      selected={selected.indexOf(row.name) !== -1}
                      handleClick={(event) => handleClick(event, row.name)}
                      handleStatusChange={handleStatusChange}
                    />
                ))}

                <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, rfpList.length)}
                />

                {notFound && <TableNoData query={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={rfpList.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}