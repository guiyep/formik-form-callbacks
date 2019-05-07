import WithOnFieldChangeHandler from './WithOnFieldChangeHandler';
import withFormikField from '../hoc/withFormikField';

const WithOnChangeHandler = withFormikField(WithOnFieldChangeHandler);

export { WithOnChangeHandler };
