import PatientProfile from './PatientProfile';
import { patients } from './patientData';
import './PatientDirectory.css';

const PatientDirectory = () => {
    return (
        <div className="patient-directory">
            <h1>MA Patient Directory</h1>

            {/* TODO: Implement part 2 solution here */}

            <PatientProfile patient={patients[0]} />
        </div>
    );
};

export default PatientDirectory;
