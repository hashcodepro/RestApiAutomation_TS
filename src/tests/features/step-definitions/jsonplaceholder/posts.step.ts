import { When, Then, setWorldConstructor } from "@cucumber/cucumber";
import { Posts } from "../../../../services";

let posts = new Posts();

When(/I make a request to the posts endpoint/, async function () {
    this.apiResponse = await posts.getAllPosts();
    console.log(`apiResponse : ${JSON.stringify(this.apiResponse, undefined, 4)}`);
});

Then(/a list of all the posts should be retrieved/, function () {

});