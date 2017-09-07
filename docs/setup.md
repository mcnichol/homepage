# Setup

You are looking to set up this website locally and potentially build it in your own image, great! Let me help you.

This application is a vanilla [React](https://facebook.github.io/react/) app which uses a white-labelled templating approach for all sub-domains to inherit. 

There is an assumption that development is performed on a Mac although in future versions I plan on adding support for the Linux platform.

The setup leverages:
 * [Homebrew](https://docs.brew.sh/Installation.html) *Optional*: For managing OSX dependencies
 * [NVM](https://github.com/creationix/nvm/blob/master/README.md) *Optional*: For managing Node version
 * [Yarn](https://yarnpkg.com/lang/en/docs/install/) for managing application dependencies
 * [Docker](https://www.docker.com/what-docker) *Optional*: For locally deploying all of the infrastructure needed
 * [Concourse](https://concourse.ci/) *Optional*: For Pipeline deployment
  
## Homebrew
Homebrew (aka Brew) is a package manager for the MacOS platform. It is a large step forward in increasing productivity and automating your development environment. If you do not use it, you are only handicapping yourself.

To install brew:
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Mac tools from the CLI are installed via: `brew install {APP NAME}` and GUI installs use `brew cask install {APP NANE}`

For more information on brew you can type `brew --help` or visit the [online documentation](https://docs.brew.sh/Manpage.html)

## NVM
### What
NVM is the Node.js Version Manager. It is an abstraction to the process of un/installing each version manually. Download multiple versions and swap with a simple `nvm use x.y.z`

### Why
There are a handful of tools when it comes to deploying React apps.  The likelihood that you will run into compatibility issues that is caused by versioning is high enough that this tool will pay for itself in reduced time spent troubleshooting and checking your own sanity.

### How
#### Mac
* `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.4/install.sh | bash`
* **\[Reload Terminal\]**
* `nvm install node` 
* `nvm use node`

#### Linux
* *Coming*

Read more at [NVM's Github](https://github.com/creationix/nvm#usage)

## [Yarn](https://yarnpkg.com/)
### What
Yarn is an alternative to [NPM](https://www.npmjs.com/) for managing Node.js application dependencies. 

## Why
I prefer Yarn purely because of the time spent troubleshooting issues using NPM, eventually I just walked over to Yarn and things have gone much smoother. Yarn has a [fluent and terse API](https://yarnpkg.com/en/docs/cli/) that is predictable and easy to navigate logically. It downloads packages in parallel and places them in a flat structure. It's considered an upgrade to NPM and as of now, I have to agree.

### How
#### Mac
To install Yarn you can use Brew ([Installed Previously](#homebrew))
* `brew install yarn`

Alternatively you can use NPM to install Yarn globally (The proverbial equivalent to using IE to install Chrome).  It is not recommended due to the occasionally unpredictability that is NPM.
* `npm install -g yarn`

Initialize app: `yarn init`

Adding packages:
```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```
Removing packages: `yarn remove [package]`

Install all project dependencies: `yarn install` or simply `yarn`

To learn more about how to use Yarn from the cli check out the [docs](https://yarnpkg.com/lang/en/docs/cli/)

## [Docker](https://www.docker.com/)
### What
Docker is a tool that enhances the flexibility and portability of your development workflow. There are other tools (such as [Hashicorps Vagrant](https://www.vagrantup.com/) which is also great) but we'll be using Docker for now. 

### Why
Docker creates a container that leverages the underlying hardware on your computer creating an isolated virtual environment (typically linux) that runs as if it were an independent computer configured however you need it. These containers can be configured using Dockerfiles which enables you to version control your configuration as code.

Version controlling these containers helps us add a level of stability and predictability that will save us countless hours tracking things down and questioning our own sanity. 

### How 
We'll use brew once again for installing docker:
`brew cask install docker`

Then verify things are running:
`docker run hello-world`

If all goes well you should have seen the "Hello World" of Docker along with a list of events that just occured and a link to more examples.

Visit [Dockerhub](https://hub.docker.com/), a public repository of containers, to find the virtual environment you would like to run.

See what commands are available from the cli by entering `docker --help` from the terminal.

## [Concourse](https://concourse.ci/)
### What
If Jenkins and Docker had an opinionated and easy to handle baby, it would be Concourse. Configure each step of your deployment within its own container based on three simple concepts: [Tasks, Resources, and Jobs](https://concourse.ci/concepts.html). You have a *Job* which consumes *Resources* and performs *Tasks*. 

Couple that with a clean [visualization](https://ci.concourse.ci/) of your pipeline and you can easily determine what is going on in your world and how it all ties together.

### Why
Being a full-stack developer means handling everything. Set up, development, deployment, testing. Concourse hits three of these four boxes and handles it all in a familiar way.  

Setup should be quick, automated, scriptable. The process shouldn't require context switching away from the tools a developer uses on a regular basis. These are the things Concourse provides.

Made by Pivotal Labs, it has the mark of extreme simplicity with an open door to complete customization should you need it. A pipeline by devs for devs.

### How
I've built a simple script for kicking things off locally. This isn' a production ready system but more simply a "pull-down from anywhere and deploy quickly"

`git clone https://github.com/mcnichol/modules.git && cd modules/concourse`
`sudo PIPELINE_USER={USER_NAME} PIPELINE_PASS={PASSWORD} ./run-concourse.sh`

This installs Concourse and the [Fly CLI](https://concourse.ci/fly-cli.html) which you will use for interfacing with Concourse, deploying new pipelines, etc.

To learn more about pipeline setup, check out the [Concourse tutorials](https://concourse.ci/tutorials.html)
