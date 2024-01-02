import React from 'react';
import { Form ,useNavigation} from 'react-router-dom';
import FormRow2 from './FormRow2';
import FormRowSelect from './FormRowSelect';
import { DEP_STATUS, YEAR_STATUS } from '../../../utils/constant';


const FormContent01 = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <div>
           <div className="form-heading">
          <h2>Enter your opinion's</h2>

           </div>
          <Form method="POST" className="form-main">
              
              <FormRow2 type="text" className="input form-main-input" name="name"  placeholder="Ex: Faizu"/>
              {/* <FormRow2 type="text" className="input form-main-input" name="department" placeholder="Ex: CSE" />
              <FormRow2 type="text" className="input form-main-input" name="year"  placeholder="Ex: 3"/> */}
        <FormRowSelect 
          labelText='Department'
          className="input form-main-input form-row-selectOne"
          name='department'
          list={[ ...Object.values(DEP_STATUS)]}

        /> 
        <FormRowSelect
          className="input form-main-input"
          labelText='Year'
          name='year'

          list={[ ...Object.values(YEAR_STATUS)]}

        />
              <p className='form-main-name'>Feedback</p>
              <textarea className="input form-main-input"  name="message" id="18" cols="100" rows="5" placeholder='wrtie something here'></textarea>


              <button type='submit' className="form-main-button" disabled={isSubmitting}>
          {isSubmitting ? 'submitting...' : 'submit'}
              </button>
          </Form>



    </div>
  )
}

export default FormContent01;
