import { delay } from "@std/async/delay";
import { ApiClient } from "@kakomimasu/client-js";

const client = new ApiClient({
  baseUrl: "http://localhost:8880/v1",
});

Deno.test("Get boards", async (t) => {
  await client.getBoards();
});

Deno.test("Play Match", async (t) => {
  const joinData = await client.joinAiMatch({
    boardName: "A-1",
    aiName: "none",
    operationSec: 1,
    transitionSec: 1,
    totalTurn: 1,
    guestName: "test-guest",
  });

  let started = false;
  while (!started) {
    const matchData = await client.getMatch(joinData.gameId);

    if (matchData.status === "gaming") {
      started = true;
    } else {
      await delay(1000);
    }
  }

  await client.setAction(joinData.gameId, {
    actions: [
      {
        agentId: 0,
        type: "PUT",
        x: 0,
        y: 0,
      },
    ],
  }, { authMethods: { PIC: joinData.pic } });
});
