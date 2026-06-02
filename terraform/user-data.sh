#!/bin/bash
apt update -y
apt install -y nodejs npm nginx mysql-client

curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

npm install -g pm2
