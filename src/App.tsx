import React from 'react';
import './App.css';
import MuiAutoComplete from './components/MuiAutoComplete';
import MuiButtons from './components/MuiButtons';
import MuiCheckBox from './components/MuiCheckBox';
import MuiRadioButton from './components/MuiRadioButton';
import MuiRating from './components/MuiRating';
import MuiSelect from './components/MuiSelect';
import MuiSwitch from './components/MuiSwitch';
import MuiTextFields from './components/MuiTextFields';
import { MuiTypography } from './components/MuiTypography';




function App() {
  return (
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <MuiButtons /> */}
      {/* <MuiTextFields /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckBox /> */}
      {/* <MuiSwitch /> */}
      {/* <MuiRating /> */}
      <MuiAutoComplete />

    </div>
  );
}

export default App;
