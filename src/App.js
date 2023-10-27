import React from 'react';
import TextField from '@mui/material/TextField';

const App = () => {


  return (
    <div className="container text-center mt-5">
      <div className='row'>
        <div className='col-lg-12 col-xl-12 col-xxl-12 col-md-12 col-xs-12 col-sm-12'>


<form className='' >
  <div class="mb-3">
    <TextField id="outlined-basic" label="Name " variant="outlined" className='w-50'/>
  </div>
  <div class="mb-3">
  <TextField id="outlined-basic" label="PhoneNumber" variant="outlined" className='w-50'/>
  </div>
  <div class="mb-3">
  <TextField id="outlined-basic" label="Email Address" variant="outlined" className='w-50' />
  </div>
  <div class="mb-3">
  <TextField id="outlined-basic" label="Address" variant="outlined" className='w-50' />
  </div>
  <button type="submit" className="btn btn-primary" fullWidth>Submit</button>
</form>
        </div>
      </div>
     
    </div>
  );
};

export default App;
