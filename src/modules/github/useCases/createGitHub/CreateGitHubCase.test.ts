import request from "supertest";

import { app } from "../../../../app";

describe("Happy Flow", () => {
  it("should be able to add all repository from user", async () => {
    const response = await request(app).post("/repository/create").send({
      name: "thiamsantos",
    });
  });
});
