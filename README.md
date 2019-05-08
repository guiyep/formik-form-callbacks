# formik-callbacks

> formik callbacks

**\***IT IS UNDER DEVELOPMENT**\***
**\***SOON TO BE FINISHED**\***

The formik owner is not providing with any `on-change` or `on-validation-change` or `on-field-change` callbacks over the formik form, and his side library `formik-effect` is not maintain anymore and it doesn't even work. He relays on having all the logic in the formik fields.

I created this 3 components to use them inside a formik form so we can listen to changes, they are super simple and they use `react-hooks` under the hood.

cheers!

[![NPM](https://img.shields.io/npm/v/formik-changes.svg)](https://www.npmjs.com/package/formik-changes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save formik-callbacks
```

## Usage

```jsx

import React, { Component } from 'react'

import { WithOnChangeHandler, WithOnValidationChangeHandler, WithOnFieldChangeHandler } from 'formik-form-callbacks'

class Example extends Component {
  render () {
    return (
      <Formik>
        {() => {
          <form>
            <WithOnChangeHandler>
              {({ values, errors }) => {

              }}
            </WithOnChangeHandler>
            <WithOnValidationChangeHandler>
              {({ values, errors }) => {

              }}
            <WithOnFieldChangeHandler>
              {({ value, values, errors }) => {

              }}
            </WithOnValidationChangeHandler>
            <Field>
            <Field>
            <Field>
          <form>
        }}
      </Formik>
    )
  }
}
```

## License

MIT © [guiyep](https://github.com/guiyep)
