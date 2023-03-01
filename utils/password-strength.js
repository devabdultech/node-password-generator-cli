#!/usr/bin/env node

export const generatePasswordStrength = (password) => {
    let strength = 0;

    // Calculate length score
    if (password.length >= 8) {
        strength += 2;
    }
    if (password.length >= 12) {
        strength += 4;
    }
    if (password.length >= 16) {
        strength += 6;
    }

    // Calculate character score
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    const characterScore = hasLowercase + hasUppercase + hasNumbers + hasSymbols;
    strength += characterScore > 3 ? 4 : characterScore;
    const strengthPercentage = (strength/20) * 100;

    return strengthPercentage;
}