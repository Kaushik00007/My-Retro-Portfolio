import FileSystemBash, { FileSystemType } from "../fileSystemBash";
import cd from "./cd";
import echo from "./echo";
import hello from "./hello";
import ls from "./ls";
import mkdir from "./mkdir";
import pwd from "./pwd";
import show from "./show";
import touch from "./touch";
// @ts-ignore
import helpMD from "./assets/help.md?raw";

export default function Applications(
  print: (s: string, md?: boolean) => void,
  path: FileSystemType
) {
  const help = (args: string[], options: string[]) => {
    let helpStr: string = helpMD;
    Object.entries(apps).forEach((entry) => {
      const [key, value] = entry;
      helpStr += `### ${value.docs.name} - ${value.docs.short}\n`;
    });
    console.log(helpStr);
    print(helpStr, true);
  };
  /* New Commands */
  const date = {
    docs: {
      name: "date",
      short: "print the system date",
      long: "Display the current system date.",
    },
    app: (args: string[], options: string[]) => {
      print("\n" + new Date().toLocaleDateString());
    },
  };

  const time = {
    docs: {
      name: "time",
      short: "print the system time",
      long: "Display the current system time.",
    },
    app: (args: string[], options: string[]) => {
      print("\n" + new Date().toLocaleTimeString());
    },
  };

  const version = {
    docs: {
      name: "version",
      short: "print the system version",
      long: "Display the version of the KASH shell.",
    },
    app: (args: string[], options: string[]) => {
      print("\nKASH, version 8.0.0");
    },
  };

  const apps = {
    ls: ls(print, path),
    cd: cd(print, path),
    show: show(print, path),
    echo: echo(print, path),
    pwd: pwd(print, path),
    mkdir: mkdir(print, path),
    touch: touch(print, path),
    hello: hello(print, path),
    date: date,
    time: time,
    version: version,
  };
  const getApp = (
    appName: string
  ): null | ((args: string[], options: string[]) => any) => {
    const app = (apps as any)[appName];
    if (app) return app.app;

    if (appName === "help") return help;

    return null;
  };

  return getApp;
}
