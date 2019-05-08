import withOnChangeHandler from '././WithOnChangeHandler';
import withFormikField from '../hoc/withFormikField';

const WithOnChangeHandler = withFormikField(withOnChangeHandler);

export { WithOnChangeHandler };
