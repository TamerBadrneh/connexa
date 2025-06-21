// MUI Components
import { Avatar, Box, Button, Divider, IconButton, Stack, TextField, Typography } from "@mui/material";

// MUI Icons
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

// Types
import type { RegistrationFormProps } from "../../app-types/props/RegistrationFormProps";
import type { ActionButton } from "../../app-types/ui-types/ActionButton";
import type { Field } from "../../app-types/ui-types/Field";


export default function RegistrationFormComponent({ title, buttons, fields, type }: RegistrationFormProps) {
    return <>
        {/* Title */}
        <Typography variant="h5" textAlign="center">{title}</Typography>
        <Divider />
        <Stack gap={3} my={2}>
            {/* Fields */}
            <Stack gap={1} alignItems="center">
                {type === "sign-up" && <>
                    <Box width={100} height={100} position={"relative"}>
                        <Avatar sx={{ width: 100, height: 100 }} />
                        <label htmlFor="avatar-upload">
                            <input
                                type="file"
                                id="avatar-upload"
                                accept="image/*"
                                hidden
                            />
                            <IconButton
                                component="span"
                                color="info"
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    bgcolor: "background.paper",
                                    p: 0.5,
                                }}
                            >
                                <AddPhotoAlternateOutlinedIcon fontSize="small" />
                            </IconButton>
                        </label>
                    </Box>
                </>}
                {
                    fields.map((field: Field) => {
                        return <TextField
                            key={field.id}
                            label={field.label}
                            variant={field.shape}
                            fullWidth={field.fullWidth}
                            type={field.type}
                        />
                    })
                }
            </Stack>

            {/* Action Buttons */}
            <Stack direction="row" gap={1} justifyContent="center">
                {
                    buttons.map((button: ActionButton) => {
                        return <Button size="small" key={button.id} variant={button.shape}>{button.actionName}</Button>
                    })
                }
            </Stack>
        </Stack>
    </>
}
