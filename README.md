# React table app
This app was created with React js, React Router and Ant design

To run the app, download the zip, extract,  then inside the folder, run

    npm install
    npm start

It contains 3 subpages, navigation between them is made with React Router and for consistent header and footer, I have used Shared Layout / Outlet

## 1. Home
  This page contains default app that is created with create-react-app

## 2. Data
  This page contains table with imaginary people  
  Upon loading this page, an fetch api call will be made to random person api  
  Data is then processed and written into table  
  useEffect hook was used for this functionality  


  You can add people via input form below table  
  Each row can be edited  
  Table content can be sorted by clicking on table column header  


  Upon double-clicking on a row, it will be deleted from table and stored in local storage  
  You can display all deleted data stored in local storage on your system by adding following url parameter  

    password=234
    
  Or just copy this address

    localhost:3000/data?password=234

## 3. Contact
This page contains constact form, which is not yet functional

