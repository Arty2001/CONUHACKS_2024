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
  page: number;
}

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

function DebtsQuestionPage() {
  const [debts, setDebts] = useState([
    { type: "Student", amount: 100000, interest: 0.75 },
  ]);
  const [type, setType] = useState("student");
  const [amount, setAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0.06);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          onChange={(event:any) => setType(event.target.value as string)}
        >
          <MenuItem value={'Student'}> Student </MenuItem>
          <MenuItem value={'Mortgage'}> Mortgage </MenuItem>
          <MenuItem value={'Car Payments'}> Car Payments</MenuItem>
          <MenuItem value={'Others'}> Other </MenuItem> 
        </Select>
          <InputLabel htmlFor="component-simple">Amount</InputLabel>
          <TextField
            inputProps={{ type: "number" }}
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
            onChange={(event: any) => setAmount(event.currentTarget.value)}
          />
          <Button
            onClick={() => {
              setDebts([
                ...debts,
                { type: type, amount: amount, interest: interestRate },
              ]);
              handleClose()
            }}
          >
            Add
          </Button>
        </Box>
      </Modal>
      <div>
        <div>My debts</div>
        <Button onClick={handleOpen}>Add Debt</Button>
      </div>
      <div style={{ display: "flex", gap: 5 }}>
        {debts.map((debt, index) => (
          <Card sx={{ maxWidth: 345 }}>
            <Typography gutterBottom variant="h5" component="div">
              Debt {index}
            </Typography>
            <div style={{ display: "flex" }}>
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
  );
}
export default DebtsQuestionPage;
