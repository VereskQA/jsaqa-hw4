let firstPage;
let secondPage;

describe("Github page tests", () => {
  beforeEach(async () => {
    firstPage = await browser.newPage();
    await firstPage.goto("https://github.com/team");
  });

  afterEach(() => {
    firstPage.close();
  });

  test("The h1 header content'", async () => {
    await firstPage.setDefaultTimeout(3000);
    const firstLink = await firstPage.$("header div div a");
    await firstLink.click();
    await firstPage.waitForSelector("h1");
    const title2 = await firstPage.title();
    expect(title2).toEqual("GitHub: Where the world builds software · GitHub");
  });

  test("The first link attribute", async () => {
    await firstPage.setDefaultTimeout(3000);
    const actual = await firstPage.$eval("a", (link) =>
      link.getAttribute("href")
    );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    await firstPage.setDefaultTimeout(3000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await firstPage.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await firstPage.$eval(
      btnSelector,
      (link) => link.textContent
    );
    expect(actual).toContain("Sign up for free");
  });
});

describe("Securuty Page", () => {
  beforeEach(async () => {
    secondPage = await browser.newPage();
    await secondPage.goto("https://github.com/features/security");
  });

  afterEach(async () => {
    await secondPage.close();
  });

  test("The h1 header content", async () => {
    await secondPage.setDefaultTimeout(3000);
    const firstLink = await secondPage.$("header div div a");
    await firstLink.click();
    await secondPage.waitForSelector("h1");
    const title2 = await secondPage.title();
    expect(title2).toEqual("GitHub: Where the world builds software · GitHub");
  });

  test("The first link attribute", async () => {
    await secondPage.setDefaultTimeout(3000);
    const actual = await secondPage.$eval("a", (link) =>
      link.getAttribute("href")
    );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Download the guide button", async () => {
    await secondPage.setDefaultTimeout(3000);
    const btnSelector = ".btn-mktg.mb-3.btn-large-mktg";
    await secondPage.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await secondPage.$eval(
      btnSelector,
      (link) => link.textContent
    );
    console.log(actual);
    expect(actual).toContain("Download the guide");
  });
});
