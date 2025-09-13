# Formspree Setup Guide

## Step 1: Create a Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create a New Form
1. After logging in, click "New Form"
2. Give your form a name (e.g., "Portfolio Contact Form")
3. Add your email address where you want to receive messages
4. Copy the form ID (it will look like: `xrgkqjqw` or similar)

## Step 3: Update Your Code
1. Open `project/src/components/ContactSection.tsx`
2. Find line 57: `const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {`
3. Replace `YOUR_FORM_ID` with your actual Formspree form ID
4. Example: `const response = await fetch('https://formspree.io/f/xrgkqjqw', {`

## Step 4: Test Your Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Step 5: Configure Formspree (Optional)
- Set up custom email templates
- Add spam protection
- Configure auto-responders
- Set up webhooks for advanced integrations

## Formspree Free Plan Includes:
- 50 submissions per month
- Spam protection
- Email notifications
- Basic customization

## Troubleshooting:
- Make sure your form ID is correct
- Check browser console for any errors
- Verify your Formspree account is active
- Ensure your domain is not blocked by Formspree

## Security Note:
- Formspree handles spam protection automatically
- No sensitive data is stored on Formspree servers
- All submissions are sent directly to your email
