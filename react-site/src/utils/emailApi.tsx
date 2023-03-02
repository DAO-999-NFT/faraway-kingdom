import React, {createContext, useEffect} from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import emailjs from '@emailjs/browser';

interface EmailFormType {
  email: string;
  name: string;
}

interface ProvidedValue {
  saveEmail: ({email, name}: EmailFormType) => Promise<void>;
}
export const EmailApiContext = createContext<ProvidedValue>({
  saveEmail: async () => {},
});

export function EmailApiProvider({children}: {children: JSX.Element}) {
  const {
    siteConfig: {customFields: ENV_VARIABLES},
  } = useDocusaurusContext();

  const {EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID} =
    ENV_VARIABLES as any;

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, [EMAILJS_PUBLIC_KEY]);

  const saveEmail = async ({email, name}: EmailFormType) => {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        customer_email: email,
        customer_name: name,
      },
      EMAILJS_PUBLIC_KEY,
    );
  };

  return (
    <EmailApiContext.Provider value={{saveEmail}}>
      {children}
    </EmailApiContext.Provider>
  );
}
