import { ApiClient } from "@kakomimasu/client-js";

const client = new ApiClient();

const boards = await client.getBoards();
console.log(boards);
