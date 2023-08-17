<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">AWS MediaLive Cloner</h3>

  <p align="center">
    Clone MediaLive channels and inputs from one place to another
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [About the Project](#about-the-project)
-   [Built With](#built-with)
-   [Getting Started](#getting-started)
-   [Contributing](#contributing)
-   [License](#license)

<!-- ABOUT THE PROJECT -->

## About The Project

We needed a simple way to copy and paste MediaLive setups between AWS accounts so created a tool to easily do this.

### Built With

-   [Commander.js](https://github.com/tj/commander.js)
-   [Chalk](https://github.com/chalk/chalk)
-   [Typescript](https://github.com/microsoft/TypeScript)
-   [AWS SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

Clone the repo (or you can click the "Use this template" button to create a new repo from this template):

```sh
git clone https://github.com/TheWFA/aws-medialive-cloner.git
```

Install NPM packages:

```sh
npm i
```

Build the project:

```sh
npm run build
```

Add your AWS credentials to the `config.json` file:

```json
{
	"identities": {
		"<name>": {
			"accessKey": "<accessKey>",
			"secretAccessKey": "<secretAccessKey>"
		}
	}
}
```

Dump the MediaLive channel and input configurations to a file:

```sh
node dist/index.js dump
```

Provision the MediaLive channel and input configurations from a file:

```sh
node dist/index.js provision
```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

```

```
