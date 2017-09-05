# Setup

You are looking to set up this website locally and potentially build it in your own image, great! Let me help you.

This application is a vanilla [React](https://facebook.github.io/react/) app which uses a white-labelled templating approach for all sub-domains to inherit. 

There is an assumption that development is performed on a Mac although in future versions I plan on adding support for the Linux platform.

The setup leverages:
 * [Brew](https://docs.brew.sh/Installation.html) *Optional*: For managing OSX dependencies
 * [NVM](https://github.com/creationix/nvm/blob/master/README.md) *Optional*: For managing Node version
 * [Yarn](https://yarnpkg.com/lang/en/docs/install/) for managing application dependencies
 * [Docker](https://www.docker.com/what-docker) *Optional*: For locally deploying all of the infrastructure needed
 * [Concourse](https://concourse.ci/) *Optional*: For Pipeline deployment
  
## Brew
Brew is a package manager for the MacOS platform. It is a large step forward in increasing productivity and automating your development environment. If you do not use it, you are only handicapping yourself.

To install brew:
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Mac tools from the CLI are installed via: `brew install {APP NAME}` and GUI installs use `brew cask install {APP NANE}`

For more information on brew you can type `brew --help` or visit the [online documentation](https://docs.brew.sh/Manpage.html)

## NVM

## Yarn

## Docker

## Concourse