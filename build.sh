#!/bin/bash
# Function to install Chromium based on the OS
install_chromium() {
  OS=$(lsb_release -si 2>/dev/null || echo "unknown")

  case "$OS" in
    Ubuntu)
      sudo apt update
      sudo apt install -y chromium-browser
      ;;
    *)
      echo "Unsupported operating system: $OS"
      exit 1
      ;;
  esac
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
