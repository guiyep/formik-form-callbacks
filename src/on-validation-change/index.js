import withOnValidationChangeHandler from './WithOnValidationChangeHandler';
import withFormikField from '../hoc/withFormikField';

const WithOnValidationChangeHandler = withFormikField(withOnValidationChangeHandler);

export { WithOnValidationChangeHandler };
