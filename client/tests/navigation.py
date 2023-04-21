from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options


print('Running 1.0 Tests: Navigation \n')

# launch
options = Options()
options.add_argument('--headless')
service = Service(executable_path='/chromedriver.exe')
driver = webdriver.Chrome(service=service, options=options)


# Test 1: get home page
expected_url = 'https://www.youtube.com/' # just to see what a pass looks like
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.1 Test Failed')
except Exception as e:
    print(f'1.1 Test Failed: {e}')
else:
    print(f'1.1 Test Passed: {driver.current_url}\n')
sleep(1)

# Test 2: get about us page
expected_url = 'https://www.kingbengalscattery.com/about'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.2 Test Failed')
except Exception as e:
    print(f'1.2 Test Failed: {e}')
else:
    print(f'1.2 Test Passed: {driver.current_url}\n')
sleep(1)

# Test 3: get our cats page
expected_url = 'https://www.kingbengalscattery.com/ourcats'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.3 Test Failed')
except Exception as e:
    print(f'1.3 Test Failed: {e}')
else:
    print(f'1.3 Test Passed: {driver.current_url}\n')
sleep(1)

# Test 4: get litter updates page
expected_url = 'https://www.kingbengalscattery.com/litterupdates'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.4 Test Failed')
except Exception as e:
    print(f'1.4 Test Failed: {e}')
else:
    print(f'1.4 Test Passed: {driver.current_url}\n')
sleep(1)

# Test 5: get reserve a kitten page
expected_url = 'https://www.kingbengalscattery.com/reserveakitten'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.5 Test Failed')
except Exception as e:
    print(f'1.5 Test Failed: {e}')
else:
    print(f'1.5 Test Passed: {driver.current_url}\n')
sleep(1)

# Test 6: get owner info page
expected_url = 'https://www.kingbengalscattery.com/ownersinfo'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.6 Test Failed')
except Exception as e:
    print(f'1.6 Test Failed: {e}')
else:
    print(f'1.6 Test Passed: {driver.current_url}\n')
sleep(1)

# Test 7: get contact us page
expected_url = 'https://www.kingbengalscattery.com/contact'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.7 Test Failed')
except Exception as e:
    print(f'1.7 Test Failed: {e}')
else:
    print(f'1.7 Test Passed: {driver.current_url}\n')
sleep(1)

# Test 8: get breed info page
expected_url = 'https://www.kingbengalscattery.com/breedinfo'
try:
    driver.get(expected_url)
    assert driver.current_url == expected_url
except AssertionError:
    print('1.8 Test Failed')
except Exception as e:
    print(f'1.8 Test Failed: {e}')
else:
    print(f'1.8 Test Passed: {driver.current_url}\n')
sleep(1)

driver.quit()