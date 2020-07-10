import { init } from 'i18next';

import LocalStorageService from '../services/LocalStorageService';
import { LANGUAGES } from '../app/constants';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

init({
  lng: LocalStorageService.getLanguage() || LANGUAGES.EN,
  initImmediate: false
});

requireAll(require.context('..', true, /i18n\.js$/));
