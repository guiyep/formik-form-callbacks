import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

const WithOnFieldChangeHandler = memo(({ values, errors, onChange, field }) => {
  useEffect(() => {
    onChange({ value: values[field], values, errors });
  }, [values[field]]);
  return null;
});

WithOnFieldChangeHandler.propTypes = {
  errors: PropTypes.object,
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired
};

WithOnFieldChangeHandler.defaultProps = {
  errors: {}
};

export default WithOnFieldChangeHandler;
