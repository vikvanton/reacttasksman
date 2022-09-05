import React from 'react';
import { ToastContainer } from 'react-toastify';
import useLocalStorage from './hooks/useLocalStorage';
import TasksList from './components/TasksList';
import AddTaskForm from './components/AddTaskForm';
import Footer from './components/Footer';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import './styles/bootstrap.min.css';
import './styles/style.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const { first, auth, checkingPass, settingPass } = useLocalStorage();

  return (
    <>
      {first ? (
        <SignUpForm settingPass={settingPass} />
      ) : auth ? (
        <div id="container">
          <AddTaskForm />
          <TasksList />
          <Footer className="footer" />
          <div id="back"></div>
        </div>
      ) : (
        <SignInForm checkingPass={checkingPass} />
      )}
      <ToastContainer />
    </>
  );
}
