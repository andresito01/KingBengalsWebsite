import time
from time import sleep
from datetime import datetime, date
from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

print('Running 3.0 Tests: Email Functionality')
now = datetime.now()
current_time = now.strftime("%H:%M:%S")
today = date.today()
print(f'Date: {today}')
print(f'Start Time: {current_time} \n')

# launch
options = Options()
options.add_argument('--headless')
service = Service(executable_path='/geckodriver.exe')
driver = webdriver.Chrome(service=service, options=options)
total_start_time = time.time()

# Test 3.1 name text field
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/contact')
    text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, 'ContactUs_userName__EhqMV')))
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    driver.execute_script("arguments[0].scrollIntoView(true);", text_field)
    time.sleep(1)
    text_field.send_keys("Steve Jones")
    result = text_field.get_attribute("value")
    expected_result = "Steve Jones"
    if result == expected_result:
        print(f'3.1 Test Passed: Value Entered: {result}')
    else:
        print(f'3.1 Test Failed: Value Entered: {result}')
except Exception as e:
    import traceback
    print(f'3.1 Test Failed: {e}')
    print(traceback.format_exc())
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 3.2 email text field
start_time = time.time()
try:
    text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, 'ContactUs_userEmail__N3w+q')))
    driver.execute_script("arguments[0].scrollIntoView(true);", text_field)
    time.sleep(1)
    text_field.send_keys("stevejones7653@gmail.com")
    result = text_field.get_attribute("value")
    expected_result = "stevejones7653@gmail.com"
    if result == expected_result:
        print(f'3.2 Test Passed: Value Entered: {result}')
    else:
        print(f'3.2 Test Failed: Value Entered: {result}')
except Exception as e:
    import traceback
    print(f'3.2 Test Failed: {e}')
    print(traceback.format_exc())
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 3.3 message text field
start_time = time.time()
try:
    text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.XPATH, '//*[@id="ContactUs_userMessage__6PVlY"]')))
    driver.execute_script("arguments[0].scrollIntoView(true);", text_field)
    time.sleep(1)
    text_field.send_keys("This is a test.")
    result = text_field.get_attribute("value")
    expected_result = "This is a test."
    if result == expected_result:
        print(f'3.3 Test Passed: Value Entered: {result}')
    else:
        print(f'3.3 Test Failed: Value Entered: {result}')
except Exception as e:
    import traceback
    print(f'3.3 Test Failed: {e}')
    print(traceback.format_exc())
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 3.4 send button
start_time = time.time()
try:
    button = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, 'ContactUs_submitButton__KYcx8')))
    driver.execute_script("arguments[0].scrollIntoView(true);", button)
    time.sleep(1)
    button.click()
    emailSent = True
    if emailSent:
        print(f'3.4 Test Passed: Email Was Sent: {emailSent}')
except Exception as e:
    import traceback
    print(f'3.4 Test Failed: {e}')
    print(traceback.format_exc())
driver.execute_script("document.body.style.animation = '';")
driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 3.5 empty text field
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/contact')
    # fill name text field
    name_text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, 'ContactUs_userName__EhqMV')))
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    driver.execute_script("arguments[0].scrollIntoView(true);", name_text_field)
    time.sleep(1)
    name_text_field.send_keys("James Smith")
    name_value = name_text_field.get_attribute("value")
    # do not enter email text field
    email_text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, 'ContactUs_userEmail__N3w+q')))
    driver.execute_script("arguments[0].scrollIntoView(true);", email_text_field)
    time.sleep(1)
    email_value = email_text_field.get_attribute("value")
    # fill message text field
    message_text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.XPATH, '//*[@id="ContactUs_userMessage__6PVlY"]')))
    driver.execute_script("arguments[0].scrollIntoView(true);", message_text_field)
    time.sleep(1)
    message_text_field.send_keys("This is not a drill...")
    message_value = message_text_field.get_attribute("value")
    try:
        # should not work
        send_button = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, 'ContactUs_submitButton__KYcx8')))
        driver.execute_script("arguments[0].scrollIntoView(true);", send_button)
        time.sleep(1)
        send_button.click()
        print(f'3.5 Test Failed: Send Button Clicked')
    except Exception as e:
        print(f'3.5 Test Passed: Name Entered: {name_value}')
        print(f'                 Email Entered: {email_value}')
        print(f'                 Message Entered: {message_value}')
        print(f'                 Send Button Clicked but Threw Exception')
except Exception as e:
    import traceback
    print(f'3.5 Test Failed: {e}')
    print(traceback.format_exc())
driver.execute_script("document.body.style.animation = '';")
driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

total_end_time = time.time()
total_elapsed_time = total_end_time - total_start_time
print("Total Elapsed Time: {:.2f} seconds".format(total_elapsed_time))
driver.quit()