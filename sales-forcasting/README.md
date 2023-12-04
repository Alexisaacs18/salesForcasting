# SalesForcasting

<img width="394" alt="Screen Shot 2023-11-13 at 3 41 54 PM" src="https://github.com/Alexisaacs18/salesForcasting/blob/main/sales-forcasting/assets/SalesForcasting.PNG?raw=true">


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
    "pipeline": [
        {
            "id": 1,
            "last update": "11/27/23",
            "Name": "Slack-AI",
            "rep": "Alex Isaacs",
            "users": "20",
            "mrr": 2549,
            "stage": "Evaluation",
            "close": "12/24/23"
        },
        {
            "id": 2,
            "last update": "11/29/23",
            "Name": "SalesForce-NS",
            "rep": "Nick Sette",
            "users": "3",
            "mrr": 249,
            "stage": "Demo Complete",
            "close": "12/11/23"
        },
        {
            "id": 3,
            "last update": "12/1/23",
            "Name": "SalesLoft-SI",
            "rep": "Sean Inella",
            "users": "18",
            "mrr": 1469,
            "stage": "Approval",
            "close": "12/7/23"
        },
  ]
}

```


## JSON-SERVER ENDPOINTS

#### Home Page
Endpoint: /deals
HTTP Verb: GET
Description: Retrieve information for all deals in the deals array

Endpoint: /deals
HTTP Verb: POST
Description: Add a new deal to the deals array

#### Reps Page
Endpoint: /reps
HTTP Verb: GET
Description: Retrieve information on reps

#### Stage Page
Endpoint: /stages
HTTP Verb: GET
Description: Retrieve a list of sales stages with information

#### Close Page
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




// Homepage
{
  "data": {
    "message": "Welcome to the Sales Pipeline",
    "pipeline_overview": {
      // ... overview data
    }
  }
}

// Rep Page
{
  "data": {
    "reps": [
      {
        "id": 1,
        "name": "Alex Isaacs",
        "revenue": 2549
      },
      // ... other reps
    ]
  }
}

// Stage Page
{
  "data": {
    "stages": [
      {
        "id": 1,
        "name": "Prospecting",
        "revenue": 100000
      },
      // ... other stages
    ]
  }
}

// Close Page
{
  "data": {
    "closes": [
      {
        "id": 1,
        "name": "Closed-Won",
        "revenue": 75000
      },
      // ... other close stages
    ]
  }
}
```


