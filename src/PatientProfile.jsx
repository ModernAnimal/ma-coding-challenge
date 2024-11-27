import './PatientProfile.css';
import catIcon from './assets/cat.svg';
import dogIcon from './assets/dog.svg';

const PatientProfile = ({ patient }) => {
    const speciesIcon = patient.species === 'cat' ? catIcon : dogIcon;

    return (
        <div className="patient-profile">
            <div className="patient-header">
                <h2>{patient.name}</h2>
                <img src={speciesIcon} className="species-icon" alt="Species Icon" />
            </div>
            <div className="patient-body">
                <div className="patient-information">
                    <p className="bold">{'Species: '}</p>
                    <p>{patient.species}</p>
                </div>
                <div className="patient-information">
                    <p className="bold">{'Breed: '}</p>
                    <p>{patient.breed.toUpperCase()}</p>
                </div>
                <div className="patient-information">
                    <p className="bold">{'Age: '}</p>
                    <p>{patient.age}</p>
                </div>
                <div className="patient-information">
                    <p className="bold">{'Owner: '}</p>
                    <p>{patient.ownerName}</p>
                </div>
            </div>
        </div>
    )
};

export default PatientProfile;
