/** ============================================
  *   Git
  * ============================================ */

// Commit with a message
serenade.app("iterm").command("git commit <%message%>", api => {
  api.typeText("git commit -m \"<%message%>\"");
  api.pressKey("return");
});

// Git status
serenade.app("iterm").command("git status", api => {
    api.typeText("git status");
    api.pressKey("return");
});

// Git add all
serenade.app("iterm").command("git add all", api => {
    api.typeText("git add -A");
    api.pressKey("return");
});

// Git push
serenade.app("iterm").command("git push", api => {
    api.typeText("git push");
    api.pressKey("return");
});

// git branch
serenade.app("item").command("git branch <%branchname%>", api => {
    api.typeText("git checkout -b <%branchname%>");
    },
    { "branchname": ["underscores"]}
);


/** ============================================
  *   file system
  * ============================================ */
serenade.app("iterm").command("make directory <%directory%>", (api, matches) => {
    api.typeText("mkdir "+matches.directory);
    api.pressKey("return");
});

// Go Home
serenade.app("iterm").command("go home", api => {
    api.typeText("cd ~");
    api.pressKey("return");
});

// Wd
serenade.app("iterm").command("fast go to <%directory%>", (api, matches) => {
    api.typeText("wd "+matches.directory);
    api.pressKey("return");
});

// Cd
serenade.app("iterm").command("go to <%directory%>", (api, matches) => {
    api.typeText("cd "+matches.directory);
    api.pressKey("return");
});

// List directory
serenade.app("iterm").command("list", api => {
    api.typeText("ls");
    api.pressKey("return");
});

// List directory
serenade.app("iterm").command("list all", api => {
    api.typeText("ls -a");
    api.pressKey("return");
});

// Go up
serenade.app("iterm").command("go up", api => {
    api.typeText("cd ..");
    api.pressKey("return");
});

// Search file
serenade.app("iterm").command("search file <%filename%>", (api, matches) => {
    api.typeText("fd \""+matches.filename+"\"");
    api.pressKey("return");
});

// Search text
serenade.app("iterm").command("search text <%text%>", (api, matches) => {
    api.typeText("rg \""+matches.text+"\"");
    api.pressKey("return");
});