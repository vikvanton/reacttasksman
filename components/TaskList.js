import React from 'react';
import {connect} from 'react-redux';
import {delTask} from '../src/actions';

function TaskList(props) {
  const arr = props.tasks;

  function handleDel(e) {
    props.delTask(e.target.id);
  }

  const listTasks = arr.map((val, index) =>
    <li key={index}>{val} <br /> <br /> 
      <button type="button" class="btn btn-danger btn-sm"
        id={index} onClick={handleDel}>Delete</button>
    </li>
  );
  
  return (
    <main>  
      <ul>{listTasks}</ul>
      <footer class="footer">
        <p>ReactTaskMan - 2021</p>
      </footer>
    </main>
  );
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

const mapDispatchToProps = {
  delTask
}

export default connect(mapStateToProps, mapDispatchToProps) (TaskList)