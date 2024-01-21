import copy
import json
import random
from flask import Blueprint, jsonify, request

backend_template = Blueprint('backend', __name__)

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

def income_increase(pre_tax_income):
    return pre_tax_income+ (pre_tax_income*random.uniform(0.0109, 0.0269))
    
def rrsp(last_rrsp, pre_tax_income, max_rrsp=32490):
    rrsp_potential = pre_tax_income*0.18
    new_max = random.randint(612, 812) + max_rrsp
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
    return(after_tax_income-(leisure+expenses+rent)*12)

def inflation(amount):  #for expenses
    new_amount=amount*random.uniform(0.0189,0.0389) #2.89% inflation
    return(amount+new_amount)


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
    debts_mortgage =  remove_no_mortgage(new_debt)
    leftover=after_tax_income
    for debt in debts_mortgage:
        #print(debt['years'])
        if ( current_year < debt['years']):
            monthly_fee=calculate_monthly_payment(debt['amount'],debt['interestRate'],debt['years'])
            #print(monthly_fee)
        else: 
            monthly_fee = 0
        leftover -= monthly_fee * 12
    if leftover> 0 and financial_goal== "PD":
        debts_wo_mortgage= remove_mortgage(new_debt)
        highestRate = maxRate(debts_wo_mortgage)
        if(len(debts_wo_mortgage)==0):
            valid_debts=[]
            debts_mortgage =  remove_no_mortgage(new_debt)
            for debt in debts_mortgage:
                if(current_year<debt['years']):
                    valid_debts.append(debt)
            return ( valid_debts, leftover)
        leftover = leftover - highestRate['amount']
        if (leftover > 0):
            new_debt = [debt for debt in new_debt if debt['id'] != highestRate['id']]
            debts_wo_mortgage= remove_mortgage(new_debt)
        while leftover > 0 and len(debts_wo_mortgage)>0 :
            highestRate = maxRate(debts_wo_mortgage)
            leftover = leftover - highestRate['amount']

            if leftover >= 0:
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
            valid_debts=[]
            debts_mortgage =  remove_no_mortgage(new_debt)
            for debt in debts_mortgage:
                if(current_year<debt['years']):
                    valid_debts.append(debt)
            return ( valid_debts, leftover)
    elif leftover>0:
        debts_wo_mortgage= remove_mortgage(new_debt)
        if (len(debts_wo_mortgage)==0):
            valid_debts=[]
            debts_mortgage =  remove_no_mortgage(new_debt)
            for debt in debts_mortgage:
                if(current_year<debt['years']):
                    valid_debts.append(debt)
            return ( valid_debts, leftover)
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
            if (leftover > 0):
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
            valid_debts=[]
            debts_mortgage =  remove_no_mortgage(new_debt)
            for debt in debts_mortgage:
                if(current_year<debt['years']):
                    valid_debts.append(debt)
            return ( valid_debts, leftover)
    else :
        for debt in debts:
            if(debt['type'] !='mortgage'):
                debt['amount'] = (debt['interestRate'] + 1) * debt['amount']
        return (debts, leftover)
debts = [
        {
            "id": 1,
            "type": "student",
            "interestRate": 0.005,
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


    if financial_goal=="I" or financial_goal=="R":
        if leftover<= 7500 +year*500/3:
            newTFSA=leftover
        else:
            leftover-=7500+year*500/3
            newTFSA=7500+year*500/3
            newOpen=leftover

    if financial_goal=="PD":
        newOpen=leftover
    
    return {"TFSA": oldTFSA+newTFSA, "RRSP":oldRRSP+newRRSP,"FHSA":oldFHSA+newFhsa,"OPEN":oldOpen+newOpen}


def inflated_assets(assets):
    new_assets = copy.deepcopy(assets)
    for asset in new_assets:
        asset['value']=inflation(asset["value"])
        
    return new_assets

def inflated_expenses(expenses):
    newExpenses = {}
    newExpenses['Rent'] = inflation(expenses['Rent'])
    newExpenses['leisureActivities'] = inflation(expenses['leisureActivities'])
    newExpenses['Expenses'] = inflation(expenses['Expenses'])
    return newExpenses

@backend_template.route('/createStory', methods=['GET'])
def complete():
    input= json.loads(request)
    yearsJson=[]


    if input.get('financialGoal')=="R":
        newRRSPAccount,RRSPMax=rrsp(input.get('investments')["RRSP"],input.get('annualIncome'))
        incomeAfterTaxes=compute_taxes(input.get('annualIncome')-newRRSPAccount)
        incomeAfterExpenses=calculate_invest_funds_with_debts(incomeAfterTaxes,input.get('expenses')["leisureActivities"],input.get('expenses')["Expenses"],input.get('expenses')["Rent"])
        newDebts,incomeAfterDebt=calculate_invest_funds(input.get('financialGoal'),input.get('debts'),incomeAfterExpenses,0)
        newAccounts =contribution_calculation("R",incomeAfterDebt,input.get('investments')["FHSA"],input.get('investments')["RRSP"],input.get('investments')["TFSA"],input.get('investments')["OPEN"],incomeAfterDebt,0)
        assets=inflated_assets(input.get('assets'))
        expenses=inflated_expenses(input.get('expenses'))
        increase_income=income_increase(input.get('annualIncome'))

        yearObject={"debts":newDebts,"assets":assets,"expenses":expenses,"investments":{"FHSA":newAccounts["FHSA"],"TFSA":newAccounts["TFSA"], "RRSP":newRRSPAccount,"OPEN":newAccounts["OPEN"]}, 'income':increase_income}
        yearsJson.append(yearObject)

        
        for year in range(1,25):
            #print(yearsJson[year-1]['income'])
            newRRSPAccount,RRSPMax=rrsp(yearsJson[year-1]['investments']["RRSP"],yearsJson[year-1]['income'],RRSPMax)
            #print('test',newRRSPAccount)
            incomeAfterTaxes=compute_taxes(yearsJson[year-1]['income']-newRRSPAccount)
            incomeAfterExpenses=calculate_invest_funds_with_debts(incomeAfterTaxes,yearsJson[year-1]['expenses']["leisureActivities"],yearsJson[year-1]['expenses']["Expenses"],yearsJson[year-1]['expenses']["Rent"])
            newDebts,incomeAfterDebt=calculate_invest_funds(input.get('financialGoal'),input.get('debts'),incomeAfterExpenses,year)
            newAccounts =contribution_calculation("R",incomeAfterDebt,yearsJson[year-1]['investments']["FHSA"],yearsJson[year-1]['investments']["RRSP"],yearsJson[year-1]['investments']["TFSA"],yearsJson[year-1]['investments']["OPEN"],incomeAfterDebt,year)
            assets=inflated_assets(yearsJson[year-1]['assets'])
            expenses=inflated_expenses(yearsJson[year-1]['expenses'])
            increase_income=income_increase(yearsJson[year-1]['income'])
            yearObject={"debts":newDebts,"assets":assets,"expenses":expenses,"investments":{"FHSA":newAccounts["FHSA"],"TFSA":newAccounts["TFSA"], "RRSP":newRRSPAccount,"OPEN":newAccounts["OPEN"]},'income':increase_income}
            yearsJson.append(yearObject)

    if input.get('financialGoal')=="PD":
        incomeAfterTaxes=compute_taxes(input.get('annualIncome'))
        incomeAfterExpenses=calculate_invest_funds_with_debts(incomeAfterTaxes,input.get('expenses')["leisureActivities"],input.get('expenses')["Expenses"],input.get('expenses')["Rent"])
        newDebts,incomeAfterDebt=calculate_invest_funds(input.get('financialGoal'),input.get('debts'),incomeAfterExpenses,0)
        newAccounts =contribution_calculation("R",incomeAfterDebt,input.get('investments')["FHSA"],input.get('investments')["RRSP"],input.get('investments')["TFSA"],input.get('investments')["OPEN"],incomeAfterDebt,0)
        assets=inflated_assets(input.get('assets'))
        expenses=inflated_expenses(input.get('expenses'))
        increase_income=income_increase(input.get('annualIncome'))

        yearObject={"debts":newDebts,"assets":assets,"expenses":expenses,"investments":{"FHSA":newAccounts["FHSA"],"TFSA":newAccounts["TFSA"], "RRSP":0,"OPEN":newAccounts["OPEN"]}, 'income':increase_income}
        yearsJson.append(yearObject)
        year=1
        while(len(yearsJson[-1]["debts"])!=0):
            #print(yearsJson[year-1]['income'])
            #print('test',newRRSPAccount)
            incomeAfterTaxes=compute_taxes(yearsJson[year-1]['income'])
            incomeAfterExpenses=calculate_invest_funds_with_debts(incomeAfterTaxes,yearsJson[year-1]['expenses']["leisureActivities"],yearsJson[year-1]['expenses']["Expenses"],yearsJson[year-1]['expenses']["Rent"])
            newDebts,incomeAfterDebt=calculate_invest_funds(input.get('financialGoal'),yearsJson[year-1]["debts"],incomeAfterExpenses,year)
            newAccounts =contribution_calculation("R",incomeAfterDebt,yearsJson[year-1]['investments']["FHSA"],yearsJson[year-1]['investments']["RRSP"],yearsJson[year-1]['investments']["TFSA"],yearsJson[year-1]['investments']["OPEN"],incomeAfterDebt,year)
            assets=inflated_assets(yearsJson[year-1]['assets'])
            expenses=inflated_expenses(yearsJson[year-1]['expenses'])
            increase_income=income_increase(yearsJson[year-1]['income'])
            yearObject={"debts":newDebts,"assets":assets,"expenses":expenses,"investments":{"FHSA":newAccounts["FHSA"],"TFSA":newAccounts["TFSA"], "RRSP":0,"OPEN":newAccounts["OPEN"]},'income':increase_income}
            yearsJson.append(yearObject)
            year+=1

    
    if input.get('financialGoal')=="I":

        incomeAfterTaxes=compute_taxes(input.get('annualIncome'))
        incomeAfterExpenses=calculate_invest_funds_with_debts(incomeAfterTaxes,input.get('expenses')["leisureActivities"],input.get('expenses')["Expenses"],input.get('expenses')["Rent"])
        newDebts,incomeAfterDebt=calculate_invest_funds(input.get('financialGoal'),input.get('debts'),incomeAfterExpenses,0)
        newAccounts =contribution_calculation("R",incomeAfterDebt,input.get('investments')["FHSA"],input.get('investments')["RRSP"],input.get('investments')["TFSA"],input.get('investments')["OPEN"],incomeAfterDebt,0)
        assets=inflated_assets(input.get('assets'))
        expenses=inflated_expenses(input.get('expenses'))
        increase_income=income_increase(input.get('annualIncome'))

        yearObject={"debts":newDebts,"assets":assets,"expenses":expenses,"investments":{"FHSA":newAccounts["FHSA"],"TFSA":newAccounts["TFSA"], "RRSP":0,"OPEN":newAccounts["OPEN"]}, 'income':increase_income}
        yearsJson.append(yearObject)
     
        for year in range(1,25):
            #print(yearsJson[year-1]['income'])
            #print('test',newRRSPAccount)
            incomeAfterTaxes=compute_taxes(yearsJson[year-1]['income'])
            incomeAfterExpenses=calculate_invest_funds_with_debts(incomeAfterTaxes,yearsJson[year-1]['expenses']["leisureActivities"],yearsJson[year-1]['expenses']["Expenses"],yearsJson[year-1]['expenses']["Rent"])
            newDebts,incomeAfterDebt=calculate_invest_funds(input.get('financialGoal'),yearsJson[year-1]["debts"],incomeAfterExpenses,year)
            newAccounts =contribution_calculation("R",incomeAfterDebt,yearsJson[year-1]['investments']["FHSA"],yearsJson[year-1]['investments']["RRSP"],yearsJson[year-1]['investments']["TFSA"],yearsJson[year-1]['investments']["OPEN"],incomeAfterDebt,year)
            assets=inflated_assets(yearsJson[year-1]['assets'])
            expenses=inflated_expenses(yearsJson[year-1]['expenses'])
            increase_income=income_increase(yearsJson[year-1]['income'])
            yearObject={"debts":newDebts,"assets":assets,"expenses":expenses,"investments":{"FHSA":newAccounts["FHSA"],"TFSA":newAccounts["TFSA"], "RRSP":0,"OPEN":newAccounts["OPEN"]},'income':increase_income}
            yearsJson.append(yearObject)
    
    if (input.get('financialGoal') == "H"):

        incomeAfterTaxes=compute_taxes(input.get('annualIncome'))
        incomeAfterExpenses=calculate_invest_funds_with_debts(incomeAfterTaxes,input.get('expenses')["leisureActivities"],input.get('expenses')["Expenses"],input.get('expenses')["Rent"])
        newDebts,incomeAfterDebt=calculate_invest_funds(input.get('financialGoal'),input.get('debts'),incomeAfterExpenses,0)
        newAccounts =contribution_calculation("R",incomeAfterDebt,input.get('investments')["FHSA"],input.get('investments')["RRSP"],input.get('investments')["TFSA"],input.get('investments')["OPEN"],incomeAfterDebt,0)
        assets=inflated_assets(input.get('assets'))
        expenses=inflated_expenses(input.get('expenses'))
        increase_income=income_increase(input.get('annualIncome'))
        increase_house = inflation(input.get('houseValue'))

        yearObject={"debts":newDebts,"assets":assets,"expenses":expenses,"investments":{"FHSA":newAccounts["FHSA"],"TFSA":newAccounts["TFSA"], "RRSP":0,"OPEN":newAccounts["OPEN"]}, 'income':increase_income, 'house':increase_house}
        yearsJson.append(yearObject)

        year=1
        while (yearsJson[year-1]['house']*0.2 > yearsJson[year-1]['investments']['FHSA']+yearsJson[year-1]['investments']['TFSA']+yearsJson[year-1]['investments']['RRSP']+yearsJson[year-1]['investments']['OPEN']) :
            #print(yearsJson[year-1]['income'])
            #print('test',newRRSPAccount)
            incomeAfterTaxes=compute_taxes(yearsJson[year-1]['income'])
            incomeAfterExpenses=calculate_invest_funds_with_debts(incomeAfterTaxes,yearsJson[year-1]['expenses']["leisureActivities"],yearsJson[year-1]['expenses']["Expenses"],yearsJson[year-1]['expenses']["Rent"])
            newDebts,incomeAfterDebt=calculate_invest_funds(input.get('financialGoal'),yearsJson[year-1]["debts"],incomeAfterExpenses,year)
            newAccounts =contribution_calculation("R",incomeAfterDebt,yearsJson[year-1]['investments']["FHSA"],yearsJson[year-1]['investments']["RRSP"],yearsJson[year-1]['investments']["TFSA"],yearsJson[year-1]['investments']["OPEN"],incomeAfterDebt,year)
            assets=inflated_assets(yearsJson[year-1]['assets'])
            expenses=inflated_expenses(yearsJson[year-1]['expenses'])
            increase_income=income_increase(yearsJson[year-1]['income'])
            increase_house = inflation(yearsJson[year-1]['house'])

            yearObject={"debts":newDebts,"assets":assets,"expenses":expenses,"investments":{"FHSA":newAccounts["FHSA"],"TFSA":newAccounts["TFSA"], "RRSP":0,"OPEN":newAccounts["OPEN"]}, 'income':increase_income, 'house':increase_house}
            yearsJson.append(yearObject)
            year+=1
    input['years'] = yearsJson
    return jsonify(input)


request= """ {
    "name": "Rehean",
    "age": 20,
    "annualIncome": 100000,
    "financialGoal": "H",
    "houseValue": 1000000,
    "debts": [
        {
            "id":1,
            "type": "student",
            "amount": 200000,
            "interestRate": 0.07,
            "years":0
        },
        {
            "id":2,
            "type": "mortgage",
            "amount": 0,
            "interestRate": 0.0676,
            "years":25
        }
    ],
    "assets": [{
        "name": "Test",
        "value": 1000
    }],

    "expenses": {
        "Rent": 30,
        "leisureActivities": 40,
        "Expenses": 0
    },
    "investments": {
        "FHSA": 0,
        "TFSA": 0,
        "RRSP": 0,
        "OPEN": 0
    }
}
"""

# print(complete(request))





    