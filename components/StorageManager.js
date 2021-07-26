import {useEffect} from "react";
import {connect} from "react-redux";
import {loadFromStorage} from "../src/actions";

function StorageManager(props) {
  let tasks = props.tasks;

  useEffect(() => {
    if (localStorage.getItem('tasks')) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      props.loadFromStorage(tasks); 
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(props.tasks));
  }, [props.tasks]);

  return null;
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = {
  loadFromStorage
}

export default connect(mapStateToProps, mapDispatchToProps) (StorageManager)