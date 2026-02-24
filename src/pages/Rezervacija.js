import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Rezervacija = () => {
  const [datum, setDatum] = useState(new Date());
  const [vrijeme, setVrijeme] = useState(new Date());
  const [brojOsoba, setBrojOsoba] = useState(10);
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Forma radi! (WP još nije povezan)');
    console.log('Datum:', datum, 'Vrijeme:', vrijeme, 'Osoba:', brojOsoba);
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>📅 Rezervacija cateringa</h1>
      <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '30px', borderRadius: '10px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Datum eventa:</label>
          <DatePicker selected={datum} onChange={setDatum} dateFormat="dd/MM/yyyy" minDate={new Date()} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Početno vrijeme:</label>
          <DatePicker selected={vrijeme} onChange={setVrijeme} showTimeSelect dateFormat="HH:mm" timeIntervals={30} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Broj osoba:</label>
          <input type="number" min="1" max="200" value={brojOsoba} onChange={(e) => setBrojOsoba(parseInt(e.target.value))} style={{ width: '100%', padding: '10px' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>Pošalji rezervaciju</button>
      </form>
      {status && <div style={{ marginTop: '20px', padding: '15px', background: '#d4edda', borderRadius: '5px' }}>{status}</div>}
    </div>
  );
};

export default Rezervacija;
