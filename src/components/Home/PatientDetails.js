import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import ProfileCard1 from '../../UI/ProfileCard1';
import ProfileCard2 from '../../UI/ProfileCard2';


const PatientDetails = () => {
  return (
    <div className="mt-[40px]">
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
        <ProfileCard1 />
        <ProfileCard2 />
      </div>
    </div>
  );
};

export default PatientDetails;
