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

# Test 4.1 add/remove kitten from cart
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/reserveakitten')
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    # Add item to cart
    addButton = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="test4.1addbtn"]')))
    driver.execute_script("arguments[0].scrollIntoView();", addButton)
    time.sleep(1)
    ActionChains(driver).move_to_element(addButton).perform()
    addButton.click()
    # Just to see if the item was added to the cart
    cartButton = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, 'test4.2cartbtn')))
    driver.execute_script("arguments[0].scrollIntoView(true);", cartButton)
    cartButtonText = cartButton.text
    start_index = cartButtonText.find("(") + 1
    end_index = cartButtonText.find(")")
    item_quantity_after_add = int(cartButtonText[start_index:end_index]) 
    time.sleep(1)
    # Remove Item from cart
    removeBtn = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, 'test4.1removebtn')))
    #ActionChains(driver).move_to_element(removeBtn).perform()
    driver.execute_script("arguments[0].scrollIntoView(true);", removeBtn)
    time.sleep(1)
    removeBtn.click()
    # Just to see if the item was removed from the cart
    cartButton = WebDriverWait(driver, 5).until(EC.visibility_of_element_located((By.ID, 'test4.2cartbtn')))
    driver.execute_script("arguments[0].scrollIntoView(true);", cartButton)
    cartButtonText = cartButton.text
    start_index = cartButtonText.find("(") + 1
    end_index = cartButtonText.find(")")
    item_quantity_after_remove = int(cartButtonText[start_index:end_index]) 
    time.sleep(1)
    if item_quantity_after_add == 1 and item_quantity_after_remove == 0:
        print(f'4.1 Test Passed: Item Quantity in Cart after Add Button: {item_quantity_after_add}')
        print(f'                 Item Quantity in Cart after Remove Button: {item_quantity_after_remove}')
    else:
        print(f'4.1 Test Failed: Item Quantity in Cart after Add Button: {item_quantity_after_add}')
        print(f'                 Item Quantity in Cart after Remove Button: {item_quantity_after_remove}')
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

# Test 4.2 cart button
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/reserveakitten')
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    # Add item to cart
    addButton = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, 'test4.1addbtn')))
    ActionChains(driver).move_to_element(addButton).perform()
    addButton.click()
    time.sleep(1)
    # Open cart
    cartButton = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, 'test4.2cartbtn')))
    ActionChains(driver).move_to_element(cartButton).perform()
    cartButton.click()
    time.sleep(1)
    modalContent = WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.ID, 'test4.2cart')))
    # Remove Item from cart
    removeBtn = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, 'test4.3cartremove')))
    ActionChains(driver).move_to_element(removeBtn).perform()
    removeBtn.click()
    time.sleep(1)
    # Close Cart
    closeCart = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.__class__, 'btn-close'))) # idk if work
    closeCart.click()
    time.sleep(1)
    if modalContent.is_displayed():
        print(f'Test 4.2 Passed: Cart Modal Displayed: {modalContent.is_displayed()}')
    else:
        print(f'Test 4.2 Failed: Cart Modal Displayed: {modalContent.is_displayed()}')
except Exception as e:
    import traceback
    print(f'4.2 Test Failed: {e}')
    print(traceback.format_exc())
driver.execute_script("document.body.style.animation = '';")
driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 4.3 cart remove and close buttons
start_time = time.time()
try:
    driver.get('http://www.kingbengalscattery.com/reserveakitten')
    driver.execute_script("document.body.style.animation = 'none';")
    driver.execute_script("document.body.style.overflow = 'hidden';")
    # Add item to cart
    addButton = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, 'test4.1addbtn')))
    ActionChains(driver).move_to_element(addButton).perform()
    addButton.click()
    time.sleep(1)
    # Open Cart
    cartButton = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, 'test4.2cartbtn')))
    ActionChains(driver).move_to_element(cartButton).perform()
    cartButton.click()
    time.sleep(1)
    # Cart Remove Button
    cartRemoveButton = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, 'test4.3cartremove')))
    ActionChains(driver).move_to_element(cartButton).perform()
    cartRemoveButton.click()
    time.sleep(1)
    # See if item was removed
    cartItems = WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.ID, 'test4.3cartitems')))
    itemRemoved = not cartItems.is_displayed()
    time.sleep(1)
    # Close Cart
    closeCart = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.__class__, 'btn-close'))) # idk if work
    closeCart.click()
    time.sleep(1)
    cartVisibility = WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.ID, 'test4.2cart')))
    cartClosed = not cartVisibility.is_displayed()
    if itemRemoved and cartClosed:
        print(f'Test 4.3 Passed: Item Removed: {itemRemoved}')
        print(f'                 Cart Closed: {cartClosed}')
    else:
        print(f'Test 4.3 Failed: Item Removed: {itemRemoved}')
        print(f'                 Cart Closed: {cartClosed}')
except Exception as e:
    import traceback
    print(f'4.3 Test Failed: {e}')
    print(traceback.format_exc())
driver.execute_script("document.body.style.animation = '';")
driver.execute_script("document.body.style.overflow = '';")
end_time = time.time()
elapsed_time = end_time - start_time
print("Elapsed Time: {:.2f} seconds \n".format(elapsed_time))
sleep(1)

# Test 4.4 Purchase Items in Cart


total_end_time = time.time()
total_elapsed_time = total_end_time - total_start_time
print("Total Elapsed Time: {:.2f} seconds".format(total_elapsed_time))
driver.quit()