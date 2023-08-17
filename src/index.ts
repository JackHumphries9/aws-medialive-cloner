import { Command } from "commander";
import { PKG_DESCRIPTION, PKG_VERSION } from "./version.js";

const program = new Command();

//Grabs version and description from package.json
program.version(PKG_VERSION).description(PKG_DESCRIPTION);

program.command("dump").action(() => {
	console.log("Dumping...")
	process.exit(0)
})

program.command("provision").action(() => {
	console.log("Provisioning...")
	process.exit(0)
})

program.parse(process.argv);
