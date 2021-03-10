import { setWorldConstructor, World } from "@cucumber/cucumber";

class TestContext {

    public apiResponse?: rest.ApiResponse;

}

setWorldConstructor(TestContext);