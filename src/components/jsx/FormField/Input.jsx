import { Controller } from "react-hook-form/dist/index.cjs"
import React from "react";

const Input = ({ name, control, type }) => {

    return (
        <Controller name={name} control={control}
            render={({ field }) =>
                <input type={type}
                    {...field}
                    placeholder={name.slice(0, 1).toUpperCase() + name.slice(1,)}
                    required
                    autoComplete={type === "password" ? "on" : "off"}
                />

            }
        />
    )
}

export default Input