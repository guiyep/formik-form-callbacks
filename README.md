# formik-form-callbacks

> formik form callbacks

The formik owner is not providing with any `on-change` or `on-validation-change` or `on-field-change` callbacks over the formik form, and his side library `formik-effect` is not maintain anymore and it doesn't even work. He relays on having all the logic in the formik fields.

I created this 3 components to use them inside a formik form so we can listen to changes, they are super simple and they use `react-hooks` under the hood.

cheers!

[![NPM](https://img.shields.io/npm/v/formik-form-callbacks.svg)](https://www.npmjs.com/package/formik-form-callbacks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save formik-form-callbacks
```

## Usage

```jsx
import React, { Component } from 'react';

import { WithOnChangeHandler, WithOnValidationChangeHandler, WithOnFieldChangeHandler } from 'formik-form-callbacks';

class Example extends Component {
  render() {
    return (
      <Formik
        initialValues={{ email: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string().required(),
        })}
      >
        {() => {
          return (
            <form>
              <WithOnChangeHandler>
                {({ values, errors }) => console.log('any value changed', errors, values)}
              </WithOnChangeHandler>
              <WithOnFieldChangeHandler field="email2">
                {({ values, errors }) => console.log('email2 field changed', errors, values)}
              </WithOnFieldChangeHandler>
              <WithOnValidationChangeHandler>
                {({ values, errors }) => console.log(`validation changed`, errors, values)}
              </WithOnValidationChangeHandler>
              <Field type="email" name="email" placeholder="Email" />
              <Field type="email" name="email2" placeholder="Email" />
              <Field type="email" name="email3" placeholder="Email" />
            </form>
          );
        }}
      </Formik>
    );
  }
}
```

## License

MIT © [guiyep](https://github.com/guiyep)
