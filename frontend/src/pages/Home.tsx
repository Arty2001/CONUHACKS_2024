import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import QuestionPage from '../components/QuestionPage';
import DebtsQuestionPage from '../components/debtsQuestionPage';
import { IconCurrencyDollar } from '@tabler/icons-react';
import InputAdornment from '@mui/material/InputAdornment';
import { Typography, useTheme, MenuItem, Select, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { Box, styled } from '@mui/system';

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

  const containerStyles={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: 'auto',
    flexDirection: theme.breakpoints.down('sm') ? 'column' : 'row',
  };

  const contentStyles = {
    maxWidth: '500px',
    textAlign: theme.breakpoints.down('sm') ? 'center' : 'left',
  };
  
  return (<>
    <div style={{margin: "auto", display:'flex', flexDirection:'column', width: '100%', height: '100vh', justifyContent: 'center', alignItems:'center'}}>
      {page !== 0 && <QuestionPage page={page}/>}
      <AnimatePresence>
      {page ===0 && 
      <div style={{color: 'white', backgroundColor: 'black', margin: "auto", display:'flex', flexDirection:'column', width: '100%', height: '100%', justifyContent: 'center', alignItems:'center'}}>
        <div style={{ flex: 1, padding: '20px', border: '1px solid grey', borderRadius: '10px', margin: '10px'}}>
          <Typography variant= "h6">Top Left Container</Typography>
          <h2> Welcome to RAJA</h2>
        </div>
        <div style={{ flex: 1, padding: '20px', border: '1px solid grey', borderRadius: '10px', margin: '10px'}}>
          <Typography variant= "h6">Bottom Left Container</Typography>
          <h2> We are great</h2>
        </div>
        <div style={{ flex: 1, padding: '20px', border: '1px solid grey', borderRadius: '10px', margin: '10px' }}>
              <Typography variant="h6">Right Container (Image)</Typography>
              <img src= "file:///C:/Users/15145/Documents/CONUHACKS.png" alt="Your Image" style={{ width: '100%', height: '100%'}}/>
        </div>
        <button onClick={()=>{setPage((prev)=>{return prev+1})}}> Get Started</button>
      </div> }
      {page ===1 && <div style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 1)", margin: 'auto', width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px', border: '1px solid black', padding: '10px', borderRadius: '40px' }}>
        <h2>Personal Information</h2>
        <TextField
          label={"Name"}
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          style={{ margin: '10px', width: '300px' }}
        />
        <TextField
          inputProps={{ type: 'number'}}
          label="Age"
          placeholder={"Age"}
          defaultValue={age}
          onChange={(event:any) => setAge(event.currentTarget.value)}
          style={{ margin: '10px', width: '300px' }}
        />
        <TextField 
          inputProps={{ type: 'number'}}
          label = "Annual Income"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconCurrencyDollar />
              </InputAdornment>
            ),
          }}
          defaultValue={annualIncome}
          onChange={(event:any) => setAnnualIncome(event.currentTarget.value)}
          style={{ margin: '10px', width: '300px' }}
         />
        <div style={{display:'flex', width:'100%', justifyContent:'flex-end'}}>
          <Button onClick={()=>{setPage((prev)=>{return prev+1})}}> Next</Button>
        </div>
     </div> }
      {page ===2 && <div style={{margin: 'auto', width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px', border: '1px solid black', padding: '10px', borderRadius: '40px' }}>
      <h2>Financial Goal</h2>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={financialGoal}
          label="Financial Goal"
          onChange={(event:any) => setfinancialGoal(event.target.value as string)}
        >
          <MenuItem value={'--Select--'}>--Select--</MenuItem>
          <MenuItem value={'Get My Dream House'}>Get My Dream House</MenuItem>
          <MenuItem value={'PD'}>Pay off Debt</MenuItem>
          <MenuItem value={'RP'}>Retirement plan</MenuItem>
          <MenuItem value={'LTI'}> Long-term Investment </MenuItem> 
        </Select>
        {
          financialGoal === 'Get My Dream House' &&
          <TextField 
          label= "Price of House"
          inputProps={{ type: 'number'}}
          style={{ margin: '20px', width: '203px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconCurrencyDollar />
              </InputAdornment>
            ),
          }}
          defaultValue={houseValue}
          onChange={(event:any) => setHouseValue(event.currentTarget.value)}
         />
        }
        <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button onClick={()=>{setPage((prev)=>{return prev-1})}}> Previous </Button>
          <Button onClick={()=>{setPage((prev)=>{return prev+1})}}> Next</Button>
        </div></div> }
      {page ===3 && <div style={{margin: 'auto', width: '900px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px', border: '1px solid black', padding: '10px', borderRadius: '40px' }}>
        <DebtsQuestionPage/>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button onClick={()=>{setPage((prev)=>{return prev-1})}}> Previous </Button>
          <Button onClick={()=>{setPage((prev)=>{return prev+1})}}> Next</Button>
        </div></div> }
      {page ===4 && <div style={{margin: 'auto', width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px', border: '1px solid black', padding: '10px', borderRadius: '40px' }} >
      <h2>Expenses</h2>
        <FormControlLabel label = "I pay rent" control={<Checkbox
          checked={rentBoolean}
          onChange={(event: any) => setRentBoolean(event.target.checked)}/>}
        />
        {rentBoolean && ( 
          <TextField 
          inputProps={{ type: 'number'}}
          disabled={!rentBoolean}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconCurrencyDollar />
              </InputAdornment>
            ),
          }}
          defaultValue={rent}
          label= "Rent"
          onChange={(event:any) => setRent(event.currentTarget.value)}
          style={{ margin: '10px', width: '200px' }}
         />
        )}
         <TextField 
          inputProps={{ type: 'number'}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconCurrencyDollar />
              </InputAdornment>
            ),
          }}
          defaultValue={activities}
          label= "Activities"
          onChange={(event:any) => setActivities(event.currentTarget.value)}
          style={{ margin: '10px', width: '200px' }}
         />
         <TextField 
          inputProps={{ type: 'number'}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconCurrencyDollar />
              </InputAdornment>
            ),
          }}
          defaultValue={expenses}
          label= "Other Expenses"
          onChange={(event:any) => setExpenses(event.currentTarget.value)}
          style={{ margin: '10px', width: '200px' }}
         />
        <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button onClick={()=>{setPage((prev)=>{return prev-1})}}> Previous </Button>
          <Button onClick={()=>{setPage((prev)=>{return prev+1})}}> Next</Button>
        </div>
        </div> 
        }
        {page ===5 && <div style={{margin: 'auto', width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px', border: '1px solid black', padding: '10px', borderRadius: '40px' }}>
        <h2>Investments</h2>

          <TextField 
          inputProps={{ type: 'number'}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconCurrencyDollar />
              </InputAdornment>
            ),
          }}
          defaultValue={FHSA}
          label= "FHSA"
          onChange={(event:any) => setFHSA(event.currentTarget.value)}
          style={{ margin: '10px', width: '200px' }}
         />
         <TextField 
          inputProps={{ type: 'number'}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconCurrencyDollar />
              </InputAdornment>
            ),
          }}
          defaultValue={TFSA}
          label= "TFSA"
          onChange={(event:any) => setTFSA(event.currentTarget.value)}
          style={{ margin: '10px', width: '200px' }}
         />
         <TextField 
          inputProps={{ type: 'number'}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconCurrencyDollar />
              </InputAdornment>
            ),
          }}
          defaultValue={RRSP}
          label= "RRSP"
          onChange={(event:any) => setRRSP(event.currentTarget.value)}
          style={{ margin: '10px', width: '200px' }}
        />
        <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button onClick={()=>{setPage((prev)=>{return prev-1})}}> Previous </Button>
          <Button > Create my Story </Button>
        </div></div> }
        
      </AnimatePresence>
    </div>
    </>
  );
}

export default Home;