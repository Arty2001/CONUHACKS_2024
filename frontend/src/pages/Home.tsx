import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import QuestionPage from '../components/QuestionPage';

function Home() {
  const [page, setPage] = useState<number>(0);

  return (<>
    <div style={{display:'flex', flexDirection:'column', width: '100%', height: '100vh', justifyContent: 'center', alignItems:'center'}}>
      {page !== 0 && <QuestionPage page={page}/>}
      <AnimatePresence>
      {page ===0 && <div>
        <h2>Welcome to your financial journey! </h2>
        <button onClick={()=>{setPage((prev)=>{return prev+1})}}> Starts</button>
      </div> }
      {page ===1 && <div>
        <h2>Welcome to your financial journey!1 </h2>
        <button onClick={()=>{setPage((prev)=>{return prev+1})}}> Starts</button>
      </div> }
      {page ===2 && <div>
        <h2>Welcome to your financial journey!2 </h2>
        <button onClick={()=>{setPage((prev)=>{return prev+1})}}> Starts</button>
      </div> }
      {page ===3 && <div>
        <h2>Welcome to your financial journey!3 </h2>
        <button onClick={()=>{setPage((prev)=>{return prev+1})}}> Starts</button>
      </div> }
      {page ===4 && <div>
        <h2>Welcome to your financial journey!4 </h2>
        <button onClick={()=>{setPage((prev)=>{return prev+1})}}> Starts</button>
      </div> }
      </AnimatePresence>
    </div>
    </>
  );
}

export default Home;