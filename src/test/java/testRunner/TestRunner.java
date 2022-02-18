package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src\\test\\java\\features" // path of the feature file
		,glue= {"StepDefinitions"}, // path of the step definitions file
		format= {"pretty","html:test-output","json:JsonOutput/cucumber.json","junit:junit_xml/cucumber.xml"}, 
		// format is used to  generate different types of format
		// here one folder gets created with name test-output and an html doc is created to store result
		dryRun= false, 
		// to check if mapping is proper between feature file and step definition file
		// if given true code will not get executed it will just check if all the step definitions mentioned in feature file are present or not
		monochrome=true, // display the console output in readable format
		strict=true // it will check if any step is not defined in step definition file
		)

public class TestRunner {

}
