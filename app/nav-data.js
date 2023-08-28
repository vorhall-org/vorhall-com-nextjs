import 'server-only';

import { getDictionary } from '../get-dictionary';

const navData = async (locale) => {
  const dictionary = await getDictionary(locale);

  return [
    {
      text: dictionary.navigation.home,
      link: '.',
    },
    {
      text: dictionary.navigation.about,
      link: 'about',
    },
    {
      text: dictionary.navigation.services,
      link: 'services'
    },
  ];
}

export default navData;