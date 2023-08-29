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
    {
      text: 'test lorem',
      link: 'test'
    },
    {
      text: 'test2 ipsum',
      link: 'test2'
    },
    {
      text: 'test3 lorem',
      link: 'test3'
    },
    {
      text: 'test4 ipsum',
      link: 'test4'
    },
    {
      text: 'test5 lorem',
      link: 'test5'
    },
    {
      text: 'test6 lorem',
      link: 'test6'
    },
  ];
}

export default navData;