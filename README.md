# Fast Food Exam

This is a exam conducted by PRAXXYS company.

Before proceeding with the installation you must need to have the following installed on your local machine.

1. [Git Bash](https://git-scm.com/downloads)
2. [Node JS (LTS or Lastest version)](https://nodejs.org/en/)
3. [Ionic CLI Globally installed](https://ionicframework.com/docs/cli)
4. [Andriod Studio for Testing Cross Platform](https://developer.android.com/studio)
5. [Create A Virtual Device on Andriod Studio or Connect with your Physical Smartphone Device.](https://developer.android.com/studio/run/managing-avds)

## Installation

### Web

Clone the project

```bash
  git clone https://github.com/cronomus01/fast-food-app
```

Go to the project directory

```bash
  cd fast-food-app
```

Install dependencies

```bash
  npm install
```

Start the server for web

```bash
  npm run dev
```

### Andriod

Build the project

```bash
  ionic cap build
```

Choose Andriod

```bash
  What platform would you like to build for? (Use arrow keys)
  > android
    ios
```

Result

```bash
[INFO] Ready for use in your Native IDE!

       To continue, build your project using Android Studio!

> capacitor.cmd open android
[capacitor] [info] Opening Android project at: android.
```

Open your andriod studio to run the project.
