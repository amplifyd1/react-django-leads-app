# react-django-leads-app
Application with Django API and single React App

To Run App Locally:
 * Install Dependencies for Python and Javascript  
  ```pipenv install```
     ```npm i```
 * Bundle with ```npm run dev``` 
 * Migrate and seed database 
  ```pipenv run python ./project/manage.py migrate```
  ``` pipenv run python ./project/manage.py loaddata leads ```
 * Run on your server 
  ```pipenv run python ./project/manage.py runserver``` the project will now be available [here](http://127.0.0.1:8000/)

