import { Given, When, Then, World } from "@cucumber/cucumber";
import { Posts } from "../../../../services";
import { expect } from "chai";
import { TestContext } from "../world/testContext";

let posts = new Posts();

type DataTable = Array<{
    id: number,
    field: string,
    value: string | number
}>;

When(/I make a request to the posts endpoint/, async function (this: TestContext) {
    this.apiResponse = await posts.getAllPosts();
});

Then(/a list of all the posts should be retrieved/, function (this: TestContext) {
    expect(this.apiResponse.statusCode).to.be.equal(200);
    expect(this.apiResponse.data).to.not.be.undefined;
    expect(this.apiResponse.data).to.be.an.instanceOf(Array);

    let postData = this.apiResponse.data as Array<jph.Post>;

    console.log(`No. of posts : ${postData.length}`);
});

When(/I make a request to posts endpoint with '(.*)'/, async function (this: TestContext, id: number) {
    this.apiResponse = await posts.getPost(id);
});

Then(/only a single post should be retrieved from the endpoint/, function (this: TestContext) {
    expect(this.apiResponse.statusCode).to.be.equal(200);
    expect(this.apiResponse.data).to.not.be.undefined;
    expect(this.apiResponse.data).to.be.an("object");

    let postData = this.apiResponse.data as jph.Post;

    console.log(`Post Data Retrieved : ${JSON.stringify(postData, undefined, 4)}`);
});

When(/I make a request to posts endpoint with new post information/, async function (this: TestContext) {
    this.apiResponse = await posts.createPost(posts.defaultData);
});

Then(/a new post should be created successfully/, function (this: TestContext) {
    expect(this.apiResponse.statusCode).to.equal(201);
    expect(this.apiResponse.data).to.not.be.undefined;
    expect(this.apiResponse.data).to.be.an('object');
});

Then(/an Id should be generated for the new post/, function (this: TestContext) {
    let postData = this.apiResponse.data as jph.Post;

    expect(postData.id).to.not.be.undefined;

    console.log(`Post Response Data : ${JSON.stringify(this.apiResponse.data, undefined, 4)}`);
});

Given(/that the post to be updated with id '(.*)' exists/, async function (this: TestContext, id: number) {
    this.apiResponse = await posts.getPost(id);
    this.existingPost = (this.apiResponse as rest.ApiResponse).data as jph.Post;
});

When(/^a request is made to posts endpoint with updated information for id '(.*)'$/, async function (this: TestContext, id: number) {
    posts.updateData.id = id;
    this.apiResponse = await posts.updatePost(posts.updateData);
});

Then(/the post should be updated successfully/, function (this: TestContext) {
    expect(this.apiResponse.statusCode).to.equal(200);
    expect(this.apiResponse.data).to.not.be.undefined;
});

Then(/the udpated information should be returned in the response/, function (this: TestContext) {
    let udpatedData = (this.apiResponse as rest.ApiResponse).data as jph.Post;

    expect(udpatedData).to.not.eql(this.existingPost);

    console.log(`Existing Post : ${JSON.stringify(this.existingPost, undefined, 4)}`);
    console.log(`Updated Post : ${JSON.stringify(udpatedData, undefined, 4)}`);
});

When(/^a request is made to posts endpoint with updated information$/, async function (this: TestContext, table) {
    let data = table.hashes() as DataTable;

    this.apiResponse = await posts.patchPost(
        data[0].id,
        {
            [data[0].field]: data[0].value
        });
});