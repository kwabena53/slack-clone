import './App.css'
import React, { useEffect } from 'react';
import Homepage from './Pages/Homepage';
import { useDispatch } from 'react-redux';
import { getInitialData } from './duck/actions';

const App = () => {
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getInitialData())
  })
  return (
    <Homepage/>
  )
}

export default App;
