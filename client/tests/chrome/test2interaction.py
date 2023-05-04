import time
from time import sleep
from datetime import datetime, date
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

print('Running 2.0 Tests: Interaction and Links')
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

# Test 2.1: open ourcats slider
start_time = time.time()
try:
    # Navigate to the our cats page
    driver.get('http://www.kingbengalscattery.com/ourcats')
    # Find the slider button by className
    button = WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.CLASS_NAME, 'SliderInfo_containerBtn__IWjZK')))
    # Simulate button click
    button.click()
    # Wait for the slider to open
    wait = WebDriverWait(driver, 5) # 5 seconds
    element = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'SliderInfo_sliderInfo__pynim')))
    assert element.is_displayed()
except AssertionError:
    print('2.1 Test Failed: AssertionError')
except Exception as e:
    print(f'2.1 Test Failed: {e}')
else:
    print(f'2.1 Test Passed: {element.is_displayed()}')
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

total_end_time = time.time()
total_elapsed_time = total_end_time - total_start_time
print("Total Elapsed Time: {:.2f} seconds".format(total_elapsed_time))
driver.quit()