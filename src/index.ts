import { Command } from "commander";
import { PKG_DESCRIPTION, PKG_VERSION } from "./version.js";
import { askForIdentity } from "./identity.js";
import chalk from "chalk";

const program = new Command();

//Grabs version and description from package.json
program.version(PKG_VERSION).description(PKG_DESCRIPTION);

program.command("dump").action(async () => {
	console.log(chalk.yellow("AWS MediaLive Cloner\n"));
	const id = await askForIdentity();

	process.exit(0);
});

program.command("provision").action(() => {
	console.log("Provisioning...");
	process.exit(0);
});

program.parse(process.argv);
