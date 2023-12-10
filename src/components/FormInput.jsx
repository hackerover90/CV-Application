export default function PersonalInfoInput(props) {
    const { id, labelName, type, name, value, onChange, placeholder, 'data-key': datakey } = props
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{labelName}</label>
            <input type={type} className="form-control" id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} data-key={datakey} />
        </div>
    )
}