import { Box } from '@mui/material';
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import TopContainer from './components/topbar/TopContainer';
import { globalStyle } from './style/GlobalStyles';
import SkillContainer from './components/skills/SkillContainer';
import ExperienceContainer from './components/experience/ExperienceContainer';
import ProjectContainer from './components/projects/ProjectContainer';
import ContactContainer from './components/contact/ContactContainer';

function App() {
  return (
    <Box sx={globalStyle.primaryBgColor} p='1px'>
      <HeaderContainer />
     
    </Box>
  );
}

export default App;
