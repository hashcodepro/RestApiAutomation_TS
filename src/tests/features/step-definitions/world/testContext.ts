import { setWorldConstructor, World } from "@cucumber/cucumber";

class TestContext extends World {

    apiResponse?: rest.ApiResponse;

}

setWorldConstructor(TestContext);