import * as fs from "fs";
import { jsonParse } from "./utils.js";
import cliSelect from "cli-select";
import chalk from "chalk";

type ConfigId = { [key: string]: AWSIdentity };

const getIdentities = (): ConfigId => {
	const jsonString = fs.readFileSync("config.json", "utf8");
	const data = jsonParse<{ identities: ConfigId }>(jsonString);

	return data.identities;
};

export const askForIdentity = async (): Promise<AWSIdentity> => {
	const identities = getIdentities();

	console.log(chalk.red("Please select an identity:"));
	const choice = await cliSelect({
		values: Object.keys(identities),
	});

	console.log(chalk.green(`\nChose ${choice.value}\n`));

	return identities[choice.value];
};
