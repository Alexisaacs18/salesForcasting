# SalesForcasting

<img width="394" alt="Screen Shot 2023-11-13 at 3 41 54 PM" src="https://github.com/Alexisaacs18/salesForcasting/blob/main/sales-forcasting/assets/SalesForcasting.PNG?raw=true">

<img width="394" alt="Screen Shot 2023-11-13 at 3 41 54 PM" src="https://github.com/Alexisaacs18/salesForcasting/blob/main/sales-forcasting/assets/DrawIo.PNG?raw=true">



## Description

Sales forcasting tool for CROs to better forecast sales pipleine 

## Table of Contents

- [MVP](#MVP)
- [API/JSON](#API/JSON)
- [JSON-SERVER](#JSON-SERVER)

## MVP

- As a user I want to toggle between the Rep, Stage and Close page
- As a user I want to search individual deals
- As a user I want to add a new deal
- As a user I want to view each individual deal
- As a user I want to view each individual rep data
	### Stretch
- As a user I want to remove a deal 
- As a user I want to send an email to all those involved when a new deal is added/removed 
- As a user I want to add a new rep
- As a user I want to edit the existing deal’s data 


## API/JSON

JSON file used with json-server: db.json


```
{
    "homepage": {
        "message": "Welcome to the Sales Pipeline",
        "pipeline_overview": {
        }
    },
    "deals": [
        {
            "id": 1,
            "last update": "11/27/23",
            "name": "Slack-AI",
            "rep": "Alex Isaacs",
            "users": 20,
            "monthly_recurring_revenue": 2549,
            "stage_id": 2,
            "close": "12/24/23"
        },
        {
            "id": 2,
            "last update": "11/29/23",
            "name": "SalesForce-NS",
            "rep": "Nick Sette",
            "users": 3,
            "monthly_recurring_revenue": 249,
            "stage_id": 1,
            "close": "12/11/23"
        },
        {
            "id": 3,
            "last update": "12/1/23",
            "name": "SalesLoft-SI",
            "rep": "Sean Innella",
            "users": 18,
            "monthly_recurring_revenue": 1469,
            "stage_id": 3,
            "close": "12/7/23"
        },
        {
            "id": 4,
            "last update": "11/20/23",
            "name": "Gong-NS",
            "rep": "Nick Sette",
            "users": 10,
            "monthly_recurring_revenue": 945,
            "stage_id": 2,
            "close": "12/20/23"
        },
        {
            "id": 5,
            "last update": "12/4/23",
            "name": "Outreach-AI",
            "rep": "Alex Isaacs",
            "users": 35,
            "monthly_recurring_revenue": 3500,
            "stage_id": 3,
            "close": "12/8/23"
        },
        {
            "id": 6,
            "last update": "12/3/23",
            "name": "SalesForce-SI",
            "rep": "Sean Innella",
            "users": 5,
            "monthly_recurring_revenue": 495,
            "stage": 2,
            "close": "12/15/23"
        },
        {
            "id": 7,
            "last update": "12/3/23",
            "name": "Lavender-NS",
            "rep": "Nick Sette",
            "users": 7,
            "monthly_recurring_revenue": 693,
            "stage": 1,
            "close": "12/27/23"
        },
        {
            "id": 8,
            "last update": "12/3/23",
            "name": "Trellus-AI",
            "rep": "Alex Isaacs",
            "users": 3,
            "monthly_recurring_revenue": 249,
            "stage": 2,
            "close": "12/6/23"
        }
    ],
    "reps": [
        {
            "id": 1,
            "name": "Alex Isaacs",
            "monthly_recurring_revenue": 2549
        },
        {
            "id": 2,
            "name": "Nick Sette",
            "monthly_recurring_revenue": 249
        },
        {
            "id": 3,
            "name": "Sean Innella",
            "mrr": 1964  
        }
    ],
    "stages": [
        {
            "id": 1,
            "name": "Demo Complete"
        
        },
        {
            "id": 2,
            "name": "Evaluation"
        
        },
        {
            "id": 3,
            "name": "Approval"
        
        },
        {
            "id": 4,
            "name": "Pricing Negotiation"
    
        },
        {
            "id": 5,
            "name": "Closed Won"
    
        },
        {
            "id": 6,
            "name": "Closed Lost"
    
        }
    ]
}

```


## JSON-SERVER ENDPOINTS

Endpoint: /deals
HTTP Verb: GET
Description: Retrieve information for all deals in the deals array

Endpoint: /deals
HTTP Verb: POST
Description: Add a new deal to the deals array

Endpoint: /reps
HTTP Verb: GET
Description: Retrieve information on reps

Endpoint: /stages
HTTP Verb: GET
Description: Retrieve a list of sales stages with information

Endpoint: /closes
HTTP Verb: GET
Description: Retrieve information about the close stages

## REACT ROUTES
```

Home Page
Route: /
Title: Goes in App Component

Rep Page
Route: /reps
Title: Goes in the Reps Component 

Rep Page
Route: /stages
Title: Goes in the Stages Component 

Rep Page
Route: /closes
Title: Goes in the Closes Component 




