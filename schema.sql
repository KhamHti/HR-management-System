DU TI YA SAUK;
1--- Table structure for COUNTRIES
----------
CREATE TABLE COUNTRIES (
country_id VARCHAR(255) NOT NULL PRIMARY KEY,
country_name VARCHAR(255) NULL ,
region_id VARCHAR(255) NULL,
FOREIGN KEY (region_id) REFERENCES REGIONS (region_id)
);
-----------
PYIN SA MA SAUK;
2----- Table structure for DEPARTMENTS
-----------
CREATE TABLE DEPARTMENTS (
department_id VARCHAR(255) NOT NULL PRIMARY KEY ,
department_name VARCHAR(255) NULL ,
manager_id VARCHAR(255) NULL ,
location_id VARCHAR(255) NULL,
 FOREIGN KEY (location_id) REFERENCES LOCATIONS (location_id)
);
-----------
SAT HTA MA SAUK;
3-----Table structure for EMPLOYEES
--------------
CREATE TABLE EMPLOYEES (
employee_id VARCHAR(255) NOT NULL PRIMARY KEY ,
first_name VARCHAR(255) NULL ,
last_name VARCHAR(255) NULL ,
email VARCHAR(255) NULL ,
phone_number INT NULL ,
hire_date DATE NULL ,
job_id VARCHAR(255) NULL ,
salary INT NULL ,
commission INT NULL ,
manager_id VARCHAR(255) NULL ,
department_id VARCHAR(255) NULL,
 FOREIGN KEY (job_id) REFERENCES JOBS (job_id),
 FOREIGN KEY (department_id) REFERENCES DEPARTMENTS (department_id));
----------------
TAT TA MA SAUK;
4-----Table structure for JOB_HISTORY
----------------
CREATE TABLE JOB_HISTORY (
employee_id VARCHAR(255) NOT NULL PRIMARY KEY ,
start_date DATE NULL ,
end_date DATE NULL ,
job_id VARCHAR(255) NULL ,
department_id VARCHAR(255) NOT NULL,
FOREIGN KEY (employee_id) REFERENCES EMPLOYEES (employee_id)
);
--------------------


ta ti ya sauk;
5-----Table structure for JOBS
----------------
CREATE TABLE JOBS (
job_id VARCHAR(255) NOT NULL PRIMARY KEY ,
job_title VARCHAR(255) NULL ,
min_salary INT NULL ,
max_salary INT NULL
);
-----------------

SAT TOTE HTA SAUK;
6------Table structure for LOCATIONS
------------------
CREATE TABLE LOCATIONS (
location_id VARCHAR(255) NOT NULL PRIMARY KEY ,
street_address VARCHAR(255) NULL ,
postal_code INT NULL ,
city VARCHAR(255) NULL ,
state VARCHAR(255) NULL ,
country_id VARCHAR(255) NULL,
 FOREIGN KEY (country_id) REFERENCES COUNTRIES (country_id) 
);
---------------------

a yin sauk;
7------Table structure for REGIONS
----------------------
CREATE TABLE REGIONS (
region_id VARCHAR(255) NOT NULL PRIMARY KEY ,
region_name VARCHAR(255) NULL
);
-----------------------