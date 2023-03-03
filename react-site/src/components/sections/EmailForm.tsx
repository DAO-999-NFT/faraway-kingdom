import React, {createRef, useMemo, useState} from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useEmailApi} from '@site/src/hooks';
import ReCAPTCHA from 'react-google-recaptcha';
import {boolean, object, string} from 'yup';

import TriangularForEmailForm from 'img/triangularForEmailForm.svg';

const emailFormSchema = object({
  name: string().required().min(2).max(40),
  email: string().required().email(),
  captchaPassed: boolean().required().isTrue(),
});

export function EmailFormSection() {
  const [form, setForm] = useState({email: '', name: '', captchaPassed: false});
  const emailApi = useEmailApi();
  const captchaRef = createRef<ReCAPTCHA>();
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(pr => ({...pr, email: e.target.value}));
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(pr => ({...pr, name: e.target.value}));
  };

  const onSubmit = () => {
    emailApi.saveEmail(form);
    setForm({name: '', email: '', captchaPassed: false});
    captchaRef.current?.reset();
  };
  const onChangeCaptcha = () => {
    setForm(pr => ({...pr, captchaPassed: true}));
  };
  const onExpiredCaptcha = () => {
    setForm(pr => ({...pr, captchaPassed: false}));
  };
  const isValid = useMemo(() => {
    try {
      emailFormSchema.validateSync(form);
      return true;
    } catch (error) {
      return false;
    }
  }, [form]);

  return (
    <section className="bg-white z-10 relative overflow-hidden">
      <div className="content-container z-10 overflow-clip py-[5em] text-content">
        <div className="max-w-[550px] self-end m-0">
          <div className="text-right">
            <h2
              style={{
                display: 'block',
              }}
              className="text-[#FF71A7] mb-[1em] text-end self-end">
              Обратная связь
            </h2>
            <input
              value={form.name}
              onChange={onChangeName}
              className="large-input mb-[2em]"
              placeholder="Name"
            />
            <input
              value={form.email}
              onChange={onChangeEmail}
              type="email"
              className="large-input mb-[1em]"
              placeholder="mail@mail.com"
            />
            <div className="flex">
              <ReCAPTCHA
                ref={captchaRef}
                onExpired={onExpiredCaptcha}
                className="ml-auto mb-[1em]"
                sitekey={(customFields?.CAPTCHA_KEY ?? '') as string}
                onChange={onChangeCaptcha}
              />
            </div>
            <button
              disabled={!isValid}
              onClick={onSubmit}
              className="button-solid self-end">
              Отправить
            </button>
          </div>
        </div>
      </div>
      <TriangularForEmailForm className="absolute h-full -z-10 top-0 left-0 aspect-[2.028]" />
    </section>
  );
}
