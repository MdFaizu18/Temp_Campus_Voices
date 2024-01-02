const TextArea = ({ type, placeholder, name, labelText, defaultValue, onChange = '' }) => {
    return (
        <div className=" form-main-input">
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <textarea style={{ marginBottom: '30px' }}
                type={type}
                id={name}
                placeholder={placeholder}
                name={name}
                className='form-main-input'
                defaultValue={defaultValue}
                // onChange={onChange}
                required
            />
        </div>
    );
};

export default TextArea;