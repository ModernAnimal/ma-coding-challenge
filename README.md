# Get Started
1. Clone the GitHub repository.
```
git clone https://github.com/ModernAnimal/ma-coding-challenge.git
```
2. Enter the directory and install the necessary packages.
```
cd ma-coding-challenge
npm install
```
3. Run the local application and open the application on [http://localhost:5173/](http://localhost:5173/).
```
npm run dev
```

# File Structure
### `main.jsx`
This file serves as the entry point for the React application. It initializes the React render process and establishes `App` as the root component. Additionally, global styles are applied through the imported `index.css`.

### `App.jsx`
This file defines the main component of the React application. It serves as a container for the application's core content. It imports its styles from `App.css` and renders the `PatientDirectory` component.

### `PatientProfile.jsx`
The `PatientProfile` component represents a "profile card" that displays a patient's medical information, such as the patient's name, species, age, and owner name. This file will be where the majority of part 1 of the coding challenge takes place. It imports its styles from `PatientProfile.css`.

### `PatientDirectory.jsx`
This `PatientDirectory` component is a searchable and filterable directory to quickly find patient information. It displays all our patient's information and allows the team to search and filter for specific patients based on name and species. This file will be where the majority of part 2 of the coding challenge takes place. It imports its styles from `PatientDirectory.css`.

### `patientData.js`
This is a read-only file where our patient data is stored. It conceptually represents our database.

A patient object has the following fields:
- `name: string;`
- `species: string;`
- `breed: string | null;`
- `age: string;`
- `ownerName: string;`