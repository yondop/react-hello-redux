import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage course</h1>
      <TextInput
        name="title"
        label="title"
        value={course.title}
        onChange={onChange}
        errors={errors.title} />

      <SelectInput
        name="authorId"
        label="authorId"
        value={course.authorId}
        defaultOption="Select author"
        options={allAuthors}
        onChange={onChange}
        errors={errors.authorId} />
      <TextInput
        name="category"
        label="category"
        value={course.category}
        onChange={onChange}
        errors={errors.category} />
      <TextInput
        name="length"
        label="length"
        value={course.length}
        onChange={onChange}
        errors={errors.length} />
      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Saved'}
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
