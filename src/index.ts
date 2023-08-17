import { Command } from "commander";
import { PKG_DESCRIPTION, PKG_VERSION } from "./version.js";
import { askForIdentity } from "./identity.js";
import chalk from "chalk";
import { Spinner } from "cli-spinner";

const program = new Command();

//Grabs version and description from package.json
program.version(PKG_VERSION).description(PKG_DESCRIPTION);

const timeout = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

program.command("dump").action(async () => {
	console.log(chalk.yellow("AWS MediaLive Cloner\n"));
	const id = await askForIdentity();

	const spinner = new Spinner("Cloning...");

	spinner.setSpinnerString(18);
	spinner.start();

	await timeout(2000);

	spinner.stop(true);

	console.log(chalk.green("Done!"));

	process.exit(0);
});

program.command("provision").action(async () => {
	console.log(chalk.yellow("AWS MediaLive Cloner\n"));
	const id = await askForIdentity();

	const spinner = new Spinner("Provisioning...");

	spinner.setSpinnerString(18);
	spinner.start();

	await timeout(2000);

	spinner.stop(true);

	console.log(chalk.green("Done!"));

	process.exit(0);
});

program.parse(process.argv);
