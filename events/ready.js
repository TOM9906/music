module.exports = async (client) => {
  console.log(`[Gaara Music API] Logged in as ${client.user.username}`);
  await client.user.setActivity("with tom and hyper", { // Change your bot's status here
    type: "LISTENING", //can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
