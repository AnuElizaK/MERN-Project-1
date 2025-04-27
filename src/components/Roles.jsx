import React from 'react';
import {
    Button,
    Box,
    Divider,
    Typography,
    Card,
    CardContent
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Groups } from '@mui/icons-material';
import './Roles.css';

const Roles = () => {
    const navigate = useNavigate();

    const handleAdminLogin = () => {
        navigate('/login', { state: { loginType: 'Admin' } });
    };

    const handleMemberLogin = () => {
        navigate('/login', { state: { loginType: 'Member' } });
    };

    return (
        <>
            <Box id="rbox">
                <h1 id="rh01">COLLEGE NAME</h1>
                <h1 id="rh02">Club Portal</h1>

                <Divider id="d" sx={{ width: '70%', height: 1, marginTop: 4 }} />

                <Card
                    id="rc1"
                    sx={{ p: 2, textAlign: 'center', borderRadius: 2, boxShadow: 3, maxWidth: 300, margin: 'auto', mt: 5 }}>
                    <AccountCircleIcon sx={{ fontSize: 40, color: '#4caf50' }} />
                    <CardContent>
                        <Typography variant="h6">Admins/Executives</Typography>
                        <Button id="rb" variant="outlined" fullWidth sx={{ mt: 2 }} onClick={handleAdminLogin}>
                            Go to Login
                        </Button>
                    </CardContent>
                </Card>

                <Card
                    id="rc2"
                    sx={{ p: 2, textAlign: 'center', borderRadius: 2, boxShadow: 3, maxWidth: 300, margin: 'auto', mt: 5, mb: 5 }}>
                    <Groups sx={{ fontSize: 40, color: '#4caf50' }} />
                    <CardContent>
                        <Typography variant="h6">Members</Typography>
                        <Button id="rb" variant="outlined" fullWidth sx={{ mt: 2 }} onClick={handleMemberLogin}>
                            Go to Login
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};

export default Roles;
