import { Form, Input, Button } from '@heroui/react';
import {useState} from 'react';

interface IProps {
    onClose: () => void;
}

const RegistrationForms = ({onClose}: IProps) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted', formData);

        onClose();
    }


    return (
        <Form className="w-full" onSubmit={handleSubmit}>
            <Input
                aria-label="Email"
                isRequired
                name="email"
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                classNames={{
                    inputWrapper: 'bg-default-100',
                    input: 'text-sm focus:outline-none',
                }}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                validate={value => {
                    if (!value) return 'Email is required';
                    if (!validateEmail(value)) return 'Incorrect Email';
                    return null;
                }}
            />
            <Input
                aria-label="Password"
                isRequired
                name="password"
                placeholder="Enter your password"
                type="password"
                value={formData.password}
                classNames={{
                    inputWrapper: 'bg-default-100',
                    input: 'text-sm focus:outline-none',
                }}
                onChange={e => setFormData({ ...formData, password: e.target.value })}
                validate={value => {
                    if (!value) return 'Password is required';
                    if (value.length < 6) return 'Password must be at least 6 symbols';
                    return null;
                }}
            />
            <Input
                aria-label="confirmPassword"
                isRequired
                name="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                value={formData.confirmPassword}
                classNames={{
                    inputWrapper: 'bg-default-100',
                    input: 'text-sm focus:outline-none',
                }}
                onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                validate={value => {
                    if (!value) return 'Password to confirm is required';
                    if (value !== formData.password) return 'Passwords do not match';
                    return null;
                }}
            />
            <div className="flex w-[100%] gap-4 items-center pt-8 justify-end">
                <Button variant="light" onPress={onClose}>
                    Cancel
                </Button>
                <Button color="primary" type="submit">
                    Sign up
                </Button>
            </div>
        </Form>
    );
};
export default RegistrationForms;
