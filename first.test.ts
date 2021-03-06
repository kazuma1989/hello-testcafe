import { Selector } from "testcafe";

fixture("Getting Started")
  .page("http://localhost:1234")
  .httpAuth({
    username: "admin",
    password: "admin"
  });

test("My first test", async t => {
  await t.click("a[href]");

  await t.typeText("#name", "john");
  await t.typeText("#pass", "john");
  await t.click("#submit-button");

  const articleHeader = Selector(".result-content").find("h1");

  const headerText = await articleHeader.innerText;
  await t.expect(headerText).eql("Thank you, John Doe!");
});
