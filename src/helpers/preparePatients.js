export const preparePatients = (patients = []) => {
  return patients.map(e => ({
    ...e,
  }));
};
