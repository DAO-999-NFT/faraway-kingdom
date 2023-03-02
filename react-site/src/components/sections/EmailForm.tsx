import React, {useMemo, useState} from 'react';

import {useEmailApi} from '@site/src/hooks';
import {object, string} from 'yup';

import TriangularForEmailForm from 'img/triangularForEmailForm.svg';

const emailFormSchema = object({
  name: string().required().min(2).max(40),
  email: string().required().email(),
});

export function EmailFormSection() {
  const [form, setForm] = useState({email: '', name: ''});
  const emailApi = useEmailApi();

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(pr => ({...pr, email: e.target.value}));
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(pr => ({...pr, name: e.target.value}));
  };

  const onSubmit = () => {
    emailApi.saveEmail(form);
    setForm({name: '', email: ''});
  };
  const isValid = useMemo(() => {
    try {
      emailFormSchema.validateSync(form);
      return true;
    } catch (error) {
      console.log('🚀 - error:', error);
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
              className="large-input mb-[2em]"
              placeholder="mail@mail.com"
            />
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
