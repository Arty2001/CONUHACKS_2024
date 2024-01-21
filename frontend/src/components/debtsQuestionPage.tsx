import {
  Typography,
  Card,
  Button,
  Box,
  TextField,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import { IconCurrencyDollar } from "@tabler/icons-react";

interface DebtsQuestionPageProps {
  debts: any;
  setDebts: any;
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const cardStyle = {
  maxWidth: 345,
  margin: "10px",
};

const flexContainer = {
  display: "flex",
  gap: 5,
};

function DebtsQuestionPage({debts, setDebts}:DebtsQuestionPageProps) {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [customType, setCustomType] = useState("");
  const [interestRate, setInterestRate] = useState<number>(0.06);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCustomType("--Select--");
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <InputLabel htmlFor="component-simple">Type of Debt</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Financial Goal"
          style={{ width: '300px', backgroundColor: 'rgb(227, 246, 230)' }}
          onChange={(event:any) => setType(event.target.value as string)}
        >
          <MenuItem value="" disabled> --Select-- </MenuItem>
          <MenuItem value={'Student'}> Student </MenuItem>
          <MenuItem value={'mortgage'}> Mortgage </MenuItem>
          <MenuItem value={'Car Payments'}> Car Payments</MenuItem>
          <MenuItem value={'Others'}> Other </MenuItem> 
        </Select>
        {type === "Others" && (
          <>
          <InputLabel htmlFor="custom-type">Custom Type</InputLabel>
              <TextField
                id="custom-type"
                value={customType}
                onChange={(event) => setCustomType(event.target.value)}
              />
          </>
        )}
          <InputLabel htmlFor="component-simple">Amount</InputLabel>
          <TextField
            inputProps={{ type: "number" }}
            style={{ width: '300px'  }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconCurrencyDollar />
                </InputAdornment>
              ),
            }}
            defaultValue={amount}
            onChange={(event: any) => setAmount(event.currentTarget.value)}
          />
          <InputLabel htmlFor="component-simple">Interest Rate</InputLabel>
          <TextField
            inputProps={{ type: "number" }}
            defaultValue={interestRate}
            style={{ width: '300px'  }}
            onChange={(event: any) => setInterestRate(event.currentTarget.value)}
          />
          <TextField
            inputProps={{ type: "number" }}
            defaultValue={years}
            style={{ width: '300px'  }}
            onChange={(event: any) => setYears(event.currentTarget.value)}
          /> 
          <Button
            onClick={() => {
              setDebts([
                ...debts,
                { id: debts.length ,type: type, amount: amount, interestRate: interestRate as number , years: years},
              ]);
              handleClose()
            }}
          >
          <h3>Add</h3>
          </Button>
        </Box>
      </Modal>
      <div style={{textAlign: 'center', margin: 'auto'}}>
        <h2 style={{fontFamily: 'FuturaPT, sans-serif', color:'black',fontWeight:'bold', fontSize: '20px',textAlign: 'center', lineHeight: 1.2, marginBottom: 10, padding: 10, borderBottom: '1px dotted gray'}}>My Debts</h2>
        <Button onClick={handleOpen}>Add Debt</Button>
      </div>
      <div style={{maxHeight: '240px', overflowY: 'scroll', scrollbarWidth: 'thin'}}>
      <div style={{ display: "flex", gap: 15, width: '400', flexDirection: 'column'}}>
        {debts.map((debt:any, index:number) => (
          <Card sx={{ maxWidth: 345 }}>
            <Typography gutterBottom variant="h5" component="div">
              Debt {index}
            </Typography>
            <div style={{ display: "flex"}}>
              <Typography gutterBottom variant="h6" component="div">
                {" "}
                Type: {debt.type}{" "}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {" "}
                Amount: {debt.amount}{" "}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {" "}
                Interest: {debt.interest}{" "}
              </Typography>
            </div>
          </Card>
        ))}
      </div>
      </div>
      </div>
  );
}
export default DebtsQuestionPage;
