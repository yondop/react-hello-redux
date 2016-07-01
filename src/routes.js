import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';


export default (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route name="about" path="about" component={AboutPage}/>
      <Route name="course" path="course" component={ManageCoursePage}/>
      <Route name="course" path="course/:id" component={ManageCoursePage}/>
      <Route name="courses" path="courses" component={CoursesPage}/>
    </Route>
);
