# EmailJS Setup Guide

This portfolio uses EmailJS to send contact form emails directly to your inbox(es).

## Steps to Set Up EmailJS:

### 1. Create an EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account
- Verify your email

### 2. Create an Email Service
- Go to **Email Services** in the dashboard
- Click **Connect New Service**
- Choose your email provider (Gmail recommended):
  - Select **Gmail**
  - Allow EmailJS to access your Gmail account
  - Follow the authorization steps
  - Name your service (e.g., "Gmail_Service")
  - Copy the **Service ID** (looks like: `service_xxxxxxxxxxxxx`)

### 3. Create an Email Template
- Go to **Email Templates** in the dashboard
- Click **Create New Template**
- Use this template format:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

- Variables to add:
  - `{{from_name}}` - Visitor's name
  - `{{from_email}}` - Visitor's email
  - `{{subject}}` - Subject line
  - `{{message}}` - Message content
  - `{{to_email}}` - Your email address

- Copy the **Template ID** (looks like: `template_xxxxxxxxxxxxx`)

### 4. Get Your Public Key
- Go to **Account Settings** in the dashboard
- Find **Public Key** section
- Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxxxxx`)

### 5. Update Contact.js
Open `src/components/Contact.js` and replace:
- `YOUR_PUBLIC_KEY` with your actual Public Key
- `service_YOUR_SERVICE_ID` with your Service ID
- `template_YOUR_TEMPLATE_ID` with your Template ID

Example:
```javascript
emailjs.init('abc123xyz789...'); // Your public key

await emailjs.send('service_xxxxx', 'template_xxxxx', {
  // ... parameters
});
```

### 6. Test the Form
- The form will now send emails to both:
  - imenjlassi619@gmail.com
  - Imen.Jlassi@outlook.fr

## Free Tier Limits
- EmailJS free tier: 200 emails/month
- Perfect for portfolio contact forms!

## Troubleshooting
- **Emails not sending?** Check that your Service ID and Template ID are correct
- **Still having issues?** Check the browser console (F12) for error messages
- **Gmail security?** You may need to create an App Password if you have 2FA enabled

---

Once you complete these steps, your contact form will send real emails! 🚀
