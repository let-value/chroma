const scancodes: Record<number, string> = {
    0: "IntlBackslash",
    1: "Escape",
    2: "Digit1",
    3: "Digit2",
    4: "Digit3",
    5: "Digit4",
    6: "Digit5",
    7: "Digit6",
    8: "Digit7",
    9: "Digit8",
    10: "Digit9",
    11: "Digit0",
    12: "Minus", //"Slash",
    13: "Equal", //"BracketRight",
    14: "Backspace",
    15: "Tab",
    16: "KeyQ",
    17: "KeyW",
    18: "KeyE",
    19: "KeyR",
    20: "KeyT",
    21: "KeyY",
    22: "KeyU",
    23: "KeyI",
    24: "KeyO",
    25: "KeyP",
    26: "BracketLeft", //"Minus",
    27: "BracketRight", //"Equal",
    28: "Enter",
    29: "ControlLeft",
    30: "KeyA",
    31: "KeyS",
    32: "KeyD",
    33: "KeyF",
    34: "KeyG",
    35: "KeyH",
    36: "KeyJ",
    37: "KeyK",
    38: "KeyL",
    39: "Semicolon", //"BracketLeft",
    40: "Quote",
    41: "Backquote", //"Semicolon",
    42: "ShiftLeft",
    43: "Backslash", //"Backquote",
    44: "KeyZ",
    45: "KeyX",
    46: "KeyC",
    47: "KeyV",
    48: "KeyB",
    49: "KeyN",
    50: "KeyM",
    51: "Comma",
    52: "Period",
    53: "Slash",
    54: "ShiftRight",
    55: "NumpadMultiply",
    56: "AltLeft",
    57: "Space",
    58: "CapsLock",
    59: "F1",
    60: "F2",
    61: "F3",
    62: "F4",
    63: "F5",
    64: "F6",
    65: "F7",
    66: "F8",
    67: "F9",
    68: "F10",
    69: "NumLock",
    70: "ScrollLock",
    71: "Numpad7",
    72: "Numpad8",
    73: "Numpad9",
    74: "NumpadSubtract",
    75: "Numpad4",
    76: "Numpad5",
    77: "Numpad6",
    78: "NumpadAdd",
    79: "Numpad1",
    80: "Numpad2",
    81: "Numpad3",
    82: "Numpad0",
    83: "NumpadDecimal",
    87: "F11",
    88: "F12",
    3612: "NumpadEnter",
    3613: "ControlRight",
    3637: "NumpadDivide",
    3639: "0x46",
    3640: "AltRight",
    3653: "Pause",
    3655: "Numpad7",
    3657: "Numpad9",
    3663: "Numpad1",
    3665: "Numpad3",
    3666: "Numpad0",
    3667: "NumpadDecimal",
    3675: "MetaLeft",
    3677: "ContextMenu",
    57416: "Numpad8",
    57419: "Numpad4",
    57420: "Numpad5",
    57421: "Numpad6",
    57424: "Numpad2",
    60999: "Home",
    61000: "ArrowUp",
    61001: "PageUp",
    61003: "ArrowLeft",
    61005: "ArrowRight",
    61007: "End",
    61008: "ArrowDown",
    61009: "PageDown",
    61010: "Insert",
    61011: "Delete"
};

const names = Object.fromEntries(
    Object.entries(scancodes).map(([code, name]) => [name, parseInt(code)])
);

names.Ctrl = names.ControlLeft;
names.Control = names.ControlLeft;
names["⌃"] = names.ControlLeft;

names.Shift = names.ShiftLeft;
names["⇧"] = names.ShiftLeft;

names.Alt = names.ShiftLeft;
names["⌥"] = names.ShiftLeft;

names["⌘"] = names.MetaLeft;
names.Meta = names.MetaLeft;
names.Cmd = names.MetaLeft;
names.Command = names.MetaLeft;
names.Windows = names.MetaLeft;
names.Win = names.MetaLeft;

names.Pausebreak = names.Pause;

names.Up = names.ArrowUp;
names.Left = names.ArrowLeft;
names.Right = names.ArrowRight;
names.Down = names.ArrowDown;

names.Capslock = names.CapsLock;

names.Pageup = names.PageUp;
names.Pagedown = names.PageDown;

names.Q = names.KeyQ;
names.W = names.KeyW;
names.E = names.KeyE;
names.R = names.KeyR;
names.T = names.KeyT;
names.Y = names.KeyY;
names.U = names.KeyU;
names.I = names.KeyI;
names.O = names.KeyO;
names.P = names.KeyP;
names.A = names.KeyA;
names.S = names.KeyS;
names.D = names.KeyD;
names.F = names.KeyF;
names.G = names.KeyG;
names.H = names.KeyH;
names.J = names.KeyJ;
names.K = names.KeyK;
names.L = names.KeyL;
names.Z = names.KeyZ;
names.X = names.KeyX;
names.C = names.KeyC;
names.V = names.KeyV;
names.B = names.KeyB;
names.N = names.KeyN;
names.M = names.KeyM;

names[1] = names.Digit1;
names[2] = names.Digit2;
names[3] = names.Digit3;
names[4] = names.Digit4;
names[5] = names.Digit5;
names[6] = names.Digit6;
names[7] = names.Digit7;
names[8] = names.Digit8;
names[9] = names.Digit9;
names[0] = names.Digit0;

names[","] = names.Comma;
names[";"] = names.Semicolon;
names["="] = names.Equal;
names["-"] = names.Minus;
names["."] = names.Period;
names["/"] = names.Slash;
names["`"] = names.Backquote;
names["["] = names.BracketLeft;
names["\\"] = names.Backslash;
names["]"] = names.BracketRight;
names["'"] = names.Quote;

export { scancodes, names };
