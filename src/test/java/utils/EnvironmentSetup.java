package utils;

import java.io.IOException;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.service.ExtentService;


public class EnvironmentSetup {

    private static Logger log = LogManager.getLogger(EnvironmentSetup.class.getName());
    public static String BaseURL,getUser,getUsers,postUsers,updateUsers,deleteUser;
    public static final String env=System.getProperty("testEnvironment");

    //To load the values before the test cases run
    public static void Env_setup() throws IOException {
       log.info("Env_setup function");
       ExtentReports extentReports = ExtentService.getInstance();
       extentReports.setSystemInfo("User Name", System.getProperty("user.name"));
       extentReports.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
       extentReports.setSystemInfo("Environment", env.toUpperCase());
       extentReports.setSystemInfo("Build Version", "1.0");
       extentReports.setSystemInfo("Test Type", "Regression");
       TestUtils.loadProperties();
       BaseURL=TestUtils.ReadProperty("BaseURL");
       getUser=TestUtils.ReadProperty("getUser");
       getUsers=TestUtils.ReadProperty("getUsers");
       postUsers=TestUtils.ReadProperty("postUsers");
       updateUsers=TestUtils.ReadProperty("updateUsers");
       deleteUser=TestUtils.ReadProperty("deleteUser");
    }

}
