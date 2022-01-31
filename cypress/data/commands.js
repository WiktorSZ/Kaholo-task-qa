export const commandsData = {
  commands: {
    uname: "uname",
    uname_a: "uname -a",
    ls: "ls -al",
    echo: "echo example",
    cat: "cat README.md",
  },
  output: {
    echo: "example",
    uname: "Linux",
    uname_a:
      "Linux magic-ThinkPad-T480 5.8.0-53-generic #60-Ubuntu SMP Thu May 6 07:46:32 UTC 2021 x86_64 x86_64 x86_64 GNU/Linux",
    ls: "total 520\ndrwxrwxr-x   5 magic magic   4096 cze 14 13:21 .\ndrwxrwxr-x   9 magic magic   4096 cze 14 12:31 ..\n-rw-rw-r--   1 magic magic   3337 cze 14 13:21 angular.json\n-rw-rw-r--   1 magic magic    703 cze 14 12:35 .browserslistrc\ndrwxrwxr-x   8 magic magic   4096 cze 14 14:44 .git\n-rw-rw-r--   1 magic magic    604 cze 14 12:35 .gitignore\ndrwxrwxr-x 729 magic magic  24576 cze 14 13:22 node_modules\n-rw-rw-r--   1 magic magic    881 cze 14 13:21 package.json\n-rw-rw-r--   1 magic magic 462009 cze 14 13:21 package-lock.json\n-rw-rw-r--   1 magic magic   1052 cze 14 12:35 README.md\ndrwxrwxr-x   5 magic magic   4096 cze 14 12:35 src\n-rw-rw-r--   1 magic magic    287 cze 14 12:35 tsconfig.app.json\n-rw-rw-r--   1 magic magic    783 cze 14 12:35 tsconfig.json",
    cat: "# QaTest\n\n        This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.",
    no_command: "error: no command.",
    not_supported: "error: command not supported.",
  },
};
