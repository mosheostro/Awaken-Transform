// Web3Forms contact form — React functional component template.
// Replace WEB3FORMS_KEY with the right key from SKILL.md's registry.
// Adjust class names + styling to match the host site's design tokens.

import React from 'react';

const WEB3FORMS_KEY = 'PASTE-KEY-HERE';
const PROJECT_NAME  = 'My Project';

export function ContactForm() {
  const [form, setForm]       = React.useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors]   = React.useState({});
  const [status, setStatus]   = React.useState('idle'); // idle | sending | ok | err
  const [errMsg, setErrMsg]   = React.useState('');
  const [honey, setHoney]     = React.useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))   e.email = true;
    if (form.message.trim().length < 10)                  e.message = true;
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honey) return;
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    setErrMsg('');

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject:    `New Lead — ${PROJECT_NAME}`,
      from_name:  `${PROJECT_NAME} Landing`,
      name:       form.name,
      email:      form.email,
      phone:      form.phone || '—',
      message:    form.message,
      botcheck:   '',
    };

    try {
      const res  = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success === true) {
        setStatus('ok');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('err');
        setErrMsg(data.message || 'Please try again or reach us another way.');
      }
    } catch {
      setStatus('err');
      setErrMsg('Network error — please check your connection and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — keep hidden from real users, visible to bots */}
      <input
        type="checkbox"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px' }}
        checked={honey}
        onChange={(e) => setHoney(e.target.checked)}
      />

      <label>
        Name
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          aria-invalid={!!errors.name}
          maxLength={80}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          aria-invalid={!!errors.email}
          maxLength={120}
        />
      </label>

      <label>
        Phone (optional)
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          maxLength={40}
        />
      </label>

      <label>
        Message
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value.slice(0, 500) })}
          aria-invalid={!!errors.message}
          maxLength={500}
        />
        <small>{form.message.length} / 500</small>
      </label>

      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'ok'  && <p role="status">Message sent! We’ll be in touch shortly.</p>}
      {status === 'err' && <p role="alert">Couldn’t send: {errMsg}</p>}
    </form>
  );
}
