import React from 'react';

export const PatientsPatient = () => {
  const { title, user } = patient;

  return (
    <div>
      <strong>{title}</strong>
      <span>{user.name}</span>
    </div>
  );
};
