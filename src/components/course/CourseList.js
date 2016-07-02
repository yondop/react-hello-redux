import React, {PropTypes}  from 'react';
import CourseListRow from './CourseListRow';
import {connect} from 'react-redux';


const CourseList = ({courses}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {courses
          .map(course =>
          <CourseListRow key={course.id} course={course} />
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
   let courses = state.courses.slice(0);
   courses.sort((a, b) => {
     if (a.id > b.id) return 1;
     if (a.id < b.id) return -1;
     return 0;
   });
   return {
     courses: courses
   };
}

export default connect(mapStateToProps)(CourseList);
