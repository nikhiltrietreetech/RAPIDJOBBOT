import React from 'react';
import Employer from './Components/Registration/Employer';
import Jobseeker from './Components/Registration/Jobseeker';
import MultilevelTabs from './Components/Registration/MultilevelTabs';
import Personaldetails from './Components/Registration/Personaldetails';
import Professionaldetails from './Components/Registration/Professionaldetails';
import Qualificationdetails from './Components/Registration/Qualificationdetails';
import Skills from './Components/Registration/Skills';
import Previousprojects from './Components/Registration/Previousprojects';
import Careerprofile from './Components/Registration/Careerprofile';
import UserProfile from './Components/Registration/UserProfile';
import JobSeekerLogin from './Components/Login/JobSeekerLogin/JobSeekerLogin';
import ProfessionalSkillsForm from './Components/Registration/ProfessionalSkillsForm';
import Employerdashbord from './Components/employerDashbord/Employerdashbord';
import JobForm from './Components/employerDashbord/JobForm';
import JobPostingForm from './Components/employerDashbord/JobPostingForm';
function App() {
  return (
    <div>
<MultilevelTabs/> 
<Careerprofile/>
<Qualificationdetails/>
<UserProfile/>
     <Skills/>
     <Professionaldetails/>
     <Previousprojects/>
     <Personaldetails/>
     <ProfessionalSkillsForm/>
     <JobSeekerLogin/>
     <Jobseeker/>
     <Employer/>
     <Employerdashbord/>
     <JobForm/>
     <JobPostingForm/>
    </div>
  );
}

export default App;
