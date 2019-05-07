import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

const WithOnValidationChangeHandler = memo(({ values, errors, onChange }) => {
  useEffect(() => {
    onChange({ values, errors });
  }, [Object.keys(errors).length > 0]);
  return null;
});

WithOnValidationChangeHandler.propTypes = {
  errors: PropTypes.object,
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

WithOnValidationChangeHandler.defaultProps = {
  errors: {}
};

export default WithOnValidationChangeHandler;
