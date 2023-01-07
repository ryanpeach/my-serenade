// shortcat commands
// REF: https://gist.github.com/epenning/90a69f0a23ce318e9f7515b53e6b4d2e
const showModeCommands = [
  serenade.global().command("enter", api => {
    api.pressKey("enter");
    shortcatCommands();
  }),
  serenade.global().command("hit <%text%>", (api, input) => {
    api.typeText(input.text);
    api.pressKey("enter");
    shortcatCommands();
  }),
  serenade.global().command("double hit <%text%>", async (api, matches) => {
    api.typeText(matches.text);
    api.pressKey("enter");
    api.pressKey("enter");
    shortcatCommands();
  }),
  serenade.global().command("right hit <%text%>", async (api, matches) => {
    api.typeText(matches.text);
    api.pressKey("enter", ["control"]);
    shortcatCommands();
  })
// Can't get this to work
//   serenade.global().command("hover <%text%>", async (api, matches) => {
//     api.typeText(matches.text);
//     api.pressKey("control");
//     shortcatCommands();
//   })
];

function shortcatCommands() {
  serenade.global().disable(showModeCommands);

  serenade.global().command("show", async (api) => {
    await api.pressKey("space", ["command", "shift"]);
    serenade.global().enable(showModeCommands);
  });
  serenade.global().command("hide", async (api) => {
    await api.pressKey("escape");
    shortcatCommands();
  });
  serenade.global().command("escape", async (api) => {
    await api.pressKey("escape");
    shortcatCommands();
  });
  serenade.global().command("show <%text%>", async (api, matches) => {
    await api.pressKey("space", ["command", "shift"]);
    await api.delay(300);
    await api.typeText(matches.text);
  });
}

shortcatCommands();
