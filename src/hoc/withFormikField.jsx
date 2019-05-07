import React, { memo, memo } from 'react';
import { Field } from 'formik';

const withFormikField = Component => {
  const FormikFieldWrapper = memo(({ form, onChange }) => {
    return <Component {...form} onChange={onChange} />;
  });

  return memo(({ children }) => <Field component={FormikFieldWrapper} onChange={children} />);
};

export default withFormikField;
