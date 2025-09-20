import React from 'react'
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import PatientTabs from '../components/Home/PatientTabs';
import PatientDetails from '../components/Home/PatientDetails';
import ChiefComplaints from '../components/Home/ChiefComplaints';
import CurrentMedicines from '../components/Home/CurrentMedicines';
import ClinicalOutcome from '../components/Home/ClinicalOutcome';
import CurrentTherapy from '../components/Home/CurrentTherapy';
import MedicalSummary from '../components/Home/MedicalSummary';
import PastMedications from '../components/Home/PastMedications';
import PastTherapy from '../components/Home/PastTherapy';
import OccupationalProfile from '../components/Home/OccupationalProfile';
import ClinicalFindings from '../components/Home/ClinicalFindings';
import VitalsPhysicalExaminations from '../components/Home/VitalsPhysicalExaminations';
import DiagnosticsInvestigations from '../components/Home/DiagnosticsInvestigations';
import Diagnosis from '../components/Home/Diagnosis';
import TreatmentToDate from '../components/Home/TreatmentToDate';
import PatientResponse from '../components/Home/PatientResponse';

const Home = () => {
  return (
    <>
      <PatientTabs />
      <PatientDetails />
      <ChiefComplaints />
      <CurrentMedicines />
      <ClinicalOutcome />
      <CurrentTherapy />
      <MedicalSummary />
      <PastMedications />
      <PastTherapy />
      <OccupationalProfile />
      <ClinicalFindings />
      <VitalsPhysicalExaminations />
      <DiagnosticsInvestigations />
      <Diagnosis />
      <TreatmentToDate />
      <PatientResponse />
    </>
  )
}

export default Home
