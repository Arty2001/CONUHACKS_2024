def financial_computation():

    user_data = {
    "name": 'Rehean',
    "age": 20,
    "annualIncome": 100000,
    "financialGoal":[
        {
            "type": "house",
            "totalAmount": 0,
            "amountWithInflation": 0,
            "downPayment": 0,
            "downPaymentWithInflation": 0,
            
        },
        {
            "type": "longTermInvestement",
            "amount": 0,
            "amountWithInflation":0,
            "yearsToGoal": 0,
        },
        {
            "type": "retirement",
            "amount": 0,
            "amountWithInflation":0,
            "yearsToGoal": 0,
        },
        {
     
             "type": "debt",
            "amount": 0,
            "amountWithInflation":0,
            "yearsToGoal": 0,
        }],
    "houseValue": "",
    "debts": [
        {
            "type": "student",
            "amount": 0,
        },
        {
            "type": "mortgage",
            "amount": 0,
        },
        {
            "type": "credit card",
            "amount": 0,
        },
        {
     
             "type": "car",
            "amount": 0,
        },
        {
            "type": "other",
            "amount": 0,
        }
    ],
    "expenses": {
        "Rent": 0,  # 0 if not renting, int otherwise
        "leisureActivities": 0,
        "Expenses": 0
    },
    "investments": {
        "FHSA": 0,
        "TFSA": 0,
        "RRSP": 0
    }
}
    
    name=user_data["name"]
    income=user_data["income"]
    age=user_data["age"]
    financialGoal = user_data["financialGoal"] # ["DH", "PD", "RP", "LTI"]
    investements = user_data["investments"]
    expenses = user_data["expenses"]
    debts = user_data["debts"]
    compute_taxes(income)
    
    payload = {"afterTaxIncome":"" }

def compute_taxes(income):



    if income <= 53359:
        federalDeductableIncome=income*0.15
    elif income > 53359 and income <= 106717:
        federalDeductableIncome=53359*0.15
        federalDeductableIncome=federalDeductableIncome+(income-53359)*0.205
    elif income > 106717 and income <= 165430:
        federalDeductableIncome=53359*0.15
        federalDeductableIncome=federalDeductableIncome+(106717-53359)*0.205
        federalDeductableIncome=federalDeductableIncome+(income-106717)*0.26
    elif income > 165430 and income <= 235675:
        federalDeductableIncome=53359*0.15
        federalDeductableIncome=federalDeductableIncome+(106717-53359)*0.205
        federalDeductableIncome=federalDeductableIncome+(165430-106717)*0.26
        federalDeductableIncome=federalDeductableIncome+(income-165430)*0.29
    elif income > 235675:
        federalDeductableIncome=53359*0.15
        federalDeductableIncome=federalDeductableIncome+(106717-53359)*0.205
        federalDeductableIncome=federalDeductableIncome+(165430-106717)*0.26
        federalDeductableIncome=federalDeductableIncome+(235675-165430)*0.29
        federalDeductableIncome=federalDeductableIncome+(income-235675)*0.33
    

    if income <= 49275:
        provincialDeductableIncome=income*0.14
    elif income > 49275 and income <= 98540:
        provincialDeductableIncome=49275*0.14
        provincialDeductableIncome=provincialDeductableIncome+(income-49275)*0.19
    elif income > 98540 and income <= 119910:
        provincialDeductableIncome=49275*0.14
        provincialDeductableIncome=provincialDeductableIncome+(98540-49275)*0.19
        provincialDeductableIncome=provincialDeductableIncome+(income-98540)*0.24
    elif income>119910:
        provincialDeductableIncome=49275*0.14
        provincialDeductableIncome=provincialDeductableIncome+(98540-49275)*0.19
        provincialDeductableIncome=provincialDeductableIncome+(119910-98540)*0.24
        provincialDeductableIncome=provincialDeductableIncome+(income-119910)*0.2575
       

    income=income-(federalDeductableIncome+provincialDeductableIncome)
    print(income)

    
def inflation_per_year(amount, years): #TODO: REVISIT THIS
    for i in range(years):
        amount = amount*0.9711 #2.89% inflation
        
    return amount

def long_term_investement(goal, after_tax_income, expenses):
    available_money = after_tax_income - expenses
    current = 0
    years = 0
    while (current<goal):
        current = (current+available_money)*1.1026
        years += 1  
    
    goal_with_inflation = inflation_per_year(goal, years)
    result = [years, goal_with_inflation]
    return(result)



#compute_taxes(100000)

long_term_investement(100, 100, 30)




    