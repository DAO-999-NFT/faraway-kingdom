import {useContext} from 'react';

import {EmailApiContext} from 'src/utils/emailApi';

export const useEmailApi = () => {
  const emailApi = useContext(EmailApiContext);

  return emailApi;
};
