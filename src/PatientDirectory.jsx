import PatientProfile from './PatientProfile';
import { patients } from './patientData';
import './PatientDirectory.css';

const PatientDirectory = () => {
    return (
        <div className="patient-directory">
            <h1>MA Patient Directory</h1>

            {/* TODO: When part 1 is complete, comment out the line below */}
            <PatientProfile patient={patients[0]} />

            {/* TODO: Implement part 2 solution here */}
        </div>
    );
};

export default PatientDirectory;
