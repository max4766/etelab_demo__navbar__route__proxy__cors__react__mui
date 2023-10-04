import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';


export default function FixedContainer() {


  const [sdate, setSdate] = React.useState(dayjs('2023-01-01'));
  const [edate, setEdate] = React.useState(dayjs('2023-12-31'));
  const [scValue, setScValue] = React.useState('');
  const [isInvidual, setIsInvidual] = React.useState('1');
  const [rows, setRows] = React.useState([]);

  const changeSdate = (date) => {
    setSdate(date);
    console.log(date.format('YYYY-MM-DD'));
  };
  
  const changeEdate = (date) => {
    setEdate(date);
    console.log(date.format('YYYY-MM-DD'));
  };
  
  const changeScValue = (event) => {
    setScValue(event.target.value);
    console.log(event.target.value);
  };
  
  const changeIsInvidual = (event) => {
    setIsInvidual(event.target.value);
    console.log(event.target.value);
  };
  
  const handleSearch = () => {
    
    const data = {
      userNo: 1005, //여기엔 없음
      deptNo: 1, //여기엔 없음
      sdate: sdate.format('YYYY-MM-DD'),
      edate: edate.format('YYYY-MM-DD'),
      scValue: scValue,
      isInvidual: isInvidual,
      workTemplateKey: 1002, //여기엔 없음
      workProgressingStatus: 0, //여기엔 없음
      orderColumn: 'work_id', //여기엔 없음
      orderDesc: 'desc', //여기엔 없음
      draw: 6, //여기엔 없음
      page: 1, //여기엔 없음
      size: 10 //여기엔 없음
    }
        
    axios
      .post('/workProgress/approval/page', new URLSearchParams(data))
      .then((response) => {
        console.log(response.data.data);
        setRows(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });

  };



  const columns = [
    { 
      field: 'num', 
      headerName: '순번', 
      width: 120
    },
    {
      field: 'workId',
      headerName: '업무관리번호',
      width: 180
    },
    {
      field: 'workProgressingStatus',
      headerName: '상태',
      width: 150,
      valueGetter: (params) => {
        switch(params.value) {
          case 1:
            return '완료';
          case 2:
            return '진행중';
          case 3:
            return '대기';
          case 4:
            return '임시저장';
          case 5:
            return '결재반려';
          case 6:
            return '회송/반송';
          case 7:
            return '결재회수';
          default:
            return '';
        }
      }
    },
    {
      field: 'workDeptName',
      headerName: '담당부서',
      width: 150
    },
    {
      field: 'workManagerName',
      headerName: '담당자',
      width: 150
    },
    {
      field: 'workStartDate',
      headerName: '업무시작일자',
      width: 180,
      valueGetter: (params) => {
        const date = new Date(params.value);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month}-${day}`;
      }
    },
    {
      field: 'custName',
      headerName: '고객사',
      width: 150
    },
    {
      field: 'productNumber',
      headerName: '품번',
      width: 150
    },
    {
      field: 'productName',
      headerName: '품명',
      width: 150
    },
    {
      field: 'bbbbbbbbbbbb',
      headerName: '상세화면',
      width: 150,
      renderCell: (params) => (
        <Button variant="contained" color="primary" onClick={() => {}}>
          이동
        </Button>
      )
    }
  ];
  
  const localeText = {
    noRowsLabel: '일치하는 내용이 없습니다.'
  };
  


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="ls">

        <Box sx={{ bgcolor: '#fff', height: '100px' }} />       
        <Stack direction="row" spacing={1} alignItems="center">
          <Tooltip title="메뉴얼 파일 저장" placement="bottom-start" arrow>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <LibraryBooksIcon />
            </IconButton>
          </Tooltip>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography>시험의뢰관리</Typography>
            <Typography>의뢰요청</Typography>
            <Link
              underline="hover"
              color="text.primary"
              href="/contentReqAll"
              aria-current="page"
            >
              전체목록
            </Link>
          </Breadcrumbs>
        </Stack>
        <Box sx={{ bgcolor: '#fff', height: '10px' }} />

        <Card sx={{ maxWidth: '100%', mb: 2 }}>
          <CardHeader
            title="검색조건" sx={{bgcolor: '#1976d2', color: '#fff'}}
          />
          <CardContent>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={4}>
                  <Grid container flexDirection="column">
                    <Grid item>
                      <Typography sx={{ mb:1 }}>
                        검색기간
                      </Typography>
                      <Stack direction="row" alignItems='center' spacing={1}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker sx={{ width: '50%' }} value={sdate} onChange={changeSdate} />
                        </LocalizationProvider> 
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker sx={{ width: '50%' }} value={edate} onChange={changeEdate} />
                        </LocalizationProvider>  
                      </Stack>                    
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Grid container flexDirection="column">
                    <Grid item>
                      <Typography sx={{ mb:1 }}>
                        검색내용
                      </Typography>
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{ 'aria-label': 'weight' }}
                        sx={{ width: '100%' }}
                        placeholder="검색할 내용을 입력하세요."
                        value={scValue}
                        onChange={changeScValue}
                      />                    
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Grid container flexDirection="column">
                    <Grid item>
                      <Typography sx={{ mb:1 }}>
                        업무/결재담당자
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <FormControl sx={{width:'75%'}}>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={isInvidual}
                            onChange={changeIsInvidual}
                          >
                            <FormControlLabel value="1" control={<Radio />} label="본인" />
                            <FormControlLabel value="2" control={<Radio />} label="팀원" />
                          </RadioGroup>
                        </FormControl>
                        <Button variant="contained" sx={{width:'25%'}} onClick={handleSearch}>검색</Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>                               
              </Grid>
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: '100%', mb: 2 }}>
          <CardHeader
            title="검색결과" sx={{bgcolor: '#1976d2', color: '#fff'}}
          />
          <CardContent>
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                getRowId={(row) => row.num}
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                localeText={localeText}
              />
            </Box>
          </CardContent>
        </Card>

        <Box sx={{ bgcolor: '#cfcdfc', height: '500px' }} />
        <Box sx={{ bgcolor: '#cfc1fc', height: '300px' }} />
        <Box sx={{ bgcolor: '#cfe0fc', height: '100px' }} />
      </Container>
    </React.Fragment>
  );
}