import json

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
        income=income-53359
        federalDeductableIncome=53359*15
        federalDeductableIncome=income*0.205
    elif income > 106717 and income <= 165430:
        federalDeductableIncome=income*0.26
    elif income > 165430 and income <= 235675:
        federalDeductableIncome=income*0.29
    elif income > 235675:
        federalDeductableIncome=income*0.33

    if income <= 49275:
        provincialDeductableIncome=income*0.14
    elif income > 49275 and income <= 98540:
        provincialDeductableIncome=income*0.19
    elif income > 98540 and income <= 119910:
        provincialDeductableIncome=income*0.24
    else:
        provincialDeductableIncome=income*0.2575
       

    income=income-(federalDeductableIncome+provincialDeductableIncome)

    print(income)

def calculate_after_tax_income(gross_income):
    # Canadian Federal Tax Brackets and Rates
    federal_tax = 0
    federal_brackets = [(53359, 0.15), (106717, 0.205), (165430, 0.26), (235675, 0.29), (float('inf'), 0.33)]

    previous_bracket_limit = 0
    for limit, rate in federal_brackets:
        if gross_income > limit:
            federal_tax += (limit - previous_bracket_limit) * rate
        else:
            federal_tax += (gross_income - previous_bracket_limit) * rate
            break
        previous_bracket_limit = limit

    # Quebec Provincial Tax Brackets and Rates
    quebec_tax = 0
    quebec_brackets = [(49275, 0.14), (98540, 0.19), (119910, 0.24), (float('inf'), 0.2575)]

    previous_bracket_limit = 0
    for limit, rate in quebec_brackets:
        if gross_income > limit:
            quebec_tax += (limit - previous_bracket_limit) * rate
        else:
            quebec_tax += (gross_income - previous_bracket_limit) * rate
            break
        previous_bracket_limit = limit

    # Calculate total tax and after-tax income
    total_tax = federal_tax + quebec_tax
    after_tax_income = gross_income - total_tax

    return after_tax_income





    
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

#long_term_investement(100, 100, 30)
long_term_investement(100000, 70000, 50000)

def complete(request):
    input= json.loads(request)
    yearsJson=[]



    if input.get('financialGoal')=="H":
        
        return

    return


request= """ {
    "name": "Rehean",
    "age": 20,
    "annualIncome": 100000,
    "financialGoal": "H",
    "houseValue": "",
    "debts": [
        {
            "type": "student",
            "amount": 0
        },
        {
            "type": "mortgage",
            "amount": 0
        },
        {
            "type": "credit card",
            "amount": 0
        },
        {
            "type": "car",
            "amount": 0
        },
        {
            "type": "other",
            "amount": 0
        }
    ],
    "expenses": {
        "Rent": 0,
        "leisureActivities": 0,
        "Expenses": 0
    },
    "investments": {
        "FHSA": 0,
        "TFSA": 0,
        "RRSP": 0
    }
}
"""


print(json.loads(request).get('expenses'))





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
        income=income-53359
        federalDeductableIncome=53359*15
        federalDeductableIncome=income*0.205
    elif income > 106717 and income <= 165430:
        federalDeductableIncome=income*0.26
    elif income > 165430 and income <= 235675:
        federalDeductableIncome=income*0.29
    elif income > 235675:
        federalDeductableIncome=income*0.33

    if income <= 49275:
        provincialDeductableIncome=income*0.14
    elif income > 49275 and income <= 98540:
        provincialDeductableIncome=income*0.19
    elif income > 98540 and income <= 119910:
        provincialDeductableIncome=income*0.24
    else:
        provincialDeductableIncome=income*0.2575
       

    income=income-(federalDeductableIncome+provincialDeductableIncome)

    print(income)

def calculate_after_tax_income(gross_income):
    # Canadian Federal Tax Brackets and Rates
    federal_tax = 0
    federal_brackets = [(53359, 0.15), (106717, 0.205), (165430, 0.26), (235675, 0.29), (float('inf'), 0.33)]

    previous_bracket_limit = 0
    for limit, rate in federal_brackets:
        if gross_income > limit:
            federal_tax += (limit - previous_bracket_limit) * rate
        else:
            federal_tax += (gross_income - previous_bracket_limit) * rate
            break
        previous_bracket_limit = limit

    # Quebec Provincial Tax Brackets and Rates
    quebec_tax = 0
    quebec_brackets = [(49275, 0.14), (98540, 0.19), (119910, 0.24), (float('inf'), 0.2575)]

    previous_bracket_limit = 0
    for limit, rate in quebec_brackets:
        if gross_income > limit:
            quebec_tax += (limit - previous_bracket_limit) * rate
        else:
            quebec_tax += (gross_income - previous_bracket_limit) * rate
            break
        previous_bracket_limit = limit

    # Calculate total tax and after-tax income
    total_tax = federal_tax + quebec_tax
    after_tax_income = gross_income - total_tax

    return after_tax_income





    
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

#long_term_investement(100, 100, 30)
long_term_investement(100000, 70000, 50000)




    