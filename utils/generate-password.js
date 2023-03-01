#!/usr/bin/env node

import { length, numbers, symbols, save } from "./options.js"


const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nums = '0123456789';
const symbs = '!@#$%^&*_-+=';

export const generatePassword = () => {
    let chars = alpha;
    numbers ? chars += nums : '';
    symbols ? chars += symbs : '';

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    
    return password;
}

