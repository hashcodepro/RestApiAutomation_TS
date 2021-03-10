import { When, Then, setWorldConstructor } from "@cucumber/cucumber";
import { Posts } from "../../../services";

let posts = new Posts();

When(`I make a request to the posts endpoint`, async function () {
    // @ts-ignore
    this.apiResponse = await posts.getAllPosts();
    console.log(`apiResponse : ${this.apiResponse}`);
});

Then(`a list of all the posts should be retrieved`, function () {

});