# Configurable Currency Converter CLI

## Introduction

As part of this exercise you will create a configurable command-line based currency conversion tool. This tool will allow users to register new currencies, view a list of supported currencies, and convert from one currency to another. You will also be required to test the program's behaviour using to ensure that it works as expected (and of course to prevent the introduction of future defects).

The program itself will have two main components: the command-line interface; and the underlying converter logic. The command line interface (which must be defined within the `index.js` file) is responsible for receiving user input, interacting with the underlying converter, and displaying information to the user. The converter is responsible for storing currency information, converting between supported currencies, and generating warning and error messages. The command-line interface will be tested manually (ie. through user interaction) and the converter will be tested programmatically (ie. using Jest-based unit tests).

// TODO: Add notes re: base currency (USD), persistence, and other things to keep in mind.

## Learning Objectives

The learning objectives for this exercise are as follows:

- To demonstrate and deepen your knowledge of JavaScript in general, and Node in particular.
- To demonstrate and continue to build your familiarity with testing in general, and Jest in particular.
- To demonstrate and exercise your knowledge of version control (Git) techniques and best practices.

## Goals

The following list describes the minimum requirements for this exercise, which all submission MUST meet. Students are free to include additional features and functionality as long as they don't conflict with the minimum requirements.

- The program must display a list of the supported currencies in response to following command: `node ./index.js list`.
- The program must register a new currency in response to the following command: `node ./index.js add <CURRENCY> <VALUE>`.
  - `<CURRENCY>` must be replaced with a currency code (such as CAD, EUR, GBP, etc.).
  - `<VALUE>` must be replaced with the value of the currency, relative to USD.
  - For example: `node ./index.js add EUR 2`
- The program must display the following message if the user attempts to register a currency that already exists: `Whoops, the following currency already exists: <CURRENCY>`.
  - For example, assuming that a user attempts to register CAD multiple times: `Whoops, the following currency already exists: CAD`.
- The program must allow users to convert an amount between two supported currencies using the following command: `./node index.js convert <BASE CURRENCY> <TARGET CURRENCY> <AMOUNT>`.
  - `<BASE CURRENCY>` must be replaced with the currency that the user is converting _from_.
  - `<TARGET CURRENCY>` must be replaced with the currency that the user is converting _to_.
  - `<AMOUNT>` must be replaced with the amount that the user wishes to convert.
  - For example: assuming that the user previously registered both CAD and EUR: `./node index.js convert CAD EUR 20`
  - This command must return and display the result to the user. You may display _just_ the resulting number or embed it within a larger message.
- The program must display the following message if the user attempts to convert between currencies and one (or both) currencies are not supported: `Whoops, one or both of the currencies are unsupported`.
  - For example, assuming that either CAD or EUR have not been registered: `./node index.js convert CAD EUR 20`.

## Not In Scope

The following features and functionality ARE NOT required for this exercise. However, students who have complete the minimum requirements outline above may chose to include one or more of the following:

- The program does not need to the removal of currencies.
- The program does not need to ensure that the user-supplied currency codes are valid.
- The program does not need to ensure that the currency values are correct.
- // TODO: Data persistence.

## Resources
