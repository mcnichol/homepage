#Use Yarn

#RHEL/Fedora
sudo wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo

curl --silent --location https://rpm.nodesource.com/setup_6.x | sudo bash -

sudo yum install yarn

yarn --version
