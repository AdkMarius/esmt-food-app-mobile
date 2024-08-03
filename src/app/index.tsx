import React from 'react';
import {Redirect} from 'expo-router';
import {useAuth} from "@/src/providers/AuthProvider";

export default function HomeScreen() {
  const { session} = useAuth();

  if (!session) {
    return <Redirect href='/sign-in' />
  }

  return (
    <Redirect href='/menu' />
  );
}