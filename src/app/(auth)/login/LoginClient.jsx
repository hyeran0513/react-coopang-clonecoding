'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import LogoPath from '@/assets/colorful.svg'
import { useRouter } from 'next/navigation'

import styles from './Auth.module.scss'
import Loader from '@/components/loader/Loader'
import Input from '@/components/input/Input'
import AutoSignCheckbox from '@/components/autoSignInCheckbox/AutoSignCheckbox'

const LoginClient = () => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [isAutoLogin, setisAutoLogin] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push('/');
  }

  const loginUser = (e) => {
    e.preventDefault();
    setisLoading(true);
  }

  const signInWithGoogle = () => {

  }

  return (
    <>
      {isLoading && <Loader />}
      
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image priority src={LogoPath} alt='logo' />
          </h1>

          <form onSubmit={loginUser} className={styles.form}>
            {/* Input */}
            <Input 
              email
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="아이디(이메일)"
              className={styles.control}
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />

            <Input 
              password
              icon="lock"
              id="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호"
              className={styles.control}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <div className={styles.group}>
              {/* 자동 로그인, 비밀번호 수정 */}
              <AutoSignCheckbox
                checked={isAutoLogin}
                onChange={(e) => setisAutoLogin(e.target.checked)}
              />
            </div>

            <div className={styles.buttonGroup}>
              {/* Button */}
              Button
              <div>
                {/* Button */}
                Button
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default LoginClient