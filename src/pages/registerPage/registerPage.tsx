import { Routes, Route, Navigate } from 'react-router-dom';
import RegisterLayout from "../../features/register/registerLayout.tsx";
import StepEmail from "../../features/register/stepEmail.tsx";
import StepDetails from "../../features/register/stepDetails.tsx";

export default function RegisterPage() {
    return (
        <RegisterLayout>
            <Routes>
                <Route index element={<Navigate to="email" replace />} />
                <Route path="email" element={<StepEmail />} />
                <Route path="details" element={<StepDetails />} />
                <Route path="*" element={<Navigate to="email" replace />} />
            </Routes>
        </RegisterLayout>
    );
}
