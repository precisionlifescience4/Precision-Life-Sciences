'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [services, setServices] = useState([]);
  const [settings, setSettings] = useState({});
  const [msg, setMsg] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetch('/api/services').then(r => r.json()).then(setServices);
    fetch('/api/settings').then(r => r.json()).then(setSettings);
  }, []);

  const updateService = (id, field, value) => {
    setServices(services.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const saveService = async (service) => {
    await fetch('/api/services', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(service),
    });
    setMsg(`${service.name} saved`);
    setTimeout(() => setMsg(''), 2000);
  };

  const saveSettings = async () => {
    await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    setMsg('Settings saved');
    setTimeout(() => setMsg(''), 2000);
  };

  const logout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: '#0a1f44' }}>Admin Dashboard</h1>
        <button onClick={logout} style={{ padding: '8px 16px', background: '#e8590c', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Logout</button>
      </div>

      {msg && <p style={{ color: 'green', fontWeight: 'bold' }}>{msg}</p>}

      <h2 style={{ marginTop: '2rem', color: '#0a1f44' }}>Services / Assays</h2>
      {services.map((s) => (
        <div key={s.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
          <input
            value={s.name}
            onChange={(e) => updateService(s.id, 'name', e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '8px', fontWeight: 'bold', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <textarea
            value={s.description}
            onChange={(e) => updateService(s.id, 'description', e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '8px', minHeight: '60px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <input
            value={s.price}
            onChange={(e) => updateService(s.id, 'price', e.target.value)}
            placeholder="Price"
            style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <button onClick={() => saveService(s)} style={{ padding: '8px 16px', background: '#00b4d8', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Save
          </button>
        </div>
      ))}

      <h2 style={{ marginTop: '2rem', color: '#0a1f44' }}>Contact Info</h2>
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
        {['email', 'phone', 'whatsapp', 'address', 'maps_link', 'facebook', 'instagram', 'youtube'].map((field) => (
          <input
            key={field}
            placeholder={field}
            value={settings[field] || ''}
            onChange={(e) => setSettings({ ...settings, [field]: e.target.value })}
            style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        ))}
        <button onClick={saveSettings} style={{ padding: '8px 16px', background: '#00b4d8', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Save Settings
        </button>
      </div>
    </div>
  );
}