import diagnoses from "../data/diagnosesData";

import { Diagnosis } from "../types";

const getDiagnosis = (): Diagnosis[] => {
    return diagnoses;
};

const addDiagnosis = () => {
    return null;
};

export default {
    getDiagnosis,
    addDiagnosis
};