import { useAuthContext } from "../contexts/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ValidationPage(){
    const navigate = useNavigate();
    const { tempUid, setTempUid, validate, validateLoading } = useAuthContext();
    const [verificationCode, setVerificationCode] = useState("");

    console.log(tempUid)

    // Redirect to login if no tempUid (user didn't come from login)
    useEffect(() => {
        if (!tempUid) {
            navigate("/login");
        }
    }, [tempUid, navigate]);

    function handleSubmit(){
        const validationData = {
            "userId": tempUid,
            "token": verificationCode.toString()
        }

        validate(validationData);
        setTempUid("");
    }

    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-2 px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 ">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Two-Factor Authentication</h1>
                <label htmlFor="verification-code" className="block text-sm font-medium text-gray-700 mb-2">
                    Enter 6-digit verification code from your authenticator app:
                </label>
                {verificationCode.length > 6 && <p className="text-sm text-red-400 mb-2">Max 6 digits allowed</p>}
                <input 
                    id="verification-code"
                    type="number" 
                    maxLength="6"
                    placeholder="000000"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)} 
                    className="w-full text-gray-600 border border-gray-400 py-2 px-4 rounded-sm text-center text-lg font-mono tracking-widest"
                />

                <div className="flex gap-4">
                    <button
                        onClick={handleSubmit}
                        disabled={validateLoading}
                        className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {validateLoading ? "Validating..." : "Verify"}
                    </button>
                </div>
            </div>
        </div>
    );
}