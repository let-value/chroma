import { makeAutoObservable } from "mobx";
import ColorState from "../color/colors";
import KeyboardState from "./KeyboardState";

export default class State {
    keyboard = new KeyboardState();
    theme = new ColorState();
    isDebug: boolean = false;

    constructor() {
        makeAutoObservable(this, { keyboard: false });
    }
}
