import { When, Then } from "@cucumber/cucumber";
import { Posts } from "../../../../services";
import { expect } from "chai";

let posts = new Posts();

When(/I make a request to the posts endpoint/, async function () {
    this.apiResponse = await posts.getAllPosts();
});

Then(/a list of all the posts should be retrieved/, function () {
    expect(this.apiResponse.statusCode).to.be.equal(200);
    expect(this.apiResponse.data).to.not.be.undefined;
    expect(this.apiResponse.data).to.be.an.instanceOf(Array);

    let postData = this.apiResponse.data as Array<jph.Post>;

    console.log(`No. of posts : ${postData.length}`);
});

When(/I make a request to posts endpoint with '(.*)'/, async function (id: number) {
    this.apiResponse = await posts.getPost(id);
});

Then(/only a single post should be retrieved from the endpoint/, function () {
    expect(this.apiResponse.statusCode).to.be.equal(200);
    expect(this.apiResponse.data).to.not.be.undefined;
    expect(this.apiResponse.data).to.be.an("object");

    let postData = this.apiResponse.data as jph.Post;

    console.log(`Post Data Retrieved : ${JSON.stringify(postData, undefined, 4)}`);
});
