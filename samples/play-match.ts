import { delay } from "@std/async/delay";
import { ApiClient } from "@kakomimasu/client-js";

const client = new ApiClient();

const joinData = await client.joinAiMatch({
  aiName: "a1",
  guestName: "john-doe",
});

console.log("ゲームに入室しました！ gameId:", joinData.gameId);

let started = false;
while (!started) {
  const matchData = await client.getMatch(joinData.gameId);

  if (matchData.status === "gaming") {
    started = true;
  } else {
    await delay(1000);
  }
}

console.log("ゲームが開始されました！");

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

console.log("次のターンの行動を送信しました");
