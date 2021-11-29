# Mobile App Local Launch 

## Preparartion

- Install globally Expo-cli package
```sh
yarn add global expo-cli
```
# 1 Run App in Browser
- Run mobile project from root directory
```sh
yarn run start
```
- In browser open window tap on Run in web browser


# 2 Run App in Emulator
### 1 Android Studio Set Up
- Install Android Studio [here](https://developer.android.com/studio)
- Set Up Android Studio Tools
-- Go to Preferences > Appearance & Behavior > System Settings > Android SDK
-- On the "SDK Platforms" and make sure you have at least one version of the Android OS
-- Click on the "SDK Tools" tab and check if the next packages are installed:
```sh
Android SDK Build-Tools
Android Emulator
Android SDK Platform-Tools
Intel x86 Emulator Accelerator (HAXM Installer)
```
### 2 Set up a virtual device
- On the Android Studio main screen, click "Configure", then "AVD Manager" in the dropdown.
- Press the "+ Create Virtual Device" button.
- Choose the type of hardware you'd like to emulate. We recommend testing against a variety of devices, but if you're unsure where to start, the newest device in the Pixel line could be a good choice.
- Select an OS version to load on the emulator (probably one of the system images in the "Recommended" tab), and download the image.
- Change any other settings you'd like, and press "Finish" to create the virtual device. You can now run this device anytime by pressing the Play button in the AVD Manager window.

### 3 Launch Mobile App Locally
- Run mobile project fro
```sh
yarn run start
```
- In browser open window tap on Run on Android device/emulator

For additional information use official [expo-cli documentation](https://docs.expo.io/)