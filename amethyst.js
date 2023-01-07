
const commandsToShortuts = {
    "cycle layout forward": ["space", ["option", "shift"]],
    "cycle layout backward": ["space", ["option", "shift", "control"]],
    "shrink": ["h", ["option", "shift"]],
    "expand": ["l", ["option", "shift"]],
    "increase window count": [",", ["option", "shift"]],
    "decrease window count": [".", ["option", "shift"]],
    "focus next": ["k", ["option", "shift"]],
    "focus previous": ["j", ["option", "shift"]],
    "focus main": ["m", ["option", "shift"]],
    "focus next screen": ["p", ["option", "shift"]],
    "focus previous screen": ["n", ["option", "shift"]],
    "swap next screen": ["h", ["option", "shift", "control"]],
    "swap previous screen": ["l", ["option", "shift", "control"]],
    "swap next": ["k", ["option", "shift", "control"]],
    "swap previous": ["j", ["option", "shift", "control"]],
    "swap main": ["enter", ["option", "shift"]],
    "reevaluate": ["z", ["option", "shift"]],
    "re evaluate": ["z", ["option", "shift"]],
}

// --------------------- utility functions ---------------------

/**
 * Presses the specified shortcut.
 */
const press = async (shortcut, api) => {
    const [key, modifiers] = shortcut;
    await api.pressKey(key, modifiers);
};

// --------------------- shortcut commands ---------------------

for (const [command, shortcut] of Object.entries(commandsToShortuts)) {
    serenade.global().command(command, async (api) => {
        await press(shortcut, api);
    });
}