/**
 * @jest-environment node
 */

import { headers } from "next/headers";
import { createInnerTRPCContext } from "../trpc";
import { appRouter } from "../root";

describe("Test post endpoint", () => {
  it("Test hello", async () => {
    const ctx = await createInnerTRPCContext({
      headers: headers(),
    });
    const caller = appRouter.createCaller(ctx);

    const response = await caller.post.hello({
      text: "test",
    });

    expect(response.greeting).toBe("Hello test");
  });
});
