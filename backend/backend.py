import copy
import random


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
            "id": 1,
            "type": "student",
            "interestRate": 0,
            "amount": 0,
        },
        {
            "id": 2,
            "type": "mortgage",
            "interestRate": 0,
            "amount": 0,
        },
        {
            "id": 3,
            "type": "credit card",
            "interestRate": 0,
            "amount": 0,
        },
        {
            "id": 4,
             "type": "car",
             "interestRate": 0,
            "amount": 0,
        },
        {
            "id": 5,
            "type": "other",
            "interestRate": 0,
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
    expenses_dict = user_data["expenses"]
    debts = user_data["debts"]
    
    return user_data
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
    return income

    


def expenses(post_tax_income):
    dict=financial_computation
    expenses_dict=dict["expenses"]
    total_expenses = sum(expenses_dict.values())
    overall_income=post_tax_income-total_expenses
    return(overall_income)



def long_term_investement(goal, after_tax_income):
    current = 0
    years = 0
    while (current<goal):
        current = (current+after_tax_income)*1.1026
        years += 1  
    
    goal_with_inflation = inflation_per_year(goal, years)
    result = [years, goal_with_inflation]
    return(result)

def rrsp_yearly (before_tax_income, post_tax_income, goal):
    rrsp_detucted_income = 0
    current_rrsp_max = 32490
    current = 0
    years = 0
    
    while (current<goal):
        if (before_tax_income*0.18 > current_rrsp_max):
            rrsp_detucted_income = current_rrsp_max
        else: 
            rrsp_detucted_income = before_tax_income*0.18

        years+=1
        current_rrsp_max += random.randint(612, 812) #based off 10 year average increas
        
        post_tax_income = compute_taxes(before_tax_income-rrsp_detucted_income)
        total_invested = rrsp_detucted_income + post_tax_income
        yearly_result = long_term_investement(goal, total_invested)
        current += yearly_result
    goal_with_inflation = inflation_per_year(goal, years)
    result = [years, goal_with_inflation]
    return result


def income_increase(pre_tax_income):
    return (pre_tax_income*random.randrange(1.09, 2.69))
    
def rrsp(last_rrsp, pre_tax_income, max_rrsp=32490):
    rrsp_potential = pre_tax_income*0.18
    new_random = random.randint(612, 812) + last_rrsp
    new_max = max_rrsp + new_random
    if (rrsp_potential> new_max):
            return( last_rrsp+ new_max , new_max)
    return (last_rrsp+rrsp_potential, new_max)

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
    return income


def calculate_invest_funds_with_debts(after_tax_income, leisure, expenses, rent):
    return(after_tax_income-leisure-expenses-rent)

def inflation(amount):  #for expenses
    return amount*0.9711 #2.89% inflation

def remove_mortgage(debts):
    debts_wo_mortgage = []
    for debt in debts:
        if debt['type']!='mortgage':
            debts_wo_mortgage.append(debt)
    return debts_wo_mortgage

def remove_no_mortgage(debts):
    debts_wo_mortgage = []
    for debt in debts:
        if debt['type']=='mortgage':
            debts_wo_mortgage.append(debt)
    return debts_wo_mortgage

def calculate_monthly_payment(principal, annual_interest_rate, loan_term_years):
    # Convert annual interest rate to monthly interest rate
    monthly_interest_rate = annual_interest_rate / 12 

    # Convert loan term from years to months
    loan_term_months = loan_term_years * 12

    # Calculate the monthly mortgage payment using the formula
    monthly_payment = principal * (monthly_interest_rate * (1 + monthly_interest_rate)**loan_term_months) / ((1 + monthly_interest_rate)**loan_term_months - 1)

    return monthly_payment

def maxRate(debts):
    max= 0
    highestObject={}
    for debt in debts:
        if debt['interestRate'] >= max:
            highestObject=debt
            max= debt['interestRate']
    return highestObject

def calculate_invest_funds(financial_goal,debts, after_tax_income, current_year):
    new_debt = copy.deepcopy(debts)
    debts_mortgage =  remove_no_mortgage(debts)
    leftover=after_tax_income
    for debt in debts_mortgage:
        if ( current_year < debt['years']):
            monthly_fee=calculate_monthly_payment(debt['amount'],debt['interestRate'],debt['years'])
            print(monthly_fee)
        else: 
            monthly_fee = 0
        leftover -= monthly_fee * 12
    if leftover> 0 and financial_goal== "PD":
        debts_wo_mortgage= remove_mortgage(new_debt)
        highestRate = maxRate(debts_wo_mortgage)
        leftover = leftover - highestRate['amount']
        new_debt = [debt for debt in new_debt if debt['id'] != highestRate['id']]
        debts_wo_mortgage= remove_mortgage(new_debt)
        while leftover > 0 and len(debts_wo_mortgage)>0 :
            highestRate = maxRate(debts_wo_mortgage)
            leftover = leftover - highestRate['amount']
            new_debt = [debt for debt in new_debt if debt['id'] != highestRate['id']]
            debts_wo_mortgage= remove_mortgage(new_debt)
        if leftover< 0:
            for debt in new_debt:
                if debt['id'] == highestRate['id']:
                    debt['amount'] = abs(leftover)
                if(debt['type'] !='mortgage'):
                    debt['amount'] = (debt['interestRate'] + 1) * debt['amount']
            return( new_debt , 0)
        elif leftover >= 0:
            return ( [], leftover)
    elif leftover>0:
        debts_wo_mortgage= remove_mortgage(new_debt)
        highestRate = maxRate(debts_wo_mortgage)
        if (highestRate['interestRate']<0.06):
            for debt in new_debt:
                if(debt['type'] !='mortgage'):
                    debt['amount'] = (debt['interestRate'] + 1) * debt['amount']
            return (new_debt, leftover)
        leftover = leftover - highestRate['amount']
        new_debt = [debt for debt in new_debt if debt['id'] != highestRate['id']]
        debts_wo_mortgage= remove_mortgage(new_debt)
        while leftover > 0 and len(debts_wo_mortgage)>0 :
            highestRate = maxRate(debts_wo_mortgage)
            if (highestRate['interestRate']<0.06):
                for debt in new_debt:
                    if(debt['type'] !='mortgage'):
                        debt['amount'] = (debt['interestRate'] + 1) * debt['amount']
                return (new_debt, leftover)
            leftover = leftover - highestRate['amount']
            new_debt = [debt for debt in new_debt if debt['id'] != highestRate['id']]
            debts_wo_mortgage= remove_mortgage(new_debt)
        if leftover< 0:
            for debt in new_debt:
                if debt['id'] == highestRate['id']:
                    debt['amount'] = abs(leftover)
                if(debt['type'] !='mortgage'):
                    debt['amount'] = (debt['interestRate'] + 1) * debt['amount']
            return( new_debt , 0)
        elif leftover >= 0:
            return ( [], leftover)
    else :
        for debt in debts:
            if(debt['type'] !='mortgage'):
                debt['amount'] = (debt['interestRate'] + 1) * debt['amount']
        return (debts, leftover)
debts = [
        {
            "id": 1,
            "type": "student",
            "interestRate": 0.07,
            "amount": 120,
        },
        {
            "id": 2,
            "type": "mortgage",
            "interestRate": 0.065,
            "amount": 100000,
            "years":20
        },
        {
            "id": 3,
            "type": "credit card",
            "interestRate": 0,
            "amount": 2000,
        },
        {
            "id": 4,
             "type": "car",
             "interestRate": 0,
            "amount": 3000,
        },
        {
            "id": 5,
            "type": "other",
            "interestRate": 0,
            "amount": 4000,
        }
    ]


def contribution_calculation(financial_goal,leftover,oldFHSA,oldRRSP,oldTFSA,oldOpen,income,year):
    newFhsa=0
    newRRSP=0
    newTFSA=0
    newOpen=0

    if financial_goal=="H":
        if leftover<=8000:
            newFhsa=8000
        else:
            leftover-=8000
            newFhsa=8000
            if leftover<=min(income*0.18,32490):
                newRRSP=leftover
            else:
                leftover-=min(income*0.18,32490)
                newRRSP=min(income*0.18,32490)
                if leftover<= 7500 + year*500/3:
                    newFhsa=leftover
                else:
                    leftover-=7500 +year*500/3
                    newFhsa=7500 +year*500/3
                    newOpen=leftover







            return {"TFSA": oldTFSA+newTFSA, "RRSP":oldRRSP+newRRSP,"FHSA":oldFHSA+newFhsa,"Open":oldOpen+newOpen}





print(calculate_invest_funds("", debts, 1000000,0 ))






#compute_taxes(100000)

#long_term_investement(100, 100, 30)
#print(rrsp_yearly(120000, da_post_tax, 200000 ))




    