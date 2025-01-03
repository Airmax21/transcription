'use client'
import React, { useState } from 'react';
import { Button, Card, Form, Input } from 'antd';
import requestInstance from '@/utils/axios.instance';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store';
import { loginUser } from '@/store/slicers/auth.slicer';


async function checkLogin() {
  const router = useRouter();
  const auth = useAppSelector((state) => state.auth)
  if(auth.isLogin) {
    router.replace('/admin')
  }
}

const SignInPage: React.FC = () => {
  checkLogin()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({
    status: 'undefined',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const auth = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    setError({
      status: 'undefined',
      message: ''
    })

    try {
      const response = await requestInstance.post('auth/login', form)

      if (response.status == 200) {
        const { accessToken, userId } = response.data;
        dispatch(loginUser({
          token: accessToken,
          userId
        }))
        
        router.replace('/dashboard')
      }
      else {
        setError({
          status: 'error',
          message: 'Error login. Silahkan coba lagi'
        });
      }
    } catch (e: any) {
      if (e.response && e.response.status === 401) {
        setError({
          status: 'error',
          message: 'Username & Password Salah'
        });
      } else {
        setError({
          status: 'error',
          message: 'Error login. Silahkan coba lagi'
        });
      }
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <section>
        <Card bordered style={{ background: '#F1F0E8' }}>
          <h3 className='text-3xl text-center m-5 font-sans'>Sign In</h3>
          <Form className='form' onSubmitCapture={handleSubmit} layout='vertical'>
            <div>
              <Form.Item
                label='Email'
              >
                <Input
                  {...(error.status === 'error' ? { status: 'error' } : {})}
                  prefix={<svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path></g></svg>}
                  type="text"
                  variant='outlined'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  style={{ backgroundColor: '#F1F0E8' }}
                  size='large' />
              </Form.Item>
              <Form.Item
                label='Password'
                help={error.message}
                {...(error.status === 'error' ? { validateStatus: 'error' } : {})}
              >
                <Input.Password
                  {...(error.status === 'error' ? { status: 'error' } : {})}
                  prefix={<svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>}
                  type="password"
                  variant='outlined'
                  name='password'
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                  style={{ backgroundColor: '#F1F0E8' }}
                  size='large' />
              </Form.Item>
              <Button type="primary" className='button-submit' htmlType="submit">Submit</Button>
            </div>
          </Form>         
        </Card>
      </section>
    </>
  )
};

export default SignInPage;