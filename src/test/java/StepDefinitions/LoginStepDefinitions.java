package StepDefinitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinitions {

	WebDriver driver;

	@Given("^User is already in Login page$")
	public void user_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "./driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com");
		driver.manage().window().maximize();
	}

	@When("^Title of page is Free CRM$")
	public void Title__of_page_is_Free_CRM() {
		String title = driver.getTitle();
		Assert.assertEquals(
				"Free CRM software for customer relationship management, sales, marketing campaigns and support.",
				title);
	}

	// 1. \"(.*)\" - regexp 1
	// 2. \"([^\"])\"

//	@Then("^user enters \"(.*)\" and \"(.*)\"$")
//	public void user_enters_username_and_password(String username, String password) throws Throwable {
//		WebDriverWait wait= new WebDriverWait(driver,30);
//		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[text()='Login']")));
//         driver.findElement(By.xpath("//*[text()='Login']")).click();
//     	wait.until(ExpectedConditions.presenceOfElementLocated(By.name("email")));
//         driver.findElement(By.name("email")).sendKeys(username);
//     	wait.until(ExpectedConditions.presenceOfElementLocated(By.name("password")));
//         driver.findElement(By.name("password")).sendKeys(password);
//	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();
	}

	@Then("^Close The Browser$")
	public void Close_The_Browser() throws Throwable {
		driver.quit();
	}

//	@Then("^user enters username and password$")
//	public void user_enters_username_and_password(DataTable credentials) throws Throwable {
//
//		List<List<String>> data = credentials.raw(); // list of list of strings
//
//		WebDriverWait wait = new WebDriverWait(driver, 30);
//		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[text()='Login']")));
//		driver.findElement(By.xpath("//*[text()='Login']")).click();
//		wait.until(ExpectedConditions.presenceOfElementLocated(By.name("email")));
//
//		driver.findElement(By.name("email")).sendKeys(data.get(0).get(0));
//
//		wait.until(ExpectedConditions.presenceOfElementLocated(By.name("password")));
//
//		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
//
//	}

	// datatable with maps : parameterization of test cases 
	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) throws Throwable {

		for (Map<String,String>  data : credentials.asMaps(String.class, String.class) )
				{
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[text()='Login']")));
		driver.findElement(By.xpath("//*[text()='Login']")).click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.name("email")));

		driver.findElement(By.name("email")).sendKeys(data.get("username"));

		wait.until(ExpectedConditions.presenceOfElementLocated(By.name("password")));

		driver.findElement(By.name("password")).sendKeys(data.get("password"));
				}

	}

}
