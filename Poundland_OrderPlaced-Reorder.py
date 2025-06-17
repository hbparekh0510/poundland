from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
import time

# Set up the webdriver (assuming Chrome webdriver here)
options = webdriver.ChromeOptions()
#options.add_argument("--headless")
options.add_argument("--start-maximized")
options.add_argument("--disable-notifications")
options.add_argument("--disable-infobars")
driver = webdriver.Chrome(options=options)

try:
    # Step 1: Open the Page
    driver.get("https://mcstaging.poundland.co.uk/")

    # Step 2: Accept Cookies
    try:
        accept_all_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//button[contains(text(),'Accept All')]"))
    )
        accept_all_button.click()
        print("Cookies accepted.")
    except TimeoutException:
        print("Cookies popup not found.")

    # Step 3: Close Advertisement
    # try:
    #     close_add = WebDriverWait(driver, 10).until(
    #         EC.element_to_be_clickable((By.XPATH, '//*[@data-testid="om-overlays-close"]'))
    #     )
    #     close_add.click()
    #     print("Advertisement closed.")
    # except TimeoutException:
    #     print("Advertisement popup not found.")

    # Step 4: Sign In Process
    WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//a[@class='top-nav__link']"))
    ).click()

    WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, '//*[@title="Sign In"]'))
    ).click()

    # Step 5: Enter Login Credentials
    WebDriverWait(driver, 20).until(
        EC.element_to_be_clickable((By.ID, "signInName"))
    ).send_keys("hiteshp@topsinfosolutions.com")

    WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "password"))
    ).send_keys("Hbparekh@123")

    WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "next"))
    ).click()

    # Step 7: Reorder Process
    for i in range(5):  # Loop for multiple items if needed
        try:
            # Navigate to "My Orders"
            # Wait for the navigation bar to be present before clicking "My Orders"
            time.sleep(5)  # Wait for the page to load completely
            print("Navigating to My Orders...")
            # Click on the top navigation link
            # Wait for the top navigation link to be clickable
            print("Waiting for the top navigation link to be clickable...")
            # Wait for the top navigation link to be clickable
            WebDriverWait(driver, 30).until(
                EC.element_to_be_clickable((By.XPATH, "//a[@class='top-nav__link']"))
            ).click()

            WebDriverWait(driver, 20).until(
                EC.presence_of_element_located((By.XPATH, "//a[@class='top-subnav__link'][normalize-space()='My Orders']"))
            ).click()

            # Reorder Item
            WebDriverWait(driver, 20).until(
                EC.element_to_be_clickable((By.XPATH, "//tr/td/a[@class='action order']"))
            ).click()

            time.sleep(10)

            # Checkout
            WebDriverWait(driver, 30).until(
                EC.element_to_be_clickable((By.XPATH, '//*[@id="maincontent"]/div/div/div[7]/div[3]/div[2]/ul/li[1]/a'))
            ).click()

            time.sleep(10)

            # Select Delivery Option
            try:
                # Wait for the loading mask to disappear (if any)
                WebDriverWait(driver, 30).until(
                    EC.invisibility_of_element_located((By.CSS_SELECTOR, "div.loading-mask"))
                )
                # Select the first delivery option (UK Standard Delivery)
                standard_delivery_option = WebDriverWait(driver, 30).until(
                    # Select UK Standard Delivery
                    #EC.element_to_be_clickable((By.XPATH, "//input[@id='s_method_amstrates_amstrates74']")) 
                    # Select UK Next Day Delivery
                    EC.element_to_be_clickable((By.XPATH, "//input[@id='s_method_amstrates_amstrates77']"))
                )
                standard_delivery_option.click()
                print("UK Standard Delivery option selected.")
            except TimeoutException:
                print("Delivery option not selectable or loading mask didn't disappear in time.")

            time.sleep(10)
            driver.execute_script("window.scrollBy(0, 800);")

            # Continue to Payment
            WebDriverWait(driver, 30).until(
                EC.element_to_be_clickable((By.XPATH, "//button[@class='button action continue primary']"))
            ).click()

            time.sleep(5)

            # Accept Terms and Conditions
            # try:
            #     WebDriverWait(driver, 30).until(
            #     EC.element_to_be_clickable((By.XPATH, "//label[@for='agreement_stripe_payments_3']"))
            #     ).click()
            #     print("Terms and Conditions accepted.")
            # except NoSuchElementException:
            #     print("Terms and Conditions not available or clickable.")
        
            driver.execute_script("window.scrollBy(0, 800);")

            time.sleep(10)
            # Step 8: Enter Card Details
            try:
                # Check for iframe and switch to it
                iframe = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "(//iframe[contains(@src, 'payment')])[2]")))
                driver.switch_to.frame(iframe)

                # Now interact with the card number field
                card_number_field = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.XPATH, "//input[@id='Field-numberInput']")))
                card_number_field.send_keys("4111111111111111")  # Example Visa test card number
                print("Card Number Entered")

                # Enter expiration date and CVC
                exp_date_field = WebDriverWait(driver, 20).until(
                    EC.presence_of_element_located((By.XPATH, "//input[@name='expiry']"))
                )
                exp_date_field.send_keys("12/26")  # Example expiration date
                print("Card Expire Date Entered")

                print("Looking for CVC field with XPath...")
                cvc_field = WebDriverWait(driver, 20).until(
                    EC.presence_of_element_located((By.XPATH, "//input[@name='cvc']"))
                )
                cvc_field.send_keys("123")  # Example CVC
                print("Card CVV Entered")
                
                driver.execute_script("window.scrollBy(0, 800);")

                # Step 9: Click on "Pay"
                pay_button = WebDriverWait(driver, 30).until(
                    EC.element_to_be_clickable((By.XPATH, "//*[@id='actions-toolbar']/div/button"))
                )
                pay_button.click()
                print("Pay button clicked.")
                # pay_button = WebDriverWait(driver, 30).until(
                #     EC.element_to_be_clickable((By.XPATH, "//*[@id='actions-toolbar' or @type='submit']/div/button"))
                # )

                # # If clicking the button via Selenium fails, use JavaScript to click it
                # driver.execute_script("arguments[0].click();", pay_button)
                # print("Pay button clicked.")
    
            except Exception as e:
                print("Payment iframe not found or card fields unavailable.")
                print(f"Error: {e}")

                # Switch back to default content after payment interaction
                driver.switch_to.default_content()
                print("Switched back to default content.")

                # Step 9: Click on "Pay"
                pay_button = WebDriverWait(driver, 30).until(
                    EC.element_to_be_clickable((By.XPATH, "//*[@id='actions-toolbar']/div/button"))
                )
                pay_button.click()
                print("Pay button clicked.")

            try:
                time.sleep(10)
                # Extract Order Details
                order_number = driver.find_element(By.XPATH, "//*[@id='maincontent']//tr[1]").text
                print("Order Number:", order_number)
                order_date = driver.find_element(By.XPATH, "//*[@id='maincontent']//tr[2]").text
                print("Order Date:", order_date)
            except NoSuchElementException:
                print("Order details are print.")
        except NoSuchElementException:
            print("Order details not found.")
finally:
    # Close the driver
    driver.quit()