import WithOnValidationChangeHandlerFormik from './WithOnValidationChangeHandlerFormik';
import withFormikField from '../hoc/withFormikField';

const WithOnValidationChangeHandler = withFormikField(WithOnValidationChangeHandlerFormik);

export { WithOnValidationChangeHandler };
