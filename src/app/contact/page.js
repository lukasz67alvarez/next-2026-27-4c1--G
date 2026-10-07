'use client';

import { useActionState } from 'react';

async function submitContact(prevState, formData) {
  'use server';

  const email = formData.get('email');

  if (!email || !email.includes('@')) {
    return { success: false, message: 'Podaj poprawny adres e-mail.' };
  }

  return { success: true, message: 'Dziękujemy za zgłoszenie!' };
}

export default function ContactPage() {
  const [state, formAction] = useActionState(submitContact, { message: '' });

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Kontakt</h1>
      <form action={formAction}>
        <input name="email" type="email" placeholder="Twój e-mail" required />
        <button type="submit">Wyślij</button>
      </form>
      {state.message && <p>{state.message}</p>}
    </main>
  );
}