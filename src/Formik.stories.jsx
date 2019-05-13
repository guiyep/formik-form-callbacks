import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { WithOnChangeHandler, WithOnFieldChangeHandler, WithOnValidationChangeHandler } from './';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

storiesOf(`Formik Forms Callbacks`, module)
  .addDecorator((story) => <div style={{ width: '30em' }}> {story()} </div>)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      source: true,
      maxPropsIntoLine: 1,
    },
  })
  .add('formik callbacks', () => (
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
  ));
