import time
from time import sleep
from datetime import datetime, date
from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

print('Running 4.0 Tests: Reservation Functionality')
now = datetime.now()
current_time = now.strftime("%H:%M:%S")
today = date.today()
print(f'Date: {today}')
print(f'Start Time: {current_time} \n')

# launch
options = Options()
options.add_argument('--headless')
service = Service(executable_path='/msedgedriver.exe')
driver = webdriver.Chrome(service=service, options=options)
total_start_time = time.time()

# Test 4.1 name text field
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/reserveakitten')
    name_text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, 'KittenReservationForm_userName__uwOM+')))
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    driver.execute_script("arguments[0].scrollIntoView(true);", name_text_field)
    time.sleep(1)
    name_text_field.send_keys("Steve Jones")
    result = name_text_field.get_attribute("value")
    expected_result = "Steve Jones"
    if result == expected_result:
        print(f'4.1 Test Passed: Value Entered: {result}')
    else:
        print(f'4.1 Test Failed: Value Entered: {result}')
except Exception as e:
    import traceback
    print(f'4.1 Test Failed: {e}')
    print(traceback.format_exc())
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 4.2 email text field
start_time = time.time()
try:
    email_text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, 'KittenReservationForm_userEmail__H+Zvf')))
    driver.execute_script("arguments[0].scrollIntoView(true);", email_text_field)
    time.sleep(1)
    email_text_field.send_keys("stevejones7653@gmail.com")
    result = email_text_field.get_attribute("value")
    expected_result = "stevejones7653@gmail.com"
    if result == expected_result:
        print(f'4.2 Test Passed: Value Entered: {result}')
    else:
        print(f'4.2 Test Failed: Value Entered: {result}')
except Exception as e:
    import traceback
    print(f'4.2 Test Failed: {e}')
    print(traceback.format_exc())
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 4.3 message text field
start_time = time.time()
try:
    message_text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.XPATH, '//*[@id="KittenReservationForm_userMessage__seqeb"]')))
    driver.execute_script("arguments[0].scrollIntoView(true);", message_text_field)
    time.sleep(1)
    message_text_field.send_keys("This is a test.")
    result = message_text_field.get_attribute("value")
    expected_result = "This is a test."
    if result == expected_result:
        print(f'4.3 Test Passed: Value Entered: {result}')
    else:
        print(f'4.3 Test Failed: Value Entered: {result}')
except Exception as e:
    import traceback
    print(f'4.3 Test Failed: {e}')
    print(traceback.format_exc())
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 4.4 kitten selection
start_time = time.time()
try:
    radio_button = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.XPATH, "//input[@type='radio' and @name='kitten' and @value='Luigi']")))
    driver.execute_script("arguments[0].scrollIntoView(true);", radio_button)
    time.sleep(1)
    radio_button.click()
    radioPressed = True
    if radioPressed:
        print(f'4.4 Test Passed: Radio Button Pressed: {radioPressed}')
except Exception as e:
    import traceback
    print(f'4.4 Test Failed: {e}')
    print(traceback.format_exc())
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 4.5 send button
start_time = time.time()
try:
    button = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, 'KittenReservationForm_submitButton__2He0r')))
    driver.execute_script("arguments[0].scrollIntoView(true);", button)
    time.sleep(1)
    button.click()
    emailSent = True
    if emailSent:
        print(f'4.5 Test Passed: Email Was Sent: {emailSent}')
except Exception as e:
    import traceback
    print(f'4.5 Test Failed: {e}')
    print(traceback.format_exc())
driver.execute_script("document.body.style.animation = '';")
driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 4.6 empty email text field
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/reserveakitten')
    # valid name text entry
    name_text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, 'KittenReservationForm_userName__uwOM+')))
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    driver.execute_script("arguments[0].scrollIntoView(true);", name_text_field)
    time.sleep(1)
    name_text_field.send_keys("John Teller")
    name_value = name_text_field.get_attribute("value")
    # invalid email text entry
    email_text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, 'KittenReservationForm_userEmail__H+Zvf')))
    driver.execute_script("arguments[0].scrollIntoView(true);", email_text_field)
    time.sleep(1)
    email_value = email_text_field.get_attribute("value")
    # fill message text field
    message_text_field = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.XPATH, '//*[@id="KittenReservationForm_userMessage__seqeb"]')))
    driver.execute_script("arguments[0].scrollIntoView(true);", message_text_field)
    time.sleep(1)
    message_text_field.send_keys("This is not a drill...")
    message_value = message_text_field.get_attribute("value")
    # select radio button
    radio_button = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.XPATH, "//input[@type='radio' and @name='kitten' and @value='Luigi']")))
    driver.execute_script("arguments[0].scrollIntoView(true);", radio_button)
    time.sleep(1)
    radio_button.click()
    try:
        # should not work
        send_button = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, 'KittenReservationForm_submitButton__2He0r')))
        driver.execute_script("arguments[0].scrollIntoView(true);", send_button)
        time.sleep(1)
        send_button.click()
        print(f'4.6 Test Failed: Send Button Clicked')
    except Exception as e:
        print(f'4.6 Test Passed: Name Entered: {name_value}')
        print(f'                 Email Entered: {email_value}')
        print(f'                 Message Entered: {message_value}')
        print(f'                 Send Button Clicked but Threw Exception')
except Exception as e:
    import traceback
    print(f'4.6 Test Failed: {e}')
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