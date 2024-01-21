import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import QuestionPage from '../components/QuestionPage';
import DebtsQuestionPage from '../components/debtsQuestionPage';
import AssetsQuestionPage from '../components/assetsQuestionPage';
import { IconCurrencyDollar } from '@tabler/icons-react';
import InputAdornment from '@mui/material/InputAdornment';
import { Typography, useTheme, MenuItem, Select, TextField, Button, Checkbox, FormControlLabel, InputBase, InputLabel } from '@mui/material';
import { Box, styled } from '@mui/system';
import { alpha } from '@mui/material/styles';
import './button.sass';
// import AssetsQuestionPage from '../components/assetsQuestionPage';

function Home() {
  const theme = useTheme();
  const [page, setPage] = useState<number>(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState<any>(0);
  const [annualIncome, setAnnualIncome] = useState<any>(0);
  const [houseValue, setHouseValue] = useState<any>(0)
  const [financialGoal, setfinancialGoal] = useState('--Select--');
  const [debts, setDebts] = useState<any>([])
  const [rentBoolean, setRentBoolean]= useState<boolean>(false)
  const [rent, setRent] = useState<any>(0)
  const [activities, setActivities] = useState<any>(0)
  const [expenses, setExpenses ] = useState<any>(0)
  const [FHSA , setFHSA] = useState<any>(0);
  const [TFSA , setTFSA] = useState<any>(0);
  const [RRSP , setRRSP] = useState<any>(0);
  const [prevState, setPrev] = useState(false);

  const containerStyles={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    flexDirection: theme.breakpoints.down('sm') ? 'column' : 'row',
  };

  const contentStyles = {
    maxWidth: '500px',
    textAlign: theme.breakpoints.down('sm') ? 'center' : 'left',
  };

  const BootstrapInput = styled(InputBase)(({ theme :any}) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: 'rgba(227,246,230)',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 16,
      width: '100%',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  
  return (<>
    <div style={{ margin: 0, display:'flex', backgroundColor: '#f9f8f7',flexDirection:'column', width: '100%', height: '100vh', alignItems:'center', overflow:'hidden'}}>
      {page !== 0 && <QuestionPage page={page}/>}
      <AnimatePresence>
      {page ===0 &&
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '99%', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{width: '50%', justifyContent: 'center',alignItems:'center', display: 'flex', flexDirection:'column', padding: 20}}>
          <div className="button-component">
            OUR GOAL IS SIMPLE
          </div>
          <div style={{fontSize: 36, fontWeight: 'bold', color: 'rgb(14, 0, 74)', marginBottom: 10}}>
            Unlock Your Financial Future           
          </div>
          <div style={{fontSize: 15, color: 'gray', marginBottom: 20, textAlign:'center'}}>
            Discover the power of [Your App Name], the all-in-one financial prediction and planning app designed for forward-thinking individuals. Streamline your financial journey and gain a comprehensive view of your finances over the years with our intuitive timeline feature         
          </div>
          <div style={{display:'flex',width: '100%', justifyContent:'center', alignItems:'center'}}>
            <div >
              <a href="#" className="cta" onClick={()=> {setPage((prev)=>{return prev+1})}}>
            <span>Click me</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
            </a>
            </div>
          </div>
        </div>
        <div style={{width: '50%'}}>
        <img src="https://safi.org/assets/images/image05.png?v=2bf77cb1" width={'100%'} style={{maxHeight: '100%'}}/>
        </div>
      </div>
      }
      {page ===1 && <motion.div
        key={1}
        style={{position:'absolute', marginTop: 50}}
        initial={{ opacity: 0 , x: prevState ? -700: 700 }}
        animate={{ opacity: 1 , x: 0}}
        exit={{ opacity: 0 , x: prevState ? 700: -700}}
      >
        
        <div style={{ boxShadow: " rgba(0, 0, 0, 0.04) 0px 0px 8px 0px, rgba(0, 0, 0, 0.02) 0px 0px 4px 0px, rgba(0, 0, 0, 0.04) 0px 0px 1px 1px", width: '350px', height: '375px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'50px', padding: '20px', borderRadius: '10px' }}>
          <div style= {{fontFamily: 'FuturaPT, sans-serif', color:'black',fontWeight:'bold', fontSize: '20px',textAlign: 'center', lineHeight: 1.2, marginBottom: 10, padding: 10, borderBottom: '1px dotted gray'}}>Personal Information</div>
          <div style={{textAlign:'left', width:'100%'}}>
            <InputLabel htmlFor="bootstrap-input">
              Name
            </InputLabel>
          </div>
          
          <BootstrapInput
            fullWidth
            defaultValue={name}
            onBlur={(event) => setName(event.currentTarget.value)}
            style={{ margin: '8px 0px'}} />

          <div style={{textAlign:'left', width:'100%'}}>
            <InputLabel htmlFor="bootstrap-input">
              Age
            </InputLabel>
          </div>
          
          <BootstrapInput
            fullWidth
            defaultValue={age}
            inputProps={{ type: 'number' }}
            onBlur={(event: any) => setAge(event.currentTarget.value)}
            style={{ margin: '8px 0px'}} />

          <div style={{textAlign:'left', width:'100%'}}>
            <InputLabel htmlFor="bootstrap-input">
              Annual Income
            </InputLabel>
          </div>
          
          <BootstrapInput
            fullWidth
            inputProps={{ type: 'number' }}
            defaultValue={annualIncome}
            onBlur={(event: any) => setAnnualIncome(event.currentTarget.value)}
            style={{ margin: '8px 0px'}} />
        </div>
        </motion.div>
      }
      {page ===2 && <motion.div
        key={2}
        style={{position:'absolute', marginTop: 50}}
        initial={{ opacity: 0 , x: prevState ? -700: 700 }}
        animate={{ opacity: 1 , x: 0}}
        exit={{ opacity: 0 , x: prevState ? 700: -700}}><div style={{ boxShadow: " rgba(0, 0, 0, 0.04) 0px 0px 8px 0px, rgba(0, 0, 0, 0.02) 0px 0px 4px 0px, rgba(0, 0, 0, 0.04) 0px 0px 1px 1px", width: '350px', height: '375px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'50px', padding: '20px', borderRadius: '10px' }}>
          <h2 style={{fontFamily: 'FuturaPT, sans-serif', color:'black',fontWeight:'bold', fontSize: '20px',textAlign: 'center', lineHeight: 1.2, marginBottom: 10, padding: 10, borderBottom: '1px dotted gray'}}>Financial Goal</h2>
          
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={financialGoal}
            label="Financial Goal"
            onChange={(event: any) => setfinancialGoal(event.target.value as string)}
            style={{ margin: '8px 0px', width: '310px', backgroundColor: 'rgb(227, 246, 230)' }}

          >
            <MenuItem value={'--Select--'}>--Select--</MenuItem>
            <MenuItem value={'Get My Dream House'}>Get My Dream House</MenuItem>
            <MenuItem value={'PD'}>Pay off Debt</MenuItem>
            <MenuItem value={'RP'}>Retirement plan</MenuItem>
            <MenuItem value={'LTI'}> Long-term Investment </MenuItem>
          </Select>
          {financialGoal === 'Get My Dream House' &&
            <div>
              <div style={{textAlign:'left', width:'100%'}}>
                  <InputLabel htmlFor="bootstrap-input">
                    House Price
                  </InputLabel>
                </div>
              <BootstrapInput
                fullWidth
                defaultValue={name}
                onBlur={(event) => setHouseValue(event.currentTarget.value)}
                style={{ margin: '8px 0px'}} />
            </div>
            
            }
        </div>

</motion.div> }
      {page ===3 && <motion.div
        key={3}
        style={{position:'absolute', marginTop: 50}}
        initial={{ opacity: 0 , x: prevState ? -700: 700 }}
        animate={{ opacity: 1 , x: 0}}
        exit={{ opacity: 0 , x: prevState ? 700: -700}}><div style={{ boxShadow: " rgba(0, 0, 0, 0.04) 0px 0px 8px 0px, rgba(0, 0, 0, 0.02) 0px 0px 4px 0px, rgba(0, 0, 0, 0.04) 0px 0px 1px 1px", width: '350px', height: '375px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'50px', padding: '20px', borderRadius: '10px'}}>
          <DebtsQuestionPage />
        </div></motion.div> }
      {page ===4 && <motion.div
        key={4}
        style={{position:'absolute', marginTop: 50}}
        initial={{ opacity: 0 , x: prevState ? -700: 700 }}
        animate={{ opacity: 1 , x: 0}}
        exit={{ opacity: 0 , x: prevState ? 700: -700}}><div style={{ boxShadow: " rgba(0, 0, 0, 0.04) 0px 0px 8px 0px, rgba(0, 0, 0, 0.02) 0px 0px 4px 0px, rgba(0, 0, 0, 0.04) 0px 0px 1px 1px", width: '350px', height: '375px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'50px', padding: '20px', borderRadius: '10px' }}>
          <AssetsQuestionPage />
        </div></motion.div> }
      {page ===5 && <motion.div
      style={{position:'absolute', marginTop: 50}}
      key={5}
      initial={{ opacity: 0 , x: prevState ? -700: 700 }}
      animate={{ opacity: 1 , x: 0}}
      exit={{ opacity: 0 , x: prevState ? 700: -700}}
      ><div style={{ boxShadow: " rgba(0, 0, 0, 0.04) 0px 0px 8px 0px, rgba(0, 0, 0, 0.02) 0px 0px 4px 0px, rgba(0, 0, 0, 0.04) 0px 0px 1px 1px", width: '350px', height: '375px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'50px', padding: '20px', borderRadius: '10px'}}>
          <h2 style={{fontFamily: 'FuturaPT, sans-serif', color:'black',fontWeight:'bold', fontSize: '20px',textAlign: 'center', lineHeight: 1.2, marginBottom: 10, borderBottom: '1px dotted gray'}}>Expenses</h2>
          <FormControlLabel label="I pay rent" control={<Checkbox
            checked={rentBoolean}
            onChange={(event: any) => setRentBoolean(event.target.checked)} />} />
          {rentBoolean && (
            <div>
              <InputLabel htmlFor="bootstrap-input">
                Rent
              </InputLabel>
              <BootstrapInput
              fullWidth
              defaultValue={name}
              onBlur={(event) => setRent(event.currentTarget.value)}
              style={{ margin: '8px 0px'}} />
              <div style={{textAlign:'left', width:'310px'}}>
            </div>
          </div>
          )}
          <InputLabel htmlFor="bootstrap-input" style = {{alignSelf: "baseline"}}> Activities</InputLabel>
          <BootstrapInput
          fullWidth
          defaultValue={name}
          onBlur={(event) => setActivities(event.currentTarget.value)}
          style={{ margin: '8px 0px'}} />
          <div style={{textAlign:'left', width:'310px'}}></div>

          <InputLabel htmlFor="bootstrap-input" style = {{alignSelf: "baseline"}}> Expenses</InputLabel>
          <BootstrapInput
          fullWidth
          defaultValue={name}
          onBlur={(event) => setExpenses(event.currentTarget.value)}
          style={{ margin: '8px 0px'}} />
          <div style={{textAlign:'left', width:'310px'}}></div>
          
        </div>
          </motion.div>
        }
        {page ===6 && <motion.div
        style={{position:'absolute', marginTop: 50}}
        key={6}
        initial={{ opacity: 0 , x: prevState ? -700: 700 }}
        animate={{ opacity: 1 , x: 0}}
        exit={{ opacity: 0 , x: prevState ? 700: -700}}><div style={{ boxShadow: " rgba(0, 0, 0, 0.04) 0px 0px 8px 0px, rgba(0, 0, 0, 0.02) 0px 0px 4px 0px, rgba(0, 0, 0, 0.04) 0px 0px 1px 1px", width: '350px', height: '375px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'50px', padding: '20px', borderRadius: '10px'}}>
          <h2 style= {{fontFamily: 'FuturaPT, sans-serif', color:'black',fontWeight:'bold', fontSize: '20px',textAlign: 'center', lineHeight: 1.2, marginBottom: 10, padding: 10, borderBottom: '1px dotted gray'}}>Investments</h2>

          <InputLabel htmlFor="bootstrap-input" style = {{alignSelf: "baseline"}}> FHSA</InputLabel>
          <BootstrapInput
          fullWidth
          defaultValue={name}
          onBlur={(event) => setFHSA(event.currentTarget.value)}
          style={{ margin: '8px 0px'}} />
          <div style={{textAlign:'left', width:'310px'}}></div>
          <InputLabel htmlFor="bootstrap-input" style = {{alignSelf: "baseline"}}> TFSA</InputLabel>
          <BootstrapInput
          fullWidth
          defaultValue={name}
          onBlur={(event) => setTFSA(event.currentTarget.value)}
          style={{ margin: '8px 0px'}} />
          <div style={{textAlign:'left', width:'310px'}}></div>
          <InputLabel htmlFor="bootstrap-input" style = {{alignSelf: "baseline"}}> RRSP</InputLabel>
          <BootstrapInput
          fullWidth
          defaultValue={name}
          onBlur={(event) => setRRSP(event.currentTarget.value)}
          style={{ margin: '8px 0px'}} />
          <div style={{textAlign:'left', width:'310px'}}></div>
        </div></motion.div> }

          {page !== 0 && <div style={{ position:'absolute', top: '500px', display: 'flex', width: '600px', marginTop: '10px', flexDirection: 'row', justifyContent: page !==1 ? 'space-between' : 'flex-end' }}>
            {page !==1 && <Button variant="contained" color = "success" onClick={() => { setPage((prev:any) => { setPrev(true) ; return prev - 1; }); } }> Previous </Button>}
            {page !== 6 ? <Button variant="contained" color = "success" onClick={() => { setPage((prev:any) => { setPrev(false); return prev + 1; }); } }> Next </Button> : <Button variant="contained" > Create My Story </Button>}
          </div>}
        
      </AnimatePresence>
    </div>
    </>
  );
}

export default Home;