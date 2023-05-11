import time
from time import sleep
from datetime import datetime, date
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains

print('Running 5.0 Tests: Firebase Functionality')
now = datetime.now()
current_time = now.strftime("%H:%M:%S")
today = date.today()
print(f'Date: {today}')
print(f'Start Time: {current_time} \n')

# launch
options = Options()
options.add_argument('--headless')
service = Service(executable_path='/chromedriver.exe')
driver = webdriver.Chrome(service=service, options=options)
total_start_time = time.time()

# Test 5.1 Admin Login
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/home')
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    # Footer sign in button
    signInBtn = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, 'test5.1loginbtn'))) # need to redeploy site
    driver.execute_script("arguments[0].scrollIntoView();", signInBtn)
    time.sleep(5)
    signInBtn.click()
    assert driver.current_url, 'http://www.kingbengalscattery.com/login'
    buttonPressed = True
    # After landing on the page, press google sign in
    googleBtn = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, 'test5.1googlebtn')))
    driver.execute_script("arguments[0].scrollIntoView();", googleBtn)
    time.sleep(1)
    googleBtn.click()
    googleSignInPressed = True
    # New window handler, add account or select correct one
    window_handles = driver.window_handles
    # Switch the focus to the new window
    new_window_handle = [handle for handle in window_handles if handle != driver.current_window_handle][0]
    driver.switch_to.window(new_window_handle)
    # Try looking for account if it's already there
    try:
        rememberBtn = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, 'div[data-identifier]')))
        data_identifier = rememberBtn.get_attribute('data-identifier')
        if data_identifier == "kingbengalscattery@gmail.com":
            rememberBtn.click()
        rememberedAccount = True
    except Exception as e:
        # If account is not already there, this will create the account
        WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CLASS_NAME, 'BHzsHc'))).click()
        email = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="identifierId"]')))
        email.clear()
        email.send_keys("kingbengalscattery@gmail.com")
        WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="identifierNext"]/div/button'))).click()
        password = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="password"]/div[1]/div/div[1]/input')))
        password.clear()
        password.send_keys("password") # real password not provided for security reasons
        WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="passwordNext"]/div/button'))).click()
        createdAccount = True
    # Switch back to old window
    driver.switch_to.window(driver.window_handles[0])
    assert driver.current_url, 'http://kingbengalscattery.com/adminHomePage'
    # Test Passed
    print(f'Test 5.1 Passed: Footer Sign-In Pressed: {buttonPressed}')
    print(f'                 Google Sign-In Pressed: {googleSignInPressed}')
    if rememberedAccount:
        print(f'                 Account Was: Remembered')
    else:
        print(f'                 Account Was: Created')
except AssertionError:
    print('Test 5.1 Failed: AssertionError')
except Exception as e:
    import traceback
    print(f'5.1 Test Failed: {e}')
    print(traceback.format_exc())
else:
    print('passed!')
#driver.execute_script("document.body.style.animation = '';")
#driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 5.2 Add New Parent
start_time = time.time()
try:
    WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, 'test5.2parentbtn'))).click()
    parentBtnClicked = True
    WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.ID, 'test5.2parentname'))).send_keys("Jasmine")
    parentNameEntered = True
    WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.ID, 'test5.2parentattitude'))).send_keys("Calm")
    parentAttitudeEntered = True
    WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.ID, 'test5.2parentattitude'))).send_keys("Calm")
except Exception as e:
    import traceback
    print(f'Test 5.2 Failed: {e}')
    print(traceback.format_exc())
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 5.3 Edit Parent

# Test 5.4 Delete Parent

# Test 5.5 Add New Litter

# Test 5.6 Edit Litters

# Test 5.7 Delete Litter

# Test 5.8 Add New Kitten

# Test 5.9 Edit Kittens

# Test 5.10 Delete Kitten

# Test 5.11 Add New Testimonial

# Test 5.12 Edit Testimonials

# Test 5.13 Delete Testimonial

# Test 5.14 Log Out

total_end_time = time.time()
total_elapsed_time = total_end_time - total_start_time
print("Total Elapsed Time: {:.2f} seconds".format(total_elapsed_time))
driver.quit()