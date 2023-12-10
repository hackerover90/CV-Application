import PersonalInfoInput from "./FormInput"

function PersonalInfo({ value, onChange }) {
    return (
        <form id="personalInfoForm" className="bg-white p-3">
            <h2>Personal Information</h2>

            <PersonalInfoInput
                id={'fullName'}
                labelName={'Full Name'}
                type={'text'}
                name={'name'}
                value={value.name}
                onChange={onChange}
                placeholder={"First and Last Name"}
                data-key={'name'}
            />
            <PersonalInfoInput
                id={'email'}
                labelName={'Email'}
                type={'email'}
                name={'email'}
                value={value.email}
                onChange={onChange}
                placeholder={"Enter Email"}
                data-key={'email'}
            />
            <PersonalInfoInput
                id={'phoneNum'}
                labelName={'Phone Number'}
                type={'number'}
                name={'phone number'}
                value={value.phoneNumber}
                onChange={onChange}
                placeholder={"Enter Phone Number"}
                data-key={'phoneNumber'}
            />
            <PersonalInfoInput
                id={'address'}
                labelName={'Address'}
                type={'text'}
                name={'address'}
                value={value.address}
                onChange={onChange}
                placeholder={"Enter Address"}
                data-key={'address'}
            />
        </form>
    )
}

export default PersonalInfo