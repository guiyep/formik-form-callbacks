import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

const WithOnChangeHandler = memo(({ values, errors, onChange }) => {
  useEffect(() => {
    onChange({ values, errors });
  }, [Object.keys(values)]);
  return null;
});

WithOnChangeHandler.propTypes = {
  errors: PropTypes.object,
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

WithOnChangeHandler.defaultProps = {
  errors: {}
};

export default WithOnChangeHandler;
