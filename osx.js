serenade.global().command("next desktop", async (api) => {
    await api.pressKey("right", ["control"]);
});

serenade.global().command("previous desktop", async (api) => {
    await api.pressKey("left", ["control"]);
});


/** ============================================
  *     search commands
  * ============================================ */

serenade.global().command("spotlight <%text%>", async (api, matches) => {
    await api.pressKey("space", ["command"]);
    await api.typeText(matches.text);
});

serenade.global().command("help <%text%>", async (api, matches) => {
    await api.pressKey("/", ["command", "shift"]);
    await api.typeText(matches.text);
});

serenade.global().command("find <%text%>", async (api, matches) => {
    await api.pressKey("f", ["commandOrControl"]);
    await api.typeText(matches.text);
});
