#!/usr/bin/env bash

#Use Yarn\
if [ "$(uname -s)" = "Darwin" ]; then
    echo "Mac Setup"
    brew install yarn --without-node
else
    echo "Linux Setup"
    sudo wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo

    curl --silent --location https://rpm.nodesource.com/setup_6.x | sudo bash -

    sudo yum install yarn

    yarn --version
fi