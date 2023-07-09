import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => ({
  translations: (await import(`./translations/${locale}.json`)).default
}));