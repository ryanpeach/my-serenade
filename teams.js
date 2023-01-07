// Creates a new conversation in Teams
serenade.app("teams").command("new conversation", async (api, matches) => {
    await api.pressKey("n", ["commandOrControl"]);
});

serenade.app("teams").command("calendar", async (api, matches) => {
    await api.pressKey("4", ["commandOrControl"]);
});

serenade.app("teams").command("activity", async (api, matches) => {
    await api.pressKey("1", ["commandOrControl"]);
});

serenade.app("teams").command("chat", async (api, matches) => {
    await api.pressKey("2", ["commandOrControl"]);
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Chat <Person> <Message>
serenade.app("teams").command("message", async (api, matches) => {
    await api.pressKey("E", ["command"]);
    await api.typeText("/chat");
});