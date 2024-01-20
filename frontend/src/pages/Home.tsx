import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import QuestionPage from '../components/QuestionPage';
import DebtsQuestionPage from '../components/debtsQuestionPage';
import { Button, Checkbox, NativeSelect, NumberInput, TextInput } from '@mantine/core';
import { IconCurrencyDollar } from '@tabler/icons-react';



function Home() {
  const [page, setPage] = useState<number>(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState<string|number>(18);
  const [annualIncome, setAnnualIncome] = useState<string|number>(0);
  const [houseValue, setHouseValue] = useState<string|number>(0)
  const [financialGoal, setfinancialGoal] = useState('Get My Dream House');
  const [debts, setDebts] = useState<any>([])
  const [rentBoolean, setRentBoolean]= useState<boolean>(false)
  const [rent, setRents] = useState<string|number>(0)
  const [activities, setActivities] = useState<string|number>(0)
  const [expenses, setExpenses ] = useState<string|number>(0)
  const [FHSA , setFHSA] = useState<string|number>(0);
  const [TFSA , setTFSA] = useState<string|number>(0);
  const [RRSP , setRRSP] = useState<string|number>(0);

  return (<>
    <div style={{display:'flex', flexDirection:'column', width: '100%', height: '100vh', justifyContent: 'center', alignItems:'center'}}>
      {page !== 0 && <QuestionPage page={page}/>}
      <AnimatePresence>
      {page ===0 && <div>
        <h2>Welcome to your financial journey! </h2>
        <button onClick={()=>{setPage((prev)=>{return prev+1})}}> Starts</button>
      </div> }
      <div style={{width:"100%", height:500}}>
      {page ===1 && <div>
        <TextInput
          label={"Name"}
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
        />
        <NumberInput
          label={"Age"}
          value={age}
          onChange={(event) => setAge(event)}
        />
        <NumberInput 
          leftSection={<IconCurrencyDollar style={{ width: 20, height: 20 }} stroke={1.5} />}
          label="With left section" 
          placeholder="With left section"
          onChange={(event) => setAnnualIncome(event)}
         />
        <div style={{display:'flex', width:'100%', justifyContent:'flex-end'}}>
          <Button onClick={()=>{setPage((prev)=>{return prev+1})}}> Next</Button>
        </div>
     </div> }
      {page ===2 && <div>
        <NativeSelect
          label={"What are your financial goals? "}
          value={financialGoal}
          data={['Get My Dream House', 'Pay off Debt', 'Retirement plan', 'Long-term Investment']}
          onChange={(event) => setfinancialGoal(event.currentTarget.value)}
        />
        {
          financialGoal === 'Get My Dream House' &&
          <NumberInput 
          leftSection={<IconCurrencyDollar style={{ width: 20, height: 20 }} stroke={1.5} />}
          label="Current House Value" 
          onChange={(event) => setHouseValue(event)}
         />
        }
        <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button onClick={()=>{setPage((prev)=>{return prev+1})}}> Previous </Button>
          <Button onClick={()=>{setPage((prev)=>{return prev+1})}}> Next</Button>
        </div></div> }
      {page ===3 && <div>
        <DebtsQuestionPage/>
        <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button onClick={()=>{setPage((prev)=>{return prev-1})}}> Previous </Button>
          <Button onClick={()=>{setPage((prev)=>{return prev+1})}}> Next</Button>
        </div></div> }
      {page ===4 && <div>
        <Checkbox
          checked={rentBoolean}
          label="I pay rent"
          onChange={(event) => setRentBoolean(event.currentTarget.checked)}
        />
        <NumberInput 
          leftSection={<IconCurrencyDollar style={{ width: 20, height: 20 }} stroke={1.5} />}
          label="Rent" 
          value={rent}
          disabled={!rentBoolean}
          onChange={(event) => setRents(event)}
         />
         <NumberInput 
          leftSection={<IconCurrencyDollar style={{ width: 20, height: 20 }} stroke={1.5} />}
          label="Leisure"
          value={activities} 
          onChange={(event) => setActivities(event)}
         />
         <NumberInput 
          leftSection={<IconCurrencyDollar style={{ width: 20, height: 20 }} stroke={1.5} />}
          label="Other Expenses"
          value={expenses} 
          onChange={(event) => setExpenses(event)}
         />
        <div style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button onClick={()=>{setPage((prev)=>{return prev-1})}}> Previous </Button>
          <Button onClick={()=>{setPage((prev)=>{return prev+1})}}> Next</Button>
        </div></div> }
        {page ===5 && <div>
         <NumberInput 
          leftSection={<IconCurrencyDollar style={{ width: 20, height: 20 }} stroke={1.5} />}
          label="FHSA"
          value={FHSA} 
          onChange={(event) => setFHSA(event)}
         />
         <NumberInput 
          leftSection={<IconCurrencyDollar style={{ width: 20, height: 20 }} stroke={1.5} />}
          label="TFSA"
          value={TFSA} 
          onChange={(event) => setTFSA(event)}
         />
         <NumberInput 
          leftSection={<IconCurrencyDollar style={{ width: 20, height: 20 }} stroke={1.5} />}
          label="RRSP"
          value={RRSP} 
          onChange={(event) => setRRSP(event)}
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