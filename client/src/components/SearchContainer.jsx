import { FormRow, FormRowSelect2} from './index';
import Wrapper from '../assets/wrappers/SearchContainer';
import { FaSearch } from "react-icons/fa";
import { Form, Link, useSubmit, useNavigation } from 'react-router-dom';
import { DEP_STATUS, YEAR_STATUS,FEED_SORT_BY } from '../../../utils/constant';
import { useAdminContext } from '../pages/Admin';
import { useEffect } from 'react';

const SearchContainer = () => {
    // for submit button 
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    // for search onchange values 
    const { searchValues} = useAdminContext();
    const {department,year,name,registerNo,sort}=searchValues;                                                  
    console.log(searchValues);

    const submit = useSubmit();
    // for debounce for the searchbar
    const debounce = (onChange) => {
        let timeout;
        return (e) => {
            const form = e.currentTarget.form;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                onChange(form);
            }, 2000);
        };
    };
    // if we reloaded the page the existing input value would be gone 
    // useEffect(() => {
    //     setSearchValues({
    //         ...searchValues,
    //         name: '', // or set to the default value you want
    //     });
    // }, []);

    return (
        <Wrapper>
            <Form className='form search-box-border'>
                <h5 className='form-title'><FaSearch className='imported-icon'/>Search Feeds</h5>
                <div className='form-center'>
                    {/* search position */}
                  {/* <div className="search-box-form-reg">
                   <p>Name</p>
                        <input
                            type="text"
                            name="name"
                            id=""
                            value={name}
                            onChange={debounce((form) => {
                                submit(form);
                            })}
                        />
                  </div> */}
               
                 
            
                    <FormRowSelect2
                    className='search-box'
                        labelText='Department'
                        name='department'
                        list={['all', ...Object.values(DEP_STATUS)]}
                        defaultValue={department}
                        onChange={(e) => {
                            submit(e.currentTarget.form);
                        }}
                   
                      />
                    <FormRowSelect2
                        className='search-box'
                        labelText='Year'
                        name='year'
                        list={['all', ...Object.values(YEAR_STATUS)]}
                        defaultValue={year}
                        onChange={(e) => {
                            submit(e.currentTarget.form);
                        }}
                       
                    />
                    {/* <div className="search-box-form-reg">
                        <p>Register No</p>
                        <input type="text" name="registerNo" id="" defaultValue={registerNo}
                            onChange={(e) => {
                                submit(e.currentTarget.form);
                            }}
                             />
                    </div> */}
                    <FormRowSelect2
                        className='search-box'
                        name='sort'
                        defaultValue={sort}
                        list={[...Object.values(FEED_SORT_BY)]}
                        onChange={(e) => {
                            submit(e.currentTarget.form);
                        }}
                    />
                
                    {/* <Link to='/admin' className='btn form-btn delete-btn' onClick={() => window.location.reload()}>
                        Reset Search Values
                    </Link> */}
                   
    
                </div>
            </Form>
        </Wrapper>
    );
};

export default SearchContainer;