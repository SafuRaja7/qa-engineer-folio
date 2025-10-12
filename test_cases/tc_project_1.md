# 🧪 Test Cases — Automation Exercise (Cypress)

**Project:** [AutomationExercise-Cypress](https://github.com/SafuRaja7/AutomationExercise-Cypress)  
**Author:** Muhammad Saif Waheed Raja
**Tool:** Cypress  
**Category:** Functional Testing  

---

## 🔹 Test Case 1: Register User

**Objective:** Verify that a new user can successfully register and create an account.

**Test Steps:**
1. Navigate to the homepage  
2. Click on **‘Signup / Login’**  
3. Enter **name and email**  
4. Fill account details and address  
5. Verify **account is created**  
6. Verify **‘Logged in as [username]’** is displayed  
7. Delete account and verify successful deletion  

**Expected Result:**  
User should be successfully registered, logged in automatically, and account deletion should be confirmed.

---

## 🔹 Test Case 2: Login User with Correct Email and Password

**Objective:** Verify that an existing user can log in with valid credentials.

**Test Steps:**
1. Navigate to the homepage  
2. Click on **‘Signup / Login’**  
3. Enter **valid credentials** (from fixture/test data)  
4. Verify **‘Logged in as [username]’** is displayed  
5. Delete account and verify successful deletion  

**Expected Result:**  
User should be successfully logged in and able to delete the account.

---

## 🔹 Test Case 3: Login User with Incorrect Email and/or Password

**Objective:** Verify that login fails when incorrect credentials are entered.

**Test Steps:**
1. Navigate to the homepage  
2. Click on **‘Signup / Login’**  
3. Enter **incorrect email and/or password**  
4. Verify error message is displayed:  
   > “Your email or password is incorrect!”

**Expected Result:**  
Login should fail and the appropriate error message should be shown.

---

## 🔹 Test Case 4: Logout User

**Objective:** Verify that a logged-in user can successfully log out.

**Test Steps:**
1. Navigate to the homepage  
2. Log in with **valid credentials**  
3. Click on **‘Logout’**  
4. Verify **redirection to login page**

**Expected Result:**  
User should be logged out successfully and redirected to the login page.

---

> **Maintained by:** [Muhammad Saif Waheed Raja](https://github.com/SafuRaja7)  
> **Project Repo:** [AutomationExercise-Cypress](https://github.com/SafuRaja7/AutomationExercise-Cypress)  
> *“Testing with precision, automating with passion.”* ⚡
