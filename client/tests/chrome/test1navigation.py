import time
from time import sleep
from datetime import datetime, date
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

print('Running 1.0 Tests: Navigation')
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

# Test 1.1: get home page
start_time = time.time()
expected_url = 'http://www.kingbengalscattery.com/home'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.1 Test Failed')
except Exception as e:
    print(f'1.1 Test Failed: {e}')
else:
    print(f'1.1 Test Passed: {driver.current_url}')
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 1.2: get about us page
start_time = time.time()
expected_url = 'https://www.kingbengalscattery.com/about'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.2 Test Failed')
except Exception as e:
    print(f'1.2 Test Failed: {e}')
else:
    print(f'1.2 Test Passed: {driver.current_url}')
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 1.3: get our cats page
start_time = time.time()
expected_url = 'https://www.kingbengalscattery.com/ourcats'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.3 Test Failed')
except Exception as e:
    print(f'1.3 Test Failed: {e}')
else:
    print(f'1.3 Test Passed: {driver.current_url}')
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 1.4: get litter updates page
start_time = time.time()
expected_url = 'https://www.kingbengalscattery.com/litterupdates'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.4 Test Failed')
except Exception as e:
    print(f'1.4 Test Failed: {e}')
else:
    print(f'1.4 Test Passed: {driver.current_url}')
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 1.5: get reserve a kitten page
start_time = time.time()
expected_url = 'https://www.kingbengalscattery.com/reserveakitten'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.5 Test Failed')
except Exception as e:
    print(f'1.5 Test Failed: {e}')
else:
    print(f'1.5 Test Passed: {driver.current_url}')
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 1.6: get owner info page
start_time = time.time()
expected_url = 'https://www.kingbengalscattery.com/ownersinfo'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.6 Test Failed')
except Exception as e:
    print(f'1.6 Test Failed: {e}')
else:
    print(f'1.6 Test Passed: {driver.current_url}')
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 1.7: get contact us page
start_time = time.time()
expected_url = 'https://www.kingbengalscattery.com/contact'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.7 Test Failed')
except Exception as e:
    print(f'1.7 Test Failed: {e}')
else:
    print(f'1.7 Test Passed: {driver.current_url}')
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 1.8: get breed info page
start_time = time.time()
expected_url = 'https://www.kingbengalscattery.com/breedinfo'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.8 Test Failed')
except Exception as e:
    print(f'1.8 Test Failed: {e}')
else:
    print(f'1.8 Test Passed: {driver.current_url}')
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

total_end_time = time.time()
total_elapsed_time = total_end_time - total_start_time
print("Total Elapsed Time: {:.2f} seconds".format(total_elapsed_time))
driver.quit()