'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import LogoPath from '@/assets/colorful.svg'
import { useRouter } from 'next/navigation'

import Loader from '@/components/loader/Loader'
import styles from '../login/Auth.module.scss'
import Input from '@/components/input/Input'
import Divider from '@/components/devider/Devider'
import Button from '@/components/button/Button'
import Link from 'next/link'

const RegisterClient = () => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isLoading, setisLoading] = useState(false);

  const router = useRouter();

  const redirectUser = () => {
    router.push('/');
  }

  const registerUser = (e) => {
    e.preventDefault();
    setisLoading(true);
  }

  return (
    <>
      {isLoading && <Loader />}

      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image priority src={LogoPath} alt='logo' />
          </h1>

          <form onSubmit={registerUser} className={styles.form}>
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

            <Input 
              password
              icon="lock"
              id="checkPassword"
              name="checkPassword"
              label="비밀번호 확인"
              placeholder="비밀번호 확인"
              className={styles.control}
              value={checkPassword}
              onChange={(e) => setpassword(e.target.value)}
            />

            <div className={styles.buttonGroup}>
              <Button
                type="submit"
                width="100%"
              >
                회원가입
              </Button>

              <Divider />

              <Button
                width="100%"
                secondary
              >
                <Link href={"/login"}>
                  로그인
                </Link>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default RegisterClient