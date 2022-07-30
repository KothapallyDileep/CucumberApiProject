package Runner;

import java.io.IOException;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.testng.annotations.DataProvider;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import utils.EnvironmentSetup;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/java/featureFiles" }, glue = { "stepDefinition" }, plugin = { "pretty",
		"html:test-output", "json:target/cucumber.json",
		"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"}, dryRun = false, monochrome = true)

public class CucumberRunner extends AbstractTestNGCucumberTests {
	@DataProvider(parallel = true)
	@Override
	public Object[][] scenarios() {
		return super.scenarios();
	}

	@BeforeClass
	public static void setUp() throws IOException {
		EnvironmentSetup.Env_setup();
	}

}