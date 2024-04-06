import React, { Dispatch, SetStateAction } from 'react';
import { Modal } from '@mui/material';
import {
    EditProfile,
    MedicalRecords,
    HealthCondition,
    Allergies,
    Hospitlisation,
    MedicationReport,
    Surgery,
    VaccinationDetails
} from '../features/editProfile';

interface editProfileModalProps {
    open: boolean;
    onClose: () => void;
    setOpen: Dispatch<SetStateAction<boolean>>;
    value: number;
}

export default function EditProfileModal({ open, onClose, setOpen, value }: editProfileModalProps) {

    console.log(value, '11key');

    const modalContent = () => {
        switch (value) {
            case 1:
                return (
                    <EditProfile
                        open={open}
                        onClose={onClose}
                        setOpen={setOpen}
                    />
                );
            case 2:
                return (
                    <MedicalRecords
                        open={open}
                        onClose={onClose}
                        setOpen={setOpen}
                    />
                );
            case 3:
                return (
                    <HealthCondition
                        open={open}
                        onClose={onClose}
                        setOpen={setOpen}
                    />
                );
            case 4:
                return (
                    <MedicationReport
                        open={open}
                        onClose={onClose}
                        setOpen={setOpen}
                    />
                );
            case 5:
                return (
                    <Allergies
                        open={open}
                        onClose={onClose}
                        setOpen={setOpen}
                    />
                )
            case 6:
                return (
                    <Hospitlisation
                        open={open}
                        onClose={onClose}
                        setOpen={setOpen}
                    />
                );
            case 7:
                return (
                    <Surgery
                        open={open}
                        onClose={onClose}
                        setOpen={setOpen}
                    />
                );
            case 8:
                return (
                    <VaccinationDetails
                        open={open}
                        onClose={onClose}
                        setOpen={setOpen}
                    />
                );
            default:
                return null;
        }
    }


    return (
        <div>
            <Modal
                className="modal form_modal"
                id="editProfileModal"
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={open}
                onClose={onClose}
            >
                <div>{modalContent()}</div>

            </Modal>
        </div>
    );
}
