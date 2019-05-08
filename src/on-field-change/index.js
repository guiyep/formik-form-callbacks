import withOnFieldChangeHandler from './WithOnFieldChangeHandler';
import withFormikField from '../hoc/withFormikField';

const WithOnFieldChangeHandler = withFormikField(withOnFieldChangeHandler);

export { WithOnFieldChangeHandler };
