## Kaholo Task
Tests are written in JS and Cypress

## How to open
### Prerequisites
* macOS 10.9 and above (64-bit only)
* Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
* Windows 7 and above (64-bit only)

If using npm install
* Node.js 12 or 14 and above

### CLI

'npx cypress open' - to open with runner

Available browsers: Chrome 97, Edge 97, Electron 94


'npx cypress run' - to open with headless mode

## Test cases:
/integration/commands.js:
1. Verifies different commands and their output
2. Verifies the case where commands are written with additional space
3. Verifies the case where commands are with additional signs
4. Verifies if commands are case sensitive
5. Verifies the case where commands are written with slightly different values as expected

/integration/visuals.js:
1. Verification of placeholder behavior
2. Verification of error icon behavior


## Potential spotted problems
Commands that will output unique text have to be written:
- without any additional space
- are case sensitive
- only the echo command is not hardcoded to output exactly the same data
- adding additional signs like '-', '.' etc. will brake the command

Div with data output is not fully responsive when opened on devices with a screen width lower than 700px
