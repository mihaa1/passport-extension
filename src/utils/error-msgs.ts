import Content from '@src/content.json';
import { getCurrentURL } from './general';

export type ErrorType = keyof typeof Content.errors;

export const getErr = async (): Promise<ErrorType | void> => {
  const currentURL = await getCurrentURL();
  if (currentURL) {
    const host = new URL(currentURL).host;
    if (!host.startsWith('piba.myvisit.com')) {
      return 'wrongURL';
    }
  }
};

export const getErrMsg = async (): Promise<string> => {
  try {
    const errType = await getErr();
    return (errType && Content.errors[errType]) || '';
  } catch (e) {
    console.error('getErrMsg()', e);
    return '';
  }
};
