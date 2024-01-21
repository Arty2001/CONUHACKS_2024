import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import QuestionPage from '../components/QuestionPage';
import DebtsQuestionPage from '../components/debtsQuestionPage';
import { IconCurrencyDollar } from '@tabler/icons-react';
import InputAdornment from '@mui/material/InputAdornment';
import { MenuItem, Select, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { Box, styled } from '@mui/system';

function Home() {
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

  return (<>
    <div style={{margin: "auto", display:'flex', flexDirection:'column', width: '100%', height: '100vh', justifyContent: 'center', alignItems:'center'}}>
      {page !== 0 && <QuestionPage page={page}/>}
      <AnimatePresence>
      {page ===0 && <div style={{color: 'white', backgroundColor: 'black', margin: "auto", display:'flex', flexDirection:'column', width: '100%', height: '100vh', justifyContent: 'center', alignItems:'center'}}>
        <h2>Welcome to your financial journey! </h2>
        <button onClick={()=>{setPage((prev)=>{return prev+1})}}> Starts</button>
      </div> }
      <div style={{width:"100%", height:500}}>
      {page ===1 && <div style={{ margin: 'auto', width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px', border: '1px solid grey', padding: '10px', borderRadius: '40px' }}>
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
      {page ===2 && <div style={{ margin: 'auto', width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px', border: '1px solid grey', padding: '10px', borderRadius: '40px' }}>
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
          inputProps={{ type: 'number'}}
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
      {page ===3 && <div>
        <DebtsQuestionPage/>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button onClick={()=>{setPage((prev)=>{return prev-1})}}> Previous </Button>
          <Button onClick={()=>{setPage((prev)=>{return prev+1})}}> Next</Button>
        </div></div> }
      {page ===4 && <div>
        <FormControlLabel label = "I pay rent" control={<Checkbox
          checked={rentBoolean}
          onChange={(event: any) => setRentBoolean(event.target.checked)}/>}
        />
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
          onChange={(event:any) => setRent(event.currentTarget.value)}
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
          defaultValue={activities}
          onChange={(event:any) => setActivities(event.currentTarget.value)}
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
          onChange={(event:any) => setExpenses(event.currentTarget.value)}
         />
        <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button onClick={()=>{setPage((prev)=>{return prev-1})}}> Previous </Button>
          <Button onClick={()=>{setPage((prev)=>{return prev+1})}}> Next</Button>
        </div></div> }
        {page ===5 && <div>
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
          onChange={(event:any) => setFHSA(event.currentTarget.value)}
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
          onChange={(event:any) => setTFSA(event.currentTarget.value)}
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
          onChange={(event:any) => setRRSP(event.currentTarget.value)}
         />
        <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button onClick={()=>{setPage((prev)=>{return prev-1})}}> Previous </Button>
          <Button > Create my Story </Button>
        </div></div> }
        
      </div>
      </AnimatePresence>
    </div>
    </>
  );
}

export default Home;