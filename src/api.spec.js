const supertest = require("supertest");
const app = require("./api");

describe("API", () => {
  let request;
  beforeEach(() => {
    request = supertest(app);
  });

  test("should post vr/en", done => {
    request
      .post("/vr/en")
      .send({ hello: "world" })
      .set("Accept", "application/json")
      .expect(200, (err, res) => {
        console.log(res);
        done();
      });
  });
});
