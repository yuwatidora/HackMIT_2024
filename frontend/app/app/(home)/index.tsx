import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { HelloWave } from '@/components/HelloWave';
import HomeScreen  from '../(tabs)/index'
import InfoForm from '../(tabs)/InfoForm';

export default function Page() {
  const { user } = useUser()

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <HomeScreen/>
        <InfoForm/>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <Text>Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </View>
  )
}