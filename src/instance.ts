import { ChromaApp } from "./chroma-js";
import { AppInfo } from "./chroma-js/src/AppInfo";

const chroma = new ChromaApp(
    new AppInfo(
        "VSChroma",
        "Visual Studio Code Plugin for Razer Chroma",
        new AuthorInfo("pastezzz@gmai.com", "Tomasz Kwolek"),
        [AvailableDevices.Keyboard],
        AppCategory.Application
    )
);
