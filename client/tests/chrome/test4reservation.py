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

print('Running 4.0 Tests: Reservation Functionality')
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

# Test 4.1 name text field
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/reserveakitten')
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, '//button[text()="Add To Cart"]')))
    ActionChains(driver).move_to_element(button).perform()
    button.click()
    time.sleep(3)
    cartBtn = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="root"]/div/div/div/div[3]/nav/button[2]')))
    ActionChains(driver).move_to_element(cartBtn).perform()
    cartBtn.click()
    time.sleep(3)
    cartNotEmpty = WebDriverWait(driver,5).until(EC.presence_of_element_located((By.XPATH, '/html/body/div[3]/div/div/div[2]/div/div[1]/p[1]/text()[1]')))
    if cartNotEmpty:
        print(f'4.1 Test Passed: Item Cart: {cartNotEmpty}')
    else:
        print(f'4.1 Test Failed: Item Cart: {cartNotEmpty}')
except Exception as e:
    import traceback
    print(f'4.1 Test Failed: {e}')
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