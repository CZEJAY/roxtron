"use client"

import { Button } from '@/components/ui/button'
import api from '@/lib/api'
import { useUser } from '@auth0/nextjs-auth0/client'
import { ArrowRightIcon } from 'lucide-react'
import React, { useState } from 'react'

const InitButton = () => {
    const { user, isLoading, error } = useUser()
    const [authState, setAuthState] = useState("")

    const handleInit = async () => {
        api.get("/v1/account/oauth").then((res) => {
            // console.log({res})
            setAuthState(res.data.oauth_providers[0].state)
        }).catch((err) => {
            console.log({err})
        })
        // api.post("/v1/account/oauth", {
        //     state: authState,
        //     // code: 
        // }).then((res) => {
        //     // console.log({res})
        //     setAuthState(res.data.oauth_providers[0].state)
        // }).catch((err) => {
        //     console.log({err})
        // })
    }
    return (
        <Button onClick={handleInit} className="w-full">
            {
                isLoading ? "Loading" : "Start Initialization"
            }
            <ArrowRightIcon className="ml-2 size-4" />
        </Button>
    )
}

export default InitButton