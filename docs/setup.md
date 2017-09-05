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

Read more at [NVM's Github](https://github.com/creationix/nvm#usage)

## Yarn
### What
Yarn is an alternative to NPM for managing application dependencies specific to Node.js applications. 

## Why
I prefer Yarn purely because of the time spent troubleshooting issues using NPM. It has a [fluent and terse API](https://yarnpkg.com/en/docs/cli/) that is predictable and easy to navigate logically. It downloads packages in parallel and places them in a flat structure. It's considered an upgrade to NPM and as of now, I have to agree.

### How
To install Yarn you can use Brew ([Installed Previously](#homebrew))
* `brew install yarn`


## Docker

## Concourse