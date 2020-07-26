import React, { useEffect } from "react";
import { fetchGithubUsers } from "../../services/github/github.service";

export const Github = () => {

    useEffect(() => {
        fetchGithubUsers("jerry", "users", 1, 100)
    }, [])
}