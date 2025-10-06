'use client';

import CustomModal from '@/components/common/modal';
import LoginForm from '@/forms/login.form';

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: IProps) => {
    return (
        <CustomModal isOpen={isOpen} onClose={onClose} title="Login to your account">
            <LoginForm onClose={onClose} />
        </CustomModal>
    );
};

export default LoginModal;
