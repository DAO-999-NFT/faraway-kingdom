import React, {useState} from 'react';

import {emailApi} from 'src/utils/emailApi';

import TriangularForEmailForm from 'img/triangularForEmailForm.svg';

export function EmailFormSection() {
  const [email, setEmail] = useState('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmit = () => {
    emailApi.saveEmail(email);
    setEmail('');
  };

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
              onChange={onChangeEmail}
              className="large-input mb-[2em]"
              placeholder="mail@mail.com"
            />
            <button onClick={onSubmit} className="button-solid self-end">
              Отправить
            </button>
          </div>
        </div>
      </div>
      <TriangularForEmailForm className="absolute h-full -z-10 top-0 left-0 aspect-[2.028]" />
    </section>
  );
}
