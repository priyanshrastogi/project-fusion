# Project Fusion

Project Fusion is an experimental framework designed to run React Native apps natively on Android and iOS without performance degradation.

## Project Structure

- `FusionRN`: React Native app
- `FusionHostAndroid`: Vanilla Android app
- `android/lib`: Module for publishing the React Native Android app as an AAR

## Getting Started

### Running FusionRN (React Native App)

1. Install dependencies:
   ```
   yarn
   ```

2. Start Metro Bundler:
   ```
   yarn start
   ```

3. Open the `android` directory in Android Studio and run the `:app` configuration.

### Running FusionHostAndroid (Vanilla Android App)

Open the project in Android Studio and run the `:app` configuration.

## Publishing an AAR

To package the React Native app as an Android Archive (AAR) for use in other Android projects:

1. Update the React Native codebase in the `src` directory as needed.

2. Bundle JS files and place them in the Android `lib/src/main/assets` directory:
   ```
   npx react-native bundle --entry-file index.js --platform android --dev false --bundle-output android/lib/src/main/assets/index.android.bundle --assets-dest android/lib/src/main/res/
   ```

3. Build the AAR:
   ```
   ./gradlew clean :lib:assembleRelease
   ```

4. Locate the generated AAR in `/android/lib/build/outputs/aar`.

5. Copy the AAR to `FusionHostAndroid/app/libs`.

