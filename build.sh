#!/bin/bash

# Function to install Chromium based on the OS
install_chromium() {
  if command -v apt &> /dev/null; then
    # Debian/Ubuntu
    sudo apt update
    sudo apt install -y chromium-browser
  elif command -v yum &> /dev/null; then
    # Fedora
    sudo yum install -y chromium
  else
    echo "Unsupported package manager. Please install Chromium manually."
    exit 1
  fi
}

# Install Chromium
install_chromium

# Set Chromium path in the environment variable CHROMIUM_PATH
CHROMIUM_PATH=$(which chromium-browser)

# Export the CHROMIUM_PATH variable
echo "export CHROMIUM_PATH=$CHROMIUM_PATH" >> ~/.bashrc
source ~/.bashrc

# Display a message
echo "Chromium installed and CHROMIUM_PATH environment variable set to: $CHROMIUM_PATH"

# nextjs build
yarn install
yarn build
