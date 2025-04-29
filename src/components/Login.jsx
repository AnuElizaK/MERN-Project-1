import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
    Button,
    TextField,
    Box,
    Typography,
    Divider,
    Container,
    Paper,
    Autocomplete,
    CircularProgress
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    // Extract the loginType passed from Roles.jsx
    const loginType = location.state?.loginType;

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const payload = { ...data, role: loginType };
            const response = await axios.post('http://localhost:3000/users/login', payload);
            const { role, name, email, regno, contact, clubs } = response.data;

            localStorage.setItem('userRole', role);
            localStorage.setItem('userName', name);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userRegno', regno);
            localStorage.setItem('userContact', contact);
            localStorage.setItem('userClubs', JSON.stringify(clubs));

            if (role === 'Admin') {
                navigate('/admindashboard');
                window.dispatchEvent(new Event('storage'));           
            } else if (role === 'Super Admin') {
                navigate('/superadmin');
                window.dispatchEvent(new Event('storage'));
            } else if (role === 'Member' && loginType === 'Admin') {
                alert('Access denied: You do not have admin privileges. Try logging in as a member.');
                navigate('/');
            } else {
                navigate('/dashboard');
                window.dispatchEvent(new Event('storage'));
            }
        } catch (error) {
            if (error.response?.status === 403) {
                // Handle insufficient access
                alert('Access denied: Admins only .');
                navigate('/'); // Redirect to the roles selection page
            } else {
                console.error(error);
                alert('Invalid credentials');
            }
        } finally {
            setLoading(false);
        }
    };

    const allClubs = [
        { label: 'Club 1' },
        { label: 'Club 2' },
        { label: 'Club 3' },
        { label: 'Club 4' },
        { label: 'Club 5' }
    ]

    return (
        <>
            <h1 id="lh01">COLLEGE NAME</h1>
            <h1 id="lh02">Club Portal</h1>

            <Divider id="d" sx={{ width: '35%', height: 1, mt: 3 }} />

            <Container maxWidth="xs" sx={{
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Paper elevation={3} sx={{ p: 4, mt: 4, mb: 4 }} id="logcont">
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
                        <Typography component="h1" variant="h5" gutterBottom>
                            Log In
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                            <TextField
                                sx={{ mb: 3 }}
                                type="email"
                                fullWidth
                                id="lemail"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                {...register('email', {
                                    required: "Email is required"
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                            <TextField
                                required
                                fullWidth
                                type="password"
                                id="lpassword"
                                label="Password"
                                name="password"
                                autoComplete="current-password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters'
                                    }
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                            {loginType === 'Admin' && (
                                <Autocomplete
                                className="lclub"
                                disablePortal
                                options={allClubs}
                                sx={{ mt: 3 }}
                                renderInput={(params) => <TextField {...params} label="Select club" />}
                              />
                            )}

                            {loading && (
                                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, mt: 2 }}>
                                    <CircularProgress />
                                </Box>
                            )}

                            <Button
                                id="b"
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={loading}>
                                {loading ? 'Logging in...' : 'Log In'}
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </>
    );
};

export default Login;
