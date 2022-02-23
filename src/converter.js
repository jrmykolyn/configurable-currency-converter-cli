class Converter {
  // 'Pre-load' a selection of currencies.
  // Remember, each currency's value is relative to USD.
  data = {
    USD: 1,
    CAD: 0.78,
    GBP: 1.36,
  };

  list() {
    // TODO: Return an array containing the list of supported currencies.
  }

  add(currency, value) {
    // TODO: Add the currency and value supplied; return a success message.
    // TODO: Return an error message if the currency has already been added.
  }

  convert(base, target, amount) {
    // TODO: Convert the amount using the base and target currencies; return a success message.
    // TODO: Return an error message if either currency is not supported.
  }
}

// Export the `Converter` so that it can be used within the command line interface and test files.
module.exports = { Converter };
