import React, { memo } from 'react';
import { Field } from 'formik';

const withFormikField = (Component) => {
  const FormikFieldWrapper = memo(({ form, onChange, ...props }) => {
    return <Component {...form} onChange={onChange} {...props} />;
  });

  return memo(({ children, ...props }) => <Field component={FormikFieldWrapper} onChange={children} {...props} />);
};

export default withFormikField;
