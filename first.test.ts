import { Selector } from "testcafe";

fixture`Getting Started`.page`http://devexpress.github.io/testcafe/example/`;

test("My first test", async t => {
  await t.typeText("#developer-name", "John Doe").click("#submit-button");

  const articleHeader = await Selector(".result-content").find("h1");

  let headerText = await articleHeader.innerText;
  await t.expect(headerText).eql("Thank you, John Doe!");
});
