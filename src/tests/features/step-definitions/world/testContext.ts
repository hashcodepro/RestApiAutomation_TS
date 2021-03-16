import { World, setWorldConstructor, IWorldOptions } from "@cucumber/cucumber";

export interface TestContext extends World {

    apiResponse: rest.ApiResponse;
    existingPost: jph.Post;
}

// setWorldConstructor(TestContext);
