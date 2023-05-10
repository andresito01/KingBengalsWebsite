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
    button = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CLASS_NAME, 'DisplayParents_parentContainer__oiLQ9')))
    # Simulate button click
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    driver.execute_script("arguments[0].scrollIntoView();", button)
    ActionChains(driver).move_to_element(button).perform()
    button.click()
    # Wait for the slider to open
    slider = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.CLASS_NAME, 'SliderInfo_sliderInfo__pynim')))
    sliderOpened = slider.is_displayed()
    # Close slider
    close_button = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CLASS_NAME, 'SliderInfo_containerBtn__IWjZK')))
    ActionChains(driver).move_to_element(close_button).perform()
    close_button.click()
    sliderClosed = not slider.is_displayed()
    if sliderOpened and sliderClosed:
        print(f'2.1 Test Passed: Slider Opened: {sliderOpened}, Slider Closed: {sliderClosed}')
    else:
        print(f'2.1 Test Failed: Slider Opened: {sliderOpened}, Slider Closed: {sliderClosed}')
except Exception as e:
    import traceback
    print(f'2.1 Test Failed: {e}')
    print(traceback.format_exc())
driver.execute_script("document.body.style.animation = '';")
driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
driver.refresh()
sleep(1)

# Test 2.2: open litter updates modal
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/litterupdates')
    #button = driver.find_element('LitterModal_containerBtn__OnUqG')
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    button = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CLASS_NAME, 'LitterModal_containerBtn__OnUqG')))
    # driver.execute_script("document.body.style.animation = 'none';")
    # driver.execute_script("document.body.style.overflow = 'hidden';")
    driver.execute_script("arguments[0].scrollIntoView();", button)
    time.sleep(1)
    button.click()
    modal = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.CLASS_NAME, 'LitterModal_modalContainer__6PBFQ')))
    modalOpened = modal.is_displayed()
    close_button = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '.LitterModal_closeBtn__K2Dn1 button')))
    close_button.click()
    modalClosed = not modal.is_displayed()
    if modalOpened and modalClosed:
        print(f'2.2 Test Passed: Modal Opened: {modalOpened}, Modal Closed: {modalClosed}')
    else:
        print(f'2.2 Test Failed: Modal Opened: {modalOpened}, Modal Closed: {modalClosed}')
except Exception as e:
    import traceback
    print(f'2.2 Test Failed: {e}')
    print(traceback.format_exc())
driver.execute_script("document.body.style.animation = '';")
driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
driver.refresh()
sleep(1)

# Test 2.3: owner's info product link
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/ownersinfo')
    link = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.XPATH, "//a[@href='https://www.amazon.com/s?k=cat+products+for+bengal+cats&crid=2FTEFBBV6WRGU&sprefix=%2Caps%2C190&ref=nb_sb_ss_recent_1_0_recent']")))
    url = link.get_attribute('href')
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    driver.execute_script("arguments[0].scrollIntoView();", link)
    link.click()
    assert driver.current_url, url
except AssertionError:
    print(f'2.3 Test Failed: AssertionError')
except Exception as e:
    print(f'2.3 Test Failed: {e}')
else:
    print(f'2.3 Test Passed: Link Accessed: {driver.current_url}')
driver.execute_script("document.body.style.animation = '';")
driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
driver.refresh()
sleep(1)

# Test 2.4: owner's info youtube link
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/ownersinfo')
    link = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CLASS_NAME, 'OwnersInfo_button__WeZHS')))
    url = link.get_attribute('href')
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    driver.execute_script("arguments[0].scrollIntoView();", link)
    link.click()
    assert driver.current_url, url
except AssertionError:
    print(f'2.4 Test Failed: AssertionError')
except Exception as e:
    print(f'2.4 Test Failed: {e}')
else:
    print(f'2.4 Test Passed: Link Accessed: {driver.current_url}')
driver.execute_script("document.body.style.animation = '';")
driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
driver.refresh()
sleep(1)

# Test 2.5: footer instagram link
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/ownersinfo')
    link = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CLASS_NAME, 'Footer_instagramBtn__E7tth')))
    url = link.get_attribute('href')
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    driver.execute_script("arguments[0].scrollIntoView();", link)
    link.click()
    assert driver.current_url, url
except AssertionError:
    print(f'2.5 Test Failed: AssertionError')
except Exception as e:
    print(f'2.5 Test Failed: {e}')
else:
    print(f'2.5 Test Passed: Link Accessed: {driver.current_url}')
driver.execute_script("document.body.style.animation = '';")
driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
driver.refresh()
sleep(1)

# Test 2.6: footer contact us link
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/ownersinfo')
    contact = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.CLASS_NAME, 'Footer_footerContainer__gV8Ik h4')))
    #.Footer_footerContainer__gV8Ik h4
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    driver.execute_script("arguments[0].scrollIntoView();", contact)
    contact.click()
    assert driver.current_url, 'http://www.kingbengalscattery.com/contact'
except AssertionError:
    print(f'2.6 Test Failed: AssertionError')
except Exception as e:
    print(f'2.6 Test Failed: {e}')
else:
    print(f'2.6 Test Passed: Link Accessed: {driver.current_url}')
driver.execute_script("document.body.style.animation = '';")
driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
driver.refresh()
sleep(1)

total_end_time = time.time()
total_elapsed_time = total_end_time - total_start_time
print("Total Elapsed Time: {:.2f} seconds".format(total_elapsed_time))
driver.quit()