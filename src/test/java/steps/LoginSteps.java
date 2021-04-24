package steps;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginSteps extends TestBase{
	
	WebDriver driver;
	
	
	@Given("^User is already on Login Page$")
	public void user_already_on_login_Page() throws Exception {
    System.setProperty("webdriver.chrome.driver", "C:\\Users\\13142\\Desktop\\Winter2020\\CrmBDDPractice\\Drivers\\chromedriver.exe");
   WebDriver driver = new ChromeDriver();
   driver.get("https://www.freecrm.com");
   screenShot(driver,"c:\\ScreenShotFile\\LoginPage.jpg");
	}
	
	
	//@When("^Title of Login Page is Free CRM$")
	//public void title_of_Login_Page_is_FreeCRM() {
		//String title = driver.getTitle();
		//System.out.println(title);
		//Assert.assertEquals("#1 FreeCRM customer relationship management software cloud",title);
	//}
	
	    
	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password)  {
		driver.findElement(By.name("username")).sendKeys("username");
		driver.findElement(By.name("password")).sendKeys("password");
	}
	    
	    
	@Then("^User clicks on login button$")
	public void user_clicks_on_login_button() {
	  WebElement loginBtn= driver.findElement(By.xpath("//input[@type='submit']"));
	}
	
	@Then("^User is on home page$")
	public void user_is_on_home_page() {
	String title = driver.getTitle();
	System.out.println("Home Page title::"+ title);
	Assert.assertEquals("COGMENTO", title);
	}
	
	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.quit();
	}
	
}

