'use client';

import { register, signin } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import Button from './Button';
import Card from './Card';
import Input from './Input';

const registerContent = {
  linkUrl: '/signin',
  linkText: 'Already have an account?',
  header: 'Create a new Account',
  subheader: 'Just a few things to get started',
  buttonText: 'Register',
};

const signinContent = {
  linkUrl: '/register',
  linkText: "Don't have an account?",
  header: 'Welcome Back',
  subheader: 'Enter your credentials to access your account',
  buttonText: 'Sign In',
};

const initial = { email: "", password: "", firstName: "", lastName: "" };
