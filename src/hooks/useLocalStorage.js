import { useState, useEffect, useLayoutEffect } from 'react';
import { toast } from 'react-toastify';
import { encryptText, decryptText } from '../utils';
import { useSelector, useDispatch } from 'react-redux';
import { loadFromStorage } from '../store';

export default function useLocalStorage() {
  const [first, setFirst] = useState(false);
  const [pass, setPass] = useState(null);
  const [auth, setAuth] = useState(false);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  function checkFirstEnter() {
    const pass = localStorage.getItem('pass');
    if (pass) {
      setPass(JSON.parse(pass));
    } else {
      if (localStorage.getItem('tasks')) localStorage.removeItem('tasks');
      setFirst(true);
    }
  }

  function checkingPass(inputPass) {
    if (decryptText(pass) === inputPass) {
      setAuth(true);
      toast.info('Welcome back!');
    } else {
      toast.error('Incorrect pass!');
    }
  }

  function settingPass(inputPass) {
    localStorage.setItem('pass', JSON.stringify(encryptText(inputPass)));
    setAuth(true);
    setFirst(false);
    toast.success('Pass successfully set!');
    setTimeout(() => toast.info('Welcome to app! Happy use!'), 2000);
  }

  function getTasksFromLS() {
    if (auth) {
      const tasks = localStorage.getItem('tasks');
      if (tasks) {
        dispatch(loadFromStorage(JSON.parse(tasks)));
      }
    }
  }

  function setTaskToLS() {
    if (auth) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  useLayoutEffect(() => {
    checkFirstEnter();
  }, []);

  useEffect(() => {
    setTimeout(getTasksFromLS, 3000);
  }, [auth]);

  useEffect(() => {
    setTaskToLS();
  }, [tasks]);

  return { first, auth, checkingPass, settingPass };
}
