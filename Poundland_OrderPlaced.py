import os
import time
import random
import re
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

# Load .env variables
load_dotenv()
BASE_URL = os.getenv("BASE_URL")
LOGIN_EMAIL = os.getenv("LOGIN_EMAIL")
LOGIN_PASSWORD = os.getenv("LOGIN_PASSWORD")
CARD_NUMBER = os.getenv("CARD_NUMBER")
CARD_EXPIRY = os.getenv("CARD_EXPIRY")
CARD_CVC = os.getenv("CARD_CVC")
sku_titles = [title.strip() for title in os.getenv("ORDER_SKU_TITLES", "").split(";") if title.strip()]


def slugify(title):
    title = title.lower()
    title = re.sub(r'[^a-z0-9\s-]', '', title)
    return re.sub(r'\s+', '-', title).strip('-')


# Setup WebDriver
options = webdriver.ChromeOptions()
options.add_argument("--start-maximized")
options.add_argument("--disable-notifications")
options.add_argument("--disable-infobars")
driver = webdriver.Chrome(options=options)

try:
    print("\U0001F680 Launching website...")
    driver.get(BASE_URL)

    # Accept Cookies
    try:
        WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(),'Accept All')]"))).click()
        print("✅ Cookies accepted.")
    except TimeoutException:
        print("ℹ️ No cookies popup.")

    # Sign In
    print("🔐 Signing in...")
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//a[@class='top-nav__link']"))).click()
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, '//*[@title="Sign In"]'))).click()
    WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.ID, "signInName"))).send_keys(LOGIN_EMAIL)
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "password"))).send_keys(LOGIN_PASSWORD)
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "next"))).click()
    time.sleep(5)
    print("✅ Logged in.")

    for order_index in range(1, 3):  # Adjust range for multiple orders
        print(f"\n🧾 Placing Order #{order_index}")

        # Ensure cart is empty before starting a new order
        driver.get(f"{BASE_URL}/checkout/cart")
        time.sleep(2)
        try:
            remove_links = driver.find_elements(By.XPATH, "//a[@title='Remove item']")
            for i, link in enumerate(remove_links, 1):
                link.click()
                print(f"❌ Removed item {i} (pre-order)")
                time.sleep(2)
        except Exception as e:
            print(f"⚠️ Pre-order cart clearing error: {e}")

        for idx, title in enumerate(sku_titles, 1):
            slug = slugify(title)
            url = f"{BASE_URL}/{slug}"
            print(f"👉 {idx}. Navigating to product: {url}")
            driver.get(url)

            try:
                WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "product-addtocart-button")))
                print("✅ Product page loaded.")
            except TimeoutException:
                print("❌ Product page timeout.")
                continue

            qty = str(random.randint(1, 10))
            try:
                qty_input = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.XPATH, "//input[@type='number']")))
                driver.execute_script("arguments[0].value = arguments[1]; arguments[0].dispatchEvent(new Event('input', { bubbles: true })); arguments[0].dispatchEvent(new Event('change', { bubbles: true }));", qty_input, qty)
                print(f"📝 Set quantity to {qty}")
            except:
                print("⚠️ Quantity input not found.")

            try:
                add_btn = WebDriverWait(driver, 5).until(EC.element_to_be_clickable((By.ID, "product-addtocart-button")))
                add_btn.click()
                print("🛒 Added to cart.")
            except:
                print("❌ Add to cart failed.")

            time.sleep(2)

        # Go to cart
        driver.get(f"{BASE_URL}/checkout/cart")
        print("🧾 In cart page.")
        time.sleep(5)

        # Proceed to checkout
        print("➡️ Proceeding to checkout...")
        WebDriverWait(driver, 30).until(EC.element_to_be_clickable((By.XPATH, "//li/a[contains(@href,'checkout')]"))).click()

        # Select Delivery
        try:
            WebDriverWait(driver, 30).until(EC.invisibility_of_element_located((By.CSS_SELECTOR, "div.loading-mask")))
            WebDriverWait(driver, 30).until(EC.element_to_be_clickable((By.XPATH, "//input[@id='s_method_amstrates_amstrates77']"))).click()
            print("🚚 Delivery selected.")
        except Exception as e:
            print(f"⚠️ Delivery selection error: {e}")

        WebDriverWait(driver, 30).until(EC.element_to_be_clickable((By.XPATH, "//button[@class='button action continue primary']"))).click()
        print("💳 Going to payment...")

        # Enter card details
        try:
            iframe = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, "(//iframe[contains(@src, 'payment')])[2]")))
            driver.switch_to.frame(iframe)
            WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "Field-numberInput"))).send_keys(CARD_NUMBER)
            WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, "expiry"))).send_keys(CARD_EXPIRY)
            WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, "cvc"))).send_keys(CARD_CVC)
            print("✅ Card entered.")
            driver.switch_to.default_content()

            WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='actions-toolbar']/div/button"))).click()
            print("💸 Payment submitted.")
        except Exception as e:
            print(f"❌ Card error: {e}")

        # Confirm Order
        time.sleep(10)
        try:
            order_number = driver.find_element(By.XPATH, "//*[@id='maincontent']//tr[1]").text
            order_date = driver.find_element(By.XPATH, "//*[@id='maincontent']//tr[2]").text
            print(f"✅ Order Confirmed!\n🧾 Order: {order_number}\n📆 Date: {order_date}")
        except:
            print("⚠️ Could not fetch order confirmation.")

        # Clear cart
        print("🧹 Clearing cart for next order...")
        driver.get(f"{BASE_URL}/checkout/cart")
        time.sleep(3)
        try:
            remove_links = driver.find_elements(By.XPATH, "//a[@title='Remove item']")
            for i, link in enumerate(remove_links, 1):
                link.click()
                print(f"❌ Removed item {i}")
                time.sleep(2)
        except Exception as e:
            print(f"⚠️ Cart clearing error: {e}")

    # Run Cron URLs AFTER placing all orders
    cron_urls = [
        "https://preprod.poundshop.com/api/api-magento-orders",
        "https://preprod.poundshop.com/api/api-order-merge",
        "https://preprod.poundshop.com/api/api-cron-order-processing?force=1",
        "https://preprod.poundshop.com/api/api-magento-order-invoice-create?force=1",
        "https://preprod.poundshop.com/api/api-magento-order-invoices?force=1",
    ]

    print("\n🚀 All orders placed. Running all cron jobs now...")
    for i, url in enumerate(cron_urls, 1):
        print(f"\n🔁 Running Cron {i}: {url}")
        try:
            driver.get(url)
            WebDriverWait(driver, 60).until(EC.presence_of_element_located((By.TAG_NAME, "body")))
            page_text = driver.find_element(By.TAG_NAME, "body").text
            print(f"✅ Cron {i} completed. Output: {page_text[:100]}...")
        except Exception as e:
            print(f"❌ Cron {i} failed: {e}")

finally:
    print("🛑 Closing browser.")
    driver.quit()
