#!/bin/bash

currentDirectory=$(pwd)
packagesDirectory=$currentDirectory/packages/custom/*
color='\033[1;32m'

# Input password for user
echo -n "Enter password for $USER:"
read -s password
echo $password

for directory in $packagesDirectory
do
    if [ -d "$directory" ]
    then
        echo -e "${color}Installing components for $directory"

        cd $directory
        echo "$password\n" | sudo bower install --allow-root
        echo "$password\n" | sudo npm install
        cd $currentDirectory
    fi
done

# Install bower and npm packages in root

echo -e "${color}Installing components for $currentDirectory"

echo "$password\n" | sudo bower install --allow-root
echo "$password\n" | sudo npm install