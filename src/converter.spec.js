// Import the `Converter` class for use in the tests below.
const { Converter } = require('./converter');

describe('Converter', () => {
  describe('list()' , () => {
    // The following test case covers the `list()` method's behaviour.
    // It can also be used for reference when implementing the tests cases below.
    it('should return an array containing the initial supported currencies', () => {
      const converter = new Converter();

      const result = converter.list();

      expect(result).toEqual(['USD', 'CAD', 'GBP']);
    });
  });

  describe('add()', () => {
    it('should return a success message when the new currency is added', () => {
      // TODO: Ensure that new currencies can be added successfully.
    });

    it('should return an error message when the currency has been added previosuly ', () => {
      // TODO: Ensure that an error message is returned if the currency has *already* been added.
    });
  });

  describe('convert()', () => {
    it('should return a message containing the converted value when both currencies are supported', () => {
      // TODO: Ensure that an amount can be converted from one supported currency to another.
    });

    it('should return an error message when either currency is not supported', () => {
      // TODO: Ensure that an error message is returned if either currency has *not* been added.
    });
  });
});
