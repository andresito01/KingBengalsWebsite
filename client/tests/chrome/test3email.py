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

print('Running 3.0 Tests: Email Functionality')
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

# Test 3.1 name text field
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/contact')
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, 'ContactUs_userName__EhqMV')))
    text_field.send_keys("Steve Jones")
    result = text_field.get_attribute("value")
    expected_result = "Steve Jones"
    if result == expected_result:
        print(f'3.1 Test Passed: Result: {result}')
    else:
        print(f'3.1 Test Failed: Result: {result}')
except Exception as e:
    import traceback
    print(f'3.1 Test Failed: {e}')
    print(traceback.format_exc())
driver.execute_script("document.body.style.animation = '';")
driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 3.2 email text field
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/contact')
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, 'ContactUs_userEmail__N3w+q')))
    text_field.send_keys("stevejones7653@gmail.com")
    result = text_field.get_attribute("value")
    expected_result = "stevejones7653@gmail.com"
    if result == expected_result:
        print(f'3.2 Test Passed: Result: {result}')
    else:
        print(f'3.2 Test Failed: Result: {result}')
except Exception as e:
    import traceback
    print(f'3.2 Test Failed: {e}')
    print(traceback.format_exc())
driver.execute_script("document.body.style.animation = '';")
driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 3.3 message text field
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/contact')
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.XPATH, '//*[@id="ContactUs_userMessage__6PVlY"]')))
    text_field.send_keys("This is a test.")
    result = text_field.get_attribute("value")
    expected_result = "This is a test."
    if result == expected_result:
        print(f'3.3 Test Passed: Result: {result}')
    else:
        print(f'3.3 Test Failed: Result: {result}')
except Exception as e:
    import traceback
    print(f'3.3 Test Failed: {e}')
    print(traceback.format_exc())
driver.execute_script("document.body.style.animation = '';")
driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 3.4 send button
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/contact')
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    button = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.XPATH, "//input[@value='Send']")))
    ActionChains(driver).move_to_element(button).perform()
    button.click()
    time.sleep(5)
    confirmation_message = WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.XPATH, "//div[contains(text(),'Email sent successfully.')]")))
    if confirmation_message.is_displayed():
        print(f'3.4 Test Passed: Confirmation Message: {confirmation_message}')
    else:
        print(f'3.4 Test Failed: Confirmation Message: {confirmation_message}')
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

total_end_time = time.time()
total_elapsed_time = total_end_time - total_start_time
print("Total Elapsed Time: {:.2f} seconds".format(total_elapsed_time))
driver.quit()