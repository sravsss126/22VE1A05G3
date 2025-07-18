# 22VE1A05G3

Architecture Overview

 ┌──────────────────────┐
 │      Frontend        │
 │  (React + MUI)       │
 │                      │
 │  Components (e.g.,    │
 │  Formshorter.jsx)    │
 │      │               │
 │      ▼               │
 │   Logger.js          │
 │ (Log function        │
 │  using axios)        │
 └─────────┬────────────┘
           │ POST /logs
           ▼
 ┌──────────────────────┐
 │    Logging API       │
 │ (Evaluation Service) │
 │ http://20.244.56.14/ │
 │   evaluation-service │
 │       /logs          │
 └─────────┬────────────┘
           │
           ▼
 ┌──────────────────────┐
 │    Log Storage       │
 │ (Database/File/Cloud)│
 │ Stores structured    │
 │ logs for analysis    │
 └──────────────────────┘


