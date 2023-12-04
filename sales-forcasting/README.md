# SalesForcasting

<img width="394" alt="Screen Shot 2023-11-13 at 3 41 54 PM" src="https://github.com/Sette94/phase-1-project-sandwhich/assets/147007475/f23ac41a-e3ad-4dd5-8516-0fddca63a0c4">

<img width="384" alt="Screen Shot 2023-11-13 at 3 42 07 PM" src="https://github.com/Sette94/phase-1-project-sandwhich/assets/147007475/9fc9dcb8-8661-430a-bc8f-33248198012f">

<img width="193" alt="Screen Shot 2023-11-13 at 3 42 23 PM" src="https://github.com/Sette94/phase-1-project-sandwhich/assets/147007475/e77a0b1e-c65d-4e49-a20d-afb44558f4ab">

## Description

Sales forcasting tool for CROs to better forecast sales pipleine 

## Table of Contents

- [MVP](#MVP)
- [API/JSON](#API/JSON)
- [Challenges](#Challenges)
- [Kanban](#Kanban)

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




