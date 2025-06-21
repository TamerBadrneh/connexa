// MUI Components
import { Card, CardContent, Container, Stack, Typography } from "@mui/material";

// Motion
import { motion } from "motion/react";

// React Router
import { Outlet } from "react-router";


export default function AuthenticationFormLayout() {
    return <>
        <Container sx={{ height: "100vh", }} maxWidth="sm">
            <Stack height="100%" justifyContent="center" gap={2} >

                {/* App Title */}
                <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    transition={{
                        duration: 2.0,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
                    }}
                >
                    <Typography variant="h4" textAlign="center">Welcome To Connexa</Typography>
                </motion.div>


                {/* Form */}
                <motion.div
                    initial={{ opacity: 0.5, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                    }}
                >
                    <Card>
                        <CardContent>
                            {/* Form Content => Outlet */}
                            <Outlet />
                        </CardContent>
                    </Card>
                </motion.div>
            </Stack>
        </Container>
    </>
}
