import React from 'react';
import {connect} from 'react-redux';

const SurveyReview = ({ onCancel, formValues: { title, subject, body, emails } }) => {
  return (
    <div>
      <button
        className="yellow darken-3 btn-flat"
        onClick={onCancel}
      >
      Back
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(mapStateToProps)(SurveyReview);
