import { Image, StyleSheet, Platform } from 'react-native';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import ReactDOM from "react-dom";
import Select from "react-select";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { Checkbox, Input } from "@mui/material";



type Inputs = {
  Name: string
  Medication: {label: string; value: string}
}


export default function InfoForm() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  console.log(watch("Name")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <Controller
        render={({ field }) => <Input {...field} className="materialUIInput" />}
        Name="firstName"
        control={control}
        defaultValue=""
      />
      <label>Medication</label>
      <Controller
        Name="medication"
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" }
            ]}
          />
        )}
        control={control}
        defaultValue=""
      />

      <input type="submit" />
    </form>
  )
}
