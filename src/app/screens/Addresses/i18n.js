import i18next from 'i18next';

import { DEFAULT_ERROR_MESSAGE, LANGUAGES } from '../../constants';

i18next.addResources('en', 'Addresses', {
  addressesNotMatchedError: 'Addresses do not match any location. Please try again with other addresses',
  addressNotMatchedError: 'do not match any location. Please try again with another address',
  addressOneExample: '11390 W Olympic Blvd',
  addressTwoExample: "3 Abbey Rd, St John's Wood",
  distanceButton: 'See distance',
  defaultErrorMessage: DEFAULT_ERROR_MESSAGE[LANGUAGES.EN],
  theAddress: 'The address',
  title: 'Enter addresses'
});
